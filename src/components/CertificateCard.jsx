// src/components/CertificateCard.jsx

import React from "react";
import Button from "./Button";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificateCard = (props) => {
    const { img, title, issuer, date, link } = props;

    return (
        // PERUBAHAN DISINI: Hapus 'md:w-80 lg:w-96'. Ganti jadi 'w-full h-full'
        // 'h-full' penting supaya kalau judul panjang, kartu sebelahnya ikut tinggi (biar sejajar)
        <div className="card card-compact w-full h-full shadow-xl bg-neutral-900 border border-slate-800 hover:scale-[1.02] transition-transform duration-300">

            {/* Bagian Gambar: Sudah Benar (h-48 & object-cover) */}
            <figure className="h-48 w-full overflow-hidden relative">
                <img
                    src={img}
                    alt={`Sertifikat ${title}`}
                    className="object-cover w-full h-full"
                />
            </figure>

            {/* Bagian Isi */}
            <div className="card-body flex flex-col">
                <h2 className="card-title text-lg text-white leading-tight mb-2">
                    {title}
                </h2>

                {/* Bagian Teks Penyelenggara */}
                <div className="text-neutral-400 text-sm mt-auto">
                    <p className="font-bold text-orange-500">{issuer}</p>
                    <p className="text-xs">Diperoleh: {date}</p>
                </div>

                {/* Tombol Link (Opsional) */}
                {link && (
                    <div className="card-actions justify-end mt-4">
                        <a href={link} rel="noopener noreferrer" target="_blank">
                            <Button
                                classname="bg-orange-500 hover:bg-orange-400 border-none rounded-full btn-sm px-4"
                                text={<FaExternalLinkAlt className="text-sm text-black" />}
                            />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CertificateCard;