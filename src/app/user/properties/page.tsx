import PageTitle from "@/components/page-title";
import { Plus } from "lucide-react";

const PropertiesPage = () => {
	return (
		<>
			<PageTitle
				title="All properties"
				linkCaption="add property"
				LinkCaptionIcon={Plus}
				href="/user/properties/add"
			/>
			<div className="container">
				<h3>Properties page</h3>
			</div>
		</>
	);
};

export default PropertiesPage;
