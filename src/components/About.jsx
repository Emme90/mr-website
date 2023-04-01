import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        I'm a software developer with experience in Typescript, Javascript and I
        used the most common frontend framework such as React.js and Angular2+.I
        have also a background with Java and SQL, and I have experience also
        with Android development and Node.js framework.
        <br />
        I'm a quick learner and I love to collaborate with team or closely with
        clients to create efficient, scalable, and user-friendly solutions.
        <br />
        Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
