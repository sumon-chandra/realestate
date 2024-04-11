"use client";
import { useState } from "react";
import Stepper from "./stepper";

const steps = [{ label: "Basic" }, { label: "Location" }, { label: "Features" }, { label: "Pictures" }, { label: "Contact" }];
const AddPropertyForm = () => {
	const [step, setStep] = useState(0);
	return (
		<div className="">
			<Stepper items={steps} activeItem={step} setActiveItem={setStep} />
		</div>
	);
};

export default AddPropertyForm;
