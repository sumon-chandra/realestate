"use client";

import { PropertyFullType } from "@/types/property-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PropertyCard from "./property-card";

const PropertyList = () => {
	const {
		data: properties = [],
		isPending,
		isError,
		refetch,
	} = useQuery<PropertyFullType[]>({
		queryKey: ["properties"],
		queryFn: async () => {
			return await axios.get("/api/properties").then((response) => response.data);
		},
	});
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
			{properties?.map((property) => (
				<PropertyCard key={property.id} property={property} />
			))}
		</div>
	);
};

export default PropertyList;
