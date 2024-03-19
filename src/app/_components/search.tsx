"use client";

import { useState } from "react";
import useContactList from "@/app/_hooks/fetch-data";
import RingLoader from "react-spinners/RingLoader";
import Select from "react-select";
import { useRouter } from "next/navigation";

const Search = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("60");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const { data, error, isLoading } = useContactList();
  const router = useRouter();
  const handleButtonPress = () => {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].hash == selectedOption &&
        data[i]["mobile_no"] == selectedCountry + mobileNumber
      ) {
        router.push(`/invitee/${selectedOption}`);
        return;
      }
    }
    setIsError(true);
  };

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
      <div className="text-4xl mb-8 font-bold font-sans text-white">
        Hi, how can we address you?
      </div>
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
        <>
          <div className="text-2xl mt-4 font-bold font-sans text-white">
            What's your mobile number?
          </div>
          <div className="mt-2 flex justify-center items-center">
            <Select
              className="w-[10vw]"
              defaultValue={{
                value: "60",
                label: "+60",
              }}
              onChange={(option: any) => setSelectedCountry(option.value)}
              options={[
                {
                  value: "60",
                  label: "+60",
                },
                {
                  value: "65",
                  label: "+65",
                },
              ]}
            />
            <input
              type="number"
              className="w-[35vw] ml-1 rounded-sm p-2"
              defaultValue={mobileNumber}
              value={mobileNumber}
              onChange={(event) => {
                setIsError(false);
                setMobileNumber(event.target.value);
              }}
            />
          </div>
          {isError ? (
            <div className="text-2xl mt-4 font-bold font-sans text-white">
              Sorry, record does not match...
            </div>
          ) : null}
          {mobileNumber ? (
            <button
              className="text-1xl font-sans text-white border-2 mt-4 py-2 px-4 rounded-2xl"
              onClick={handleButtonPress}
            >
              This is Me!
            </button>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default Search;
