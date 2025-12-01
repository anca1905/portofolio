// src/components/Certifications.jsx

import React, { useState } from "react";
import CertificateCard from "./CertificateCard";
import ModalCertifications from "./ModalCertifications";

// --- IMPORT GAMBAR BARU ---
// Pastikan nama file sesuai dengan yang ada di folder images kamu
import sertifikatGemini from "../images/certificate/Sertificate Gemini Student_page-0001.jpg"; // Ganti nama filenya
import sertifikatIBM from "../images/certificate/Code Generations and Optimization - Muh Arsyad Ramsi_page-0001.jpg";       // Ganti nama filenya

// Import gambar lama
import sertifikat1 from "../images/certificate/sertifikat-1.jpg";
import sertifikat2 from "../images/certificate/sertifikat-2.jpg";
import sertifikat3 from "../images/certificate/sertifikat-3.jpg";
import sertifikat4 from "../images/certificate/sertifikat-4.jpg";
import sertifikat5 from "../images/certificate/sertifikat-5.jpg";
import sertifikat6 from "../images/certificate/sertifikat-6.jpg";
import sertifikat7 from "../images/certificate/sertifikat-7.jpg";
import sertifikat8 from "../images/certificate/sertifikat-8.jpg";
import sertifikat9 from "../images/certificate/sertifikat-9.jpg";
import sertifikat10 from "../images/certificate/sertifikat-10.png";

const certificationsData = [
    // --- TAMBAHAN BARU (Ditaruh paling atas agar muncul duluan) ---
    {
        id: 101, // ID unik baru
        title: "Gemini Certified Student",
        issuer: "Google for Education",
        date: "Oct 2025",
        img: sertifikatGemini,
        link: "#" // Masukkan link kredensial jika ada
    },
    {
        id: 102, // ID unik baru
        title: "Code Generations and Optimization",
        issuer: "IBM SkillsBuild & Hacktiv8",
        date: "Oct 2025",
        img: sertifikatIBM,
        link: "#"
    },
    // --- DATA LAMA ---
    { id: 1, title: "Sertifikasi Belajar Dasar AI", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat1, link: "https://www.coursera.org/verify/xxxx" },
    { id: 2, title: "Belajar Dasar SQL", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat2, link: "https://www.freecodecamp.org/certification/xxxx" },
    { id: 3, title: "Belajar Dasar Git dengan GitHub", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat3, link: "https://www.udemy.com/certificate/xxxx" },
    { id: 4, title: "Pengenalan Logika Pemrograman", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat4, link: "https://www.dicoding.com/certificates/xxxx" },
    { id: 5, title: "Dasar Pemrograman Software", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat5, link: "https://www.dicoding.com/certificates/xxxx" },
    { id: 6, title: "Belajar Dasar Visualisasi Data", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat6, link: "https://www.coursera.org/verify/xxxx" },
    { id: 7, title: "Memulai Pemrograman Python", issuer: "Coursera Dicoding", date: "Mar 2025", img: sertifikat7, link: "https://www.udemy.com/certificate/xxxx" },
    { id: 8, title: "Fundamental Of Ethical Hacking", issuer: "Workshop IT HMPS-SI", date: "2024", img: sertifikat8, link: "https://www.udemy.com/certificate/xxxx" },
    { id: 9, title: "TalkIt On The Track With AI", issuer: "UKM Multimedia Study Club", date: "2024", img: sertifikat9, link: "https://www.dicoding.com/certificates/xxxx" },
    { id: 10, title: "Sertifikasi Course HTML", issuer: "sololearn course", date: "Sep 2021", img: sertifikat10, link: "https://www.dicoding.com/certificates/xxxx" },
];

const Certifications = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const featuredCertifications = certificationsData.slice(0, 4);

    return (
        <section id="certifications" className="py-20 px-4 max-w-5xl mx-auto border-b border-slate-800">
            <div className="container mx-auto"> {/* Tambahkan Container agar rapi */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
                    Sertifikasi & Penghargaan
                </h2>

                {/* Gunakan grid gap-6 atau gap-8 agar tidak dempet */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredCertifications.map((cert) => (
                        <CertificateCard
                            key={cert.id}
                            title={cert.title}
                            issuer={cert.issuer}
                            date={cert.date}
                            img={cert.img}
                        />
                    ))}
                </div>

                {/* Tombol Modal */}
                {certificationsData.length > 4 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn px-8 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-lg"
                        >
                            Lihat Semua ({certificationsData.length})
                        </button>
                    </div>
                )}

                {isModalOpen && (
                    <ModalCertifications
                        certifications={certificationsData}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </section>
    );
};
export default Certifications;