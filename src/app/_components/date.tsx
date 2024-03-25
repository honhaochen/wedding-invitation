import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateView = () => {
  const weddingDate = new Date(2024, 9, 27);

  return (
    <div className="h-[90vh] flex flex-col items-center rounded-3xl border-4 border-white my-10 justify-center">
      <div className="text-4xl mb-4 font-bold font-chinese text-off-white-dark">
        日期
      </div>
      <div className="text-4xl mb-4 font-bold font-display text-off-white-dark">
        Mark the Time
      </div>
      <div className="text-lg font-chinese text-off-white-dark">
        2024 年 10 月 27 日 (27-10-2024)
      </div>
      <div className="text-lg font-chinese text-off-white-dark">
        7点整 (7pm)
      </div>
      <div className="mt-8 w-[70vw] justify-center flex">
        <Calendar defaultValue={weddingDate} />
      </div>
    </div>
  );
};

export default DateView;
