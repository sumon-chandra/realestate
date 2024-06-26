import validator from "validator";
import { z } from "zod";

export const AddPropertyFormSchema = z.object({
	name: z.string({ required_error: "Please enter property name" }),
	description: z.string({ required_error: "Add a well structured details for this property" }).min(4, {
		message: "Property name must be at least 4 characters!",
	}),
	price: z.string({ required_error: "Add property price" }).transform((data: unknown) => Number(data)),
	typeId: z.string().transform((data: unknown) => Number(data)),
	statusId: z.string().transform((data: unknown) => Number(data)),
	images: z.array(z.instanceof(File)).min(1, "Add minimum 1 image!"),
	location: z.object({
		street: z.string({ required_error: "You must add street" }),
		city: z.string({ required_error: "You must add city name" }),
		state: z.string().optional(),
		zip: z.string().optional(),
		region: z.string().optional(),
		landmark: z.string().optional(),
	}),
	features: z.object({
		bedrooms: z.string().transform((data: unknown) => Number(data)),
		bathrooms: z.string().transform((data: unknown) => Number(data)),
		parkingSpots: z
			.string()
			.transform((data: unknown) => Number(data))
			.optional(),
		area: z
			.string()
			.transform((data: unknown) => Number(data))
			.optional(),
		hasSwimmingPool: z.boolean().optional(),
		hasGardenYard: z.boolean().optional(),
		hasBalcony: z.boolean().optional(),
	}),
	contact: z.object({
		phone: z
			.string({ required_error: "Add your contact number" })
			.refine(validator.isMobilePhone, "Please enter a valid phone number!"),
		email: z
			.string({ required_error: "Add yur email address" })
			.email()
			.refine(validator.isEmail, "Please enter a valid email address!"),
		whatsapp: z.string().refine(validator.isMobilePhone, "Please enter a valid phone number!").optional(),
		facebookUsername: z.string().optional(),
	}),
});
