import { useEffect } from "react";
import { motion } from "framer-motion";
import desktop from "../../assets/imgs/desktop.png";

function Specs() {
  useEffect(() => {
    document.title = "Specs";
  }, []);

  const laptopSpecs = {
    laptopCpu: "Intel Core 2 Duo T6570 (2.10 GHz, 800 MHz)",
    laptopRam: "3GB DDR2 (667MHz)",
    laptopGpu: "Intel 4 Series Express Chipset Family",
    laptopDisplay: ".....",
    laptopOs: "Windows 10 Home 22H2",
    laptopDisk: "SSD-EEKOO-128G (128GB, 500MB/s)",
    laptopH: "Working",
  };

  const phoneSpecs = {
    phoneCpu: "MediaTek Helio G99 Ultra",
    phoneRam: "8 GB",
    phoneDisplay: "AMOLED 6.67' 120Hz",
    phoneOs: "HyperOS 2.0.1 (Android 15)",
    phoneDisk: "128 GB",
    phoneCam: "Chính 108 MP & Phụ 2 MP, 2 MP (Sau) | 20 MP (Trước)",
    phonePin: "5400 mAh, 30 W",
  };

  // Variants cho animation từng dòng
  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay mỗi dòng 0.15s
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const LaptopInfo = ({ laptopCpu, laptopRam, laptopGpu, laptopDisplay, laptopOs, laptopDisk, laptopH }) => (
    <motion.ul
      className='list-disc text-sm ml-6'
      variants={listContainer}
      initial="hidden"
      animate="show"
    >
      <motion.li variants={listItem}>CPU: {laptopCpu}</motion.li>
      <motion.li variants={listItem}>GPU: {laptopGpu}</motion.li>
      <motion.li variants={listItem}>RAM: {laptopRam}</motion.li>
      <motion.li variants={listItem}>Disk: {laptopDisk}</motion.li>
      <motion.li variants={listItem}>Display: {laptopDisplay}</motion.li>
      <motion.li variants={listItem}>OS: {laptopOs}</motion.li>
      <motion.li variants={listItem}>Status: {laptopH}</motion.li>
    </motion.ul>
  );

  const PhoneInfo = ({ phoneCpu, phoneRam, phoneDisplay, phoneOs, phoneDisk, phoneCam, phonePin }) => (
    <motion.ul
      className='list-disc text-sm ml-6'
      variants={listContainer}
      initial="hidden"
      animate="show"
    >
      <motion.li variants={listItem}>CPU: {phoneCpu}</motion.li>
      <motion.li variants={listItem}>RAM: {phoneRam}</motion.li>
      <motion.li variants={listItem}>Disk: {phoneDisk}</motion.li>
      <motion.li variants={listItem}>Display: {phoneDisplay}</motion.li>
      <motion.li variants={listItem}>OS: {phoneOs}</motion.li>
      <motion.li variants={listItem}>Camera: {phoneCam}</motion.li>
      <motion.li variants={listItem}>Pin, sạc: {phonePin}</motion.li>
    </motion.ul>
  );

  return (
    <div className='font-bold text-neutral-800 w-full pb-4'>
      {/* Title */}
      <div className='mb-3 flex text-3xl gap-2 font-bold'>
        <div className='bg-neutral-800 h-[36px] w-2'></div>
        <h2>规格 💼</h2>
      </div>

      <p>我目前用于游戏、编程、学习和日常生活的设备 💻.</p>

      {/* Grid info */}
      <div className='w-full mt-4 grid md:grid-cols-2 grid-cols-1 gap-5'>
        <div>
          <motion.div
            className='mb-4 p-2 rounded-xl bg-slate-100'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className='mb-1 text-2xl font-bold'>
              Laptop<span className='text-xl ml-2 inline-block'>(Dell Inspiron 1545)</span>
            </h4>
            <LaptopInfo {...laptopSpecs} />
          </motion.div>

          <motion.div
            className='p-2 rounded-xl bg-slate-100'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className='mb-1 text-2xl font-bold'>
              Phone<span className='text-xl ml-2 inline-block'>(Redmi Note 14 4G)</span>
            </h4>
            <PhoneInfo {...phoneSpecs} />
          </motion.div>
        </div>

        <div>
          <motion.div
            className='mb-4 p-2 rounded-xl bg-slate-100'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className='mb-1 text-2xl font-bold'>网络</h4>
            <motion.ul
              className='list-disc text-sm ml-6'
              variants={listContainer}
              initial="hidden"
              animate="show"
            >
              <motion.li variants={listItem}>网络 Viettel: 300Mbps</motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            className='p-2 rounded-xl bg-slate-100'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className='mb-1 text-2xl font-bold'>其他设备</h4>
            <motion.ul
              className='list-disc text-sm ml-6'
              variants={listContainer}
              initial="hidden"
              animate="show"
            >
              <motion.li variants={listItem}>老鼠: Dell MS116</motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Desktop image */}
<div className="flex justify-center mt-6">
  <motion.div
    className="inline-block border-dashed border-4 border-cyan-500 rounded-2xl shadow-lg"
    initial={{ opacity: 0, scale: 0.7, rotate: 8 }}
    animate={{ opacity: 1, scale: 1, rotate: -2 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
    whileHover={{ scale: 1.05, rotate: 0, boxShadow: "0px 0px 20px rgba(34,211,238,0.6)" }}
  >
    <img
      src={desktop}
      alt="desktop setup"
      className="w-[400px] max-w-[80vw] object-contain block rounded-2xl"
    />
  </motion.div>
</div>
    </div>
  );
}

export default Specs;
