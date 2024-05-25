"use client";

import { useContext, useEffect, useState } from "react";
import { postContactForm } from "@/app/_hooks/data";
import BeatLoader from "react-spinners/BeatLoader";
import styles from "@/app/_styles/Common.module.css";
import { PageContext } from "./container";

type Props = {
  hash: string;
  mobileNo: string;
  hasSubmitted: boolean;
};

function validateMobile(mobile: string) {
  const regex = /^(60|65|353|447|886)[0-9]{8}[0-9]*$/;
  return regex.test(mobile);
}

const Registration = ({ hash, mobileNo, hasSubmitted }: Props) => {
  const [noPax, setNoPax] = useState("");
  const [dietaryOption, setDietaryOption] = useState("");
  const [mobile, setMobile] = useState(mobileNo);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(hasSubmitted);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bounce, setBounce] = useState(false);
  const page = useContext(PageContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (page.activeIndex === 5) {
      setShow(true);
    }
  }, [page.activeIndex]);

  useEffect(() => {
    // setShow(true) after 5 seconds
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (submitted) return;
    if (
      noPax === "" ||
      dietaryOption === "" ||
      noPax === "0" ||
      !validateMobile(mobile)
    ) {
      if (errorMsg != "") {
        setBounce(true);
        setTimeout(() => {
          setBounce(false);
        }, 2000);
      } else {
        if (!validateMobile(mobile)) {
          setErrorMsg(
            "Invalid mobile format, please include country code without '+'"
          );
        } else {
          setErrorMsg("Please fill in all fields appropriately");
        }
      }
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await postContactForm({
        hash: hash,
        mobileNo: mobile,
        numPax: parseInt(noPax),
        dietaryOption: dietaryOption,
      });
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
    <div className="h-[90vh] flex flex-col items-center justify-center rounded-3xl border-4 border-white my-10">
      {show && (
        <div
          className={`flex flex-col items-center justify-center ${styles.fadeOut}`}
        >
          <div className="text-4xl font-bold font-chinese text-off-white-dark">
            登記
          </div>
          <div className="text-4xl mt-2 font-bold font-display text-off-white-dark">
            Registration
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-white p-8 m-4 rounded-2xl"
          >
            <label className="text-lg font-body mb-2 text-off-white-dark">
              電話 Mobile No:
              <input
                className="w-[50vw] md:ml-2 md:w-[30vw] text-center bg-off-white"
                type="number"
                value={mobile}
                onChange={(e) => {
                  setIsError(false);
                  setErrorMsg("");
                  setMobile(e.target.value);
                }}
                disabled={mobileNo != ""}
                required
              />
            </label>
            <label className="text-lg font-body mb-2 text-off-white-dark">
              人數 No Pax:
              <input
                className="w-[50vw] md:ml-2 md:w-[30vw] text-center bg-off-white"
                type="number"
                value={noPax}
                onChange={(e) => {
                  setIsError(false);
                  setErrorMsg("");
                  setNoPax(e.target.value);
                }}
                required
              />
            </label>
            <label className="text-lg font-body mb-2 text-off-white-dark">
              用膳 Dietary Option:
              <select
                className="w-[50vw] md:ml-2 md:w-[30vw] text-center bg-off-white"
                value={dietaryOption}
                onChange={(e) => {
                  setIsError(false);
                  setErrorMsg("");
                  setDietaryOption(e.target.value);
                }}
                required
              >
                <option value="">Select option</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="None">None</option>
              </select>
            </label>
            <button
              type="submit"
              onClick={handleSubmit}
              className={`bg-off-white text-off-white-dark rounded-3xl border-1  border-white mt-2 font-body ${
                submitted ? "opacity-50" : ""
              }`}
            >
              {isSubmitting ? (
                <BeatLoader
                  color={"#ffffff"}
                  loading={isSubmitting}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : !submitted ? (
                "Submit"
              ) : (
                "Submitted"
              )}
            </button>
          </form>
          {isError ? (
            <div className="font-display text-off-white-dark mt-4">
              Sorry, there was an error... Please try again
            </div>
          ) : null}
          {errorMsg ? (
            <div
              className={`font-display text-off-white-dark mt-4 ${
                bounce ? "animate-bounce" : ""
              }`}
            >
              {errorMsg}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Registration;
