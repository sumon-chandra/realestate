import { PropertyImage as PropertyImageType } from "@prisma/client";
import Image from "next/image";
import { FC } from "react";

interface Props {
	image: PropertyImageType;
}

const PropertyImage: FC<Props> = ({ image }) => {
	return (
		<div className="max-h-48 overflow-hidden group transition-all">
			<Image
				alt="Property image"
				src={image.url}
				width={350}
				height={100}
				className="object-cover group-hover:scale-105 duration-500 cursor-pointer"
			/>
		</div>
	);
};

export default PropertyImage;
