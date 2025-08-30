import React, { useState, useEffect } from "react";
import { pinterest } from "../../config/pinterest";
import { Skeleton } from "../../components/ui/Skeleton";
import { motion, AnimatePresence } from "framer-motion";

export const Heading = ({ name, emoji, sId }) => (
  <h2 id={sId} className="text-4xl font-bold">
    {emoji} {name}
  </h2>
);

// Parent grid animation (stagger)
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // delay giữa các card
      delayChildren: 0.15,   // chờ trước khi bắt đầu
    },
  },
};

// Card item animation
const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

// Modal animation
const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
  exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } },
};

// Modal image
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

function PinterestPage() {
  const [modalData, setModalData] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    document.title = "Pinterest";
  }, []);

  const handleImageLoad = (rank) => {
    setLoadedImages((prev) => ({ ...prev, [rank]: true }));
  };

  return (
    <div className="p-4">
      <Heading name="Pinterest" emoji="🌟" sId="pinterest" />
      <p className="mt-4 text-neutral-400">
        Pinterest <span className="underline underline-offset-2">Image</span>{" "}
        Preview <span className="text-neutral-500">那些事...</span>
      </p>

      {/* Grid với stagger animation */}
      <motion.div
        className="fade-in-left mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[896px]"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {pinterest.map(({ rank, name, description, image, url }) => (
          <motion.a
            key={rank}
            href="#!"
            variants={cardVariants}
            onClick={(e) => {
              e.preventDefault();
              setModalData({ image, name, description, url });
            }}
            className="group relative flex h-36 overflow-hidden rounded-lg px-4 duration-300 
                       before:absolute before:inset-0 before:z-10 before:bg-black 
                       before:opacity-0 before:transition before:duration-150 
                       hover:h-48 hover:before:opacity-50 sm:px-8"
          >
            {!loadedImages[rank] && (
              <Skeleton src={image} className="absolute inset-0" />
            )}
            <img
              src={image}
              alt={name}
              onLoad={() => handleImageLoad(rank)}
              className={`absolute left-0 top-0 h-full w-full rounded-lg bg-neutral-900 object-cover 
                         duration-150 group-hover:scale-[1.02] ${
                           loadedImages[rank] ? "opacity-100" : "opacity-0"
                         }`}
            />
            <div className="z-20 w-full self-end mb-4 scale-95 space-y-1 opacity-0 duration-300 
                            group-hover:scale-100 group-hover:opacity-100">
              <p className="text-3xl font-bold text-neutral-50">
                <span className="text-neutral-300">{rank} </span>
                {name}
              </p>
              <p className="text-base text-neutral-300 md:text-lg"># {description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Modal Preview */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center 
                       bg-black/70 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setModalData(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-white-100 rounded-2xl shadow-2xl 
                         p-6 flex flex-col items-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={modalData.image}
                alt={modalData.name}
                className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-lg"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
              <motion.div
                className="mt-4 text-center space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <h3 className="text-2xl font-extrabold text-neutral-800">
                  {modalData.name}
                </h3>
                <p className="text-neutral-600 text-lg">{modalData.description}</p>
                <a
                  href={modalData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 rounded-lg bg-neutral-800 px-5 py-2 
                             text-white font-medium hover:bg-neutral-700 transition"
                >
                  View More ↗
                </a>
              </motion.div>
              <button
                onClick={() => setModalData(null)}
                className="absolute top-4 right-4 text-3xl font-bold text-neutral-500 
                           hover:text-neutral-800 transition"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Skeleton khi load
const PinterestPageSkeleton = () => {
  return (
    <div className="fade-in-left mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[896px]">
      {pinterest.map((item, i) => (
        <div key={i} className="h-36 rounded-lg overflow-hidden">
          <Skeleton src={item.image} className="h-full w-full" />
        </div>
      ))}
    </div>
  );
};

// Lazy load
const LazyPinterestPage = React.lazy(() =>
  Promise.resolve({ default: PinterestPage })
);

export default function PinterestPageWrapper() {
  return (
    <React.Suspense fallback={<PinterestPageSkeleton />}>
      <LazyPinterestPage />
    </React.Suspense>
  );
}
