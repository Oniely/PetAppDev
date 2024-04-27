import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import LeftSideBar from "@/components/LeftSideBar";
import { ClerkProvider } from "@clerk/nextjs";
import TopBar from "@/components/TopBar";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Pet Care Services Application",
	description: "Next.js Application PWA's",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider appearance={{
			variables: {
				colorPrimary: '#f59245'
			}
		}}>
			<html lang="en">
				<body className={font.className}>
					<TopBar />
					<main className="flex flex-row">
						<LeftSideBar />
						<section className="flex min-h-screen flex-1 flex-col px-6 pb-10 pt-28 max-md:mb-32 sm:px-10">
							{children}
						</section>
					</main>
					{/* <Bottombar /> */}
				</body>
			</html>
		</ClerkProvider>
	);
}
