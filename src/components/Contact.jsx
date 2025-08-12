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
  });
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="border-slate-800 border-b max-w-xs md:max-w-md lg:max-w-5xl mx-auto pb-10"
      >
        <h1 className="text-2xl text-center font-light my-3 tracking-wide">
          Contact <span className="text-neutral-500">Me</span>
          <div>
            <div className="grid lg:grid-cols-2 justify-center items-center gap-5 my-4 mx-auto h-full">
              <div className="w-full mx-auto my-3">
                <div>
                  <CiMail className="text-4xl my-2 mx-auto bg-orange-500 rounded-full p-2" />
                </div>
                <div className="text-base md:text-xl">
                  riskymahendra52@gmail.com
                </div>
                <div>
                  <FaWhatsapp className="text-4xl my-2 mx-auto bg-orange-500 rounded-full p-2" />
                </div>
                <div className="text-base md:text-xl">+6281-237-258-566</div>
                <div>
                  <SiGooglemaps className="text-4xl my-2 mx-auto bg-orange-500 rounded-full p-2" />
                </div>
                <div className="text-base items-start md:text-lg">
                  Jl. Tukad Sangsang 37/1 BTN Sanggulan, <br /> Kediri, Tabanan
                </div>
              </div>
              <ContactForm />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="p-4 my-4 mx-auto"
            >
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1324.6298113465036!2d115.14067508499383!3d-8.535688366594385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sid!4v1730824814241!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></Iframe>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Contact;
