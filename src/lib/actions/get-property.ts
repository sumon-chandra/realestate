"use server";

import { NextResponse } from "next/server";
import prisma from "../prisma";

export async function getProperty(id: number) {
	try {
		const property = await prisma.property.findFirst({
			where: { id },
			include: {
				user: true,
				features: true,
				contact: true,
				location: true,
				images: true,
			},
		});
		if (!property) {
			throw new Error("Property not found!");
		}
		return property;
	} catch (error) {
		console.log("FAILED_TO_GET_PROPERTY", error);
		throw new Error("FAILED_TO_GET_PROPERTY");
	}
}
