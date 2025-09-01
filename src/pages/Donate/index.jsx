// DonatePage.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

// ---------------- Mock Data ----------------
const DONATION_DATA = {
  banks: [
    {
      id: 1,
      name: "MB Bank",
      accountNumber: "123456789",
      accountHolder: "WangYi",
      qrCode:
        "https://icolor.vn/wp-content/uploads/2024/08/mbbank-logo-5.png",
    },
    {
      id: 2,
      name: "Vietcombank",
      accountNumber: "987654321",
      accountHolder: "WangYi",
      qrCode:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAoNHWGA22SD3YcNL6vUAgq-4oqeJMo6swuw&s",
    },
  ],
};

// ---------------- SafeImage ----------------
const FALLBACK_IMAGE = "https://via.placeholder.com/240x240?text=无图片";
function SafeImage({ src, alt, className, ...props }) {
  const [imageSrc, setImageSrc] = useState(src || FALLBACK_IMAGE);

  const handleImageError = () => {
    if (imageSrc !== FALLBACK_IMAGE) setImageSrc(FALLBACK_IMAGE);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={handleImageError}
      loading="lazy"
      {...props}
    />
  );
}

// ---------------- useToast Hook ----------------
function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, duration }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
}

// ---------------- Toast ----------------
function Toast({ id, message, duration, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      aria-live="polite"
      className="bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-xl text-sm font-medium flex items-center"
    >
      {message}
      <button
        onClick={() => onClose(id)}
        className="ml-4 text-white/80 hover:text-white font-bold"
        aria-label="Close toast notification"
      >
        ✕
      </button>
    </motion.div>
  );
}

// ---------------- SkeletonCard ----------------
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 min-w-[240px] w-full animate-pulse">
      <div className="h-36 bg-slate-200 rounded-xl mb-3"></div>
      <div className="h-5 bg-slate-200 rounded w-4/5 mb-2"></div>
      <div className="h-4 bg-slate-200 rounded w-3/5"></div>
    </div>
  );
}

// ---------------- BankCard ----------------
function BankCard({ data, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(data);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-lg p-4 min-w-[240px] w-full text-left hover:ring-2 ring-cyan-600 transition cursor-pointer"
      onClick={() => onClick(data)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View ${data.name} bank details`}
    >
      <SafeImage
        src={data.qrCode}
        alt={`${data.name} QR Code`}
        className="h-36 w-full object-cover rounded-xl mb-3 shadow-sm"
      />
      <p className="font-semibold text-base text-slate-800">{data.name}</p>
      <p className="text-sm text-slate-600 mt-2">
        Account: {data.accountNumber}
      </p>
      <p className="text-sm text-slate-600 mt-1">
        Holder: {data.accountHolder}
      </p>
    </motion.div>
  );
}

// ---------------- BankPreview (with focus trap) ----------------
function BankPreview({ bank, onClose, addToast }) {
  const modalRef = useRef(null);

  // Trap focus inside modal
  useEffect(() => {
    const focusable = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusable[0];
    const lastEl = focusable[focusable.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstEl?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleCopyAccountNumber = () => {
    navigator.clipboard
      .writeText(bank.accountNumber)
      .then(() => addToast(`Copied ${bank.name} account number!`))
      .catch(() => addToast("Failed to copy account number."));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label={`${bank.name} bank details preview`}
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 border border-slate-200 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 text-lg font-bold"
          aria-label="Close bank details preview"
        >
          ✕
        </button>
        <h4 className="text-2xl font-semibold text-slate-800 mb-6">
          {bank.name}
        </h4>
        <SafeImage
          src={bank.qrCode}
          alt={`${bank.name} QR Code`}
          className="h-80 w-full object-contain rounded-xl mb-6 border border-slate-100"
        />
        <div className="space-y-3">
          <p className="text-lg text-slate-700">
            <strong>Account Number:</strong> {bank.accountNumber}
          </p>
          <p className="text-lg text-slate-700">
            <strong>Account Holder:</strong> {bank.accountHolder}
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopyAccountNumber}
          className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:from-cyan-600 hover:to-blue-600 w-full"
          aria-label={`Copy ${bank.name} account number`}
        >
          Copy Account Number
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// ---------------- DonatePage ----------------
function DonatePage() {
  const [loading, setLoading] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const { toasts, addToast, removeToast } = useToast();
  const abortControllerRef = useRef(null);

  useEffect(() => {
    document.title = "Donate Me!";

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);

    abortControllerRef.current = new AbortController();
    return () => {
      clearTimeout(timer);
      abortControllerRef.current?.abort();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  const handleBankClick = (bank) => {
    setSelectedBank(bank);
    addToast(`Viewing ${bank.name} details`);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-cyan-50 p-8 rounded-2xl shadow-md mt-10 max-w-7xl mx-auto">
      <h3 className="mb-8 text-3xl font-bold text-cyan-600 tracking-tight">
        Support Our Work
      </h3>

      {/* Bank Details */}
      <div>
        <h4 className="text-2xl font-semibold text-slate-800 mb-6">Bank Details</h4>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {loading
            ? Array.from({ length: 2 }).map((_, i) => <SkeletonCard key={i} />)
            : DONATION_DATA.banks.map((bank) => (
                <motion.div key={`bank-${bank.id}`} variants={cardVariants}>
                  <BankCard data={bank} onClick={handleBankClick} />
                </motion.div>
              ))}
        </motion.div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedBank && (
          <BankPreview
            bank={selectedBank}
            onClose={() => setSelectedBank(null)}
            addToast={addToast}
          />
        )}
      </AnimatePresence>

      {/* Toasts Queue */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
        <AnimatePresence>
          {toasts.map((t) => (
            <Toast key={t.id} {...t} onClose={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DonatePage;
