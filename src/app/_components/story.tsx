"use client";

import styles from "@/app/_styles/Story.module.css";
import { useContext, useState, useEffect } from "react";
import { PageContext } from "@/app/_components/container";

const words = [
  "天",
  "缘",
  "巧",
  "合",
  "结",
  "连",
  "理",
  "br",
  "百",
  "年",
  "好",
  "合",
  "永",
  "相",
  "伴",
  "br",
  "修",
  "身",
  "齐",
  "家",
  "谐",
  "天",
  "下",
  "br",
  "让",
  "我",
  "爱",
  "你",
  "到",
  "晚",
  "霞",
];

// a word component that has opacity 0 and then becomes 1 after a delay
const Word = ({ word, delay }: { word: string; delay: number }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, delay);
  }, [show]);

  return (
    <span
      className={`${
        show ? "opacity-100" : "opacity-0"
      } text-off-white-dark font-chinese`}
    >
      {word}
    </span>
  );
};

const Story = () => {
  const activeIndex = useContext(PageContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (activeIndex === 1) {
      setShow(true);
    }
  }, [activeIndex]);

  return (
    <div className="h-[90vh] rounded-3xl border-4 border-white my-10 overflow-hidden">
      {show && (
        <div
          className={`h-full bg-cover bg-center flex justify-start items-start ${styles.slideIn}`}
          style={{ backgroundImage: `url('/assets/story.jpg')` }}
        >
          <div
            className={`items-center justify-center text-center p-4 bg-white bg-opacity-30 rounded-2xl mt-10 ml-10`}
          >
            {words.map((word, index) => {
              if (word === "br") {
                return <br key={index} />;
              } else {
                return <Word word={word} delay={250 * (index + 1)} />;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;
