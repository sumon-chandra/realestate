"use client";

import { PropertyFullType } from "@/types/property-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
		<div className="grid grid-cols-4 gap-5">
			{properties?.map((property) => (
				<div key={property.id} className="space-y-2 p-5 rounded shadow bg-neutral-100">
					<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{property.name}</h3>
					<p className="leading-7 [&:not(:first-child)]:mt-6">{property.description}</p>
				</div>
			))}
		</div>
	);
};

export default PropertyList;
