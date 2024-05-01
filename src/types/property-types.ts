import { Prisma } from "@prisma/client";

export type AddPropertyFullType = Prisma.PropertyGetPayload<{
	include: {
		feature: true;
		images: true;
		status: true;
		type: true;
		user: true;
		location: true;
	};
}>;
