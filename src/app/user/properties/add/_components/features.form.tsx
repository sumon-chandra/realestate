import { FC } from "react";
import { Props } from "./location-form";
import { cn } from "@/lib/utils";
import FormNextPrevButton from "./form-next-prev-button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const FeaturesForm: FC<Props> = ({ next, prev, step, className }) => {
	return (
		<div className={cn("p-5 my-4 border space-y-3", className)}>
			<div className="grid grid-cols-1 items-start lg:grid-cols-6 gap-5">
				<div className="grid w-full gap-1.5 lg:col-span-3 col-span-6">
					<Label htmlFor="bedrooms">Bedrooms</Label>
					<Input type="number" id="bedrooms" placeholder="Bedrooms" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-3 col-span-6">
					<Label htmlFor="bathrooms">Bathrooms</Label>
					<Input type="number" id="bathrooms" placeholder="Bathrooms" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-3 col-span-6">
					<Label htmlFor="parking-spots">Parking Spots</Label>
					<Input type="number" id="parking-spots" placeholder="Parking Spots" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-3 col-span-6">
					<Label htmlFor="area">Area</Label>
					<Input type="number" id="area" placeholder="Area" />
				</div>
				<div className="flex items-center space-x-2 lg:col-span-2 col-span-6">
					<Checkbox id="swimming-pool" />
					<label
						htmlFor="swimming-pool"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						has swimming pool?
					</label>
				</div>
				<div className="flex items-center space-x-2 lg:col-span-2 col-span-6">
					<Checkbox id="garden-yard" />
					<label
						htmlFor="garden-yard"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						has garden yard?
					</label>
				</div>
				<div className="flex items-center space-x-2 lg:col-span-2 col-span-6">
					<Checkbox id="balcony" />
					<label
						htmlFor="balcony"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						has balcony?
					</label>
				</div>
			</div>
			<FormNextPrevButton next={next} prev={prev} step={step} />
		</div>
	);
};

export default FeaturesForm;
