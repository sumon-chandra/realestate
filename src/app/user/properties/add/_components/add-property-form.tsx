"use client";
import { FC, useEffect, useState } from "react";
import Stepper from "./stepper";
import BasicInfoForm from "./basic-info-form";
import { PropertyStatus, PropertyType } from "@prisma/client";
import LocationForm from "./location-form";
import FeaturesForm from "./features.form";
import ImportImage from "./import-image";
import ContactForm from "./contact-form";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { AddPropertyFormSchema } from "@/lib/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormNextPrevButton from "./form-next-prev-button";
import { steps } from "@/lib/form-steps";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { uploadPropertyImages } from "@/lib/upload-property-images";
import { saveProperty } from "@/lib/actions/property";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

export interface Props {
	statuses: PropertyStatus[];
	types: PropertyType[];
}

export type AddPropertyFormType = z.infer<typeof AddPropertyFormSchema>;
export type FieldName = keyof AddPropertyFormType;

const AddPropertyForm: FC<Props> = ({ statuses, types }) => {
	const [step, setStep] = useState(0);
	const [isLastStep, setIsLastStep] = useState(false);
	const { user } = useKindeBrowserClient();
	const router = useRouter();

	const form = useForm<AddPropertyFormType>({
		resolver: zodResolver(AddPropertyFormSchema),
	});

	const onSubmit: SubmitHandler<AddPropertyFormType> = async (data) => {
		// console.log({ data });
		const { images, ...propertyInfo } = data;
		const imageUrls = await uploadPropertyImages(images);
		console.log(imageUrls);

		if (imageUrls && user) {
			try {
				await saveProperty(propertyInfo, imageUrls, user?.id);
				router.push("/user/properties");
			} catch (error) {
				console.log("Failed to save property in database: " + error);
			}
		}
	};

	const next = async () => {
		const fields = steps[step].fields;
		const output = await form.trigger(fields as FieldName[], { shouldFocus: true });
		if (!output) return;

		if (step < steps.length) {
			if (step >= steps.length - 2) {
				setIsLastStep(true);
			}
			if (step === steps.length - 1) {
				await form.handleSubmit(onSubmit)();
			}
			setStep((step) => step + 1);
		}
	};

	const prev = () => {
		if (step > 0) {
			setStep((step) => step - 1);
			setIsLastStep(false);
		}
	};

	return (
		<>
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
				<FormNextPrevButton next={next} prev={prev} step={step} isLast={isLastStep} />
			</div>

			{/* React Hook Form Devtool */}
			{/* <DevTool control={form.control} /> */}
		</>
	);
};

export default AddPropertyForm;
