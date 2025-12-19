"use client"

import { WhatsAppIcon } from "./icons"
import { trackWhatsAppFloatingClick } from "@/lib/pixel"

export default function WhatsAppFloat() {
  const handleClick = () => {
    const nomorWhatsApp = "6281127010001";
    const pesan = "Halo, saya tertarik dengan properti Sapphire Serenity Purwokerto";

    // Track the click event to Meta Pixel
    trackWhatsAppFloatingClick()

    // Open WhatsApp
    window.open(`https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`, "_blank");
  }

  return (
    <div
      className="whatsapp-float"
      onClick={handleClick}
      title="Hubungi kami melalui WhatsApp floating button untuk bantuan lebih cepat"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
    >
      <div className="whatsapp-button">
        <WhatsAppIcon size={28} className="whatsapp-icon" />
      </div>
    </div>
  )
}
