import "react-calendar/dist/Calendar.css";
import styles from "@/app/_styles/Common.module.css";
import { useContext, useState, useEffect } from "react";
import { PageContext } from "./container";

const DateView = () => {
  const page = useContext(PageContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (page.activeIndex === 3) {
      setShow(true);
    }
  }, [page.activeIndex]);

  useEffect(() => {
    // setShow(true) after 3 seconds
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <div className="h-[90vh] flex flex-col items-center rounded-3xl border-4 border-white my-10 justify-center">
      {show && (
        <div
          className={`flex flex-col items-center justify-center ${styles.fadeOut}`}
        >
          <div className="text-4xl mb-4 font-bold font-chinese text-off-white-dark">
            日期
          </div>
          <div className="text-4xl mb-4 font-bold font-display text-off-white-dark">
            Mark the Time
          </div>
          <div className="text-lg font-chinese text-off-white-dark">
            2024 年 10 月 27 日
          </div>
          <div className="text-lg font-chinese text-off-white-dark">1900</div>
          <div
            className="mt-4 w-[70vw] h-[40vh]"
            style={{
              backgroundImage: `url('/assets/calendar.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DateView;
