import React, { FC } from "react";
import { Props } from "./location-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import FormNextPrevButton from "./form-next-prev-button";

const ContactForm: FC<Props> = ({ className, next, prev, step }) => {
	return (
		<div className={cn("p-5 my-4 border space-y-3", className)}>
			<div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-5">
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="email">Email address</Label>
					<Input type="email" id="email" placeholder="example@gmail.com" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="mobile-no">Mobile number</Label>
					<Input type="tel" id="mobile-no" placeholder="+12345678" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="whatsapp-no">Whatsapp number</Label>
					<Input type="tel" id="whatsapp-no" placeholder="+12345678" />
				</div>
				<div className="grid w-full gap-1.5 lg:col-span-1 col-span-2">
					<Label htmlFor="facebook">Facebook username</Label>
					<Input type="text" id="facebook" placeholder="your-username" />
				</div>
			</div>
			<FormNextPrevButton isLast prev={prev} step={step} />
		</div>
	);
};

export default ContactForm;
