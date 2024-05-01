import PageTitle from "@/components/page-title";
import { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const ProfileLayout: FC<Props> = ({ children }) => {
	return (
		<div>
			<PageTitle title="All properties" />
			{children}
		</div>
	);
};

export default ProfileLayout;
