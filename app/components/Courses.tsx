import Image from "next/image";

export default function Courses() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Courses</h2>
          <p className="text-black text-lg mt-4">
            Your Ultimate Guide to Learning
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white shadow-sm hover:shadow-lg transition p-4 flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/images/course-image1.svg"
                alt="UX/UI Design 201"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-black font-semibold">Design</p>
                <div className="flex items-center">
                  <Image
                    src="/images/star.svg"
                    alt="Rating"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-black ml-1">5.0</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-black">UX/UI Design 201</h3>
              <p className="text-sm text-black mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="flex justify-between items-center mt-auto pt-4">
                <button className="btn-outline">Enroll Now</button>
                <p className="text-black font-semibold text-lg">$400</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm hover:shadow-lg transition p-4 flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/images/course-image2.svg"
                alt="Introduction to Python"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-black font-semibold">Programming</p>
                <div className="flex items-center">
                  <Image
                    src="/images/star.svg"
                    alt="Rating"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-black ml-1">5.0</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-black">
                Introduction to Python
              </h3>
              <p className="text-sm text-black mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="flex justify-between items-center mt-auto pt-4">
                <button className="btn-outline">Enroll Now</button>
                <p className="text-black font-semibold text-lg">$400</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm hover:shadow-lg transition p-4 flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/images/course-image3.svg"
                alt="Data Analysis"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-black font-semibold">Business</p>
                <div className="flex items-center">
                  <Image
                    src="/images/star.svg"
                    alt="Rating"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-black ml-1">5.0</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-black">
                Data Analysis for Beginners
              </h3>
              <p className="text-sm text-black mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="flex justify-between items-center mt-auto pt-4">
                <button className="btn-outline">Enroll Now</button>
                <p className="text-black font-semibold text-lg">$400</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm hover:shadow-lg transition p-4 flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/images/course-image4.svg"
                alt="Art Specialization"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-black font-semibold">Art</p>
                <div className="flex items-center">
                  <Image
                    src="/images/star.svg"
                    alt="Rating"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-black ml-1">5.0</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-black">
                Art Specialization
              </h3>
              <p className="text-sm text-black mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="flex justify-between items-center mt-auto pt-4">
                <button className="btn-outline">Enroll Now</button>
                <p className="text-black font-semibold text-lg">$400</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm hover:shadow-lg transition p-4 flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/images/course-image5.svg"
                alt="Rule of Law"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-black font-semibold">Law</p>
                <div className="flex items-center">
                  <Image
                    src="/images/star.svg"
                    alt="Rating"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-black ml-1">5.0</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-black">Rule of Law</h3>
              <p className="text-sm text-black mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="flex justify-between items-center mt-auto pt-4">
                <button className="btn-outline">Enroll Now</button>
                <p className="text-black font-semibold text-lg">$400</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm hover:shadow-lg transition p-4 flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src="/images/course-image6.svg"
                alt="Introduction to webflow"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-black font-semibold">Tech</p>
                <div className="flex items-center">
                  <Image
                    src="/images/star.svg"
                    alt="Rating"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-black ml-1">5.0</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-black">
                Introduction to webflow
              </h3>
              <p className="text-sm text-black mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="flex justify-between items-center mt-auto pt-4">
                <button className="btn-outline">Enroll Now</button>
                <p className="text-black font-semibold text-lg">$400</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="btn-outline">View All Courses</button>
        </div>
      </div>
    </section>
  );
}
