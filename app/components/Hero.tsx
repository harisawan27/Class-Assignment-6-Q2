import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-0">
      <div className="max-w-7xl mx-auto px-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="px-3">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug">
            Learn new skills <br /> online with ease
          </h1>
          <p className="mt-4 text-black text-lg">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-outline">Explore Courses</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="px-0">
          <Image
            src="/images/hero-image.svg"
            alt="Hero Section Image"
            width={680}
            height={900}
            priority={true}
          />
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="mt-14 md:flex justify-center items-center">
        <p className="text-center flex sm:flex-col md:flex-row justify-center items-center font-bold px-8 text-2xl text-black mb-4">
          Trusted by 2000+ companies worldwide
        </p>
        <div className="flex flex-row space-x-6">
          <Image src="/images/logo1.svg" alt="Logo 1" width={100} height={40} />
          <Image src="/images/logo2.svg" alt="Logo 2" width={100} height={40} />
          <Image src="/images/logo3.svg" alt="Logo 3" width={100} height={40} />
          <Image src="/images/logo4.svg" alt="Logo 4" width={100} height={40} />
          <Image src="/images/logo5.svg" alt="Logo 5" width={100} height={40} />
          <Image src="/images/logo6.svg" alt="Logo 6" width={100} height={40} />
        </div>
      </div>
    </section>
  );
}
