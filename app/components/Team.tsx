import Image from "next/image";

const Team = () => {
  return (
    <section className="bg-[#f7f7f7] max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Our team</h2>
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div className="text-center p-4">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/images/team1.svg"
              alt="James Nduku"
              layout="fill"
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold">James Nduku</h3>
          <p className="text-sm text-black mb-4">Marketing Coordinator</p>
          <div className="flex justify-center space-x-4">
            <a href="/" aria-label="LinkedIn">
              <Image src="/images/LinkedIn.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="/" aria-label="Twitter">
              <Image src="/images/Twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="/" aria-label="Dribble">
              <Image src="/images/Dribble.svg" alt="Dribble" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className="text-center p-4">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/images/team2.svg"
              alt="Joseph Munyambu"
              layout="fill"
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold">Joseph Munyambu</h3>
          <p className="text-sm text-black mb-4">Nursing Assistant</p>
          <div className="flex justify-center space-x-4">
            <a href="/" aria-label="LinkedIn">
              <Image src="/images/linkedIn.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="/" aria-label="Twitter">
              <Image src="/images/Twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="/" aria-label="Dribble">
              <Image src="/images/Dribble.svg" alt="Dribble" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className="text-center p-4">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/images/team3.svg"
              alt="Joseph Ngumbau"
              layout="fill"
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold">Joseph Ngumbau</h3>
          <p className="text-sm text-black mb-4">Medical Assistant</p>
          <div className="flex justify-center space-x-4">
            <a href="/" aria-label="LinkedIn">
              <Image src="/images/LinkedIn.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="/" aria-label="Twitter">
              <Image src="/images/Twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="/" aria-label="Website">
              <Image src="/images/Dribble.svg" alt="Dribble" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className="text-center p-4">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/images/team4.svg"
              alt="Erick Kipkemboi"
              layout="fill"
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold">Erick Kipkemboi</h3>
          <p className="text-sm text-black mb-4">Web Designer</p>
          <div className="flex justify-center space-x-4">
            <a href="/" aria-label="LinkedIn">
              <Image src="/images/LinkedIn.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="/" aria-label="Twitter">
              <Image src="/images/Twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="/" aria-label="Dribble">
              <Image src="/images/Dribble.svg" alt="Dribble" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className="text-center p-4">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/images/team5.svg"
              alt="Stephen Kerubo"
              layout="fill"
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold">Stephen Kerubo</h3>
          <p className="text-sm text-black mb-4">President of Sales</p>
          <div className="flex justify-center space-x-4">
            <a href="/" aria-label="LinkedIn">
              <Image src="/images/LinkedIn.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="/" aria-label="Twitter">
              <Image src="/images/Twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="/" aria-label="Dribble">
              <Image src="/images/Dribble.svg" alt="Dribble" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className="text-center p-4">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/images/team6.svg"
              alt="John Leboo"
              layout="fill"
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold">John Leboo</h3>
          <p className="text-sm text-black mb-4">Dog Trainer</p>
          <div className="flex justify-center space-x-4">
            <a href="/" aria-label="LinkedIn">
              <Image src="/images/LinkedIn.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="/" aria-label="Twitter">
              <Image src="/images/Twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="/" aria-label="Dribble">
              <Image src="/images/Dribble.svg" alt="Dribble" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
