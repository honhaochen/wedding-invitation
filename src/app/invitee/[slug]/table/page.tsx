"use client";

import { useContactList } from "@/app/_hooks/data";
import { useParams, useRouter } from "next/navigation";
import Loading from "@/app/_components/loading";

export default function Table() {
  const router = useRouter();
  const params = useParams();
  const { data, error, isLoading } = useContactList();

  if (isLoading) {
    return <Loading />;
  }
  const providedHash = params["slug"];

  var name = "";
  var table = "";
  for (let i = 0; i < data.length; i++) {
    if (providedHash === data[i].hash) {
      name = data[i].name;
      table = data[i].table;
      break;
    }
  }

  if (name === "") {
    router.push("/");
    return <></>;
  }

  return (
    <div className="h-[90vh] flex flex-col items-center justify-center rounded-3xl border-4 border-white my-10">
      <div className="w-[80vw] p-8 flex items-center justify-center flex-col">
        <div className="text-2xl mt-4 font-chinese text-off-white-dark">
          {table ? "您的座位" : "抱歉，您的座位还没安排好"}
        </div>
        <div className="text-xl mt-4 font-display text-off-white-dark">
          {table ? "Your Table" : "Sorry, your table has not been arranged yet"}
        </div>
        {table && (
          <div className="text-4xl font-bold mt-4 font-chinese text-off-white-dark">
            {table}
          </div>
        )}
      </div>
    </div>
  );
}
