import Image from "next/image";

import Link from "next/link";

import React from "react";

const Hero = () => {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* text */}
          <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
            <h1 className="text-center xl:text-left mb-6">
              Where <span>Joyful</span> Cycling Begins
            </h1>
            <p className="text-center mb-10 text-lg  max-w-[508px] mx-auto xl:text-left xl:mx-0 ">
              Did you know that for every kilometer cycled instead of driving,
              you can save up to 0.3 liters of fuel and reduce CO2 emissions by
              0.25 kg? By choosing to ride a bike, you're not only making a
              positive impact on your personal health but also contributing to a
              greener planet. At our eco-friendly store, we offer a wide range
              of high-quality, sustainable bicycles and accessories to help you
              make a difference, one pedal stroke at a time.
            </p>
            {/* btn group */}
            <div className="flex items-center gap-4 mx-auto xl:mx-0">
              <Link href='/our-bikes' className="mx-auto md:mx-0">
                 <button className="btn btn-primary">Shop now</button>
                 
              </Link>

              <Link href='/our-bikes' className="mx-auto md:mx-0">
                 <button className="btn btn-accent">Our bikes</button>
                 
              </Link>
            </div>
          </div>
          {/* img */}
          <div className="hidden xl:flex">
            <Image
              src="/hero/bike.png"
              width={765}
              height={480}
              alt=""
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
