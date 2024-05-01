"use client";

import { FC, useState } from "react";
import { Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { uploadAvatar } from "@/lib/upload-avatar";
import { updateUserAvatar } from "@/lib/actions/user";
import { useRouter } from "next/navigation";

interface Props {
	picture?: string;
	fallback?: string;
	userId: string;
}

const ProfileAvatar: FC<Props> = ({ picture, fallback, userId }) => {
	const [selectedImg, setSelectedImg] = useState<File>();
	const [isUpdating, setIsUpdating] = useState(false);
	const router = useRouter();
	// console.log({ picture });

	const handleUpdateAvatar = async () => {
		try {
			setIsUpdating(true);
			const avatarUrl = await uploadAvatar(selectedImg!);
			const data = await updateUserAvatar(avatarUrl, userId);
			// console.log({ data });
			setIsUpdating(false);
			router.refresh();
		} catch (error) {
			setIsUpdating(false);
			console.log("Something went wrong!!");
		} finally {
			setIsUpdating(false);
		}
	};

	return (
		<div>
			<Avatar className="size-40 rounded-full shadow-md">
				<AvatarImage className="object-contain" src={picture!} alt="User profile" />
				<AvatarFallback className="text-9xl">{fallback}</AvatarFallback>
			</Avatar>
			<div className="mt-3">
				<Dialog>
					<DialogTrigger asChild>
						<Button size="sm">Change image</Button>
					</DialogTrigger>
					<DialogContent>
						<div>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="picture">Picture</Label>
								<Input
									id="picture"
									type="file"
									onChange={(e) => setSelectedImg((e as any).target.files[0])}
								/>
							</div>
							<div className="relative mt-6 size-40 border rounded-full mx-auto object-center">
								{selectedImg && (
									<Image
										src={URL.createObjectURL(selectedImg)}
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
							<Button disabled={isUpdating} onClick={handleUpdateAvatar}>
								{isUpdating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
								Save changes
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};

export default ProfileAvatar;
