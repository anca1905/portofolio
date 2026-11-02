import React, { useState } from "react";
import Button from "./Button";
import { FaPhone, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b74858c9-fbed-475f-8eb2-49b33a976ee5");

    try {
      const response = await fetch("#", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Failed to send message");
      }
    } catch (error) {
      setResult("Message sent (Demo mode)");
    }
  };

  return (
    <div className="my-3 border-2 rounded-xl border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-sm p-4 shadow-sm">
      <div className="font-bold text-xl text-orange-500 mb-2">Send a Message</div>
      <form onSubmit={onSubmit}>
        <label className="input input-bordered flex items-center my-3 gap-2 bg-slate-50 dark:bg-neutral-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white">
          <IoMdMail className="text-neutral-500 dark:text-neutral-400" />
          <input
            type="email"
            className="grow bg-transparent text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500"
            name="email"
            placeholder="E-mail"
            required
            autoComplete="off"
          />
        </label>
        <label className="input input-bordered flex items-center my-3 gap-2 bg-slate-50 dark:bg-neutral-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white">
          <FaUser className="text-neutral-500 dark:text-neutral-400" />
          <input
            type="text"
            className="grow bg-transparent text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500"
            name="name"
            placeholder="Full Name"
            required
            autoComplete="off"
          />
        </label>
        <label className="input input-bordered flex items-center my-3 gap-2 bg-slate-50 dark:bg-neutral-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white">
          <FaPhone className="text-neutral-500 dark:text-neutral-400" />
          <input
            type="text"
            className="grow bg-transparent text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500"
            name="phone"
            placeholder="Phone Number"
            required
            autoComplete="off"
          />
        </label>
        <textarea
          className="textarea textarea-lg w-full textarea-bordered bg-slate-50 dark:bg-neutral-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500"
          placeholder="Message"
          name="message"
          required
          autoComplete="off"
        ></textarea>
        <div className="my-2 overflow-hidden">
          <Button
            text={"Send Message"}
            classname={"text-sm bg-orange-500 hover:bg-orange-400 text-white float-right"}
            type={"submit"}
          />
        </div>
      </form>
      {result && <span className="text-sm text-green-500 p-2 rounded-lg block mt-2">{result}</span>}
    </div>
  );
};

export default ContactForm;
