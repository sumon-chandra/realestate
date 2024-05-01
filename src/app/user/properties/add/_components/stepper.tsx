import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
	items: { label: string }[];
	activeItem: number;
	setActiveItem: (index: number) => void;
	className?: string;
}

const Stepper: FC<Props> = ({ className, activeItem, items, setActiveItem }) => {
	return (
		<div className={cn("grid grid-cols-5 gap-4", className)}>
			{items.map((item, index) => (
				<div key={item.label} className="relative">
					<div className="text-center space-y-2 lg:space-y-0">
						<div
							className={cn("rounded-full mx-auto size-6 flex items-center justify-center transition-all text-white", {
								"bg-primary": index === activeItem,
								"bg-primary/50": index > activeItem,
								"bg-green-600": index < activeItem,
								"cursor-pointer": index <= activeItem,
							})}
							{...(index < activeItem
								? {
										onClick: () => setActiveItem(index),
								  }
								: {})}
						>
							{index + 1}
						</div>
						<div className="font-semibold flex-1">
							<div className="hidden lg:block">{item.label}</div>
							<div
								className={cn(
									"h-0 border w-full relative after:absolute after:left-0 after:top-0 after:border after:transition-all after:duration-1000 after:ease-in-out",
									{
										"after:w-full after:border-green-600": index < activeItem,
										"after:w-0": index >= activeItem,
									}
								)}
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Stepper;
