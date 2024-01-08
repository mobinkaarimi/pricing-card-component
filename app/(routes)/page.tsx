// Styles
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`${styles.layout} container mx-auto my-16 px-5 sm:px-1 md:px-0`}>
      <div className="absolute top-0 left-2/4 py-3 px-6 bg-[#BC1E4A]">
        <p className="text-sm">Your current plan:</p>
        <p>Starter Trial . 500MAUs</p>
      </div>
    </div>
  );
}
