"use client";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-off-white-light py-4 -mx-5 md:-mx-60">
      <div className="w-full flex flex-row items-center">
        <div className="w-1/2 flex flex-col text-center items-center">
          <div className="text-sm font-display text-white">Contact | Groom</div>
          <div className="text-base font-bold font-body text-white">
            +65 88870380
          </div>
          <div className="w-3/5 flex flex-row justify-evenly">
            <button>
              <FaInstagram
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/im_henryhon/",
                    "_blank"
                  );
                }}
              />
            </button>
            <button>
              <FaFacebook
                onClick={() => {
                  window.open("https://www.facebook.com/HenryHCz", "_blank");
                }}
              />
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col text-center items-center">
          <div className="text-sm font-display text-white">Contact | Bride</div>
          <div className="text-base font-bold font-body text-white">
            +65 96470861
          </div>
          <div className="w-3/5 flex flex-row justify-evenly">
            <button>
              <FaInstagram
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/_chiaqian_/",
                    "_blank"
                  );
                }}
              />
            </button>
            <button>
              <FaFacebook
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/tanchia.qian",
                    "_blank"
                  );
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
