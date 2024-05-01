"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import FormNextPrevButton from "./form-next-prev-button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormContext } from "react-hook-form";
import { AddPropertyFormType } from "./add-property-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const FeaturesForm = () => {
	const { control } = useFormContext<AddPropertyFormType>();
	return (
		<div className={cn("p-5 my-4 border grid grid-cols-1 lg:grid-cols-2 gap-6")}>
			<FormField
				control={control}
				name="features.bedrooms"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Bedrooms</FormLabel>
						<FormControl>
							<Input type="number" placeholder="How many bedrooms are in there?" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="features.bathrooms"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Bathrooms</FormLabel>
						<FormControl>
							<Input type="number" placeholder="How many bathrooms are in there?" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="features.parkingSpots"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Parking spots</FormLabel>
						<FormControl>
							<Input type="number" placeholder="How many parking spots are in there?" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="features.area"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Area</FormLabel>
						<FormControl>
							<Input type="number" placeholder="How much area is in there?" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<div className="lg:flex items-center justify-start gap-6">
				<FormField
					control={control}
					name="features.hasSwimmingPool"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start space-x-2 space-y-0">
							<FormControl>
								<Checkbox checked={field.value} onCheckedChange={field.onChange} />
							</FormControl>
							<FormLabel>Has swimming pool</FormLabel>
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="features.hasBalcony"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start space-x-2 space-y-0">
							<FormControl>
								<Checkbox checked={field.value} onCheckedChange={field.onChange} />
							</FormControl>
							<FormLabel>Has balcony</FormLabel>
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="features.hasGardenYard"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start space-x-2 space-y-0">
							<FormControl>
								<Checkbox checked={field.value} onCheckedChange={field.onChange} />
							</FormControl>
							<FormLabel>Has garden yard</FormLabel>
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
};

export default FeaturesForm;
