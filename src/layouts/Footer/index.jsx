import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import { trackVisitor, getTotalViews } from "../../api/visitorTracker";

function Footer() {
  const [ip, setIp] = useState("Loading...");
  const [views, setViews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIPAndViews = async (retries = 3) => {
      try {
        // Fetch IP
        const ipRes = await fetch("https://api.ipify.org?format=json");
        if (!ipRes.ok) throw new Error("Failed to fetch IP");

        const ipData = await ipRes.json();
        setIp(ipData.ip || "Unknown");

        // Check if visitor is new or returning
        const visited = localStorage.getItem("visited") === "true";
        let total;

        if (!visited) {
          total = await trackVisitor(); // New visitor
          localStorage.setItem("visited", "true");
        } else {
          total = await getTotalViews(); // Returning visitor
        }

        setViews(total);
        setError(null);
      } catch (err) {
        console.error("Error:", err);
        if (retries > 0) {
          setTimeout(() => fetchIPAndViews(retries - 1), 1000);
        } else {
          setIp("Unavailable");
          setViews(0);
          setError("Failed to load data");
        }
      }
    };

    fetchIPAndViews();
  }, []);

  return (
    <footer
      className="
        flex p-5 md:rounded-xl shadow-lg md:mt-3
        bg-white/40 backdrop-blur-md border border-white/20
        transition-all duration-500 animate-fadeIn
      "
    >
      <div className="sm:flex text-center justify-between text-sm w-full text-neutral-800 font-medium">
        {/* Left Section */}
        <p>
          2025 © WangYi • Made with{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:underline"
          >
            React
          </a>{" "}
          x{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:underline"
          >
            Tailwind
          </a>
        </p>

        {/* Right Section */}
        <p className="flex gap-3 items-center justify-center mt-2 sm:mt-0">
          <Tippy animation="scale" content="我明白了">
            <a
              className="text-cyan-600 hover:underline"
              href="https://omar11.sa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Omar Abdulaziz <span className="text-neutral-800">•</span> ✨
            </a>
          </Tippy>

          {/* IP */}
          <span className="text-neutral-600 transition-opacity duration-500">
            🌐 {ip}
          </span>

          {/* Views */}
          <span className="text-neutral-600 transition-opacity duration-500">
            👁 {views !== null ? views : "…"} View{views !== 1 ? "s" : ""}
          </span>

          {/* Error */}
          {error && <span className="text-red-500">{error}</span>}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
