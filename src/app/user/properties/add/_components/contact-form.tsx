import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { AddPropertyFormType } from "./add-property-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const ContactForm = () => {
	const { control } = useFormContext<AddPropertyFormType>();
	return (
		<div className={cn("p-5 my-4 border  grid grid-cols-1 lg:grid-cols-2 gap-6")}>
			<FormField
				control={control}
				name="contact.email"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Email address</FormLabel>
						<FormControl>
							<Input placeholder="example@gmail.com" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="contact.phone"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Contact number</FormLabel>
						<FormControl>
							<Input placeholder="+123456789" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="contact.whatsapp"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Whatsapp number</FormLabel>
						<FormControl>
							<Input placeholder="your-username" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="contact.facebookUsername"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Facebook username</FormLabel>
						<FormControl>
							<Input placeholder="12345678" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			{/* <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-5">
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="email">Email address</Label>
					<Input type="email" name="email" id="email" placeholder="example@gmail.com" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="mobile-no">Mobile number</Label>
					<Input type="tel" name="whatsapp-no" id="mobile-no" placeholder="+12345678" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="whatsapp-no">Whatsapp number</Label>
					<Input type="tel" name="whatsapp-no" id="whatsapp-no" placeholder="+12345678" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="facebook">Facebook username</Label>
					<Input type="text" name="facebook" id="facebook" placeholder="your-username" />
				</div>
			</div> */}
		</div>
	);
};

export default ContactForm;
