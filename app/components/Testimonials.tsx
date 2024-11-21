import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 py-12">
      <div className="md:text-left text-center mt-10 mb-10">
        <h2 className="text-3xl font-bold mb-4">Customer testimonials</h2>
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 border border-black">
          <div className="flex mb-4">
            <Image
              src="/images/Stars.svg"
              alt="Star"
              width={116}
              height={19}
              className="inline-block"
            />
          </div>
          <p className="text-black text-lg mb-6">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-4">
              <Image
                src="/images/team3.svg"
                alt="James Nduku"
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold">James Nduku</h4>
              <p className="text-xs text-black">Software Developer</p>
            </div>
          </div>
        </div>

        <div className="p-6 border border-black">
          <div className="flex mb-4">
            <Image
              src="/images/Stars.svg"
              alt="Star"
              width={116}
              height={19}
              className="inline-block"
            />
          </div>
          <p className="text-black text-lg mb-6">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-4">
              <Image
                src="/images/team1.svg"
                alt="Erick Kipkemboi"
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold">Erick Kipkemboi</h4>
              <p className="text-xs text-black">Scrum Master</p>
            </div>
          </div>
        </div>

        <div className="p-6 border border-black">
          <div className="flex mb-4">
            <Image
              src="/images/Stars.svg"
              alt="Star"
              width={116}
              height={19}
              className="inline-block"
            />
          </div>
          <p className="text-black text-lg mb-6">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-4">
              <Image
                src="/images/team6.svg"
                alt="Stephen Kerubo"
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold">Stephen Kerubo</h4>
              <p className="text-xs text-black">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <Image
          src="/images/slider-dots.svg"
          alt="Slider Dots"
          width={72}
          height={8}
        />
        <div className="flex space-x-4">
          <button aria-label="Previous" className="p-2">
            <Image
              src="/images/arrow-left.svg"
              alt="Previous"
              width={24}
              height={24}
            />
          </button>
          <button aria-label="Next" className="p-2">
            <Image
              src="/images/arrow-right.svg"
              alt="Next"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
