"use client";

import Footer from "@/app/_components/footer";
import DateView from "@/app/_components/date";
import Story from "@/app/_components/story";
import Registration from "@/app/_components/registration";
import CoverImage from "@/app/_components/cover-image";
import dynamic from "next/dynamic";
import { useContactList } from "@/app/_hooks/data";
import { useRouter } from "next/navigation";
import Loading from "@/app/_components/loading";
import Door from "@/app/_components/door";
import { useRef, useState } from "react";

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
  const { data, error, isLoading } = useContactList();
  const audioRef = useRef<HTMLAudioElement>(null);
  window.addEventListener("click", () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  });

  if (isLoading) {
    return <Loading />;
  }
  const providedHash = params.slug;

  var name = "";
  var mobileNo = "";
  var submitted = false;
  for (let i = 0; i < data.length; i++) {
    if (providedHash === data[i].hash) {
      name = data[i].name;
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
      {open ? (
        <>
          <CoverImage inviteeName={name} />
          <Story />
          <DateView />
          <Map />
          <Registration inviteeName={name} hasSubmitted={submitted} />
          <Footer />
        </>
      ) : (
        <Door setOpen={setOpen} />
      )}
    </>
  );
}
