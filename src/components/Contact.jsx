import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
       'service_pcwul4t',
       'template_k392sso',

        {
          from_name: form.name,
          to_name: "Atharva Kalbande",
          from_email: form.email,
          to_email: "atharvakalbande5@gmail.com",
          message: form.message,
        },
        'udfev_llUA_83e2Z4'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={"xl:mt[-12] flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"}
    >
<motion.div
  variants={slideIn("left", "tween", 0.2, 1)}
  className="flex-[0.75] bg-black-100 p-6 sm:p-6 rounded-2xl w-full max-w-md"
>
  <p className="text-secondary text-base sm:text-lg mb-4">Get in touch</p>
  <h3 className="text-white text-2xl sm:text-3xl font-bold mb-6">Contact</h3>

  <form
    ref={formRef}
    onSubmit={handleSubmit}
    className="flex flex-col gap-6"
  >
    {/* Name Input */}
    <label className="flex flex-col">
      <span className="text-white text-base sm:text-lg font-medium mb-2">
        Your Name
      </span>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="What's your good name?"
        className="bg-tertiary py-3 px-4 text-base sm:text-lg placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
      />
    </label>

    {/* Email Input */}
    <label className="flex flex-col">
      <span className="text-white text-base sm:text-lg font-medium mb-2">
        Your Email
      </span>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="What's your email?"
        className="bg-tertiary py-3 px-4 text-base sm:text-lg placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
      />
    </label>

    {/* Message Input */}
    <label className="flex flex-col">
      <span className="text-white text-base sm:text-lg font-medium mb-2">
        Your Message
      </span>
      <textarea
        rows={2}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="What you want to say?"
        className="bg-tertiary py-3 px-4 text-base sm:text-lg placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
      />
    </label>

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-tertiary py-3 px-6 rounded-lg text-base sm:text-lg text-white font-bold shadow-md"
    >
      {loading ? "Sending..." : "Send"}
    </button>
  </form>
</motion.div>


      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");