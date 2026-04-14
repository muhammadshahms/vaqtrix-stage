"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./motion";
import React from "react";

const MotionText = ({ children }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={fadeUp}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MotionText;
