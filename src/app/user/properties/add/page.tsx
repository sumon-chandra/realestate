import PageTitle from "@/components/page-title";
import { Plus } from "lucide-react";
import AddPropertyForm from "./_components/add-property-form";

const AddPropertyPage = () => {
	return (
		<>
			<PageTitle title="Add property" />
			<main className="container">
				<h3>Add Property page</h3>
				<AddPropertyForm />
			</main>
		</>
	);
};

export default AddPropertyPage;
