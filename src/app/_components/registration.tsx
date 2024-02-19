"use client";

import { useState } from "react";

const Registration = () => {
  const [noPax, setNoPax] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dietaryOption, setDietaryOption] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Submitted:", { noPax, phoneNo, dietaryOption });
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-rose-700 rounded-3xl border-4 border-slate-200 my-10">
      <div className="text-4xl mb-8 font-bold font-sans text-white">
        登记 Registration
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col bg-slate-100 p-8">
        <label className="text-lg font-serif mb-2 ">
          人数 No Pax:
          <input
            type="number"
            value={noPax}
            onChange={(e) => setNoPax(e.target.value)}
            required
          />
        </label>
        <label className="text-lg font-serif mb-2">
          电话号码 Phone No:
          <input
            type="tel"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </label>
        <label className="text-lg font-serif mb-2">
          用膳 Dietary Option:
          <select
            value={dietaryOption}
            onChange={(e) => setDietaryOption(e.target.value)}
            required
          >
            <option value="">Select option</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="None">None</option>
          </select>
        </label>
        <button type="submit" className="bg-rose-500 rounded-3xl border-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;