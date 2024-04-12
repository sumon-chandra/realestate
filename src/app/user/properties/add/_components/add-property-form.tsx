"use client";
import { FC, FormEvent, useState } from "react";
import Stepper from "./stepper";
import Basic from "./basic";
import { PropertyStatus, PropertyType } from "@prisma/client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
				<Basic types={types} statuses={statuses} />
				<div className="flex items-center justify-end gap-3">
					<Button
						size="sm"
						className="space-x-1"
						disabled={step === 0}
						onClick={() => setStep((prev) => prev - 1)}
					>
						<ArrowLeft className="size-4" />
						<span>Previous</span>
					</Button>
					<Button size="sm" className="space-x-2" onClick={() => setStep((prev) => prev + 1)}>
						<span>Next</span>
						<ArrowRight className="size-4" />
					</Button>
				</div>
			</form>
		</div>
	);
};

export default AddPropertyForm;
