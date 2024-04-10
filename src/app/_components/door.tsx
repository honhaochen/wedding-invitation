import styles from "@/app/_styles/Door.module.css";
import { useState } from "react";
import { GiDoorRingHandle } from "react-icons/gi";

type Props = {
  setOpen: (open: boolean) => void;
};
const Door = ({ setOpen }: Props) => {
  const [click, setClick] = useState(false);
  const [slide, setSlide] = useState(false);
  const backgroundBoyImageUrl = click
    ? "/assets/boy_smile.png"
    : "/assets/boy.png";
  const backgroundGirlImageUrl = click
    ? "/assets/girl_smile.png"
    : "/assets/girl.png";

  return (
    <div className="h-[100vh] w-[100vw] flex-row items-center justify-center flex absolute top-0 left-0 overflow-hidden">
      <div
        className={`bg-[#d8cab8] h-[100vh] w-[50vw] flex items-center border-r-2 ${
          slide && styles.slideLeft
        } ${slide && "translate-x-[-100%]"}`}
      >
        <div
          className="w-[50vw] h-[40vw] md:w-[50vw] md:h-[30vh]"
          style={{
            backgroundImage: `url(${backgroundGirlImageUrl})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <GiDoorRingHandle
        className={`text-[rgb(196,147,57)] w-16 h-auto fill-current absolute ${
          click ? "animate-flip opacity-0" : "animate-bounce"
        }`}
        onClick={async () => {
          setClick(true);
          await new Promise((resolve) => setTimeout(resolve, 500));
          setSlide(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setOpen(true);
        }}
      />
      <div
        className={`bg-[#d8cab8] h-[100vh] w-[50vw] flex items-center border-l-2 ${
          slide && styles.slideRight
        } ${slide && "translate-x-[100%]"}`}
      >
        <div
          className="w-[50vw] h-[40vw] md:w-[50vw] md:h-[30vh]"
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

export default Door;
