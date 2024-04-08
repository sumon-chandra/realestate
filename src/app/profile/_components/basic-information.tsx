import React, { FC } from "react";
import Attribute from "./attribute";
import { User } from "@prisma/client";

interface Props {
	user: User;
}
const BasicInformation: FC<Props> = ({ user }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
			<Attribute title="Name" value={`${user?.firstName} ${user?.lastName}`} />
			<Attribute title="Email" value={user?.email} />
			<Attribute title="Registration on" value={user?.createdAt.toLocaleDateString()} />
			<Attribute title="Property posted" value={2} />
		</div>
	);
};

export default BasicInformation;
