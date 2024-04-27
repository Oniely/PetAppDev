"use client";

import { NAV_LINKS } from "@/constants";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LeftSideBar = () => {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<aside className="sticky top-0 left-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto bg-light-orange border-r-dark-gray pb-5 pt-28 max-md:hidden">
			<div className="flex w-full flex-1 flex-col gap-6 px-6">
				{NAV_LINKS.map((link) => {
					const isActive =
						(pathname.includes(link.route) &&
							link.route.length > 1) ||
						pathname === link.route;

					return (
						<Link
							href={link.route!}
							key={link.label}
							className={`relative flex justify-start gap-4 rounded-lg p-4 ${
								isActive && "bg-main-orange"
							}`}
						>
							<Image
								src={link.img!}
								alt={link.label}
								width={24}
								height={24}
							/>
							<p className="max-lg:hidden">{link.label}</p>
						</Link>
					);
				})}
			</div>
			<div className="mt-10 px-6">
				<SignedIn>
					<SignOutButton>
						<div className="flex cursor-pointer gap-4 p-4">
							<Image
								src="/images/logout.svg"
								alt="logout"
								width={24}
								height={24}
							/>
							<p className="max-lg:hidden">Logout</p>
						</div>
					</SignOutButton>
				</SignedIn>
			</div>
		</aside>
	);
};

export default LeftSideBar;
