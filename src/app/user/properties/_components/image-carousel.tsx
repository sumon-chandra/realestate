import { PropertyImage } from "@prisma/client";
import { FC } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
	images: PropertyImage[];
	fill?: boolean;
}

const ImageCarousel: FC<Props> = ({ images, fill }) => {
	return (
		<Carousel className="w-full group">
			<CarouselContent>
				{images?.map((image) => (
					<CarouselItem key={image.id} className="max-h-48 overflow-hidden transition-all">
						<Image
							alt="Property image"
							src={image.url}
							{...(fill ? { fill } : { width: 300, height: 250 })}
							className={cn({
								"group-hover:scale-105 duration-500 cursor-pointer": fill === false,
								"object-cover": fill === true,
							})}
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
