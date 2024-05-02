import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PropertyStatus, PropertyType } from "@prisma/client";
import { FC } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { AddPropertyFormType } from "./add-property-form";

interface Props {
	statuses: PropertyStatus[];
	types: PropertyType[];
}

const BasicInfoForm: FC<Props> = ({ statuses, types }) => {
	const { control } = useFormContext<AddPropertyFormType>();

	return (
		<div className="p-5 my-4 border">
			<h3 className="text-center text-lg font-bold pb-5 lg:pb-10">Add property information</h3>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<FormField
					control={control}
					name="name"
					render={({ field }) => (
						<FormItem className="lg:col-span-3">
							<FormLabel>Property name</FormLabel>
							<FormControl>
								<Input placeholder="Add property name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="description"
					render={({ field }) => (
						<FormItem className="lg:col-span-3">
							<FormLabel>Property description</FormLabel>
							<FormControl>
								<Textarea placeholder="Describe your property details..." className="resize-none" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="typeId"
					render={({ field }) => (
						<FormItem className="col-span-1">
							<FormLabel>Type</FormLabel>
							<Select onValueChange={field.onChange}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select property type" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{types.map((type) => (
										<SelectItem value={type.id.toString()} key={type.id}>
											{type.value}
										</SelectItem>
									))}
									{/* <SelectItem value="condo">Condo</SelectItem>
									<SelectItem value="apartment">Apartment</SelectItem>
									<SelectItem value="villa">Villa</SelectItem> */}
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="statusId"
					render={({ field }) => (
						<FormItem className="col-span-1">
							<FormLabel>Status</FormLabel>
							<Select onValueChange={field.onChange}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select property type" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{statuses.map((status) => (
										<SelectItem value={status.id.toString()} key={status.id}>
											{status.value}
										</SelectItem>
									))}
									{/* 
									<SelectItem value="under-contract">Under Contract</SelectItem>
									<SelectItem value="for-sell">For Sell</SelectItem>
									<SelectItem value="sold">Sold</SelectItem> */}
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="price"
					render={({ field }) => (
						<FormItem className="col-span-1">
							<FormLabel>Property price</FormLabel>
							<Input type="number" min={100} placeholder="Add property price" {...field} />
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
};

export default BasicInfoForm;
