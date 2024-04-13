import { ChangeEvent, FC, useState } from "react";
import { Props } from "./location-form";
import FormNextPrevButton from "./form-next-prev-button";
import { cn } from "@/lib/utils";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const ImportImage: FC<Props> = ({ next, prev, step, className }) => {
	const [importedImage, setImportedImage] = useState<File[]>([]);

	const handleImportImage = (e: ChangeEvent<HTMLInputElement>) => {
		if (e?.target?.files) {
			const images = Array.from(e.target.files);
			setImportedImage([...importedImage, ...images]);
		}
	};
	console.log(importedImage);

	return (
		<div className={cn("p-5 my-4 border", className)}>
			<div className="my-7">
				<input
					type="file"
					name="images"
					id="images"
					onChange={handleImportImage}
					className="sr-only"
					accept="image/*"
					multiple
				/>
				{importedImage.length === 0 ? (
					<label
						htmlFor="images"
						className="w-11/12 lg:size-52 mx-auto border hover:bg-slate-100 rounded-md shadow-sm flex items-center justify-center cursor-pointer"
					>
						<div className="space-x-2 flex items-center justify-center gap-2">
							<ImageIcon />
							<h3 className="font-semibold">Import image</h3>
						</div>
					</label>
				) : (
					<div className="space-y-3 flex items-center flex-col justify-center">
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
							{importedImage.map((image, index) => (
								<div key={index} className="size-32 relative">
									<Image
										src={URL.createObjectURL(image)}
										alt="Selected images"
										fill
										className="object-contain"
									/>
								</div>
							))}
						</div>
						<label htmlFor="images" className="underline text-xs text-primary/70 cursor-pointer">
							Import more images
						</label>
					</div>
				)}
			</div>
			<FormNextPrevButton next={next} prev={prev} step={step} />
		</div>
	);
};

export default ImportImage;
