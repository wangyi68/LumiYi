import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import Confetti from "react-confetti";

function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success", "error", "warning"
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusType("warning");
      setStatusMessage("⚠️ Please fill in all fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatusType("warning");
      setStatusMessage("⚠️ Please enter a valid email.");
      return;
    }

    setLoading(true);
    emailjs
      .send(
        "service_opv9r6k",
        "template_6217d3a",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "wOb9bCouhw_UvDs9U"
      )
      .then(
        () => {
          setStatusType("success");
          setStatusMessage("✅ Thank you! Your message has been sent.");
          setFormData({ name: "", email: "", message: "" });
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 4000);
        },
        (error) => {
          console.error(error);
          setStatusType("error");
          setStatusMessage("❌ Failed to send. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  // Variants cho form + inputs
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        staggerChildren: 0.2, // từng input xuất hiện cách nhau 0.2s
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="w-full pb-16 relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Confetti */}
      {showConfetti && <Confetti numberOfPieces={300} gravity={0.25} />}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 flex text-3xl gap-3 font-bold items-center justify-center"
      >
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[36px] w-2 rounded"></div>
        <h2 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          📬 Contact Me
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-neutral-600 font-normal mb-6 text-center max-w-xl mx-auto"
      >
        Got a question, idea, or just want to say hi? Fill out the form below
        and I’ll get back to you directly in my inbox! 🚀
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-slate-200 max-w-2xl mx-auto space-y-6"
      >
        <motion.div variants={fieldVariants}>
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none transition"
          />
        </motion.div>

        <motion.div variants={fieldVariants}>
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none transition"
          />
        </motion.div>

        <motion.div variants={fieldVariants}>
          <label className="block font-semibold mb-2">Message</label>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none resize-none transition"
          />
        </motion.div>

        {/* Status Message */}
        <AnimatePresence>
          {statusMessage && (
            <motion.p
              key={statusMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`text-center font-medium text-lg ${
                statusType === "success"
                  ? "text-green-500"
                  : statusType === "error"
                  ? "text-red-500"
                  : "text-yellow-500"
              }`}
            >
              {statusMessage}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: !loading ? 1.05 : 1 }}
          whileTap={{ scale: !loading ? 0.95 : 1 }}
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl font-bold shadow-lg transition text-lg flex items-center justify-center gap-2
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-2xl"
            }`}
        >
          {loading ? (
            <motion.div
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
            />
          ) : (
            "Send Message"
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
