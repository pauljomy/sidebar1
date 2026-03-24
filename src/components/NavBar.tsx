import React from "react";
import { motion } from "framer-motion";
import { Search, Sun, Moon } from "lucide-react";
import logo from "../assets/Zomato_logo.png";

const NavBar = () => {
  // const [darkMode, setDarkMode] = useState("light");
  return (
    <motion.div className="bg-white border-b border-slate-300 h-15  p-2 flex items-center justify-between px-4">
      <div className="relative">
        <Search
          size={24}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="search"
          className={`w-120 ml-4 h-fit border border-slate-300 rounded-sm pl-10 pr-3 py-2 outline-none`}
          placeholder="Search projects, tasks..."
        />
      </div>
      <div className="flex gap-4">
        <div className="size-10 rounded-full border border-slate-300">
          {/*{darkMode === "light" ? <Sun size={24} /> : <Moon size={24} />}*/}
        </div>
        <div>
          <img src={logo} alt="" className="size-10 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
