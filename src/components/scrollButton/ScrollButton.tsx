import { useState, useEffect } from "react";
import "./scrollButton.css";

const ScrollButton: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const innerHeight = window.innerHeight;

      setShowTop(scrollY > 200); // show top button after 200px scroll
      setShowBottom(scrollY + innerHeight < scrollHeight - 200); // show bottom button if not at bottom
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="scroll-buttons">
      {showTop && (
        <button className="scroll-btn top" onClick={scrollToTop}>
          ⬆ Top
        </button>
      )}
      {showBottom && (
        <button className="scroll-btn bottom" onClick={scrollToBottom}>
          ⬇ Bottom
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
