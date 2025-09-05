import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import aboutImg from '../media/about.jpg'
// Counter animation component
const Counter = ({ from, to, duration }) => {
  const nodeRef = useRef();
  const controls = useAnimation();
  const inView = useInView(nodeRef);

  useEffect(() => {
    if (inView) {
      controls.start({
        val: to,
        transition: { duration: duration, ease: "easeOut" },
      });
    }
  }, [controls, inView, to, duration]);

  return (
    <motion.span
      ref={nodeRef}
      initial={{ val: from }}
      animate={controls}
      onUpdate={(latest) => {
        if (nodeRef.current) {
          nodeRef.current.innerText = Math.floor(latest.val);
        }
      }}
    />
  );
};

export const About = () => {
  return (
    <div>
      <Header />

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={aboutImg}
              alt="About Adela Software"
              className="rounded-[3rem] shadow-lg object-cover w-full"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
              About Adela Software And Services Pvt. Ltd.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Delivering innovation in Information Technology since 2004.
              With over two decades of expertise, we empower businesses
              with reliable, scalable, and future-ready solutions.
            </p>

            {/* Stats Section with Counter Animation */}
            <div className="flex flex-col sm:flex-row gap-10 justify-center md:justify-start mt-6">
              <div>
                <h3 className="text-4xl font-bold text-indigo-600">
                  <Counter from={0} to={21} duration={2} />+
                </h3>
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-indigo-600">
                  <Counter from={0} to={120} duration={2} />+
                </h3>
                <p className="text-gray-700">Employees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
