import styles from "@/app/_styles/Door.module.css";
import { useState } from "react";
import { GiDoorRingHandle } from "react-icons/gi";

type Props = {
  setOpen: (open: boolean) => void;
  setDisplaySwipeHint: (display: boolean) => void;
};
const Door = ({ setOpen, setDisplaySwipeHint }: Props) => {
  const [click, setClick] = useState(false);
  const [slide, setSlide] = useState(false);
  const backgroundBoyImageUrl = click
    ? "/assets/boy_smile.png"
    : "/assets/boy.png";
  const backgroundGirlImageUrl = click
    ? "/assets/girl_smile.png"
    : "/assets/girl.png";

  return (
    <div className="h-[100vh] w-[100vw] flex-row items-center justify-center flex absolute top-0 left-0 overflow-hidden bg-white z-20">
      <div
        className={`bg-[#d8cab8] h-[100vh] w-[50vw] flex items-center mr-[0.125rem] origin-left shadow-2xl ${
          slide && styles.slideLeft
        } ${slide && "[transform:rotate(-90deg)]"}`}
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
        <GiDoorRingHandle
          className={`text-[rgb(196,147,57)] w-10 h-auto fill-current ${
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
      </div>
      <div
        className={`bg-[#d8cab8] h-[100vh] w-[50vw] flex items-center origin-right ml-[0.125rem] shadow-2xl ${
          slide && styles.slideRight
        } ${slide && "[transform:rotate(90deg)]"}`}
      >
        <GiDoorRingHandle
          className={`text-[rgb(196,147,57)] w-10 h-auto fill-current ${
            click ? "animate-flip opacity-0" : "animate-bounce"
          }`}
          onClick={async () => {
            setClick(true);
            await new Promise((resolve) => setTimeout(resolve, 500));
            setSlide(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setOpen(true);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setDisplaySwipeHint(true);
            await new Promise((resolve) => setTimeout(resolve, 3500));
            setDisplaySwipeHint(false);
          }}
        />
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
