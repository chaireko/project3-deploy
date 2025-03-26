'use client'
import Link from 'next/link'
import Image from 'next/image'
import ShareTeaLogo from "../assets/Sharetea.png";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 m-10 p-0 flex-none justify-between incline-flex flex items-center no-underline">
            <Image src={ShareTeaLogo} alt="Share Tea Logo" width={245} height={40} />
            <div className="flex-row gap-5 items-center flex mr-4 p-2 text-xl">
            <Link href="/" className="text-gray-700 hover:text-[#FF6464]">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-[#FF6464]">
              Menu
            </Link>
            <Link href="/order" className="text-gray-700 hover:text-[#FF6464]">
              Order
            </Link>
            </div>
        </div>
)
}