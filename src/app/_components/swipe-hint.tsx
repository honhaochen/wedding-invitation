import styles from "@/app/_styles/Swipe.module.css";

const SwipeHint = () => {
  return (
    <div className="fixed top-2/3 left-[46.5%] w-10 h-36 z-10 mb-4">
      <div
        className={`h-10 w-10 rounded-full border-8 ${styles.swipeHint} border-off-white-light`}
      ></div>
    </div>
  );
};

export default SwipeHint;
