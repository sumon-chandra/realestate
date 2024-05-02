import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FC } from "react";

interface Props {
	next?: () => void;
	prev: () => void;
	step: number;
	isLast?: boolean;
}

const FormNextPrevButton: FC<Props> = ({ next, prev, step, isLast }) => {
	return (
		<div className="flex items-center justify-end gap-3">
			<Button size="sm" className="space-x-1" disabled={step === 0} onClick={prev}>
				<ArrowLeft className="size-4" />
				<span>Previous</span>
			</Button>
			<Button size="sm" className="space-x-2" onClick={next}>
				<span>{isLast ? "Submit" : "Next"}</span>
				<ArrowRight className="size-4" />
			</Button>
		</div>
	);
};

export default FormNextPrevButton;
