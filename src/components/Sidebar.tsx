import React from "react";
import logo from "../assets/Zomato_logo.png";
import {
  LayoutDashboard,
  FolderOpen,
  Users,
  Settings2,
  ChevronsLeft,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, hasDropdown: false },
  {
    title: "Projects",
    icon: FolderOpen,
    hasDropdown: true,
    dropdownItems: ["All Projects", "Active", "Completed", "Archived"],
  },
  {
    title: "Team",
    icon: Users,
    hasDropdown: true,
    dropdownItems: ["Members", "Roles", "Invitations", "Activity"],
  },
  { title: "Settings", icon: Settings2, hasDropdown: false },
];

const Sidebar = ({ open, setOpen }) => {
  return (
    <motion.div
      layout
      className={`bg-white flex flex-col h-screen shrink-0 sticky top-0 border-r border-slate-300 px-3 ${open ? "w-64" : "w-fit"}`}
    >
      <SidebarLogo open={open} />
      <SidebarNav open={open} />
      <SidebarFooter open={open} setOpen={setOpen} />
    </motion.div>
  );
};

const SidebarFooter = ({ open, setOpen }) => (
  <motion.button
    layout
    className={`py-3 border-t border-slate-300 flex items-center ${open ? "gap-5" : "gap-0"}`}
    onClick={() => setOpen(!open)}
  >
    <motion.div layout className={`w-fit`}>
      <ChevronsLeft size={23} className={`${open ? "" : "rotate-180"}`} />
    </motion.div>
    {open && "Hide"}
  </motion.button>
);

const SidebarNav = ({ open }) => {
  const [dropDown, setDropDown] = useState("");
  const handleDropDown = (title: string) =>
    setDropDown((prev: string) => (prev === title ? "" : title));

  return (
    <div className={`flex flex-col justify-between flex-1`}>
      <div className={` text-slate-700 w-full px-1`}>
        {navItems.map((item) => (
          <div onClick={() => handleDropDown(item.title)} key={item.title}>
            <div
              className={`flex px-2 rounded-sm mb-2 items-center justify-between hover:bg-slate-100`}
            >
              <div
                className={`flex h-12 items-center  ${open ? "gap-5" : "w-fit"}`}
              >
                <motion.div layout>
                  <item.icon size={23} />
                </motion.div>
                {open && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.124 }}
                    className={` w-fit`}
                  >
                    {item.title}
                  </motion.div>
                )}
              </div>
              <div>
                {open &&
                  item.hasDropdown &&
                  (dropDown === item.title ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  ))}
              </div>
            </div>

            {item.hasDropdown && open && dropDown == item.title && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden mt-3"
              >
                {item.dropdownItems?.map((item) => (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15, delay: 0.125 }}
                    key={item}
                    className={`mb-3 pl-10 w-fit`}
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SidebarLogo = ({ open }) => {
  return (
    <div
      className={`flex items-center border-b border-slate-300 pt-4 pb-6 mb-8  ${open ? "gap-5" : "gap-0"}`}
    >
      <motion.div layout className={`size-10 rounded-sm overflow-hidden`}>
        <motion.img src={logo} alt="" />
      </motion.div>
      {open && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.123 }}
          className={`flex flex-col `}
        >
          <span className={` font-bold text-slate-800`}>Zomato</span>
          <span className={`text-xs text-slate-500`}>Pro Plan</span>
        </motion.div>
      )}
    </div>
  );
};

export default Sidebar;
