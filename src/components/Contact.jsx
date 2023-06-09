import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_noa63tl",
        "template_ht2ebky",
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Milos",
          to_email: "milos.ribera@gmail.com",
          message: form.message,
        },
        "kYDxMLw2KJLQSn8eE"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your message! I'll be back to you as soon as possible!"
          );

          setForm({
            email: "",
            message: "",
            name: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong! Please retry again");
        }
      );
  };

  return (
    // <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    <motion.div
      variants={slideIn("up", "tween", 0.2, 1)}
      className="flex-[.75] bg-black-100 p-8 rounded-2xl"
    >
      <p className={`${styles.sectionSubText}`}>Get in touch</p>
      <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-20 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font=medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font=medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font=medium"
          />
        </label>
        <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
    // </div>
  );
};

export default SectionWrapper(Contact, "contact");
