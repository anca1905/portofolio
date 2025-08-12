import React from "react";
import Button from "./Button";
import { FaPhone, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b74858c9-fbed-475f-8eb2-49b33a976ee5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="my-3 border-2 rounded-xl border-slate-800 p-4">
      <div className="font-bold text-xl text-orange-400">Send a Message</div>
      <form onSubmit={onSubmit}>
        <label className="input input-bordered flex mx-auto items-center my-3 gap-2">
          <IoMdMail className=" text-neutral-500" />
          <input
            type="email"
            className="grow"
            name="email"
            placeholder="E-mail"
            required
            autoComplete="off"
          />
        </label>
        <label className="input input-bordered flex items-center my-3 gap-2">
          <FaUser className="text-neutral-500" />
          <input
            type="text"
            className="grow"
            name="name"
            placeholder="Full Name"
            required
            autoComplete="off"
          />
        </label>
        <label className="input input-bordered flex items-center my-3 gap-2">
          <FaPhone className="text-neutral-500" />
          <input
            type="text"
            className="grow"
            name="phone"
            placeholder="Phone Number"
            required
            autoComplete="off"
          />
        </label>
        <textarea
          className="textarea textarea-lg w-full textarea-bordered"
          placeholder="Message"
          name="message"
          required
          autoComplete="off"
        ></textarea>
        <div className="my-2">
          <Button
            text={"Send Message"}
            classname={"text-sm bg-orange-500 hover:bg-orange-400 float-right"}
            type={"submit"}
          />
        </div>
      </form>
      <span className="text-sm text-green-400 p-3 rounded-lg ">{result}</span>
    </div>
  );
};

export default ContactForm;
