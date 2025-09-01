// src/pages/About/index.js
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeamSweat } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faEarthAsia,
  faUserGraduate,
  faXmark,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import ChillImg from "../../assets/imgs/images.jpg";
import Img from "../../components/img";
import HCMUTLogo from "../../assets/imgs/hcmut.png";
import TsinghuaLogo from "../../assets/imgs/tsinghua.png";

// Gallery
import Cert1 from "../../assets/gallery/images1.jpg";
import Cert2 from "../../assets/gallery/images2.jpg";
import Cert3 from "../../assets/gallery/images3.jpg";
import Cert4 from "../../assets/gallery/images4.jpg";
import Cert5 from "../../assets/gallery/images5.jpg";
import Cert6 from "../../assets/gallery/images6.jpg";
import Cert7 from "../../assets/gallery/images7.jpg";
import Cert8 from "../../assets/gallery/images8.jpg";
import Cert9 from "../../assets/gallery/images9.jpg";
import Cert10 from "../../assets/gallery/images10.jpg";
import Cert11 from "../../assets/gallery/images11.jpg";
import Cert12 from "../../assets/gallery/images12.jpg";

function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  const [preview, setPreview] = useState(null);
  const [activeCert, setActiveCert] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [videoHeight, setVideoHeight] = useState("600px");

  const certImages = [
    { src: Cert1, name: "Images 1" },
    { src: Cert2, name: "Images 2" },
    { src: Cert3, name: "Images 3" },
    { src: Cert4, name: "Images 4" },
    { src: Cert5, name: "Images 5" },
    { src: Cert6, name: "Images 6" },
    { src: Cert7, name: "Images 7" },
    { src: Cert8, name: "Images 8" },
    { src: Cert9, name: "Images 9" },
    { src: Cert10, name: "Images 10" },
    { src: Cert11, name: "Images 11" },
    { src: Cert12, name: "Images 12" },
  ];

  const favoriteVideos = [
    {
      type: "tiktok",
      id: "https://www.tiktok.com/embed/7531032963304131858",
      title: "TikTok: congchua1907",
    },
    {
      type: "tiktok",
      id: "https://www.tiktok.com/embed/7526922166533754132",
      title: "TikTok: minhkhoi.me.coss",
    },
    {
      type: "tiktok",
      id: "https://www.tiktok.com/embed/7542096867044134152",
      title: "TikTok: congtonly14",
    },
  ];

  const handleHeightChange = (e) => {
    const value = e.target.value;
    if (/^\d+$/.test(value)) setVideoHeight(`${value}px`);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  return (
    <div className="font-extrabold text-neutral-800 w-full pb-20 px-4 md:px-8">
      {/* Title */}
      <motion.div
        className="mb-12 flex items-center gap-3 text-3xl font-extrabold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="bg-neutral-800 h-[36px] w-2 rounded"></div>
        <h2>关于 💤</h2>
      </motion.div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
        <div className="space-y-10">
          {/* Programming */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="mb-3 text-xl">
              <span>⬤</span> 我是如何学习编程的？ 🤔
            </h3>
            <p className="text-slate-700 leading-relaxed">
              一直对网站和游戏的运作方式充满好奇。从使用 HTML 设计界面、CSS 样式、JavaScript 添加功能，
              到 2024 年初学习 React，每一步都为深入了解互联网打开了一扇新的大门。
              好奇心和热情一直引领着我走在这条路上。我相信，只要有耐心和努力，在科技的世界里一切皆有可能！
            </p>
          </motion.section>

          {/* About site */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="mb-3 text-xl">
              <span>⬤</span> 这个网站是用来做什么的？ 🍜
            </h3>
            <div className="relative">
              <Img
                className="select-none rounded-xl border-4 border-pink-500/60 shadow-lg mb-3 float-right ml-4 w-44 md:w-52 lg:w-60"
                alt="img"
                src={ChillImg}
              />
              <p className="text-slate-700 leading-relaxed">
                本网站是一个个人页面，用于介绍我自己、我的成就以及我参与过的项目。
                我分享我的个人旅程、经验和专业技能。
                您可以了解我的背景、经验以及在特定领域的技能。
                此外，这也是我与社区建立联系、分享信息和观点的地方。
                希望您能更多地了解我，并有机会在未来合作。
              </p>
            </div>
          </motion.section>

          {/* Videos */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="mb-4 text-xl">
              <span>⬤</span> 我最喜欢的视频 🎬
            </h3>
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="rounded-xl max-w-3xl mx-auto"
            >
              {favoriteVideos.map((video, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="p-4 border border-slate-200 rounded-xl shadow-sm bg-white hover:shadow-lg transition cursor-pointer flex flex-col gap-3"
                    onClick={() => setVideoPreview(video)}
                  >
                    <div className="flex items-center gap-2 text-slate-700 font-semibold truncate">
                      <FontAwesomeIcon icon={faVideo} />
                      <span className="truncate">{video.title}</span>
                    </div>
                    <div className="w-full rounded-lg overflow-hidden bg-black flex items-center justify-center text-white font-semibold aspect-[16/9] text-base">
                      点击预览
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <p className="text-sm text-slate-500 mt-3 text-center">
              点击卡片可放大视频 (最多 5 个 TikTok 视频)
            </p>
          </motion.section>
        </div>

        {/* Right */}
        <motion.div
          className="flex flex-col gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Work */}
          <motion.div
            className="p-5 rounded-xl border bg-slate-50 border-slate-200 shadow hover:shadow-xl transition transform"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex gap-3 items-center text-slate-700 font-semibold">
              <FontAwesomeIcon icon={faBriefcase} />
              <p>Work</p>
            </div>
            <div className="flex mt-6 gap-3 items-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 text-white text-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faEarthAsia} />
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-medium">广阔的世界</h5>
                <div className="flex justify-between text-xs text-slate-600">
                  <p>自由的</p>
                  <p>2025 - 至今</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="p-5 rounded-xl border bg-slate-50 border-slate-200 shadow hover:shadow-xl transition transform"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex gap-3 items-center text-slate-700 font-semibold">
              <FontAwesomeIcon icon={faUserGraduate} />
              <p>Education</p>
            </div>

            {/* HCMUT */}
            <div className="flex mt-6 gap-3 items-center">
              <Tippy content="HCMUT - Đại học Bách Khoa TP.HCM">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={HCMUTLogo}
                  alt="HCMUT"
                  className="w-12 h-12 rounded-full object-cover border shadow cursor-pointer"
                />
              </Tippy>
              <div className="flex-1">
                <h5 className="text-sm font-medium">
                  University of Technology - Vietnam National University, Ho Chi Minh City
                </h5>
                <p className="text-sm font-medium">HCMUT</p>
                <div className="flex justify-between text-xs text-slate-600">
                  <p>Oh no My Dream</p>
                  <p>Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Tsinghua */}
            <div className="flex mt-6 gap-3 items-center">
              <Tippy content="Tsinghua University - 清华大学">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={TsinghuaLogo}
                  alt="Tsinghua"
                  className="w-12 h-12 rounded-full object-cover border shadow cursor-pointer"
                />
              </Tippy>
              <div className="flex-1">
                <h5 className="text-sm font-medium">Tsinghua University - 清华大学</h5>
                <p className="text-sm font-medium">Beijing, China</p>
                <div className="flex justify-between text-xs text-slate-600">
                  <p>Another Dream</p>
                  <p>Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="https://hcmut.edu.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 flex text-sm hover:bg-slate-700 items-center gap-2 justify-center text-white bg-slate-800 rounded-lg transition"
              >
                <FontAwesomeIcon icon={faFaceGrinBeamSweat} />
                <span>HCMUT 网站</span>
              </a>
              <a
                href="https://www.tsinghua.edu.cn/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 flex text-sm hover:bg-slate-700 items-center gap-2 justify-center text-white bg-slate-800 rounded-lg transition"
              >
                <FontAwesomeIcon icon={faFaceGrinBeamSweat} />
                <span>Tsinghua 网站</span>
              </a>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="p-5 rounded-xl border bg-slate-100 border-slate-200 shadow-sm hover:shadow-xl transition"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg font-bold text-neutral-700 mb-4 text-center">
              Images / <span className="text-pink-600">{activeCert}</span>
            </p>
            <Swiper
              effect="cards"
              grabCursor
              initialSlide={Math.floor(certImages.length / 2)}
              modules={[EffectCards]}
              className="max-w-[320px] md:max-w-[360px] mx-auto"
              onSlideChange={(swiper) =>
                setActiveCert(certImages[swiper.activeIndex].name)
              }
              onInit={(swiper) =>
                setActiveCert(certImages[swiper.activeIndex].name)
              }
            >
              {certImages.map((cert, i) => (
                <SwiperSlide
                  key={i}
                  className="rounded-lg cursor-pointer flex items-center justify-center bg-transparent"
                  onClick={() => setPreview(cert)}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    src={cert.src}
                    alt={cert.name}
                    className="w-full h-[260px] object-cover object-center rounded-xl shadow-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoPreview && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className="absolute top-3 right-3 text-white text-3xl hover:rotate-90 transition-transform"
                onClick={() => setVideoPreview(null)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <p className="text-lg font-bold text-white mb-4 text-center">
                {videoPreview.title}
              </p>
              <div className="mb-3 flex justify-center items-center gap-2">
                <label className="text-white text-sm">视频高度:</label>
                <input
                  type="text"
                  value={videoHeight.replace("px", "")}
                  onChange={handleHeightChange}
                  className="p-1 rounded text-black w-24 text-center text-sm"
                />
                <span className="text-white text-sm">px</span>
              </div>
              <div
                className="w-full mx-auto rounded-xl overflow-hidden shadow-2xl bg-black relative"
                style={{ height: videoHeight, maxHeight: "90vh" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videoPreview.id + "?autoplay=1"}
                  title={videoPreview.title}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  style={{ border: "none" }}
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className="absolute top-3 right-3 text-white text-3xl hover:rotate-90 transition-transform"
                onClick={() => setPreview(null)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <p className="text-lg font-bold text-white mb-4 text-center">
                Images / <span className="text-pink-400">{preview.name}</span>
              </p>
              <img
                src={preview.src}
                alt={preview.name}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default About;
