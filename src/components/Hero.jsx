import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Vishal1.JPG";
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import resume from "../assets/resume/Vishal_FullStackResume.pdf";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-8xl"
            >
              Vishal Pawar
            </motion.h1>
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
            bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Web Developer
            </motion.span>
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6  font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
            <a href={resume} download="MyResume">
              <motion.button
                variants={container(0.8)}
                initial="hidden"
                animate="visible"
                class="relative mt-5 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              >
                <span className="relative flex items-center justify-center  px-20 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <IoMdDownload />
                  <span className="ml-1">RESUME</span>
                </span>
              </motion.button>
            </a>
          </div>
        </div>
        <div className="relative w-[200px] h-[600px] lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center w-full h-full">
            <motion.img
              className="rounded-2xl w-full h-full object-cover object-top brightness-75"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              src={profilePic}
              alt="Profile pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
