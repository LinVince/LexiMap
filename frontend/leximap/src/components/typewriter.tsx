import React, { useState, useEffect } from "react";

interface Props {
  text: string;
  delay: number;
}

const Typewriter = ({ text, delay }: Props) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  //Reset the value when text changes
  useEffect(() => {
    setCurrentIndex(0);
    setCurrentText("");
  }, [text]);

  return (
    // if text is json -> detect \n as a newline
    <div style={{ whiteSpace: "pre-line", verticalAlign: "bottom" }}>
      {currentText}
    </div>
  );
};

export default Typewriter;
