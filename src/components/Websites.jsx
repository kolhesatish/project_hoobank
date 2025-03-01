import { web } from "../assets";
import styles, { layout } from "../style";
import Lottie from "lottie-react";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Lottie animationData={web} loop={true} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Website <br/> Development
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We create modern, responsive, and high-performance websites that engage users and enhance digital presence. Whether it’s a corporate site, e-commerce platform, or web app, we ensure seamless functionality and stunning design.      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;
