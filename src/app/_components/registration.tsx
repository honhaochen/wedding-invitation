"use client";

import { useState } from "react";

type Props = {
  mobileNo: string;
};

const Registration = ({ mobileNo }: Props) => {
  const [noPax, setNoPax] = useState("");
  const [dietaryOption, setDietaryOption] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Submitted:", { noPax, dietaryOption });
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
            onChange={(e) => setNoPax(e.target.value)}
            required
          />
        </label>
        <label className="text-lg font-body mb-2">
          用膳 Dietary Option:
          <select
            className="w-[50vw] md:ml-2 md:w-[30vw] text-center"
            value={dietaryOption}
            onChange={(e) => setDietaryOption(e.target.value)}
            required
          >
            <option value="">Select option</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="None">None</option>
          </select>
        </label>
        <button type="submit" className="bg-rose-500 rounded-3xl border-1 mt-2 font-body">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
