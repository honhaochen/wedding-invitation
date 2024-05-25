"use client";

import styles from "@/app/_styles/Common.module.css";
import { useContext, useState, useEffect } from "react";
import { PageContext } from "@/app/_components/container";

const Intro = () => {
  const page = useContext(PageContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (page.activeIndex === 2) {
      setShow(true);
    }
  }, [page.activeIndex]);

  useEffect(() => {
    // setShow(true) after 6 seconds
    setTimeout(() => {
      setShow(true);
    }, 6000);
  }, []);

  return (
    <div className="h-[90vh] rounded-3xl border-4 border-white my-10 overflow-hidden">
      {show && (
        <div className="h-full flex flex-col p-2 items-start justify-center">
          <div className="text-lg font-bold font-display text-off-white-dark mb-4">
            Hey There
          </div>
          <div className="h-3/4 w-full flex flex-row text-center">
            <div className={`h-full w-1/2 mr-2 ${styles.slideInLeft}`}>
              <div className="w-full h-3/4 relative">
                <div
                  className="w-full h-3/4 absolute top-0"
                  style={{
                    backgroundImage: `url('/assets/groom.png')`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
              <div className="w-full flex flex-col items-end">
                <div className="text-sm font-bold font-body text-off-white-dark mb-2">
                  The Bride <span className="font-chinese">新娘</span>
                </div>
                <div className="text-sm font-body text-off-white-dark">
                  Tan Chia Qian <span className="font-chinese">陳嘉倩</span>
                </div>
              </div>
            </div>
            <div className={`h-full w-1/2 ml-2"  ${styles.slideInRight}`}>
              <div className="w-full flex flex-col items-start">
                <div className="text-sm font-bold font-body text-off-white-dark mb-2">
                  The Groom <span className="font-chinese">新郎</span>
                </div>
                <div className="text-sm font-body text-off-white-dark">
                  Hon Hao Chen <span className="font-chinese">洪浩程</span>
                </div>
              </div>
              <div className="w-full h-3/4 relative">
                <div
                  className="w-full h-3/4 absolute bottom-0"
                  style={{
                    backgroundImage: `url('/assets/bride.png')`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className={`text-sm font-bold font-display text-off-white-dark mt-2 ${styles.fadeOut}`}
          >
            Our journey together has been filled with laughter, adventure, and
            unwavering support.
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
