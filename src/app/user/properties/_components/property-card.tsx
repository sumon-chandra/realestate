import { PropertyFullType } from "@/types/property-types";
import { FC } from "react";
import ImageCarousel from "./image-carousel";
import PropertyImage from "./property-image";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
	property: PropertyFullType;
}

const PropertyCard: FC<Props> = ({ property }) => {
	// console.log(property);

	return (
		<Card className="shadow">
			{property?.images.length === 1 ? (
				<PropertyImage image={property.images[0]} />
			) : (
				<ImageCarousel images={property.images} />
			)}
			<CardContent className="px-6 py-3 space-y-1">
				<CardTitle className="text-lg font-semibold tracking-tight">{property.name}</CardTitle>
				<CardDescription className="truncate">{property.description}</CardDescription>
				<h4 className="text-xl font-semibold tracking-tight">$ {property.price}</h4>
			</CardContent>
			<CardFooter>
				<Button asChild className="w-full" size="sm">
					<Link href={`/user/properties/${property.id}`}>See more</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default PropertyCard;
