import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#f7f7f7] shadow-md border border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/Ddsgnr-Logo.svg"
            alt="Logo"
            width={130}
            height={30}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-black">
          <Link href="/" className="hover:text-gray-900 hover:underline">
            Home
          </Link>
          <Link href="/" className="hover:text-gray-900 hover:underline">
            Courses
          </Link>
          <Link href="/" className="hover:text-gray-900 hover:underline">
            Services
          </Link>
          <Link href="/" className="hover:text-gray-900 hover:underline">
            Achievements
          </Link>
          <Link href="/" className="hover:text-gray-900 hover:underline">
            About Us
          </Link>
          <Link href="/" className="hover:text-gray-900 hover:underline">
            Testimonial
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="btn-outline hidden md:inline">Login</button>
          <button className="btn-primary hidden md:inline">Signup</button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button>
            <Image
              src="/images/menu-icon.svg"
              alt="Menu"
              width={48}
              height={48}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
