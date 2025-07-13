import { EXPERIENCES, CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-20  text-center text-4xl"
      >
        Experience & Certifications
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="text-justify justify-center lg:justify-start">
            {EXPERIENCES.map((experiences, index) => (
              <div
                key={index}
                className="mb-8 flex flex-wrap  lg:justify-center"
              >
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-1/4"
                >
                  <p className="mb-2 text-sm text-neutral-400">
                    {experiences.year}
                  </p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4"
                >
                  <h6 className="mb-2 font-semibold">
                    {experiences.role} -{" "}
                    <span className="text-sm text-purple-100">
                      {experiences.company}
                    </span>
                  </h6>
                  <p className="mb-4 text-neutral-400">{experiences.d1}</p>
                  <p className="mb-4 text-neutral-400">{experiences.d2}</p>
                  <p className="mb-4 text-neutral-400">{experiences.d3}</p>
                  <p className="mb-4 text-neutral-400">{experiences.d4}</p>
                  <span className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4">
                    {experiences.technologies.map((tech, index) => (
                      <p
                        key={index}
                        className="h-10 w-full rounded bg-neutral-900 flex items-center justify-center
                 text-sm font-medium text-purple-800 text-center"
                      >
                        {tech}
                      </p>
                    ))}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="text-justify justify-center lg:justify-start">
            {CERTIFICATIONS.map((certification, index) => (
              <div
                key={index}
                className="mb-8 flex flex-wrap  lg:justify-center"
              >
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-1/4"
                >
                  <p className="mb-2 text-sm text-neutral-400">
                    {certification.year}
                  </p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4"
                >
                  <h6 className="mb-2 font-semibold">
                    {certification.role} -{" "}
                    <span className="text-sm text-purple-100">
                      {certification.company}
                    </span>
                  </h6>
                  <p className="mb-4 text-neutral-400">
                    {certification.description}
                  </p>
                  <span
                    key={index}
                    className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4"
                  >
                    {certification.technologies.map((tech, index) => (
                      <p
                        key={index}
                        className="h-10 w-full rounded bg-neutral-900 px-2 flex items-center justify-center
                 text-sm font-medium text-purple-800 text-center"
                      >
                        {tech}
                      </p>
                    ))}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
