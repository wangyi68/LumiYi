import React, { useState, useEffect, memo } from "react";
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

// ================== SKILL CARD ==================
const SkillCard = memo(function SkillCard({ skill, searchQuery }) {
  const filledStars = Array(skill.level).fill(solidStar);
  const emptyStars = Array(5 - skill.level).fill(regularStar);

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
      transition={{ duration: 0.25 }}
      className="p-5 bg-white/50 backdrop-blur-md border border-slate-200/40 rounded-2xl shadow-lg hover:shadow-cyan-200/50 hover:-translate-y-1 transition-all duration-300 relative group"
    >
      <div className="flex items-start gap-4">
        <div className="size-14 min-w-14 rounded-xl overflow-hidden bg-slate-50/70 flex items-center justify-center shadow-inner">
          <Img className="size-10" src={skill.img} alt={skill.name} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-neutral-800">
            {highlightText(skill.name, searchQuery)}
          </h3>
          <p className="text-sm text-neutral-600">
            {highlightText(skill.description, searchQuery)}
          </p>

          {/* Stars */}
          <div className="flex items-center gap-1 mt-2 text-yellow-500">
            {[...filledStars, ...emptyStars].map((icon, i) => (
              <FontAwesomeIcon key={i} icon={icon} />
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200/60 rounded-full h-2 mt-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-2 rounded-full"
              style={{ width: `${(skill.level / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 bg-black/70 text-white text-xs rounded px-2 py-1 pointer-events-none opacity-0 group-hover:opacity-100 transition">
        {skill.description}
      </div>
    </motion.div>
  );
});

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

  const skillList = [
    { name: "HTML", description: "网页的核心构建块，定义结构和语义内容。", img: htmlIcon, level: 4 },
    { name: "CSS", description: "用于设计现代响应式美观界面的样式语言。", img: cssIcon, level: 4 },
    { name: "JavaScript", description: "实现动态、交互式网页体验的多用途语言。", img: javascriptIcon, level: 3 },
    { name: "TypeScript", description: "JavaScript的超集，提供静态类型，提高可维护性。", img: typescriptIcon, level: 3 },
    { name: "Python", description: "适合AI、机器学习、数据科学和后端开发的高级语言。", img: pythonIcon, level: 3 },
    { name: "MongoDB", description: "用于可扩展性和灵活性的NoSQL数据库，支持JSON文档。", img: mongodbIcon, level: 3 },
    { name: "PostgreSQL", description: "高级开源SQL数据库，可靠性和性能强大。", img: postgresqlIcon, level: 3 },
    { name: "ExpressJS", description: "轻量级Node.js框架，用于API和服务器端应用。", img: expressIcon, level: 3 },
    { name: "ReactJS", description: "用于构建快速、基于组件的用户界面的流行JS库。", img: reactIcon, level: 4 },
    { name: "Next.js", description: "支持SSR和全栈应用的React框架，性能优化。", img: nextjsIcon, level: 3 },
    { name: "Tailwind CSS", description: "用于快速UI开发的实用CSS框架。", img: tailwindIcon, level: 4 },
    { name: "Node.js", description: "用于可扩展事件驱动web应用的服务器端运行环境。", img: nodejsIcon, level: 3 },
    { name: "Docker", description: "容器化工具，确保部署环境一致。", img: dockerIcon, level: 3 },
    { name: "Visual Studio Code", description: "轻量强大的代码编辑器，支持丰富插件。", img: vscodeIcon, level: 5 },
    { name: "GitHub", description: "开发者的版本控制和协作平台。", img: githubIcon, level: 4 },
    { name: "Notepad++", description: "简单、快速、轻量的文本编辑器。", img: notepadppIcon, level: 4 },
  ];

  const categories = [
    { icon: "💻", name: "编程语言", contents: skillList.slice(0, 5) },
    { icon: "🎨", name: "框架与库", contents: skillList.slice(5, 11) },
    { icon: "🛠️", name: "工具与平台", contents: skillList.slice(11, 16) },
  ];

  const filteredCategories = categories.map((category) => ({
    ...category,
    contents: category.contents.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="font-bold text-neutral-800 w-full pb-10">
      {/* Header */}
      <div className="mb-6 flex text-3xl gap-3 font-bold items-center">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[36px] w-2 rounded"></div>
        <h2>💡 我的技能</h2>
      </div>
      <p className="text-neutral-700 font-normal mb-6">
        展示我用于构建项目的技术和工具。🚀
      </p>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 搜索技能..."
          className="w-full md:w-1/2 px-4 py-2 rounded-xl border border-slate-300/40 bg-white/50 backdrop-blur-md shadow focus:ring-2 focus:ring-cyan-500 focus:outline-none"
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
              className="border border-slate-200/40 bg-white/40 backdrop-blur-md rounded-xl overflow-hidden shadow hover:shadow-cyan-200/50 transition"
            >
              {/* Category Header */}
              <div
                className="cursor-pointer flex justify-between items-center py-4 px-5 hover:bg-white/40 transition-colors"
                onClick={() => toggleCategory(index)}
              >
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span>{category.icon}</span> {category.name}
                </h2>
                <span className="text-cyan-600 text-2xl font-bold">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* Category Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="grid md:grid-cols-2 gap-4 p-5 overflow-hidden"
                  >
                    {category.contents.length > 0 ? (
                      category.contents.map((skill, idx) => (
                        <SkillCard key={idx} skill={skill} searchQuery={searchQuery} />
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
