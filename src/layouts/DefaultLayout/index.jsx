import PropTypes from "prop-types";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import background from "../../assets/imgs/background.gif";

function DefaultLayout({ children }) {
  return (
    <div
      className="min-h-dvh overflow-hidden relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // giữ nền cố định khi scroll
        transition: "background-image 0.8s ease-in-out", // mượt khi đổi ảnh
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Nội dung */}
      <div className="relative z-10 max-w-6xl mx-auto md:p-5 animate-fadeIn">
        <Header />
        <Navbar />
        <div className="flex p-5 md:rounded-xl bg-white/40 shadow-sm md:mt-3">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
