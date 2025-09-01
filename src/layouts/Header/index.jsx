import Discord from "../../api/userInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div
      className="
        p-5 md:rounded-xl shadow-lg text-neutral-800
        bg-white/40 backdrop-blur-md border border-white/30
      "
    >
      <Discord />
      <div className="flex mt-4 gap-2 text-xl">
        {/* Gmail */}
        <Tippy animation="scale" content="Gmail">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/60 backdrop-blur-sm border border-white/30 size-[38px] items-center flex justify-center hover:bg-cyan-500 hover:text-white transition"
            href="mailto:wangyiisyi20@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </Tippy>

        {/* Github */}
        <Tippy animation="scale" content="Github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/60 backdrop-blur-sm border border-white/30 size-[38px] items-center flex justify-center hover:bg-cyan-500 hover:text-white transition"
            href="https://github.com/wangyi68"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Tippy>

        {/* Discord */}
        <Tippy animation="scale" content="Discord">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/60 backdrop-blur-sm border border-white/30 size-[38px] items-center flex justify-center hover:bg-cyan-500 hover:text-white transition"
            href="https://discordredirect.discordsafe.com/users/1391995229241868459"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </Tippy>

        {/* Vercel */}
        <Tippy animation="scale" content="Vercel">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/60 backdrop-blur-sm border border-white/30 size-[38px] flex items-center justify-center hover:bg-cyan-500 transition"
            href="https://lumi-lumi-alpha.vercel.app/"
          >
            <img
              src="https://api.iconify.design/simple-icons:vercel.svg"
              alt="Vercel"
              className="w-5 h-5"
            />
          </a>
        </Tippy>

        {/* Facebook */}
        <Tippy animation="scale" content="Facebook">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/60 backdrop-blur-sm border border-white/30 size-[38px] items-center flex justify-center hover:bg-cyan-500 hover:text-white transition"
            href="https://fb.com/wangyiisyi20"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </Tippy>

        {/* Zalo */}
        <Tippy animation="scale" content="Zalo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/60 backdrop-blur-sm border border-white/30 size-[38px] flex items-center justify-center hover:bg-cyan-500 transition"
            href="https://zalo.me/84912579859"
          >
            <img
              src="https://api.iconify.design/simple-icons:zalo.svg"
              alt="Zalo"
              className="w-5 h-5"
            />
          </a>
        </Tippy>
      </div>
    </div>
  );
}

export default Header;
