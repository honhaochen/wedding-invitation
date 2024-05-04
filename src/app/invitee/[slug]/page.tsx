"use client";

import DateView from "@/app/_components/date";
import Story from "@/app/_components/story";
import Intro from "@/app/_components/intro";
import Registration from "@/app/_components/registration";
import CoverImage from "@/app/_components/cover-image";
import Footer from "@/app/_components/footer";
import dynamic from "next/dynamic";
import { useContactList } from "@/app/_hooks/data";
import { useRouter } from "next/navigation";
import Loading from "@/app/_components/loading";
import Door from "@/app/_components/door";
import { useContext, useRef, useState } from "react";
import { MdOutlineMusicNote } from "react-icons/md";
import { MdOutlineMusicOff } from "react-icons/md";
import SwipeHint from "@/app/_components/swipe-hint";
import { PageContext } from "@/app/_components/container";

const Map = dynamic(() => import("@/app/_components/location"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

type Params = {
  params: {
    slug: string;
  };
};

function RegisterTag() {
  const page = useContext(PageContext);
  const scrollToRegister = () => {
    window.scrollTo({
      top: document.body.scrollHeight * 4,
      behavior: "smooth",
    });
    page.setActiveIndex(5);
    setTimeout(() => {
      page.setActiveIndex(4);
    }, 1000);
    setTimeout(() => {
      page.setActiveIndex(3);
    }, 2000);
    setTimeout(() => {
      page.setActiveIndex(2);
    }, 3000);
    setTimeout(() => {
      page.setActiveIndex(1);
    }, 4000);
  };

  return (
    <div
      className="fixed right-0 top-8 w-[5rem] h-[1.7rem] font-body text-white text-sm z-10 p-1 pr-2 rounded-l-lg border-1 bg-off-white-light"
      onClick={scrollToRegister}
    >
      Register Now
    </div>
  );
}

export default function Invitee({ params }: Params) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [displaySwipeHint, setDisplaySwipeHint] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const isFirstTime = useRef(true);
  const { data, error, isLoading } = useContactList();
  const audioRef = useRef<HTMLAudioElement>(null);
  window.addEventListener("click", () => {
    if (audioRef.current && isFirstTime.current) {
      audioRef.current.play();
      setMusicOn(false);
      isFirstTime.current = false;
    }
  });

  const handleMusicButton = () => {
    setMusicOn(!musicOn);
    if (audioRef.current && musicOn) {
      audioRef.current.muted = false;
    } else if (audioRef.current && !musicOn) {
      audioRef.current.muted = true;
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  const providedHash = params.slug;

  var name = "";
  var hash = "";
  var mobileNo = "";
  var submitted = false;
  for (let i = 0; i < data.length; i++) {
    if (providedHash === data[i].hash) {
      name = data[i].name;
      hash = data[i].hash;
      mobileNo = data[i].mobile_no;
      submitted = data[i].submitted;
      break;
    }
  }

  if (name === "" && mobileNo == "") {
    router.push("/");
    return <></>;
  }

  return (
    <>
      <audio ref={audioRef} src="/assets/photograph.mp3" />
      <button
        onClick={handleMusicButton}
        className="fixed right-1 bottom-1 w-8 h-8 z-10"
      >
        {musicOn ? (
          <MdOutlineMusicOff className="w-full h-full" />
        ) : (
          <MdOutlineMusicNote className="w-full h-full" />
        )}
      </button>
      {displaySwipeHint && <SwipeHint />}
      {<RegisterTag />}
      {open ? (
        <>
          <CoverImage inviteeName={name} />
          <Story />
          <Intro />
          <DateView />
          <Map />
          <Registration mobileNo={mobileNo} hash={hash} hasSubmitted={submitted} />
          <Footer />
        </>
      ) : (
        <Door setOpen={setOpen} setDisplaySwipeHint={setDisplaySwipeHint} />
      )}
    </>
  );
}
