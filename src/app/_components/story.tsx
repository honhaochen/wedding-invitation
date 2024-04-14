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
        <div className="h-full flex flex-col">
          <div
            className={`h-[45vh] flex flex-row items-center ${styles.fadeOut}`}
          >
            <div
              className="w-[60vw] h-full"
              style={{
                backgroundImage: `url('/assets/story.jpg')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className={`items-center justify-center text-center mx-4 rounded-2xl w-[40vw]`}
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
          <div className="h-[45vh] flex flex-row">
            <div
              className={`w-[50vw] h-full mt-8 ${styles.slideInLeft}`}
              style={{
                backgroundImage: `url('/assets/story2.jpg')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className={`w-[50vw] h-full mb-8 ${styles.slideInRight}`}
              style={{
                backgroundImage: `url('/assets/story3.jpg')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;
