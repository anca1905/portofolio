import React from 'react';
import CertificateCard from './CertificateCard';
import { FaTimes } from 'react-icons/fa';

const ModalCertifications = ({ certifications, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 overflow-y-auto shadow-2xl">
                {/* Tombol Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400 text-2xl transition-colors cursor-pointer"
                    aria-label="Close modal"
                >
                    <FaTimes />
                </button>

                <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">
                    Semua Sertifikasi
                </h2>

                {/* Grid untuk menampilkan semua sertifikasi */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert) => (
                        <CertificateCard
                            key={cert.id}
                            title={cert.title}
                            issuer={cert.issuer}
                            date={cert.date}
                            img={cert.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModalCertifications;
