"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface NavbarProps {
	children: ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
	const navOptions = [
		{ title: "Home", href: "/" },
		{ title: "About", href: "/" },
		{ title: "Portfolio", href: "/" },
	];
	return (
		<nav className="bg-white dark:bg-gray-800">
			<div className="container flex items-center justify-between px-4 py-2">
				<Link className="flex items-end gap-2" href="#">
					<div className="relative h-6 w-6">
						<Image src={"/assets/logo.png"} alt="Logo" fill />
					</div>
					<span className="text-lg font-semibold">Acme Realestate</span>
				</Link>
				<div className="hidden md:flex items-center gap-4">
					{navOptions.map((nav) => (
						<Link
							className="text-lg font-medium hover:underline underline-offset-4"
							href={nav.href}
							key={nav.title}
						>
							{nav.title}
						</Link>
					))}
					<div>{children}</div>
				</div>
				<Sheet>
					<SheetTrigger asChild>
						<Button className="lg:hidden" size="icon" variant="outline">
							<Menu className="h-6 w-6" />
							<span className="sr-only">
								Toggle navigation menu
							</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<div className="grid w-[200px] p-4">
							{navOptions.map((nav) => (
								<Link
									className="text-lg font-medium hover:underline underline-offset-4"
									href={nav.href}
									key={nav.title}
								>
									{nav.title}
								</Link>
							))}
							<div>{children}</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export default Navbar;
