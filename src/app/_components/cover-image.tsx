"use-client";

import styles from "@/app/_styles/CoverImage.module.css";

type Props = {
  inviteeName?: string;
};

const CoverImage = ({ inviteeName }: Props) => {
  return (
    <div className="h-[90vh] overflow-hidden rounded-3xl border-4 border-white my-10">
      <div
        className={`h-full bg-cover bg-center flex items-center justify-center ${styles.slideIn}`}
        style={{ backgroundImage: `url('/assets/cover.jpg')` }}
      >
        <div
          className={`text-center text-off-white ${styles.fadeOut} bg-[rgb(76,76,76)] p-2 bg-opacity-30 rounded-2xl`}
        >
          <h1 className="text-4xl font-bold mb-4 font-display">
            Wedding Invitation
          </h1>
          <hr />
          <p className="text-lg font-display mt-2">Hao Chen & Chia Qian</p>
          <p className="text-lg font-display">27-10-2024</p>
          <h1 className="text-xl mb-4 font-body">Welcome, {inviteeName}</h1>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
