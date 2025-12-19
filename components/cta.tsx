"use client"

import { Phone, ClipboardList, Percent } from "lucide-react"
import Link from "next/link"
import { trackContactEvent, trackPromoEvent } from "@/lib/pixel"

const nomorWhatsApp = "6281127010001";
const pesan = "Halo, saya tertarik dengan properti Sapphire Serenity Purwokerto";
const linkWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

export default function CallToAction() {
  const handleWhatsAppClick = () => {
    trackContactEvent()
  }

  const handlePromoClick = () => {
    trackPromoEvent()
  }

  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-container">
          <h2 className="cta-title">Untuk Anda yang Ingin Lebih dari Sekadar Hunian</h2>
          <p className="cta-description">
            Desain Elegan, Lokasi Premium, dan Suasana Privat. Unit terbatas, amankan sekarang juga!.
          </p>

          <div className="cta-buttons">
            <Link
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-primary"
              onClick={handleWhatsAppClick}
              title="Hubungi kami melalui WhatsApp untuk informasi lebih lanjut tentang properti"
            >
              <Phone className="cta-button-icon" />
              Whatsapp Kami
            </Link>
            <Link
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-outline"
              onClick={handlePromoClick}
              title="Dapatkan penawaran spesial dan promo eksklusif untuk properti Sapphire Serenity"
            >
              <Percent className="cta-button-icon" />
              Dapatkan Promo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
