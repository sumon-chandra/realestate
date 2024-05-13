import PageTitle from "@/components/page-title";
import { Plus } from "lucide-react";
import PropertyList from "./_components/property-list";
import { Suspense } from "react";
import PropertyCardSkeleton from "./_components/property-card-skeleton";

const PropertiesPage = () => {
	return (
		<>
			<PageTitle title="All properties" linkCaption="add property" LinkCaptionIcon={Plus} href="/user/properties/add" />
			<main className="container">
				<div className="mt-10">
					<Suspense fallback={<PropertyCardSkeleton />}>
						<PropertyList />
					</Suspense>
				</div>
			</main>
		</>
	);
};

export default PropertiesPage;
