import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PropertyStatus, PropertyType } from "@prisma/client";
import { Props } from "./add-property-form";
import { FC } from "react";

const Basic: FC<Props> = ({ statuses, types }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 my-4 border">
			<div className="grid w-full items-center gap-1.5 lg:col-span-3">
				<Label htmlFor="name">Property name</Label>
				<Input type="name" id="name" placeholder="Name" />
			</div>
			<div className="grid w-full gap-1.5 lg:col-span-3">
				<Label htmlFor="description">Description</Label>
				<Textarea placeholder="Type your property description here." id="description" />
			</div>
			<div className="col-span-1">
				<p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1.5">
					Type
				</p>
				<Select>
					<SelectTrigger>
						<SelectValue placeholder="Select property type" />
					</SelectTrigger>
					<SelectContent className="border-primary">
						<SelectGroup className="w-full">
							<SelectLabel>Types</SelectLabel>
							{types.map((type) => (
								<SelectItem key={type.id} value={type.id.toString()}>
									{type.value}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="col-span-1">
				<p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1.5">
					Condition
				</p>
				<Select>
					<SelectTrigger>
						<SelectValue placeholder="Property condition" />
					</SelectTrigger>
					<SelectContent className="border-primary">
						<SelectGroup>
							<SelectLabel>Statuses</SelectLabel>
							{statuses.map((status) => (
								<SelectItem
									className="hover:bg-slate-500"
									key={status.id}
									value={status.id.toString()}
								>
									{status.value}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="grid w-full items-center gap-1.5 col-span-1">
				<Label htmlFor="price">Price</Label>
				<Input type="number" id="price" placeholder="Price" />
			</div>
		</div>
	);
};

export default Basic;