import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#f7f7f7] border-black border text-black py-2 max-md:hidden mb-4">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <a href="tel:956 742 455 678" className="hover:text-gray-900">
              Phone Number: 956 742 455 678
            </a>
          </div>
          <Image src="/images/line.svg" alt="" width={1} height={1} />
          <div className="flex items-center space-x-2">
            <a href="mailto:info@ddsgnr.com" className="hover:text-gray-900">
              Email:info@ddsgnr.com
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a href="/">
            <Image
              src="/images/Facebook.svg"
              alt="Facebook"
              width={16}
              height={16}
            />
          </a>
          <a href="/">
            <Image
              src="/images/Instagram.svg"
              alt="Instagram"
              width={16}
              height={16}
            />
          </a>
          <a href="/">
            <Image
              src="/images/Twitter.svg"
              alt="Twitter"
              width={16}
              height={16}
            />
          </a>
          <a href="/">
            <Image
              src="/images/LinkedIn.svg"
              alt="LinkedIn"
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
