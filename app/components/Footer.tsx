import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Subscribe Section */}
      <div className="max-w-7xl grid md:grid-cols-2 sm:grid-cols-1 mx-auto justify-center items-center px-4 py-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col">
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <button type="submit" className="btn-outline">
              Subscribe
            </button>
          </form>

          <p className="text-xs flex flex-col mt-2">
            By subscribing you agree to with our{" "}
            <a href="/" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid gap-8 md:grid-cols-4 justify-center items-center">
        <div>
          <Image
            src="/images/Ddsgnr-Logo.svg"
            alt="Logo"
            width={120}
            height={50}
            className="mb-4"
          />
        </div>
        <div>
          <h3 className="font-semibold mb-4">Courses</h3>
          <ul className="text-sm space-y-2">
            <li>Business</li>
            <li>Development</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Programming</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="text-sm space-y-2">
            <li>Career</li>
            <li>Resume</li>
            <li>Learning</li>
            <li>Interview Preparation</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">About Us</h3>
          <ul className="text-sm space-y-2">
            <li>Contact</li>
            <li>Help/Support</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white">
        <div className="max-w-7xl border-t-2 border-black mx-auto px-4 py-4 flex flex-wrap items-center md:justify-between justify-center text-xs ">
          <p>© 2023 Ddsgnr. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/" className="underline">
              Privacy Policy
            </a>
            <a href="/" className="underline">
              Terms of Service
            </a>
            <a href="/" className="underline">
              Cookies Settings
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Image
              src="/images/Facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
            <Image
              src="/images/Twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
            />
            <Image
              src="/images/Instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src="/images/LinkedIn.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
