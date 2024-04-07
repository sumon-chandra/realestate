import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface NavAvatarProps {
	picture: string;
}

const NavAvatar: FC<NavAvatarProps> = ({ picture }) => {
	return (
		<Avatar>
			<AvatarImage src={picture} alt="user profile image" />
			<AvatarFallback>RS</AvatarFallback>
		</Avatar>
	);
};

export default NavAvatar;
