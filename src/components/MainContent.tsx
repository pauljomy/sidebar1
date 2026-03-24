import React from "react";
import { motion } from "framer-motion";

const MainComponent = () => {
  return (
    <motion.div
      layout
      className="bg-white h-full flex-1 grid place-content-center"
    >
      Main Content
    </motion.div>
  );
};

export default MainComponent;
