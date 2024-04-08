import Link from "next/link";
import { FC } from "react";

interface Props {
	title: string;
	linkCaption?: string;
	href?: string;
}

const PageTitle: FC<Props> = ({ title, linkCaption, href }) => {
	return (
		<div className="py-4 px-3 bg-gradient-to-b from-slate-200 to-transparent flex justify-between items-end">
			<h3 className="font-lg font-semibold">{title}</h3>
			{linkCaption && href ? (
				<Link href={href} className="text-xs font-semibold">
					{linkCaption}
				</Link>
			) : null}
		</div>
	);
};

export default PageTitle;
