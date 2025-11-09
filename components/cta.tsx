import { Phone, ClipboardList, Percent } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
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
              href="https://wa.me/6281127010001?text=Halo,%20saya%20tertarik%20dengan%20properti%20Sapphire%20Sapphire Serenity Karangklesem" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button cta-button-primary"
            >
              <Phone className="cta-button-icon" />
              Whatsapp Kami
            </Link>
            <Link 
            //border cta
              href="https://wa.me/6281127010001?text=Halo,%20saya%20tertarik%20dengan%20properti%20Sapphire%20Sapphire Serenity Karangklesem" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button cta-button-outline"
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
