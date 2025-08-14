// src/components/CertificateCard.jsx

import React from "react";
import Button from "./Button";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificateCard = (props) => {
    const { img, title, issuer, date, link } = props;

    return (
        <div className="card card-compact w-full my-2 shadow-xl mx-auto md:w-80 lg:w-96">
            <figure className="h-48 overflow-hidden">
                <img src={img} alt={`Sertifikat ${title}`} className="object-cover w-full h-full" />
            </figure>
            <div className="card-body bg-neutral-900">
                <h2 className="card-title text-xl">{title}</h2>
                <div className="text-neutral-400">
                    <p className="font-bold">Penyelenggara: {issuer}</p>
                    <p>Diperoleh: {date}</p>
                </div>
                {link && (
                    <div className="card-actions justify-end mt-4">
                        <a href={link} rel="noopener noreferrer" target="_blank">
                            <Button
                                classname="bg-orange-500 hover:bg-orange-400 rounded-full hover:scale-105"
                                text={<FaExternalLinkAlt className="text-xl text-black" />}
                            />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CertificateCard;