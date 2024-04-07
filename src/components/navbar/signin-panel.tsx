import { LoginLink, LogoutLink, RegisterLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "../ui/button";

const SignInPanel = async () => {
	const { getUser, isAuthenticated } = await getKindeServerSession();
	const user = await getUser();

	if (await isAuthenticated()) {
		return (
			<div className="flex items-center justify-start gap-3">
				<div>{user?.given_name}</div>
				<Button>
					<LogoutLink>Logout</LogoutLink>
				</Button>
			</div>
		);
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
