"use-client";

import styles from "@/app/_styles/CoverImage.module.css";

type Props = {
  inviteeName?: string;
};

const CoverImage = ({ inviteeName }: Props) => {
  return (
    <div className="h-[90vh] overflow-hidden my-10 relative flex items-center justify-center rounded-3xl border-4 border-white">
      <div
        className={`h-[63vh] w-[75vw] bg-cover bg-center flex items-center justify-center ${styles.slideIn} absolute bottom-4 rounded-t-3xl`}
        style={{
          backgroundImage: `url('/assets/cover.jpg')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className={`text-center text-off-white-dark ${styles.fadeOut} p-2 m-2 rounded-2xl absolute top-8`}
      >
        <div className="text-xl font-bold mb-4 font-display">
          Hao Chen & Chia Qian
        </div>
        <div className="text-base mb-4 font-body leading-[0.4rem]">
          Joyfully Invite You,{" "}
          <span className="text-off-white-light">{inviteeName}</span>
        </div>
        <div className="text-base mb-4 font-body leading-[0.4rem]">
          To Our Wedding Celebration
        </div>
      </div>
      <div
        className={`text-center text-off-white-dark ${styles.fadeOut} p-2 m-2 rounded-2xl absolute bottom-2 left-0`}
      >
        <div className="text-base font-bold mb-2 font-display">Where?</div>
        <div className="text-sm mb-4 font-body leading-[0.125rem]">
          Sunway Velocity
        </div>
        <div className="text-sm mb-4 font-body leading-[0.125rem]">KL</div>
      </div>
      <div
        className={`text-center text-off-white-dark ${styles.fadeOut} p-2 m-2 rounded-2xl absolute bottom-2 right-0`}
      >
        <div className="text-base font-bold mb-2 font-display">When?</div>
        <div className="text-sm mb-4 font-body leading-[0.125rem]">Sunday</div>
        <div className="text-sm mb-4 font-body leading-[0.125rem]">
          27 October 2024
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
