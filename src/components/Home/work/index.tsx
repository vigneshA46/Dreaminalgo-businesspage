"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const services = [
  {
    icon: "/images/icons/icon-consulting.svg",
    text: "Financial Services",
    desc: "Providing expert financial guidance, market insights, and smart investment solutions."
  },
  {
    icon: "/images/icons/icon-blockchain.svg",
    text: "Dreamin Algo",
    desc: "Advanced algorithmic trading solutions designed for smarter and faster market execution."
  },
  {
    icon: "/images/icons/icon-Services.svg",
    text: "Dreamin Academy",
    desc: "Professional training platform helping traders master financial markets and strategies."
  },
];

  return (
    <section className="md:pt-28" id="work">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-12 col-span-12"
          >
            <p className="sm:text-28 text-18 text-white">
              What we <span className="text-primary">do</span>
            </p>
            <h2 className="sm:text-40 text-30 text-white lg:w-full md:w-70% font-medium">
              Explore our all services
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-7 mt-11">
              {services.map((service, index) => (
                <div
      key={index}
      className="flex items-center gap-5 p-4 rounded-2xl transition-all duration-300 hover:bg-gray-100 group cursor-pointer"
  >
      <div className="px-5 py-5 bg-light_grey bg-opacity-30 rounded-full">
        <Image
        src={service.icon}
        alt={`${service.text} icon`}
        width={40}
        height={40}
        />
      </div>

      <div>
      <p className="text-24 font-semibold text-muted group-hover:text-black transition-colors duration-300">{service.text}</p>
      <p className="text-14 text-muted group-hover:text-black transition-colors duration-300">{service.desc}</p>
  </div>
</div>
              ))}
            </div>
          </motion.div>
          {/* <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12">
            <div className="2xl:-mr-40 mt-9 flex justify-center">
              <Image
                src= {`images/work/img-work-with-us.png`}
                alt="image"
                width={600}
                height={425}
                className="lg:w-full"
              />
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
