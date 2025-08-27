// src/pages/Home/index.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode, faRocket, faInfoCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import Tilt from "react-parallax-tilt";
import confetti from "canvas-confetti";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Home() {
  useEffect(() => {
    document.title = "首页";
  }, []);

  const cards = [
    { icon: faGlobe, title: "网站状态", desc: "网站运行流畅，响应式设计适配各种设备。", color: "text-pink-500" },
    { icon: faCode, title: "技术栈", desc: "使用 React、TailwindCSS、Framer Motion 和 Swiper。", color: "text-blue-500" },
    { icon: faRocket, title: "目标", desc: "创建漂亮的个人作品展示平台，并学习前端开发。", color: "text-green-500" },
    { icon: faInfoCircle, title: "关于网站", desc: "浏览 About 页面、证书、最喜欢的视频，体验动态内容。", color: "text-purple-500" },
  ];

  const features = [
    "响应式 & 现代 UI 设计",
    "交互动画，使用 Framer Motion",
    "Swiper 轮播展示动态内容",
    "结构清晰，易于扩展和维护",
    "未来支持暗黑/亮色主题",
    "快速加载与 SEO 优化",
  ];

  const projects = [
    { title: "项目 A", desc: "React + Tailwind 前端展示", image: "https://source.unsplash.com/random/400x300?sig=1" },
    { title: "项目 B", desc: "动态交互动画案例", image: "https://source.unsplash.com/random/400x300?sig=2" },
    { title: "项目 C", desc: "个人作品集演示", image: "https://source.unsplash.com/random/400x300?sig=3" },
    { title: "项目 D", desc: "学习项目示例", image: "https://source.unsplash.com/random/400x300?sig=4" },
  ];

  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="w-full min-h-screen px-4 md:px-8 py-12 text-neutral-800 font-bold bg-gradient-to-b from-pink-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors">

      {/* Hero */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-pink-600 dark:text-pink-400 animate-pulse">
          欢迎来到我的网站 🚀
        </h1>
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 max-w-2xl mx-auto">
          这是我的个人平台，用于展示我的项目、技能和学习历程。
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <FontAwesomeIcon icon={card.icon} className={`text-5xl ${card.color}`} />
            <h3 className="font-semibold text-lg">{card.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Features */}
      <motion.div
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-purple-600 dark:text-purple-400">✨ 特色功能</h2>
        <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 dark:from-purple-800 dark:via-purple-700 dark:to-purple-800 text-purple-700 dark:text-purple-200 px-5 py-3 rounded-2xl shadow hover:shadow-lg transition w-fit cursor-pointer"
            >
              <FontAwesomeIcon icon={faStar} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Projects Carousel */}
      <motion.div
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-600 dark:text-green-400">🎬 项目展示</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={2500}>
                <div
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl cursor-pointer"
                  onClick={handleClick}
                >
                  <img src={p.image} alt={p.title} className="w-full h-60 object-cover rounded-xl mb-4" />
                  <h3 className="text-xl font-bold text-center text-green-600 dark:text-green-400">{p.title}</h3>
                  <p className="text-center text-slate-700 dark:text-slate-200">{p.desc}</p>
                </div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Call-to-action */}
      <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <button
          className="px-8 py-4 bg-pink-500 dark:bg-pink-400 text-white rounded-2xl font-bold shadow-2xl hover:bg-pink-600 dark:hover:bg-pink-500 transition transform hover:-translate-y-2 hover:scale-105 motion-safe:animate-bounce"
          onClick={() => window.location.href = "/about"}
        >
          了解更多 About 页面 ❤️
        </button>
      </motion.div>
    </div>
  );
}

export default Home;
