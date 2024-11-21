import Image from "next/image";

export default function CourseCategories() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Courses By Category
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          <div className="bg-[#f7f7f7] border flex flex-row rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <Image
              src="/images/icon.svg"
              alt="Design & Development"
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-semibold text-center text-black">
                Design & Development
              </h3>
              <p className="text-lg font-normal text-black text-center mt-2">
                50+ Courses Available
              </p>
            </div>
          </div>

          <div className="bg-[#f7f7f7] border flex flex-row rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <Image
              src="/images/icon1.svg"
              alt="Design & Development"
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-semibold text-center text-black">
                Marketing
              </h3>
              <p className="text-lg font-normal text-black text-center mt-2">
                50+ Courses Available
              </p>
            </div>
          </div>

          <div className="bg-[#f7f7f7] border flex flex-row rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <Image
              src="/images/icon2.svg"
              alt="Design & Development"
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-semibold text-center text-black">
                Development
              </h3>
              <p className="text-lg font-normal text-black text-center mt-2">
                50+ Courses Available
              </p>
            </div>
          </div>

          <div className="bg-[#f7f7f7] border flex flex-row rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <Image
              src="/images/icon3.svg"
              alt="Design & Development"
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-semibold text-center text-black">
                Communication
              </h3>
              <p className="text-lg font-normal text-black text-center mt-2">
                50+ Courses Available
              </p>
            </div>
          </div>

          <div className="bg-[#f7f7f7] border flex flex-row rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <Image
              src="/images/icon4.svg"
              alt="Design & Development"
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-semibold text-center text-black">
                Digital Marketing
              </h3>
              <p className="text-lg font-normal text-black text-center mt-2">
                50+ Courses Available
              </p>
            </div>
          </div>

          <div className="bg-[#f7f7f7] border flex flex-row rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <Image
              src="/images/icon5.svg"
              alt="Design & Development"
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-semibold text-center text-black">
                Self Development
              </h3>
              <p className="text-lg font-normal text-black text-center mt-2">
                50+ Courses Available
              </p>
            </div>
          </div>

          <div className="bg-[#f7f7f7] border flex flex-row rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <Image
              src="/images/icon6.svg"
              alt="Design & Development"
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-semibold text-center text-black">
                Buiseness
              </h3>
              <p className="text-lg font-normal text-black text-center mt-2">
                50+ Courses Available
              </p>
            </div>
          </div>

          <div className="bg-[#f7f7f7] border flex flex-row rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <Image
              src="/images/icon7.svg"
              alt="Design & Development"
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-semibold text-center text-black">
                Finance
              </h3>
              <p className="text-lg font-normal text-black text-center mt-2">
                50+ Courses Available
              </p>
            </div>
          </div>

          <div className="bg-[#f7f7f7] border flex flex-row rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <Image
              src="/images/icon8.svg"
              alt="Design & Development"
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-semibold text-center text-black">
                Consulting
              </h3>
              <p className="text-lg font-normal text-black text-center mt-2">
                50+ Courses Available
              </p>
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
