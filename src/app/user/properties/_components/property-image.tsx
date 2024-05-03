import { PropertyImage as PropertyImageType } from "@prisma/client";
import Image from "next/image";
import { FC } from "react";

interface Props {
	image: PropertyImageType;
}

const PropertyImage: FC<Props> = ({ image }) => {
	return (
		<>
			<Image alt="Property image" src={image.url} width={350} height={100} className="object-cover" />
		</>
	);
};

export default PropertyImage;
