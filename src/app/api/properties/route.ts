import prisma from "@/lib/prisma";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const properties = await prisma.property.findMany();
		return NextResponse.json(properties);
	} catch (e) {
		const error = e as AxiosError;
		console.log(error);
		return new NextResponse("Failed to get properties", { status: 405 });
	}
}
