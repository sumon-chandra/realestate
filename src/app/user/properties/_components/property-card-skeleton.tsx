import { Skeleton } from "@/components/ui/skeleton";

const PropertyCardSkeleton = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
			{Array.from({ length: 8 }).map((_, i) => (
				<div key={i} className="flex flex-col space-y-3">
					<Skeleton className="h-[125px] w-[250px] rounded-xl" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[250px]" />
						<Skeleton className="h-4 w-[200px]" />
					</div>
				</div>
			))}
		</div>
	);
};

export default PropertyCardSkeleton;
