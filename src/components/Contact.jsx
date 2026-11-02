import React, { useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import Iframe from "react-iframe";
import ContactForm from "./ContactForm";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="border-slate-200 dark:border-slate-800 border-b max-w-xs md:max-w-md lg:max-w-5xl mx-auto pb-10"
      >
        <h1 className="text-2xl text-center font-light my-3 tracking-wide text-slate-900 dark:text-white">
          Contact <span className="text-slate-500 dark:text-neutral-400">Me</span>
        </h1>
        <div>
          <div className="grid lg:grid-cols-2 justify-center items-center gap-5 my-4 mx-auto h-full">
            <div className="w-full mx-auto my-3 text-center">
              <div>
                <CiMail className="text-4xl my-2 mx-auto bg-orange-500 text-white rounded-full p-2" />
              </div>
              <div className="text-base md:text-xl text-slate-800 dark:text-neutral-200 font-medium">
                arsyadhijrah49720@gmail.com
              </div>
              <div>
                <FaWhatsapp className="text-4xl my-2 mx-auto bg-orange-500 text-white rounded-full p-2" />
              </div>
              <div className="text-base md:text-xl text-slate-800 dark:text-neutral-200 font-medium">
                +6282-291-700-778
              </div>
              <div>
                <SiGooglemaps className="text-4xl my-2 mx-auto bg-orange-500 text-white rounded-full p-2" />
              </div>
              <div className="text-base md:text-lg text-slate-700 dark:text-neutral-300">
                Desa Pabiring, <br /> Poleang Barat, Bombana
              </div>
            </div>
            <ContactForm />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="p-4 my-4 mx-auto rounded-xl overflow-hidden shadow-md"
          >
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4892.666397374092!2d121.515895575853!3d-4.724433149051761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbd31003ac30ee9%3A0xf1179c26894c5b99!2skantor%20skillance.id!5e1!3m2!1sid!2sid!4v1754970699722!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
