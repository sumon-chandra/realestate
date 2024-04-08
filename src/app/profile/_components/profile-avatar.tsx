"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
	picture?: string;
	fallback?: string;
}

const ProfileAvatar: FC<Props> = ({ picture, fallback }) => {
	const [selectedImg, setSelectedImg] = useState<File>();
	return (
		<div>
			<Avatar className="size-40 rounded-full">
				<AvatarImage src={picture} />
				<AvatarFallback className="text-9xl">{fallback}</AvatarFallback>
			</Avatar>
			<div className="mt-3">
				<Dialog>
					<DialogTrigger>
						<Button size="sm">Change image</Button>
					</DialogTrigger>
					<DialogContent>
						<div>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="picture">Picture</Label>
								<Input
									id="picture"
									type="file"
									onChange={(e) =>
										setSelectedImg(
											(e as any)
												.target
												.files[0]
										)
									}
								/>
							</div>
							<div className="relative mt-6 size-40 border rounded-full mx-auto object-center">
								{selectedImg && (
									<Image
										src={URL.createObjectURL(
											selectedImg
										)}
										alt="Changing image"
										fill
										className="object-contain rounded-full shadow-lg"
									/>
								)}
							</div>
						</div>
						<DialogFooter>
							<DialogClose>
								<Button variant="secondary" size="sm">
									Cancel
								</Button>
							</DialogClose>
							<Button>Save changes</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};

export default ProfileAvatar;
