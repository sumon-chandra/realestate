import PageTitle from "@/components/page-title";
import { Plus } from "lucide-react";
import PropertyList from "./_components/property-list";

const PropertiesPage = () => {
	return (
		<>
			<PageTitle title="All properties" linkCaption="add property" LinkCaptionIcon={Plus} href="/user/properties/add" />
			<main className="container">
				<div className="mt-10">
					<PropertyList />
				</div>
			</main>
		</>
	);
};

export default PropertiesPage;
