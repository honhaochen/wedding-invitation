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
        <div className="flex flex-col flex-wrap items-center">
          <div
            className={`w-[60vw] h-[50vh] ${styles.slideIn}`}
            style={{
              backgroundImage: `url('/assets/story.jpg')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className={`w-[40vw] flex flex-col justify-center items-center py-8 ${styles.fadeOut}`}
          >
            <div className="text-off-white-dark mb-1 font-chinese">
              天缘巧合结连理
              <br />
              百年好合永相伴
              <br />
              修身齐家谐天下
              <br />
              让我爱你到晚霞
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;
