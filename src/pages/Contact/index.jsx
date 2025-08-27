import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
          setTimeout(() => setShowConfetti(false), 3000);
        },
        (error) => {
          console.error(error);
          setStatusType("error");
          setStatusMessage("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="w-full pb-10 relative">
      {/* Confetti */}
      {showConfetti && <Confetti numberOfPieces={200} gravity={0.3} />}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex text-3xl gap-3 font-bold items-center justify-center"
      >
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[36px] w-2 rounded"></div>
        <h2>📬 Contact Me</h2>
      </motion.div>

      <p className="text-neutral-600 font-normal mb-6 text-center max-w-xl mx-auto">
        Got a question, idea, or just want to say hi? Fill out the form below
        and I’ll get back to you directly in my inbox! 🚀
      </p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-3xl p-8 border border-slate-200 max-w-2xl mx-auto space-y-6"
      >
        <div>
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none transition"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none transition"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Message</label>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none resize-none transition"
          />
        </div>

        {statusMessage && (
          <p
            className={`text-center font-medium text-lg ${
              statusType === "success"
                ? "text-green-500"
                : statusType === "error"
                ? "text-red-500"
                : "text-yellow-500"
            }`}
          >
            {statusMessage}
          </p>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transition text-lg"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Contact;
