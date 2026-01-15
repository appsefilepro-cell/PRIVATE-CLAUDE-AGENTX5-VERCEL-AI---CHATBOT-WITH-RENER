import { motion } from "framer-motion";
import { Features } from "./features";

export const Greeting = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8" key="overview">
      <div className="mx-auto mt-4 flex w-full max-w-3xl flex-col justify-center md:mt-16">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="font-semibold text-xl md:text-2xl"
          exit={{ opacity: 0, y: 10 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.5 }}
        >
          Hello there!
        </motion.div>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-zinc-500 md:text-2xl"
          exit={{ opacity: 0, y: 10 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.6 }}
        >
          How can I help you today?
        </motion.div>
      </div>
      <Features />
    </div>
  );
};
