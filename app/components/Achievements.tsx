export default function Achievements() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Our Achievements
        </h2>
        <p className="text-black text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <p className="text-4xl md:text-5xl font-bold text-black">+200</p>
            <p className="text-black mt-2">Courses</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-4xl md:text-5xl font-bold text-black">50k</p>
            <p className="text-black mt-2">Mentors</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-4xl md:text-5xl font-bold text-black">370k</p>
            <p className="text-black mt-2">Students</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-4xl md:text-5xl font-bold text-black">100+</p>
            <p className="text-black mt-2">Recognition</p>
          </div>
        </div>
      </div>
    </section>
  );
}
