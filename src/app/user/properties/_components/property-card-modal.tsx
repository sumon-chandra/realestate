"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
interface Props {
	children: ReactNode;
}

const PropertyCardModal: FC<Props> = ({ children }) => {
	const router = useRouter();
	const handleClose = () => router.back();

	return (
		<Dialog open={true} onOpenChange={handleClose}>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};

export default PropertyCardModal;
