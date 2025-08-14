// src/components/Certifications.jsx

import React, { useState } from "react";
import CertificateCard from "./CertificateCard";
import ModalCertifications from "./ModalCertifications"; // Import modal yang baru dibuat

// Import gambar sertifikasi
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
// import sertifikat11 from "../images/certificate/sertifikat-1.jpg";
// import sertifikat12 from "../images/certificate/sertifikat-1.jpg";
// Tambahkan import sertifikat lain jika ada

const certificationsData = [
    { id: 1, title: "Sertifikasi Belajar Dasar AI", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat1, link: "https://www.coursera.org/verify/xxxx" },
    { id: 2, title: "Sertifikasi Belajar Dasar Structured Query Language (SQL)", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat2, link: "https://www.freecodecamp.org/certification/xxxx" },
    { id: 3, title: "Sertifikasi Belajar Dasar Git dengan GitHub", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat3, link: "https://www.udemy.com/certificate/xxxx" },
    { id: 4, title: "Sertifikasi Pengenalan ke Logika Pemrograman (Programming Logic 101", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat4, link: "https://www.dicoding.com/certificates/xxxx" },
    { id: 5, title: "Sertifikasi Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat5, link: "https://www.dicoding.com/certificates/xxxx" },
    { id: 6, title: "Sertifikasi Belajar Dasar Visualisasi Data", issuer: "Coursera Dicoding", date: "Feb 2025", img: sertifikat6, link: "https://www.coursera.org/verify/xxxx" },
    { id: 7, title: "Sertifikasi Memulai Pemrograman dengan Python", issuer: "Coursera Dicoding", date: "Mar 2025", img: sertifikat7, link: "https://www.udemy.com/certificate/xxxx" },
    { id: 8, title: "Sertifikasi Exploring The FUndamental Of Ethical Hacking", issuer: "Workshop IT HMPS-SI", date: "2024", img: sertifikat8, link: "https://www.udemy.com/certificate/xxxx" },
    { id: 9, title: "Sertifikasi TalkIt On The Track With AI", issuer: "UKM Multimedia Study Club", date: "2024", img: sertifikat9, link: "https://www.dicoding.com/certificates/xxxx" },
    { id: 10, title: "Sertifikasi Course HTML", issuer: "sololearn course", date: "Sep 2021", img: sertifikat10, link: "https://www.dicoding.com/certificates/xxxx" },
    // { id: 10, title: "Sertifikasi React Dasar", issuer: "Dicoding", date: "Jul 2023", img: sertifikat11, link: "https://www.dicoding.com/certificates/xxxx" },
    // { id: 10, title: "Sertifikasi React Dasar", issuer: "Dicoding", date: "Jul 2023", img: sertifikat12, link: "https://www.dicoding.com/certificates/xxxx" },
    // Tambahkan data sertifikasi lainnya di sini
];

const Certifications = () => {
    // State untuk mengontrol status modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Mengambil hanya 4 sertifikasi pertama agar sesuai dengan 4 kolom
    const featuredCertifications = certificationsData.slice(0, 4);

    return (
        <section id="certifications" className="py-20 px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">
                Sertifikasi
            </h2>
            {/* Grid untuk halaman utama */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredCertifications.map((cert) => (
                    <CertificateCard
                        key={cert.id}
                        title={cert.title}
                        issuer={cert.issuer}
                        date={cert.date}
                        img={cert.img}
                        // link={cert.link} // Tautan ini dapat diaktifkan kembali jika diperlukan
                    />
                ))}
            </div>

            {/* Tombol untuk membuka modal */}
            {certificationsData.length > 4 && (
                <div className="text-center mt-10">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn btn-primary px-8 py-3 rounded-full bg-orange-500 text-black font-bold hover:bg-orange-400 transition"
                    >
                        Lihat Semua Sertifikasi
                    </button>
                </div>
            )}

            {/* Render modal jika isModalOpen bernilai true */}
            {isModalOpen && (
                <ModalCertifications
                    certifications={certificationsData}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </section>
    );
};

export default Certifications;