import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between px-10 py-4 border-b border-gray-200 bg-white">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                        src="/images/logo.png" // use resource in public directly
                        alt="Logo"
                        width={250}
                        height={40}
                        className="cursor-pointer"
                    />
                </Link>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex space-x-6 text-lg font-medium text-gray-700">
                {/* button names */}
                <div className="cursor-pointer hover:text-black">Cold Process Soaps</div>
                <div className="cursor-pointer hover:text-black">Candles</div>
                <div className="cursor-pointer hover:text-black">Bath Bombs</div>
                <div className="cursor-pointer hover:text-black">Wholesales</div>
                <div className="cursor-pointer hover:text-black">Contact Us</div>
            </div>

            {/* Usr Icons */}
            <div className="flex space-x-6 items-center text-gray-700 text-xl">
                <span className="cursor-pointer">🔍</span>
                <span className="cursor-pointer text-sm">Login 👤</span>
                <span className="cursor-pointer">🛒</span>
            </div>
        </nav>
    )
}