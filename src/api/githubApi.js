import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faStar, faBook, faFile } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faJs, faPython, faJava, faPhp, faSwift, faCss3 } from "@fortawesome/free-brands-svg-icons";

// 👇 khai báo ngoài component để tránh warning
const blacklist = [];

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // lấy repo chính (profile repo)
        const userRepoRes = await fetch("https://api.github.com/repos/wangyi68/wangyi68");
        const userRepo = await userRepoRes.json();

        // lấy toàn bộ repos public
        const reposRes = await fetch("https://api.github.com/users/wangyi68/repos");
        const repos = await reposRes.json();

        // gộp repo chính + repos khác và lọc blacklist
        const allRepos = [userRepo, ...repos].filter(
          (repo) => repo && !blacklist.includes(repo.name)
        );

        setProjects(allRepos);
      } catch (err) {
        console.error("Lỗi khi fetch repos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []); // 👈 không còn warning nữa

  const langIcon = {
    JavaScript: <FontAwesomeIcon icon={faJs} />,
    HTML: <FontAwesomeIcon icon={faHtml5} />,
    Python: <FontAwesomeIcon icon={faPython} />,
    Java: <FontAwesomeIcon icon={faJava} />,
    PHP: <FontAwesomeIcon icon={faPhp} />,
    Swift: <FontAwesomeIcon icon={faSwift} />,
    CSS: <FontAwesomeIcon icon={faCss3} />,
  };

  if (loading) {
    return (
      <>
        <div className="bg-slate-300 animate-pulse w-full h-[120px] rounded-xl"></div>
        <div className="bg-slate-300 animate-pulse w-full h-[120px] rounded-xl"></div>
        <div className="bg-slate-300 animate-pulse w-full h-[120px] rounded-xl"></div>
      </>
    );
  }

  return (
    <>
      {projects.map((project) => (
        <Link to={`/projects/${project.name}`} key={project.id || project.name}>
          <div className="p-6 rounded-xl bg-slate-100 h-full hover:shadow-md transition">
            <div className="flex gap-2 items-center text-cyan-600 mb-2">
              <FontAwesomeIcon icon={faBook} />
              <p className="font-semibold">{project.name}</p>
            </div>
            <p className="text-sm truncate w-full overflow-hidden">
              描述: {project.description || "No description"}
            </p>
            <div className="flex gap-3 text-sm mt-2">
              {project.language && (
                <p>
                  {langIcon[project.language] || <FontAwesomeIcon icon={faFile} />}{" "}
                  {project.language}
                </p>
              )}
              <p>
                <FontAwesomeIcon icon={faCodeFork} /> {project.forks_count}
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} /> {project.stargazers_count}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default GitHubProjects;
