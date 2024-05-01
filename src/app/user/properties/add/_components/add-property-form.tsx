"use client";
import { FC, FormEvent, useState } from "react";
import Stepper from "./stepper";
import BasicInfoForm from "./basic-info-form";
import { PropertyStatus, PropertyType } from "@prisma/client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LocationForm from "./location-form";
import FeaturesForm from "./features.form";
import ImportImage from "./import-image";
import ContactForm from "./contact-form";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { AddPropertyFormSchema } from "@/lib/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import { Form } from "@/components/ui/form";
import FormNextPrevButton from "./form-next-prev-button";
import { steps } from "@/lib/form-steps";

export interface Props {
	statuses: PropertyStatus[];
	types: PropertyType[];
}

export type AddPropertyFormType = z.infer<typeof AddPropertyFormSchema>;
export type FieldName = keyof AddPropertyFormType;

const AddPropertyForm: FC<Props> = ({ statuses, types }) => {
	const [step, setStep] = useState(0);

	const form = useForm<AddPropertyFormType>({
		resolver: zodResolver(AddPropertyFormSchema),
	});

	const onSubmit: SubmitHandler<AddPropertyFormType> = (data) => {
		// console.log("Hello!");

		console.log({ data });
	};

	const next = async () => {
		const fields = steps[step].fields;
		// console.log({ fields, step });
		// console.log(steps.length - 1, step);

		const output = await form.trigger(fields as FieldName[], { shouldFocus: true });

		console.log(output);

		if (!output) return;

		if (step < steps.length) {
			console.log("Second form");
			if (step === steps.length - 1) {
				console.log({ step, stepL: steps.length - 2 });

				console.log("Last step");
				await form.handleSubmit(onSubmit)();
			}
			setStep((step) => step + 1);
		}
	};

	const prev = () => {
		if (step > 0) {
			setStep((step) => step - 1);
		}
	};

	return (
		<div>
			<div className="">
				<Stepper items={steps} activeItem={step} setActiveItem={setStep} />
				<FormProvider {...form}>
					<Form {...form}>
						<form className="w-full lg:w-3/4 mx-auto" onSubmit={form.handleSubmit(onSubmit)}>
							{step === 0 && <BasicInfoForm statuses={statuses} types={types} />}
							{step === 1 && <LocationForm />}
							{step === 2 && <FeaturesForm />}
							{step === 3 && <ImportImage />}
							{step === 4 && <ContactForm />}
						</form>
					</Form>
				</FormProvider>

				<FormNextPrevButton next={next} prev={prev} step={step} />
			</div>

			{/* React Hook Form Devtool */}
			{/* <DevTool control={form.control} /> */}
		</div>
	);
};

export default AddPropertyForm;
