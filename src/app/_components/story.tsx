"use client";

import styles from "@/app/_styles/Story.module.css";

type Props = {
  show?: boolean;
};

const Story = ({ show }: Props) => {
  return (
    <div className="h-[90vh] relative flex flex-col items-center bg-rose-950 justify-center rounded-3xl border-4 border-slate-200 my-10 overflow-hidden">
      {true && (
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
            <div className="relative w-[max-content] text-white mb-1 font-chinese before:absolute before:inset-0 before:animate-typewriter1 before:bg-rose-950">
              天缘巧合结连理
            </div>
            <div className="relative w-[max-content] text-white mb-1 font-chinese before:absolute before:inset-0 before:animate-typewriter2 before:bg-rose-950">
              百年好合永相伴
            </div>
            <div className="relative w-[max-content] text-white mb-1 font-chinese before:absolute before:inset-0 before:animate-typewriter3 before:bg-rose-950">
              修身齐家谐天下
            </div>
            <div className="relative w-[max-content] text-white font-chinese before:absolute before:inset-0 before:animate-typewriter4 before:bg-rose-950">
              让我爱你到晚霞
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Story;
