import React from 'react';
import CertificateCard from './CertificateCard'; // Import komponen card
import { FaTimes } from 'react-icons/fa'; // Icon untuk tombol close

const ModalCertifications = ({ certifications, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex bg-black bg-opacity-75">
            <div className="relative w-full h-full bg-neutral-800 p-6 overflow-y-auto bg-opacity-80">

                {/* Tombol Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-400 text-2xl"
                >
                    <FaTimes />
                </button>

                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
                    Semua Sertifikasi
                </h2>

                {/* Grid untuk menampilkan semua sertifikasi */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certifications.map((cert) => (
                        <CertificateCard
                            key={cert.id}
                            title={cert.title}
                            issuer={cert.issuer}
                            date={cert.date}
                            img={cert.img}
                            // link={cert.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModalCertifications;