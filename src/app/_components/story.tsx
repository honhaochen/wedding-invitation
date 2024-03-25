"use client";

import styles from "@/app/_styles/Story.module.css";
import { useContext, useState, useEffect } from "react";
import { PageContext } from "@/app/_components/container";

const Story = () => {
  const activeIndex = useContext(PageContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (activeIndex === 1) {
      setShow(true);
    }
  }, [activeIndex]);

  return (
    <div className="h-[90vh] relative flex flex-col items-center justify-center rounded-3xl border-4 border-white my-10 overflow-hidden">
      {show && (
        <>
          <div
            className={`w-[50vw] h-[70vh] absolute left-4 rounded-3xl rotate-[-10deg] ${styles.slideIn}`}
            style={{
              backgroundImage: `url('/assets/story.jpg')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className={`w-[50vw] absolute right-0 flex flex-col justify-center items-center py-8 pl-16 ${styles.fadeOut}`}
          >
            <div className="relative w-[max-content] text-off-white-dark mb-1 font-chinese before:absolute before:inset-0 before:animate-typewriter1 before:bg-off-white">
              天缘巧合结连理
            </div>
            <div className="relative w-[max-content] text-off-white-dark mb-1 font-chinese before:absolute before:inset-0 before:animate-typewriter2 before:bg-off-white">
              百年好合永相伴
            </div>
            <div className="relative w-[max-content] text-off-white-dark mb-1 font-chinese before:absolute before:inset-0 before:animate-typewriter3 before:bg-off-white">
              修身齐家谐天下
            </div>
            <div className="relative w-[max-content] text-off-white-dark font-chinese before:absolute before:inset-0 before:animate-typewriter4 before:bg-off-white">
              让我爱你到晚霞
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Story;
