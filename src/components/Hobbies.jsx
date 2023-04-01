import { motion } from "framer-motion";
import React from "react";
import { hobbies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const HobbyCard = ({ title, description, image, index }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-4  rounded-3xl xs:w-[320px] w-full"
    >
      <div className="mb-2 relative w-full h-[100px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <h3 className="text-white font-bold text-[24px] uppercase">{title}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
    </motion.div>
  );
};

const Hobbies = () => {
  return (
    <div className="mt-12 bg-black-100 roundeed-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What I like to do</p>
          <h2 className={`${styles.sectionHeadText}`}>Hobbies.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {hobbies.map((hobby, index) => (
          <HobbyCard key={`testimonial-${index}`} {...hobby} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Hobbies, "hobbies");
