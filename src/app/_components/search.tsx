"use client";

import { useState } from "react";
import useContactList from "@/app/_hooks/fetch-data";
import RingLoader from "react-spinners/RingLoader";
import Select from "react-select";
import Link from "next/link";

const Search = () => {
  const [selectedOption, setSelectedOption] = useState(null);
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

  return (
    <div className="h-[90vh] flex flex-col items-center justify-center rounded-3xl border-4 border-slate-200 my-10">
      <Select
        className="w-[50vw]"
        defaultValue={selectedOption}
        onChange={(option: any) => setSelectedOption(option.value)}
        options={data.map((x: any) => {
          return {
            value: x.hash,
            label: x.name,
          };
        })}
      />
      {selectedOption ? (
        <Link href={`/invitee/${selectedOption}`}>Go!</Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Search;
