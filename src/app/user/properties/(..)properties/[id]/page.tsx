import { getProperty } from "@/lib/actions/get-property";
import { FC } from "react";
import PropertyCardModal from "../../_components/property-card-modal";
import PropertyImage from "../../_components/property-image";
import ImageCarousel from "../../_components/image-carousel";

interface Props {
	params: { id: string };
}

const PropertyModal: FC<Props> = async ({ params }) => {
	const data = await getProperty(parseInt(params.id));
	console.log(data);

	return (
		<PropertyCardModal>
			<h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				{data.name}
			</h2>
			<div className="relative p-4">
				{data?.images.length === 1 ? <PropertyImage image={data.images[0]} /> : <ImageCarousel images={data.images} />}
			</div>
		</PropertyCardModal>
	);
};

export default PropertyModal;
