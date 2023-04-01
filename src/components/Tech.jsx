import { motion } from "framer-motion";
import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
// import { BallCanvas } from "./canvas";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        // ANIMATED BALLS
        // <div className="w-28 h-28">
        //   <BallCanvas icon={technology.icon} />
        // </div>
        <motion.div
          variants={fadeIn("right", "spring", 0.25 * index, 0.5)}
          className="w-40 h-46 p-2 flex flex-col items-center justify-between border-2 border-secondary rounded-[10px]"
          key={technology.name}
        >
          <img src={technology.icon} alt={technology.name} />
          <span className="text-white-100 font-bold">{technology.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
