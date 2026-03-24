import React from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import MainComponent from "./components/MainContent";
import { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <motion.main layout className="flex h-screen">
      <Sidebar open={open} setOpen={setOpen} />

      <motion.div layout className="flex flex-col flex-1">
        <NavBar />
        <MainComponent />
      </motion.div>
    </motion.main>
  );
};

export default App;
