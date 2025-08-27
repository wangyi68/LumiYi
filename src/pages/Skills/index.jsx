import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../../components/img";

// Icons
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import javascriptIcon from "../../assets/icons/javascript.svg";
import typescriptIcon from "../../assets/icons/typescript.svg";
import pythonIcon from "../../assets/icons/python.svg";
import tailwindIcon from "../../assets/icons/tailwind.svg";
import reactIcon from "../../assets/icons/react.svg";
import nodejsIcon from "../../assets/icons/nodejs-dark.svg";
import mongodbIcon from "../../assets/icons/mongodb.svg";
import expressIcon from "../../assets/icons/express.svg";
import nextjsIcon from "../../assets/icons/nextjs.svg";
import postgresqlIcon from "../../assets/icons/postgresql.svg";
import dockerIcon from "../../assets/icons/docker.svg";
import vscodeIcon from "../../assets/icons/vscode.svg";
import githubIcon from "../../assets/icons/github.svg";
import notepadppIcon from "../../assets/icons/notepadplusplus.svg";

// ================= CLASS SKILL ==================
class Skill {
  constructor(name, description, img, level) {
    this.name = name;
    this.description = description;
    this.img = img;
    this.level = level;
  }

  render(searchQuery) {
    const filledStars = Array(this.level).fill(solidStar);
    const emptyStars = Array(5 - this.level).fill(regularStar);

    // Highlight matched text
    const highlightText = (text, query) => {
      if (!query) return text;
      const regex = new RegExp(`(${query})`, "gi");
      return text.split(regex).map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={i} className="text-cyan-600 font-bold">
            {part}
          </span>
        ) : (
          part
        )
      );
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="p-5 bg-white border border-slate-200 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <div className="size-14 min-w-14 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center shadow-inner">
            <Img className="size-10" src={this.img} alt={this.name} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-neutral-800">
              {highlightText(this.name, searchQuery)}
            </h3>
            <p className="text-sm text-neutral-600">{this.description}</p>
            <div className="flex items-center gap-1 mt-2 text-yellow-500">
              {[...filledStars, ...emptyStars].map((icon, i) => (
                <FontAwesomeIcon key={i} icon={icon} />
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(this.level / 5) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

// ================== MAIN ==================
function Skills() {
  useEffect(() => {
    document.title = "Skills";
  }, []);

  const [openCategory, setOpenCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  // ================== SKILL LIST ==================
  const skillList = [
    new Skill("HTML", "The core building block of web pages, defining structure and semantic content.", htmlIcon, 4),
    new Skill("CSS", "The styling language used to design modern, responsive, and beautiful UIs.", cssIcon, 4),
    new Skill("JavaScript", "A versatile language enabling dynamic, interactive web experiences.", javascriptIcon, 3),
    new Skill("TypeScript", "Superset of JS with static typing, improving scalability and maintainability.", typescriptIcon, 3),
    new Skill("Python", "A high-level language great for AI, ML, data science, and backend systems.", pythonIcon, 3),
    new Skill("MongoDB", "A NoSQL database designed for scalability and flexibility with JSON-like docs.", mongodbIcon, 3),
    new Skill("PostgreSQL", "Advanced open-source SQL database with strong reliability and performance.", postgresqlIcon, 3),
    new Skill("ExpressJS", "A lightweight Node.js web framework for APIs and server-side apps.", expressIcon, 3),
    new Skill("ReactJS", "Popular JS library for building fast, component-based UIs.", reactIcon, 4),
    new Skill("Next.js", "React framework for SSR, full-stack apps, and optimized performance.", nextjsIcon, 3),
    new Skill("Tailwind CSS", "Utility-first CSS framework for rapid UI development.", tailwindIcon, 4),
    new Skill("Node.js", "Server-side runtime for scalable and event-driven web applications.", nodejsIcon, 3),
    new Skill("Docker", "Tool for containerization, ensuring consistent environments for deployment.", dockerIcon, 3),
    new Skill("Visual Studio Code", "Lightweight and powerful code editor with rich extensions.", vscodeIcon, 5),
    new Skill("GitHub", "Version control and collaboration platform for developers.", githubIcon, 4),
    new Skill("Notepad++", "Simple, fast, and lightweight text editor for quick coding.", notepadppIcon, 4),
  ];

  const categories = [
    { icon: "💻", name: "Languages", contents: skillList.slice(0, 5) },
    { icon: "🎨", name: "Frameworks & Libraries", contents: skillList.slice(5, 11) },
    { icon: "🛠️", name: "Tools & Platforms", contents: skillList.slice(11, 16) },
  ];

  // Filter skills by search
  const filteredCategories = categories.map((category) => ({
    ...category,
    contents: category.contents.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="font-bold text-neutral-800 w-full pb-10">
      {/* Header */}
      <div className="mb-6 flex text-3xl gap-3 font-bold items-center">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[36px] w-2 rounded"></div>
        <h2>💡 My Skills</h2>
      </div>
      <p className="text-neutral-600 font-normal mb-6">
        A showcase of the technologies and tools I use to build projects. 🚀
      </p>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search skills..."
          className="w-full md:w-1/2 px-4 py-2 rounded-xl border border-slate-300 shadow-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {filteredCategories.map((category, index) => {
          const isOpen = searchQuery ? true : openCategory === index;

          return (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Category Header */}
              <div
                className="cursor-pointer flex justify-between items-center py-4 px-5 bg-gradient-to-r from-slate-50 to-white hover:from-cyan-50 hover:to-blue-50 transition-colors"
                onClick={() => toggleCategory(index)}
              >
                <motion.h2
                  className="text-xl font-semibold flex items-center gap-2"
                  animate={isOpen ? { rotate: [0, -5, 5, -5, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <span>{category.icon}</span> {category.name}
                </motion.h2>
                <span className="text-cyan-600 text-2xl font-bold">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* Category Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-4 p-5 bg-white"
                  >
                    {category.contents.length > 0 ? (
                      category.contents.map((skill, idx) => (
                        <div key={idx}>{skill.render(searchQuery)}</div>
                      ))
                    ) : (
                      <p className="text-neutral-500 col-span-2 text-center">
                        No skills found 🔎
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
