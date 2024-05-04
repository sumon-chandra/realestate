import PageTitle from "@/components/page-title";
import AddPropertyForm from "./_components/add-property-form";
import prisma from "@/lib/prisma";

const AddPropertyPage = async () => {
	const [propertyTypes, propertyStatuses] = await Promise.all([
		prisma.propertyType.findMany(),
		prisma.propertyStatus.findMany(),
	]);
	return (
		<>
			<PageTitle title="All properties" />
			<main className="container">
				<AddPropertyForm types={propertyTypes} statuses={propertyStatuses} />
			</main>
		</>
	);
};

export default AddPropertyPage;
