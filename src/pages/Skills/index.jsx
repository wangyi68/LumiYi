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

    // 高亮匹配文字
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
        className="p-5 bg-white border border-slate-200 rounded-2xl shadow hover:shadow-lg transition-all duration-300 relative group"
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

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 transform -translate-x-1/2 -top-10 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none z-50 opacity-0 group-hover:opacity-100"
        >
          {this.description}
        </motion.div>
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
    new Skill("HTML", "网页的核心构建块，定义结构和语义内容。", htmlIcon, 4),
    new Skill("CSS", "用于设计现代响应式美观界面的样式语言。", cssIcon, 4),
    new Skill("JavaScript", "实现动态、交互式网页体验的多用途语言。", javascriptIcon, 3),
    new Skill("TypeScript", "JavaScript的超集，提供静态类型，提高可维护性。", typescriptIcon, 3),
    new Skill("Python", "适合AI、机器学习、数据科学和后端开发的高级语言。", pythonIcon, 3),
    new Skill("MongoDB", "用于可扩展性和灵活性的NoSQL数据库，支持JSON文档。", mongodbIcon, 3),
    new Skill("PostgreSQL", "高级开源SQL数据库，可靠性和性能强大。", postgresqlIcon, 3),
    new Skill("ExpressJS", "轻量级Node.js框架，用于API和服务器端应用。", expressIcon, 3),
    new Skill("ReactJS", "用于构建快速、基于组件的用户界面的流行JS库。", reactIcon, 4),
    new Skill("Next.js", "支持SSR和全栈应用的React框架，性能优化。", nextjsIcon, 3),
    new Skill("Tailwind CSS", "用于快速UI开发的实用CSS框架。", tailwindIcon, 4),
    new Skill("Node.js", "用于可扩展事件驱动web应用的服务器端运行环境。", nodejsIcon, 3),
    new Skill("Docker", "容器化工具，确保部署环境一致。", dockerIcon, 3),
    new Skill("Visual Studio Code", "轻量强大的代码编辑器，支持丰富插件。", vscodeIcon, 5),
    new Skill("GitHub", "开发者的版本控制和协作平台。", githubIcon, 4),
    new Skill("Notepad++", "简单、快速、轻量的文本编辑器。", notepadppIcon, 4),
  ];

  const categories = [
    { icon: "💻", name: "编程语言", contents: skillList.slice(0, 5) },
    { icon: "🎨", name: "框架与库", contents: skillList.slice(5, 11) },
    { icon: "🛠️", name: "工具与平台", contents: skillList.slice(11, 16) },
  ];

  // 根据搜索过滤技能
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
        <h2>💡 我的技能</h2>
      </div>
      <p className="text-neutral-600 font-normal mb-6">
        展示我用于构建项目的技术和工具。🚀
      </p>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 搜索技能..."
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
                        未找到技能 🔎
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
