import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./notFound.scss";

function NotFound() {
  useEffect(() => {
    document.title = "404 NotFound 💢";
  }, []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center p-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex text-3xl gap-2 font-bold"
      >
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[36px] w-2 rounded"></div>
        <h2 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          这是一个错误 😣
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-neutral-600 mb-6"
      >
        好像不对 🤔 URL 已经存在？  
        <Link className="text-cyan-600 font-semibold hover:underline" to="/">
          返回主页
        </Link>
      </motion.p>

      {/* Glitch Effect */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="glitchWrapper xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-5xl mt-8 font-extrabold"
      >
        <div className="glitch" data-text="404 Not Found">
          404 未找到
        </div>
      </motion.div>

      {/* Back Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-10"
      >
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all"
        >
          ⬅️ 返回主页
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
