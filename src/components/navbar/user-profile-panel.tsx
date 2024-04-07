"use client";
import { User } from "@prisma/client";
import { FC } from "react";
import { Cloud, Github, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, UserPlus, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import NavAvatar from "./nav-avatar";

interface Props {
	user: User;
}

const UserProfilePanel: FC<Props> = ({ user }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="rounded-full px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
				>
					<NavAvatar picture={user?.avatarUrl!} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Button variant="destructive" className="w-full">
						<LogoutLink>Logout</LogoutLink>
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserProfilePanel;
