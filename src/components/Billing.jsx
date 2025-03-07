import { software } from "../assets";
import styles, { layout } from "../style";
import Lottie from "lottie-react";

const Billing = () => (
  <section id="services" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Lottie animationData={software} loop={true} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Software Development
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We build custom software solutions tailored to your business needs, ensuring scalability, efficiency, and seamless integration. From enterprise applications to automation tools, we deliver high-quality, future-ready software.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;
