import Image from "next/image";
import hero from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <section className="bg-base-200">
      <div className="container">
        <div className="hero min-h-screen lg:w-full">
          <div className="hero-content flex-col lg:flex-row-reverse  lg:w-full lg:justify-between">
            <Image
              width={500}
              height={500}
              src={hero.src}
              className="md:max-w-md rounded-lg mb-6 md:mb-0"
            />
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold">We helps brands grow by unlcashing the potential of imernet</h1>
              <p className="py-6">
                if you di the right marketing on the bp line the bottom line marketing wil follow.
              </p>
              <button className="my-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
