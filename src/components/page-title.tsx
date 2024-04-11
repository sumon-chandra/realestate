import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";

interface Props {
	title: string;
	linkCaption?: string;
	href?: string;
	LinkCaptionIcon?: LucideIcon;
}

const PageTitle: FC<Props> = ({ title, linkCaption, href, LinkCaptionIcon }) => {
	return (
		<div className="py-4 px-3 bg-gradient-to-b from-slate-200 to-transparent">
			<div className="flex justify-between items-center container">
				<h3 className="font-lg font-semibold">{title}</h3>
				{linkCaption && href ? (
					<Button asChild>
						<Link href={href} className="text-xs font-semibold space-x-1">
							<span>
								{LinkCaptionIcon && (
									<LinkCaptionIcon className="size-4" />
								)}
							</span>
							<span>{linkCaption}</span>
						</Link>
					</Button>
				) : null}
			</div>
		</div>
	);
};

export default PageTitle;
