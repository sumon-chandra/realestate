import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AddPropertyFormType } from "./add-property-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const LocationForm = () => {
	const { control } = useFormContext<AddPropertyFormType>();
	return (
		<div className="p-5 my-4 border">
			<h3 className="text-center text-lg font-bold pb-5 lg:pb-10">Add your location</h3>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<FormField
					control={control}
					name="location.street"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Street</FormLabel>
							<FormControl>
								<Input placeholder="123 Main Street, Anytown, USA 12345" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="location.zip"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Zip</FormLabel>
							<FormControl>
								<Input placeholder="12345" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="location.city"
					render={({ field }) => (
						<FormItem>
							<FormLabel>City</FormLabel>
							<FormControl>
								<Input placeholder="Anytown" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="location.state"
					render={({ field }) => (
						<FormItem>
							<FormLabel>State</FormLabel>
							<FormControl>
								<Input placeholder="USA" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="location.region"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Region</FormLabel>
							<FormControl>
								<Input placeholder="Northeast or Southwest" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="location.landmark"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Landmark</FormLabel>
							<FormControl>
								<Input placeholder="Agios Dimitrios 17343, Greece" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
};

export default LocationForm;
