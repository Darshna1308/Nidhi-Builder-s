import "./ScrollProgress.css";
import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollTop / height) * 100;

      setProgress(percent);
    };

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="progressBar">
      <div
        className="progressFill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ScrollProgress;