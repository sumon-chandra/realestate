import { PropertyFullType } from "@/types/property-types";
import { FC } from "react";
import ImageCarousel from "./image-carousel";
import PropertyImage from "./property-image";

interface Props {
	property: PropertyFullType;
}

const PropertyCard: FC<Props> = ({ property }) => {
	// console.log(property);

	return (
		<div className="space-y-2 p-5 rounded shadow bg-neutral-100 w-full">
			{property?.images.length === 1 ? (
				<PropertyImage image={property.images[0]} />
			) : (
				<ImageCarousel images={property.images} />
			)}
			<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{property.name}</h3>
			<p className="leading-7 [&:not(:first-child)]:mt-6">{property.description}</p>
		</div>
	);
};

export default PropertyCard;
