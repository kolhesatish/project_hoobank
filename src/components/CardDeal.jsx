import { aisol } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Lottie from "lottie-react";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      AI Solutions
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We integrate AI into applications to enhance functionality, automate tasks, and improve decision-making. Our AI expertise includes chatbots, automation tasks, web scraping, and training AI agents to optimize workflows and drive innovation.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <div className="w-[430px] h-[330px] bg-[#e6f0f6] flex items-center justify-center rounded-lg shadow-md">
      {/* <img src={card} alt="billing" className="w-[100%] h-[100%]" /> */}
      <Lottie animationData={aisol} loop={true} />
      {/* gradient start */}
      </div>

    </div>
  </section>
);

export default CardDeal;
