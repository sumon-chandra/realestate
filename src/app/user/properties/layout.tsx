import PageTitle from "@/components/page-title";
import { Plus } from "lucide-react";
import { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const PropertiesLayout: FC<Props> = ({ children }) => {
	return (
		<div>
			<PageTitle title="All properties" linkCaption="add property" LinkCaptionIcon={Plus} href="#" />
			{children}
		</div>
	);
};

export default PropertiesLayout;
