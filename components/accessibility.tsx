import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <TreePine />,
      title: "Fasilitas Umum",
      items: [
        "4 Menit dari Taman Andhang Pangrenan",
        "7 Menit dari Terminal Bulupitu",
        "10 Menit dari Alun-Alun Purwokerto",
      ],
    },
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "2 menit dari Universitas Harapan Bangsa",
        "6 menit dari STIKOM Yos Sudarso",
        "9 menit dari IT Telkom Purwokerto",
      ],
    },
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: ["4 Menit dari Rumah Sakit Dadi Keluarga"],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan",
      items: ["9 menit dari Pasar Patikraja", "11 menit dari Rita Pasar Raya Kebondalem", "12 menit dari Rita Supermall"],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
