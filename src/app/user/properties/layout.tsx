import PageTitle from "@/components/page-title";
import { Plus } from "lucide-react";
import { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
	model: ReactNode;
}

const PropertiesLayout: FC<Props> = ({ children, model }) => {
	return (
		<>
			{children}
			{model}
		</>
	);
};

export default PropertiesLayout;
