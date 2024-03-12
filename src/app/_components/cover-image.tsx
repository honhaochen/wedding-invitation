import styles from "@/app/_styles/CoverImage.module.css";

type Props = {
  inviteeName?: string;
};

const CoverImage = ({ inviteeName }: Props) => {
  const src = "/assets/cover.jpg";
  return (
    <div className="h-[90vh] overflow-hidden rounded-3xl border-4 border-slate-200 my-10">
      <div
        className={`h-full bg-cover bg-center flex items-center justify-center ${styles.slideIn}`}
        style={{ backgroundImage: `url('/assets/cover.jpg')` }}
      >
        <div className={`text-center text-white ${styles.fadeOut}`}>
          <h1 className="text-4xl font-bold mb-4 font-sans">
            Wedding Invitation
          </h1>
          <hr />
          <p className="text-lg font-serif">Hao Chen & Chia Qian</p>
          <p className="text-lg font-serif">27-10-2024</p>
          <h1 className="text-4xl font-bold mb-4 font-mono">
            Welcome, {inviteeName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
