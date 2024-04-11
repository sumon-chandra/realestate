"use client";
import { FC } from "react";
import { Separator } from "./ui/separator";

interface Props {
	title: string;
}

const SectionTitle: FC<Props> = ({ title }) => {
	return (
		<div>
			<h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
			<Separator />
		</div>
	);
};

export default SectionTitle;
