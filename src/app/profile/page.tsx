import PageTitle from "@/components/page-title";
import SectionTitle from "@/components/section-title";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BasicInformation from "./_components/basic-information";
import { getUserById } from "@/lib/actions/getUserById";
import ProfileAvatar from "./_components/profile-avatar";

const Profile = async () => {
	const { getUser } = await getKindeServerSession();
	const user = await getUser();
	const dbUser = await getUserById(user ? user?.id : "");
	return (
		<div className="container">
			<PageTitle title="Profile" linkCaption="Back to home page" href="/" />
			<div className="space-y-3 lg:space-y-5">
				<SectionTitle title="Basic information" />
				<ProfileAvatar
					picture={dbUser?.avatarUrl!}
					fallback={dbUser?.firstName?.charAt(0).toUpperCase()}
				/>
				<BasicInformation user={dbUser!} />
			</div>
		</div>
	);
};

export default Profile;
