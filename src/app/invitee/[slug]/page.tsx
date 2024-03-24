"use client";

import Container from "../../_components/container";
import DateView from "@/app/_components/date";
import Story from "@/app/_components/story";
import Registration from "@/app/_components/registration";
import CoverImage from "@/app/_components/cover-image";
import dynamic from "next/dynamic";
import useContactList from "@/app/_hooks/fetch-data";
import { RingLoader } from "react-spinners";
import { useRouter } from "next/navigation";

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
  const { data, error, isLoading } = useContactList();

  if (isLoading) {
    return (
      <div className="h-[90vh] flex items-center justify-center rounded-3xl border-4 border-slate-200 my-10">
        <RingLoader
          color={"#ffffff"}
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  const router = useRouter();
  const providedHash = params.slug;
  var name = "";
  var mobileNo = "";
  for (let i = 0; i < data.length; i++) {
    if (providedHash === data[i].hash) {
      name = data[i].name;
      mobileNo = data[i].mobile_no;
      break;
    }
  }

  if (name === "" && mobileNo == "") {
    router.push("/");
    return <></>;
  }

  return (
    <>
      <CoverImage inviteeName={name} />
      <Story />
      <DateView />
      <Map />
      <Registration mobileNo={mobileNo} />
    </>
  );
}
