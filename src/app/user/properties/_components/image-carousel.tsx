import { PropertyImage } from "@prisma/client";
import { FC } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

interface Props {
	images: PropertyImage[];
}

const ImageCarousel: FC<Props> = ({ images }) => {
	console.log({ images });

	return (
		<Carousel className="w-full group">
			<CarouselContent>
				{images?.map((image) => (
					<CarouselItem key={image.id} className="max-h-48 overflow-hidden transition-all">
						<Image
							alt="Property image"
							src={image.url}
							width={350}
							height={100}
							className="object-cover group-hover:scale-105 duration-500 cursor-pointer"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="left-1 size-6 inline-flex lg:hidden group-hover:inline-flex" />
			<CarouselNext className="right-1 size-6 inline-flex lg:hidden group-hover:inline-flex" />
		</Carousel>
	);
};

export default ImageCarousel;
