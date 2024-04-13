import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React, { FC } from "react";
import FormNextPrevButton from "./form-next-prev-button";

export interface Props {
	className?: string;
	next: () => void;
	prev: () => void;
	step: number;
}

const LocationForm: FC<Props> = ({ className, next, prev, step }) => {
	return (
		<div className={cn("p-5 my-4 border space-y-3", className)}>
			<div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-5">
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="street">Street</Label>
					<Input type="text" id="street" placeholder="Street" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="zip">Zip</Label>
					<Input type="text" id="zip" placeholder="Zip/Postal Code" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="city">City</Label>
					<Input type="text" id="city" placeholder="City" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="state">State</Label>
					<Input type="text" id="state" placeholder="State" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="region">Region</Label>
					<Input type="text" id="region" placeholder="Region" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="landmark">Landmark</Label>
					<Input type="text" id="landmark" placeholder="Landmark" />
				</div>
			</div>
			<FormNextPrevButton next={next} prev={prev} step={step} />
		</div>
	);
};

export default LocationForm;
