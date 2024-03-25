import { useState, useEffect } from "react";

const Loading = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount === 0 ? 1 : 0));
    }, 800);
    return () => clearInterval(intervalId);
  }, []);

  const backgroundBoyImageUrl =
    count === 1 ? "/assets/boy_smile.png" : "/assets/boy.png";
  const backgroundGirlImageUrl =
    count === 1 ? "/assets/girl_smile.png" : "/assets/girl.png";

  return (
    <div className="h-[100vh] w-[100vw] flex-col items-center justify-center flex absolute top-0 left-0">
      <div className="text-2xl mt-4 font-bold font-chinese text-off-white-dark text-center">
        ~ 执子之手，与子偕老 ~
      </div>
      <div className="flex justify-center items-center overflow-hidde">
        <div
          className="w-[40vw] h-[40vw] md:w-[20vw] md:h-[30vh]"
          style={{
            backgroundImage: `url(${backgroundGirlImageUrl})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <svg
          className="text-red-400 w-6 h-auto fill-current animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
        </svg>
        <div
          className="w-[40vw] h-[40vw] md:w-[20vw] md:h-[30vh]"
          style={{
            backgroundImage: `url(${backgroundBoyImageUrl})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
