"use client";

import { useState } from "react";
import { postContactForm } from "@/app/_hooks/data";
import BeatLoader from "react-spinners/BeatLoader";

type Props = {
  inviteeName: string;
  hasSubmitted: boolean;
};

const Registration = ({ inviteeName, hasSubmitted }: Props) => {
  const [noPax, setNoPax] = useState("");
  const [dietaryOption, setDietaryOption] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(hasSubmitted);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (submitted) return;
    if (noPax === "" || dietaryOption === "" || noPax === "0") {
      setErrorMsg("Please fill in all fields appropriately");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await postContactForm({
        name: inviteeName,
        numPax: parseInt(noPax),
        dietaryOption: dietaryOption,
      });
      console.log(res);
      if (res.error) {
        setIsError(true);
      }

      if (res.result == 0) {
        setSubmitted(true);
      }
    } catch (error) {
      setIsError(true);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="h-[90vh] flex flex-col items-center justify-center bg-rose-950 rounded-3xl border-4 border-slate-200 my-10">
      <div className="text-4xl font-bold font-chinese text-white">
        登记
      </div>
      <div className="text-4xl mt-2 font-bold font-display text-white">
        Registration
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col bg-slate-100 p-8 mt-4 w-[70vw] rounded-2xl">
        <label className="text-lg font-body mb-2 ">
          人数 No Pax:
          <input
            className="w-[50vw] md:ml-2 md:w-[30vw] text-center"
            type="number"
            value={noPax}
            onChange={(e) => {
              setIsError(false);
              setErrorMsg("");
              setNoPax(e.target.value)
            }}
            required
          />
        </label>
        <label className="text-lg font-body mb-2">
          用膳 Dietary Option:
          <select
            className="w-[50vw] md:ml-2 md:w-[30vw] text-center"
            value={dietaryOption}
            onChange={(e) => {
              setIsError(false);
              setErrorMsg("");
              setDietaryOption(e.target.value)
            }}
            required
          >
            <option value="">Select option</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="None">None</option>
          </select>
        </label>
        <button type="submit" onClick={handleSubmit} className={`bg-rose-500 rounded-3xl border-1 mt-2 font-body ${submitted ? "opacity-50" : ""}`}>
          {isSubmitting ? <BeatLoader
          color={"#ffffff"}
          loading={isSubmitting}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />:
          !submitted ? "Submit" : "Submitted"}
        </button>
      </form>
      {isError ? <div className="font-display text-white mt-4">Sorry, there was an error... Please try again</div> : null}
      {errorMsg ? <div className="font-display text-white mt-4">{errorMsg}</div> : null}
    </div>
  );
};

export default Registration;
