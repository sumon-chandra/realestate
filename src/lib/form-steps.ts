export const steps = [
	{ id: 1, label: "Basic", fields: ["name", "description", "typeId", "statusId", "price"] },
	{
		id: 2,
		label: "Location",
		fields: [
			"location.street",
			"location.zip",
			"location.city",
			"location.state",
			"location.region",
			"location.landmark",
		],
	},
	{
		id: 3,
		label: "Features",
		fields: [
			"features.bedrooms",
			"features.bathrooms",
			"features.parkingSpots",
			"features.area",
			"features.hasSwimmingPool",
			"features.hasGardenYard",
			"features.hasBalcony",
		],
	},
	{ id: 4, label: "Pictures", fields: ["images"] },
	{
		id: 5,
		label: "Contact",
		fields: ["contact.email", "contact.phone", "contact.whatsapp", "contact.facebookUsername"],
	},
];
