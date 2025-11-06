"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dx8w9qwl6/image/upload/w_600,h_450,c_fill,f_auto,q_auto/v1761071337/type_90_qpwdco.avif"
                alt="Sapphire Serenity Purwokerto"
                width={300}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Sapphire Serenity Karangklesem</h2>
              <p className="about-description">
                Berada di jantung Purwokerto Selatan, Sapphire Serenity Karangklesem hadir sebagai perumahan Purwokerto yang menggabungkan hunian modern dan fleksibel dengan peluang investasi menarik. Berlokasi di Jl. Raya Gunung Tugel, Karangklesem, Purwokerto Selatan, kawasan ini mudah dijangkau dari pusat pendidikan, bisnis, dan destinasi wisata lokal. Desain mezzanine house yang estetik dan strategis menjadikan Sapphire Serenity pilihan ideal bagi keluarga yang mencari kenyamanan sekaligus investor yang ingin aset produktif dengan nilai sewa dan potensi capital gain yang terus meningkat.
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Projects Completed */}
            <div className="about-stat-card">
              <div className="about-stat-value">1</div>
              <div className="about-stat-label">Perumahan Terbaik di Purwokerto</div>
            </div>

            {/* Statistik - Awards */}
            <div className="about-stat-card">
              <div className="about-stat-value">10000+</div>
              <div className="about-stat-label">Keluarga Sapphire</div>
            </div>

            {/* Statistik - Satisfied Clients */}
            <div className="about-stat-card">
              <div className="about-stat-value">5+</div>
              <div className="about-stat-label">CCTV Kawasan</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Sapphire Serenity Karangklesem</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dqobwse9q/image/upload/v1755579076/Serenity_new_3_hfun13.jpg"
                  alt="Sapphire Serenity Purwokerto"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
Berada di jantung Purwokerto Selatan, Sapphire Serenity Karangklesem hadir sebagai perumahan Purwokerto yang menggabungkan hunian modern dan fleksibel dengan peluang investasi menarik. Berlokasi di Jl. Raya Gunung Tugel, Karangklesem, Purwokerto Selatan, kawasan ini mudah dijangkau dari pusat pendidikan, bisnis, dan destinasi wisata lokal. Desain mezzanine house yang estetik dan strategis menjadikan Sapphire Serenity pilihan ideal bagi keluarga yang mencari kenyamanan sekaligus investor yang ingin aset produktif dengan nilai sewa dan potensi capital gain yang terus meningkat.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>4 menit ke fasilitas kesehatan</li>
                  <li>6 menit ke fasilitas pendidikan</li>
                  <li>9 menit ke pusat perbelanjaan dan pasar tradisional</li>
                  <li>10 menit ke pusat kota Purwokerto</li>
                  <li>Lingkungan eksklusif dan tenang</li>
                  <li>Dikelilingi area hijau</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan sistem one gate dan petugas sekuriti</li>
                  <li>Ruang terbuka hijau untuk relaksasi dan interaksi sosial</li>
                  <li>Akses strategis ke fasilitas umum seperti terminal, alun-alun kota, dan pusat belanja</li>
                  <li>Berada di kawasan pengembangan kota baru, mendukung gaya hidup modern dan dinamis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
