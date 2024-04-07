import { LoginLink, LogoutLink, RegisterLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "../ui/button";
import prisma from "@/lib/prisma";
import UserProfilePanel from "./user-profile-panel";

const SignInPanel = async () => {
	const { getUser, isAuthenticated } = await getKindeServerSession();
	const user = await getUser();

	if (await isAuthenticated()) {
		// Get the logged in user from database
		const dbUser = await prisma.user.findUnique({
			where: {
				id: user?.id,
			},
		});
		return <>{dbUser!! && <UserProfilePanel user={dbUser} />}</>;
	}

	return (
		<div className="flex items-center justify-start gap-3 md:mt-0 mt-4">
			<Button>
				<LoginLink>Login</LoginLink>
			</Button>
			<Button variant="secondary">
				<RegisterLink>Register</RegisterLink>
			</Button>
		</div>
	);
};

export default SignInPanel;
