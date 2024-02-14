import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateView = () => {
  const weddingDate = new Date(2024, 9, 27);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center bg-rose-800 rounded-3xl border-4 border-slate-200 my-10 justify-center">
      <div>Mark the Time</div>
      <div className="mt-16">
        <Calendar defaultValue={weddingDate} />
      </div>
    </div>
  );
};

export default DateView;
