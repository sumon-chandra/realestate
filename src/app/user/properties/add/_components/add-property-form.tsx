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

export interface Props {
	statuses: PropertyStatus[];
	types: PropertyType[];
}

const steps = [{ label: "Basic" }, { label: "Location" }, { label: "Features" }, { label: "Pictures" }, { label: "Contact" }];

const AddPropertyForm: FC<Props> = ({ statuses, types }) => {
	const [step, setStep] = useState(0);

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="">
			<Stepper items={steps} activeItem={step} setActiveItem={setStep} />
			<form className="w-full lg:w-3/4 mx-auto" onSubmit={handleFormSubmit}>
				<BasicInfoForm
					types={types}
					statuses={statuses}
					className={cn("hidden", { "block w-full": step === 0 })}
					prev={() => setStep((prev) => prev - 1)}
					next={() => setStep((prev) => prev + 1)}
					step={step}
				/>
				<LocationForm
					className={cn("hidden", { "block w-full": step === 1 })}
					prev={() => setStep((prev) => prev - 1)}
					next={() => setStep((prev) => prev + 1)}
					step={step}
				/>
				<FeaturesForm
					className={cn("hidden", { "block w-full": step === 2 })}
					prev={() => setStep((prev) => prev - 1)}
					next={() => setStep((prev) => prev + 1)}
					step={step}
				/>
			</form>
		</div>
	);
};

export default AddPropertyForm;
