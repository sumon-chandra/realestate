import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { AxiosError } from "axios";

export async function POST(req: Request) {
	try {
		const property = await req.json();
		const { getUser } = getKindeServerSession();
		const loggedUser = await getUser();
		console.log({ property });
		// console.log({ loggedUser });

		// const user = await prisma.user.findUnique({
		// 	where: { id: loggedUser?.id },
		// });

		// console.log({ user });

		if (!property) {
			return new NextResponse("Something went wrong", { status: 404 });
		}
		const addProperty = await prisma.property.create({
			data: { ...property, userId: loggedUser?.id },
		});
		console.log({ addProperty });

		return NextResponse.json(addProperty);
	} catch (e) {
		const error = e as AxiosError;
		console.log(error.message);

		return new NextResponse(`FAILED_TO_ADD_PROPERTY - ${error?.message}`, { status: 400 });
	}
}
