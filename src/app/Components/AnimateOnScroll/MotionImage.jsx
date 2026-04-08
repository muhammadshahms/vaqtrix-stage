"use client";

import { motion } from "framer-motion";
import { fadeRight,fadeLeft } from "./motion";


const MotionImage = ({ children, direction = "right" }) => {
  return (
    <motion.div
      variants={direction === "left" ? fadeLeft : fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionImage;
