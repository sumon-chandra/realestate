import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import SignInPanel from "@/components/navbar/signin-panel";
import Progressbar from "@/components/progressbar";
import Provider from "@/components/provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Provider>
				<body className={inter.className}>
					<Progressbar />
					<Toaster />
					<Navbar>
						<SignInPanel />
					</Navbar>
					{children}
				</body>
			</Provider>
		</html>
	);
}
