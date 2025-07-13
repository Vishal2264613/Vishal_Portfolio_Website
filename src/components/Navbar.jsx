import React from "react";
import logo from "../assets/vp1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          <Link to="https://www.linkedin.com/in/pawar-vishal/">
            <FaLinkedin />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          <Link to="http://github.com/Vishal2264613">
            <FaGithub />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          <Link to="https://x.com/vp2264613">
            <FaSquareXTwitter />
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
