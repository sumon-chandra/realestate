import { Prisma } from "@prisma/client";

export type PropertyFullType = Prisma.PropertyGetPayload<{
	include: {
		feature: true;
		images: true;
		status: true;
		type: true;
		user: true;
		location: true;
	};
}>;
