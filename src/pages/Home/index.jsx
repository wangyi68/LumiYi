// src/pages/Home/index.js
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HeroVideo from "../../assets/video/cartheiya.mp4"; // video background
import HeroImg from "../../assets/imgs/images.jpg"; // avatar

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

function Home() {
  useEffect(() => {
    document.title = "Home - My Personal Website";
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>

      {/* Nội dung */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* Avatar */}
        <motion.img
          src={HeroImg}
          alt="avatar"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-pink-400 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
        />

        {/* Tiêu đề */}
        <motion.h1
          className="mt-6 text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.4}
        >
          欢迎来到{" "}
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            我的个人网站
          </span>{" "}
          👋
        </motion.h1>

        {/* Mô tả */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.6}
        >
          我是一名对{" "}
          <span className="text-pink-400 font-semibold">编程</span>、
          <span className="text-blue-400 font-semibold">设计</span> 和
          <span className="text-purple-400 font-semibold">创造</span>{" "}
          充满热情的学习者。这里记录了我的旅程、项目和一些个人收藏。
        </motion.p>

        {/* Nút */}
        <motion.div
          className="mt-6 flex flex-wrap gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.8}
        >
          <Link
            to="/about"
            className="px-5 py-2 rounded-2xl bg-black/70 text-white hover:bg-black/90 transition shadow-md backdrop-blur-md"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            关于我
          </Link>
          <Link
            to="/projects"
            className="px-5 py-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition shadow-md"
          >
            <FontAwesomeIcon icon={faCode} className="mr-2" />
            项目
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition shadow-md"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            联系我
          </Link>
        </motion.div>

        {/* Quote */}
        <motion.p
          className="mt-10 text-lg italic text-white/90 drop-shadow-md"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1.0}
        >
          “保持好奇，持续学习，创造无限可能。” 🚀
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
