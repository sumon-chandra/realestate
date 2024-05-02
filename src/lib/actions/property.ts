"use server";

import { AddPropertyFormType } from "@/app/user/properties/add/_components/add-property-form";
import prisma from "../prisma";

export async function saveProperty(
	propertyItem: Omit<AddPropertyFormType, "images">,
	imageUrls: string[],
	userId: string
) {
	const basicInfo = {
		name: propertyItem.name,
		description: propertyItem.description,
		price: propertyItem.price,
		statusId: propertyItem.statusId,
		typeId: propertyItem.typeId,
		userId,
	};

	const response = await prisma.property.create({
		data: {
			...basicInfo,
			location: {
				create: propertyItem.location,
			},
			contact: {
				create: propertyItem.contact,
			},
			features: {
				create: propertyItem.features,
			},
			images: {
				create: imageUrls.map((url) => ({
					url,
				})),
			},
		},
	});

	console.log(response);
	return response;
}
