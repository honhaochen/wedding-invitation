"use client";

import { useState } from "react";
import { useContactList } from "@/app/_hooks/data";
import Select from "react-select";
import { useRouter } from "next/navigation";
import Loading from "@/app/_components/loading";

const Search = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("60");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const { data, error, isLoading } = useContactList();
  const [bounce, setBounce] = useState(false);
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
    if (isError && !bounce) {
      setBounce(true);
      setTimeout(() => {
        setBounce(false);
      }, 2000);
    } else {
      setIsError(true);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="h-[90vh] flex flex-col items-center justify-center my-10">
      <div className="text-2xl mb-2 font-bold font-display text-off-white-dark px-4">
        Hi, <br />
        How can we address you?
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
          <div className="text-xl mt-8 font-bold font-display text-off-white-dark">
            What's your mobile number?
          </div>
          <div className="mt-2 flex flex-row justify-center items-center">
            <Select
              className="w-[25vw] md:w-[10vw]"
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
              className="w-[35vw] mt-1 rounded-sm p-2 ml-1 md:mt-0"
              defaultValue={mobileNumber}
              value={mobileNumber}
              onChange={(event) => {
                setIsError(false);
                setMobileNumber(event.target.value);
              }}
            />
          </div>
          {isError ? (
            <div
              className={`text-xl mt-8 font-display text-off-white-dark ${
                bounce ? "animate-bounce" : ""
              }`}
            >
              Sorry, record does not match...
            </div>
          ) : null}
          {mobileNumber ? (
            <button
              className="text-1xl font-display text-white border-2 mt-4 px-4 rounded-2xl bg-off-white-light"
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
