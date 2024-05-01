import { ChangeEvent, useState } from "react";
import { ImagePlus, Lightbulb, X } from "lucide-react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { AddPropertyFormType } from "./add-property-form";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ImportImage = () => {
	const [importedImage, setImportedImage] = useState<File[]>([]);
	const { control } = useFormContext<AddPropertyFormType>();

	const handleImportImage = (e: ChangeEvent<HTMLInputElement>, onChange: (...event: any[]) => void) => {
		if (e?.target?.files) {
			const images = Array.from(e.target.files);
			setImportedImage([...importedImage, ...images]);
			onChange(images);
		}
	};
	// console.log(importedImage);

	const handleDeleteImportedImage = (index: number) => {
		const newImages = [...importedImage];
		newImages.splice(index, 1);
		setImportedImage(newImages);
	};

	return (
		<div className="p-5 my-4 border">
			<h3 className="text-center text-lg font-bold pb-5 lg:pb-10">Add property images</h3>
			<div className="relative lg:py-0 py-8">
				<p className="absolute right-1 top-1 text-yellow-400 border border-yellow-600 font-bold rounded-2xl px-3 py-1 text-xs flex items-center gap-1">
					<Lightbulb size={14} /> <span>Add minimum 1 image!</span>
				</p>
				<FormField
					control={control}
					name="images"
					render={({ field }) => (
						<FormItem className="space-y-0">
							<FormControl>
								<Input
									id="images"
									type="file"
									onChange={(e) => handleImportImage(e, field.onChange)}
									className="hidden"
									multiple
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="my-7">
					{importedImage.length === 0 ? (
						<label
							htmlFor="images"
							className="size-48 lg:size-52 mx-auto border hover:bg-slate-100 rounded-md shadow-sm flex items-center justify-center cursor-pointer"
						>
							<div className="space-x-2 flex flex-col items-center justify-center gap-2">
								<ImagePlus />
								<span className="font-semibold">Import image</span>
							</div>
						</label>
					) : (
						<div className="space-y-3 flex items-center flex-col justify-center">
							<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
								{importedImage.map((image, index) => (
									<div key={index} className="size-32 relative group">
										<Image src={URL.createObjectURL(image)} alt="Selected images" fill className="object-contain" />
										<div
											onClick={() => handleDeleteImportedImage(index)}
											className="lg:invisible group-hover:visible absolute top-0 right-0 p-1 rounded-full border bg-slate-800 backdrop-blur-md cursor-pointer"
										>
											<X className="size-3 text-white" />
										</div>
									</div>
								))}
							</div>
							<label htmlFor="images" className="underline text-xs text-primary/70 cursor-pointer">
								Import more images
							</label>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ImportImage;
