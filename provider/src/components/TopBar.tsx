"use client";

import { UserButton, useUser } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const TopBar = () => {
    const { user } = useUser();

   return (
     <nav className="fixed top-0 z-30 w-full flexBetween bg-low-orange px-6 h-[4rem]">
        <Link href='/'>
            <Image src='/images/logo.png' alt="logo" width={35} height={35} />
        </Link>

        <div className="flexCenter gap-2">
            <UserButton />
            <p>{user?.firstName}</p>
        </div>
    </nav>
   )
}

export default TopBar