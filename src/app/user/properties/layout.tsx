import { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const PropertiesLayout: FC<Props> = ({ children }) => {
	return <main>{children}</main>;
};

export default PropertiesLayout;
