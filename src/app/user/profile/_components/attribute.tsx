import { Card } from "@/components/ui/card";
import { FC, ReactNode } from "react";

interface Props {
	title: string;
	value: ReactNode;
}

const Attribute: FC<Props> = ({ title, value }) => {
	return (
		<Card className="p-4">
			<h3 className="text-lg font-semibold text-slate-800">{title}</h3>
			<h5 className="text-sm text-slate-600">{value}</h5>
		</Card>
	);
};

export default Attribute;
