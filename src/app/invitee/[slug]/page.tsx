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
import { useRef, useState } from "react";
import { MdOutlineMusicNote } from "react-icons/md";
import { MdOutlineMusicOff } from "react-icons/md";
import SwipeHint from "@/app/_components/swipe-hint";

const Map = dynamic(() => import("@/app/_components/location"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

type Params = {
  params: {
    slug: string;
  };
};

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
      {open ? (
        <>
          <CoverImage inviteeName={name} />
          <Story />
          <Intro />
          <DateView />
          <Map />
          <Registration hash={hash} hasSubmitted={submitted} />
          <Footer />
        </>
      ) : (
        <Door setOpen={setOpen} setDisplaySwipeHint={setDisplaySwipeHint} />
      )}
    </>
  );
}
