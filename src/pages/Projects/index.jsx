import { useEffect } from "react";
import GithubProjects from "../../api/githubApi";
import { motion } from "framer-motion";

function Projects() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <motion.div
      className="font-bold text-neutral-800 w-full pb-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Tiêu đề */}
      <motion.div
        className="mb-3 flex text-3xl gap-2 font-bold"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-neutral-800 h-[36px] w-2"></div>
        <h2>项目 🕓</h2>
      </motion.div>

      {/* Mô tả */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        因为我爱你 💾, 虽然不好但是...
      </motion.p>

      {/* Grid project */}
      <motion.div
        className="md:grid w-full mt-6 flex flex-col lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <GithubProjects />
      </motion.div>
    </motion.div>
  );
}

export default Projects;
