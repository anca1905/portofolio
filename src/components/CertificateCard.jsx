// src/components/CertificateCard.jsx

import React from "react";
import Button from "./Button";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificateCard = (props) => {
    const { img, title, issuer, date, link } = props;

    return (
        <div className="card card-compact w-full h-full shadow-lg bg-white dark:bg-neutral-900 border border-slate-200 dark:border-slate-800 hover:scale-[1.02] transition-transform duration-300">
            <figure className="h-48 w-full overflow-hidden relative bg-slate-100 dark:bg-neutral-800">
                <img
                    src={img}
                    alt={`Sertifikat ${title}`}
                    className="object-cover w-full h-full"
                />
            </figure>

            <div className="card-body flex flex-col p-4">
                <h2 className="card-title text-base md:text-lg text-slate-800 dark:text-white leading-tight mb-2">
                    {title}
                </h2>

                <div className="text-slate-600 dark:text-neutral-400 text-sm mt-auto">
                    <p className="font-bold text-orange-500">{issuer}</p>
                    <p className="text-xs">Diperoleh: {date}</p>
                </div>

                {link && (
                    <div className="card-actions justify-end mt-4">
                        <a href={link} rel="noopener noreferrer" target="_blank">
                            <Button
                                classname="bg-orange-500 hover:bg-orange-400 border-none rounded-full btn-sm px-4 text-white"
                                text={<FaExternalLinkAlt className="text-sm text-white" />}
                            />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CertificateCard;
