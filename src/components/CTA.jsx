import { useState } from "react";
import styles from "../style";
import axios from "axios";
import toast from "react-hot-toast";

const CTA = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", course: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (data) => {
    setIsSubmitting(true); // Start the submission process
    try {
      const res = await axios.post(`/api/send-email`, data);
      if (res.status === 200) {
        toast.success("Your details have been submitted successfully!");
        setIsSubmitted(true);
      } else {
        throw new Error(res.data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false); // Stop the submission process
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      id="contact"
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>
        Be the Partner in Innovation!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At NextGen, we are built for strength and innovation, delivering top-tier AI solutions, software development, and website building.
        </p>
      </div>

      {!isSubmitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendEmail(formData);
          }}
          className="flex flex-col space-y-4 w-full max-w-md text-slate-900"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 rounded-md"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="course"
            className="p-3 rounded-md"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Custom Software">Custom Software</option>
            <option value="AI Solutions">AI Solutions</option>
            <option value="Website">Website</option>
          </select>
          <button
            type="submit"
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Started"}
          </button>
        </form>
      ) : (
        <p className="text-lg font-semibold bg-gradient-to-b from-[var(--neon-blue)] to-[var(--neon-cyan)] bg-clip-text text-transparent"> 
              Thank you! Your details have been submitted. 
          </p>

      )}
    </section>
  );
};

export default CTA;
