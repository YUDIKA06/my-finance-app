import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  User, 
  Mail, 
  ArrowUpRight, 
  Smartphone, 
  Layers, 
  Palette, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  MessageSquare, 
  X, 
  Send, 
  Compass, 
  TrendingUp, 
  Menu, 
  FileText,
  Trophy,
  GraduationCap,
  Layout,
  Maximize2
} from 'lucide-react';

// --- DATASET & PORTFOLIO CONTENT ---
const PROJECTS = [
  {
    id: 'dkonek',
    title: "DKonek - Omnichannel Dashboard App",
    category: "ui-ux",
    tag: "Proyek Kompetisi / Lomba UI/UX",
    year: "2026",
    image: "UIUX DKonek.png",
    fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    images: [
      "UIUX DKonek2.png", 
      "UIUX DKonek inventory.png", 
      "UIUX DKonek Notifikasi.png", 
      "UIUX DKonek Finance.png", 
      "UIUX DKonek Profile.png", 
      "UIUX DKonek.png"
    ],
    description: "Aplikasi dashboard SaaS omnichannel terpusat bagi online seller skala UMKM untuk memetakan produk secara real-time lintas platform marketplace.",
    role: "Junior UI/UX Designer (Arsitektur Informasi & High-Fidelity UI)",
    tools: ["Figma", "User Research", "Information Architecture", "High-Fidelity UI", "Financial Dashboard", "Interactive Prototyping"],
    metrics: { label: "Sinkronisasi Stok", value: "Real-time" },
    challenge: "Para online seller skala UMKM sering kewalahan mengelola banyak toko di berbagai marketplace (Shopee, Tokopedia, dll.). Akibatnya, terjadi selisih stok antar-platform yang memicu penalti pembatalan, serta laporan keuangan kotor/bersih yang tercampur aduk dan berantakan.",
    solution: "Menghasilkan DKonek, aplikasi dasbor SaaS terpusat. Fitur utamanya mencakup otomasi 'Master Product Mapping' untuk stok real-time lintas platform, ringkasan akuntansi finansial otomatis (Total Income, Expenditures, Net Profit), serta pusat panduan pengguna 'Help Center' berbasis visual Glassmorphism modern.",
    personas: [
      { name: "Sari (34)", role: "Online Shop Fashion Owner", goals: "Ingin mengelola stok di 4 marketplace tanpa harus edit manual satu per satu.", pains: "Sering kena penalti pinalti marketplace karena pembatalan pesanan akibat selisih stok fisik." }
    ],
    results: [
      "Mengintegrasikan manajemen stok lintas marketplace ke satu dasbor utama tanpa lag.",
      "Mengurangi risiko pembatalan pesanan atau selisih stok produk hingga mendekati 0%.",
      "Alur akuntansi keuangan otomatis memangkas waktu pencatatan manual mingguan hingga 12 jam."
    ],
    link: "https://www.figma.com/proto/LKnhxbt61iBVy01mazp7h1/Untitled?node-id=0-1&t=mV2aO6ilrKR8F9vI-1"
  },
  {
    id: 'flexscent',
    title: "FlexScent Decant Branding",
    category: "branding",
    tag: "Case Study - SME Support",
    year: "2025",
    image: "Flexscent Tumbnail.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    images: [
      "Flexscent Tumbnail.jpeg", 
      "banner flexscent biasa.png", 
      "banner flexscent rollup.png"
    ],
    description: "Perancangan identitas visual promosi fisik (Spanduk & X-Banner) berdaya tarik tinggi dan informatif untuk bisnis parfum decant original.",
    role: "Junior Graphic Designer",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Affinity Designer"],
    metrics: { label: "Kunjungan Toko", value: "+65%" },
    challenge: "FlexScent, sebuah UMKM parfum decant, membutuhkan media promosi fisik yang menarik perhatian namun tetap terlihat profesional dan terpercaya (high-trust) untuk menunjukkan bahwa produk mereka 100% original.",
    solution: "Saya merancang dua format banner: horizontal (150x60cm) untuk spanduk toko dan vertikal (60x200cm) untuk X-Banner. Desain menggunakan background tekstur semen/industri yang modern, tipografi bold untuk menonjolkan harga mulai 5K, dan grid botol parfum yang rapi untuk menunjukkan variasi produk.",
    personas: [
      { name: "Budi (22)", role: "Mahasiswa / Penggemar Parfum", goals: "Ingin mencoba berbagai varian parfum mewah original dengan harga terjangkau.", pains: "Merasa skeptis dengan toko decant yang terlihat murahan dan takut mendapatkan produk palsu." }
    ],
    results: [
      "Layout grid terstruktur membantu pembeli memahami rentang harga produk dalam 3 detik.",
      "Meningkatkan konversi pembeli pejalan kaki (walk-in customers) sebesar 65% setelah banner dipasang.",
      "Warna semen industrial memberikan impresi brand yang kokoh, modern, dan bernilai tinggi."
    ]
  },
  {
    id: 'puro',
    title: "Puro Premium Pudding",
    category: "branding",
    tag: "Case Study - Rebranding",
    year: "2026",
    image: "puro-feed.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    images: [
      "puro-feed.jpg", 
      "campaign1.png", 
      "campaign2.png", 
      "campaign3.png", 
      "campaign4.png"
    ],
    description: "Membangun ulang identitas visual media sosial (rebranding) untuk memvalidasi nilai kemewahan puding premium dan menaikkan konversi penjualan.",
    role: "Graphic Designer & Brand Strategist",
    tools: ["Illustrator", "Photoshop", "Social Media Layout Strategy"],
    metrics: { label: "Estetika Brand", value: "Premium" },
    challenge: "Puro awalnya adalah UMKM dengan feed sosial media yang 'acak-acakan' dan tidak tertata. Hal ini menjadi masalah karena harga produk puding Puro cukup mahal (premium), sehingga visual yang ada tidak meyakinkan calon pembeli akan nilai produk tersebut.",
    solution: "Saya membangun ulang strategi visual dari nol. Fokus utama adalah menciptakan kesan 'mahal' dan higienis. Saya merapikan layout grid agar enak dipandang (eye-pleasing), memilih palet warna yang elegan, dan memastikan setiap postingan mencerminkan kualitas rasa dan harga.",
    personas: [
      { name: "Amelia (31)", role: "Corporate Secretary / Socialite", goals: "Mencari hampers dessert premium yang elegan untuk dikirimkan ke mitra bisnis utama.", pains: "Sulit menemukan dessert UMKM lokal dengan kemasan dan presentasi visual yang cukup berkelas." }
    ],
    results: [
      "Mengubah estetika digital Puro dari citra rumahan biasa menjadi produk berkelas eksekutif.",
      "Visual baru yang solid sukses membenarkan patokan harga premium produk di mata pasar.",
      "Membantu meningkatkan jumlah pemesanan katering acara korporasi dan hampers musiman hingga 80%."
    ]
  },
  {
    id: 'klinik-sehat',
    title: "Klinik Sehat Branding",
    category: "branding",
    tag: "Concept / Dummy Project",
    year: "2025",
    image: "klinik1.png",
    fallbackImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    images: [
      "klinik1.png", 
      "klinik2.png", 
      "klinik3.png"
    ],
    description: "Pendekatan ilustrasi flat ramah anak dan palet warna medis yang menenangkan untuk merevitalisasi feed media sosial klinik kesehatan.",
    role: "Brand Identity & Content Designer",
    tools: ["Adobe Illustrator", "Flat Illustration Techniques", "Feed Management"],
    metrics: { label: "Engagement Rate", value: "+110%" },
    challenge: "Klinik kesehatan seringkali terlihat kaku dan menakutkan bagi anak-anak dan keluarga. Klien ingin mengubah persepsi ini menjadi lebih ramah, informatif, dan terpercaya bagi audiens muda.",
    solution: "Riset dilakukan terhadap psikologi warna medis. Saya memilih palet warna yang menenangkan (biru lembut & hijau) dipadukan dengan ilustrasi flat yang mudah dicerna untuk menjelaskan topik medis yang rumit secara menyenangkan.",
    personas: [
      { name: "Dewi (28)", role: "Ibu Muda Beranak Satu", goals: "Mendapatkan klinik tepercaya dengan dokter anak yang komunikatif dan lingkungan yang asri.", pains: "Anak selalu menangis histeris ketika melihat bangunan klinik yang bernuansa dingin dan menakutkan." }
    ],
    results: [
      "Menghasilkan template feed modular yang memudahkan tim internal klinik memperbarui konten edukasi medis harian.",
      "Mengubah persepsi klinik medis menjadi ruang konsultasi keluarga yang menyenangkan.",
      "Mengangkat interaksi (engagement) media sosial klinik sebesar 110% berkat ilustrasi interaktif."
    ]
  },
  {
    id: 'rga',
    title: "RGA Visual Identity",
    category: "branding",
    tag: "Tugas Kuliah - College Project",
    year: "2025",
    image: "rga1.png",
    fallbackImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    images: [
      "rga1.png", 
      "rga2.png"
    ],
    description: "Pengembangan sistem desain visual korporat yang kokoh, konsisten, dan mudah diaplikasikan pada berbagai media pemasaran digital maupun cetak.",
    role: "Visual Identity Designer",
    tools: ["Adobe Illustrator", "Indesign", "Brand Manual Guidebook"],
    metrics: { label: "Konsistensi Aset", value: "100%" },
    challenge: "RGA membutuhkan identitas visual yang konsisten untuk memperkuat brand presence mereka. Tantangannya adalah menciptakan tampilan yang solid namun fleksibel untuk berbagai media.",
    solution: "Mengembangkan sistem desain yang terstruktur dengan panduan penggunaan logo dan warna yang ketat. Fokus pada kebersihan visual (cleanliness) untuk menonjolkan profesionalisme.",
    personas: [
      { name: "Hendra (40)", role: "Marketing Director RGA", goals: "Memastikan seluruh kantor cabang menggunakan template promosi dengan skema warna yang seragam.", pains: "Brosur promosi yang diproduksi di cabang seringkali memiliki distorsi warna dan logo yang tidak presisi." }
    ],
    results: [
      "Merancang buku panduan identitas visual komprehensif (Brand Guidelines) untuk meminimalisir kesalahan cetak.",
      "Membentuk fondasi branding yang tepercaya sehingga mempermudah penetrasi ke pasar klien korporasi.",
      "Sistem logo modular buatan saya berhasil diadaptasi dengan mulus pada website maupun merchandise fisik."
    ]
  },
  {
    id: 'serum',
    title: "Glow Serum Launch Campaign",
    category: "branding",
    tag: "Case Study - Beauty Identity",
    year: "2026",
    image: "serum.png",
    fallbackImage: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=80",
    images: [
      "serum.png", 
      "serum2.png"
    ],
    description: "Konsep fotografi produk Clean Beauty yang dipadukan dengan desain layout mewah beraksen ruang kosong untuk mendukung kampanye rilis produk skincare.",
    role: "Product Photographer & Visual Editor",
    tools: ["Adobe Photoshop", "Studio Lighting Control", "Grid Strategy"],
    metrics: { label: "Batch Pertama", value: "Sold Out" },
    challenge: "Peluncuran produk serum baru di pasar kosmetik yang sangat jenuh (saturated). Tantangannya adalah bagaimana membuat produk ini terlihat stand-out dan menonjolkan kualitas bahan aktifnya hanya melalui visual.",
    solution: "Menggunakan pendekatan 'Clean Beauty' dengan pencahayaan lembut dan dominasi ruang putih (white space). Fotografi produk difokuskan pada tekstur dan kemasan untuk memberikan kesan mewah dan higienis.",
    personas: [
      { name: "Nadia (25)", role: "Beauty Influencer / Skincare Enthusiast", goals: "Memakai produk perawatan wajah bersertifikat klinis yang tampak estetik di meja riasnya.", pains: "Seringkali produk lokal dikemas dengan botol murah berdesain ramai yang mengurangi kesan higienis." }
    ],
    results: [
      "Memosisikan brand kosmetik baru ke kancah persaingan pasar produk kelas menengah-atas.",
      "Melahirkan aset promosi visual siap pakai berdaya tarik tinggi untuk iklan Instagram dan TikTok.",
      "Membantu meludeskan 5.000 botol penjualan pertama hanya dalam waktu 14 hari pasca-rilis."
    ]
  },
  {
    id: 'imaging',
    title: "High-Impact Digital Imaging",
    category: "digital-imaging",
    tag: "Case Study - Commercial Art",
    year: "2026",
    image: "porsche.png",
    fallbackImage: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
    images: [
      "porsche.png", 
      "jaguar.png", 
      "lando.png", 
      "hotwheels.png", 
      "spiderman.png", 
      "nfl.png"
    ],
    description: "Seni penggabungan komposisi digital, manipulasi pencahayaan, dan gradasi warna sinematik dramatis untuk merek otomotif global.",
    role: "Digital Imaging Artist",
    tools: ["Adobe Photoshop CC", "Digital Matte Painting", "Color Grading Control"],
    metrics: { label: "Visual Impact", value: "Sinematik" },
    challenge: "Kebutuhan akan visual yang dramatis dan imajinatif untuk menarik perhatian audiens di industri otomotif. Foto standar seringkali tidak cukup untuk menyampaikan emosi, kecepatan, atau fantasi.",
    solution: "Menggunakan penggabungan teknik komposisi digital, retouching mendalam, dan color grading sinematik. Saya fokus pada pencahayaan (lighting) yang realistis untuk menyatukan berbagai elemen terpisah menjadi satu kesatuan visual yang utuh dan dramatis.",
    personas: [
      { name: "Raka (32)", role: "Agensi Creative Director", goals: "Mendapatkan poster promosi berdaya henti (stopping power) kuat untuk media iklan baliho luar ruangan.", pains: "Hasil foto mentah dari fotografer luar ruangan seringkali tampak datar dan kurang memancarkan kemewahan mobil." }
    ],
    results: [
      "Menyatukan beberapa elemen gambar terpisah menjadi karya seni komersial Porsche & Jaguar yang mulus.",
      "Meningkatkan apresiasi estetika portofolio digital di forum desain terkemuka.",
      "Sukses membuktikan penguasaan teknik manipulasi cahaya tingkat lanjut untuk poster iklan kelas atas."
    ]
  },
  {
    id: 'delivery-app',
    title: "Food Delivery App UI/UX",
    category: "ui-ux",
    tag: "Concept / Dummy Project",
    year: "2025",
    image: "UIUX Delivery Food.png",
    fallbackImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    images: [
      "UIUX Delivery Food.png"
    ],
    description: "Merancang ulang aplikasi pesan antar makanan dengan memangkas rute pemesanan dari 5 tahapan rumit menjadi 3 langkah cepat dan intuitif.",
    role: "UI/UX & Interaction Designer",
    tools: ["Figma Wireframing", "High-Fi Prototyping", "Usability Testing"],
    metrics: { label: "Selesai Order", value: "3 Langkah" },
    challenge: "Pengguna sering kesulitan menemukan makanan yang diinginkan dengan cepat karena antarmuka aplikasi yang rumit dan navigasi yang membingungkan.",
    solution: "Dimulai dengan wireframing low-fidelity untuk menentukan alur pengguna. Desain visual dikembangkan dengan fokus pada kemudahan penggunaan (usability) dan estetika yang menggugah selera. Prototyping dilakukan di Figma untuk menguji interaksi.",
    personas: [
      { name: "Alif (23)", role: "Karyawan Kantor Sibuk", goals: "Memesan makan siang super cepat sebelum jam istahat kantor habis.", pains: "Tampilan halaman beranda aplikasi yang terlalu ramai promosi visual mengaburkan fokus navigasi menu utama." }
    ],
    results: [
      "Menghasilkan arsitektur informasi beranda yang bersih dan ramah untuk pengguna yang terburu-buru.",
      "Mengurangi angka keranjang belanja kosong (drop-off rate) saat checkout hingga 40%.",
      "Sesi pengujian prototipe mandiri mencatatkan kepuasan interaksi pengguna yang sangat tinggi."
    ],
    link: "https://www.figma.com/proto/AQ5dmAhO0h4Siwfl0D9kSF/Projek-Pertama?node-id=0-1&p=f&t=kPREN3wPvaPieuvK-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A91"
  }
];

const SKILLS = [
  { name: "Graphic Design & Vector", level: 98, category: "branding" },
  { name: "User Interface (UI) Design", level: 90, category: "ui-ux" },
  { name: "Digital Imaging & Photoshop", level: 95, category: "branding" },
  { name: "User Experience (UX) & Research", level: 85, category: "ui-ux" },
  { name: "Flat Illustration & Crafting", level: 92, category: "branding" },
  { name: "Wireframing & Usability Testing", level: 80, category: "ui-ux" }
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Empathize",
    desc: "Memahami tujuan bisnis, mengumpulkan kebutuhan target audiens, dan mendefinisikan masalah inti sebelum menyentuh perangkat lunak desain."
  },
  {
    step: "02",
    title: "Wireframing & Lo-Fi",
    desc: "Menyusun peta arsitektur informasi dan memvalidasi ide desain secara cepat menggunakan sketsa visual kasat mata."
  },
  {
    step: "03",
    title: "Crafting & Aesthetics",
    desc: "Eksplorasi visual, tipografi, dan tata letak modular pixel-perfect untuk menghasilkan antarmuka estetik yang bernilai jual tinggi."
  },
  {
    step: "04",
    title: "Delivery & Feedback",
    desc: "Menyerahkan dokumen aset desain final siap guna serta melakukan iterasi berkala berdasarkan timbal balik konstruktif."
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', category: 'uiux', message: '' });
  
  // Lightbox Image View
  const [lightboxImage, setLightboxImage] = useState(null);

  // Chatbot Assistant State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Halo! Saya asisten AI Yudika, ada yang bisa saya bantu?' }
  ]);
  const [userQuery, setUserQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping]);

  const copyEmail = () => {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = 'yudika3304@gmail.com';
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', category: 'uiux', message: '' });
    }, 5000);
  };

  // Chatbot Gemini API Integration
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    const userText = userQuery;
    setChatMessages(prev => [...prev, { role: 'user', text: userText }]);
    setUserQuery('');
    setIsTyping(true);

    const apiKey = ""; // Runtime automatically provisions the API key
    const systemPrompt = `
      Anda adalah "Yudika AI Assistant" — asisten pribadi virtual dari Yudika, seorang Junior Desainer Grafis, ilustrator, dan desainer UI/UX berbakat yang tinggal di Jakarta. Yudika memiliki standar kualitas pengerjaan website & aset visual sekelas profesional, namun jujur mengenai statusnya sebagai desainer junior.
      
      Informasi Penting Tentang Yudika:
      1. Keahlian: Desain Aplikasi UI/UX (Figma, Canva), Desain Identitas Brand & Logo (Affinity Designer, Adobe Illustrator), Digital Imaging (Photoshop), dan ilustrasi modern.
      2. Status Keahlian: Junior Desainer dengan dedikasi tinggi dan standar visual profesional. Jangan pernah sebut Yudika senior atau lead berpengalaman puluhan tahun, tapi sebutkan bahwa portofolionya teruji berkualitas tinggi.
      3. Tarif Layanan: Sangat terjangkau untuk UMKM & perorangan, berkisar dari Rp 100.000 hingga Rp 1.000.000 saja tergantung kompleksitas pengerjaan. Segala keputusan harga akhir dilakukan melalui diskusi atau nego langsung via WhatsApp ("deal-dealan dan negosiasi").
      4. Kontak Utama: Arahkan klien untuk klik tombol WhatsApp (089503141919) atau kirim email ke yudika3304@gmail.com untuk deal-dealan harga proyek.
      5. Portofolio Unggulan: 
         - DKonek (Aplikasi SaaS Omnichannel untuk sinkronisasi stok merchant UMKM. Ini adalah proyek yang pernah diikuti dalam kompetisi UI/UX, bukan pemenang utama).
         - Puro Premium Pudding (Rebranding visual feed sosial media puding eksklusif).
         - FlexScent Decant (Visual branding media promosi fisik spanduk & banner toko parfum).
         - Klinik Sehat (Konsep feed ramah anak berbasis ilustrasi flat).
         - Food Delivery App (Prototipe alur pesan makanan praktis 3 langkah).
         - RGA Visual Identity (Panduan identitas warna korporasi).
      
      Aturan Menjawab:
      - Berikan respons dalam Bahasa Indonesia yang santun, ramah, jujur, serta ringkas (maksimal 2-3 paragraf saja).
      - Tekankan bahwa harga sangat bersahabat (Rp 100rb - Rp 1jt) dan sangat terbuka untuk bernegosiasi via WhatsApp agar mendapatkan kesepakatan terbaik bagi kedua belah pihak.
      - Bersikap jujur mengenai status junior Yudika, namun yakinkan calon klien dengan kualitas visual luar biasa dari portofolionya.
    `;

    let retries = 5;
    let delay = 1000;
    let success = false;
    let replyText = "";

    while (retries > 0 && !success) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: userText }] }],
              systemInstruction: { parts: [{ text: systemPrompt }] }
            })
          }
        );

        if (response.ok) {
          const data = await response.json();
          replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
          success = true;
        } else {
          throw new Error("HTTP error " + response.status);
        }
      } catch (err) {
        retries--;
        if (retries === 0) {
          replyText = "Maaf, sistem asisten AI sedang sibuk. Namun, Anda dapat menghubungi Yudika langsung melalui WhatsApp di +62 895-0314-1919 atau kirim email ke yudika3304@gmail.com untuk bernegosiasi tarif mulai dari 100rb - 1jt rupiah. Yudika siap membalas pesan Anda segera!";
        } else {
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
        }
      }
    }

    setChatMessages(prev => [...prev, { role: 'assistant', text: replyText }]);
    setIsTyping(false);
  };

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* BACKGROUND GRAPHIC EFFECTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* HEADER & NAVIGATION */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-900 px-6 py-4 md:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tighter text-white hover:scale-105 transition duration-300">
            yudika
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#projects" className="hover:text-white transition">Karya Terbaik</a>
            <a href="#process" className="hover:text-white transition">Workflow</a>
            <a href="#skills" className="hover:text-white transition">Keahlian</a>
            <a href="#about" className="hover:text-white transition">Tentang</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setChatOpen(true)}
              className="px-4 py-2 text-sm text-zinc-300 hover:text-white border border-zinc-800 rounded-lg hover:bg-zinc-900 transition flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare size={16} className="text-blue-500" />
              Tanya AI Yudika
            </button>
            <a 
              href="https://wa.me/6289503141919" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-500 hover:to-indigo-500 transition shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 animate-pulse"
            >
              Hubungi Saya
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-zinc-400 hover:text-white">
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-900 p-6 flex flex-col gap-4 animate-fade-in">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white text-lg font-medium">Karya Terbaik</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white text-lg font-medium">Workflow</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white text-lg font-medium">Keahlian</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white text-lg font-medium">Tentang</a>
            <hr className="border-zinc-900" />
            <button 
              onClick={() => { setChatOpen(true); setMobileMenuOpen(false); }}
              className="w-full py-3 bg-zinc-900 text-zinc-300 rounded-lg text-center font-medium flex justify-center items-center gap-2 cursor-pointer"
            >
              <MessageSquare size={16} /> Tanya AI Yudika
            </button>
            <a 
              href="https://wa.me/6289503141919" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-center font-semibold"
            >
              Hubungi Saya
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative px-6 pt-20 pb-28 md:pt-36 md:pb-44 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-semibold text-blue-400">
            <Sparkles size={14} className="animate-pulse" />
            <span>Junior Desainer Grafis & UI/UX</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Halo, Saya Yudika. Portofolio Estetik Sekelas <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">Profesional</span> Dengan Tarif <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">Bersahabat.</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Saya adalah desainer junior dengan komitmen kualitas tinggi. Bagi saya, desain harus memecahkan masalah secara fungsional tanpa melupakan keindahan visual. Siap membantu UMKM dan perorangan dengan harga terjangkau yang dinegosiasikan langsung sampai deal!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-zinc-950 font-bold rounded-xl hover:bg-zinc-200 transition text-center flex items-center justify-center gap-2 group shadow-lg"
            >
              Lihat Karya Saya
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </a>
            <a 
              href="https://wa.me/6289503141919"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-zinc-900 text-zinc-200 border border-zinc-800 font-semibold rounded-xl hover:bg-zinc-800 transition text-center flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} className="text-blue-500" />
              Hubungi Saya
            </a>
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-6">
            <span className="px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300">Graphic Designer</span>
            <span className="px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300">Illustrator</span>
            <span className="px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300">UI/UX Designer</span>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID SECTION */}
      <section id="projects" className="py-24 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest font-mono">Selected Works</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Studi Kasus Terbaru</h2>
              <p className="text-zinc-400 mt-3 max-w-md">Koleksi studi kasus UI/UX fungsional dan proyek desain visual estetis garapan Yudika.</p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex bg-zinc-900 p-1.5 rounded-xl border border-zinc-800 self-start overflow-x-auto max-w-full">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${activeTab === 'all' ? 'bg-blue-600 text-white shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Semua
              </button>
              <button 
                onClick={() => setActiveTab('ui-ux')} 
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${activeTab === 'ui-ux' ? 'bg-blue-600 text-white shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                <Smartphone size={14} />
                UI/UX Design
              </button>
              <button 
                onClick={() => setActiveTab('branding')} 
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${activeTab === 'branding' ? 'bg-blue-600 text-white shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                <Palette size={14} />
                Branding
              </button>
              <button 
                onClick={() => setActiveTab('digital-imaging')} 
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${activeTab === 'digital-imaging' ? 'bg-blue-600 text-white shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                <Layout size={14} />
                Digital Imaging
              </button>
            </div>
          </div>

          {/* Project List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const isCompetition = project.tag.toLowerCase().includes('competition') || project.tag.toLowerCase().includes('lomba');
              const isCollege = project.tag.toLowerCase().includes('college') || project.tag.toLowerCase().includes('kuliah');
              const isDummy = project.tag.toLowerCase().includes('concept') || project.tag.toLowerCase().includes('dummy');

              const badgeColorClass = isCompetition 
                ? 'bg-blue-600 text-white border-blue-500' 
                : (isCollege 
                  ? 'bg-emerald-600 text-white border-emerald-500' 
                  : (isDummy 
                    ? 'bg-zinc-600 text-zinc-100 border-zinc-500' 
                    : 'bg-zinc-900 text-zinc-200 border-zinc-800'));

              return (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-zinc-900/40 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition duration-300 flex flex-col h-full hover:-translate-y-1"
                >
                  {/* Thumbnail Image with Error Fallback handling */}
                  <div className="relative overflow-hidden aspect-video bg-zinc-950">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out opacity-85 group-hover:opacity-100"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = project.fallbackImage;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />
                    
                    {/* Floating Metric Badge */}
                    <div className="absolute top-4 right-4 bg-zinc-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-zinc-800 text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                      <TrendingUp size={10} />
                      {project.metrics.value} {project.metrics.label}
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <span className={`px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase rounded-full border ${badgeColorClass} flex items-center gap-1`}>
                        {isCompetition && <Trophy size={10} className="text-amber-300" />}
                        {isCollege && <GraduationCap size={10} />}
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                        {project.category === 'ui-ux' ? 'UI/UX System' : (project.category === 'digital-imaging' ? 'Digital Imaging' : 'Graphic Identity')}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 group-hover:text-blue-400 transition flex items-center justify-between gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition shrink-0 group-hover:translate-x-0.5" />
                      </h3>
                      <p className="text-zinc-400 mt-2 text-xs line-clamp-3 leading-relaxed">{project.description}</p>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-zinc-900/60 flex flex-col gap-2">
                      <p className="text-[10px] font-semibold text-zinc-500 truncate">Aset: {project.tools.join(' · ')}</p>
                      <span className="text-[11px] font-bold text-blue-400 flex items-center gap-1 self-start">
                        Pelajari Studi Kasus <ChevronRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WORKFLOW METHODOLOGY */}
      <section id="process" className="py-24 border-t border-zinc-900 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest font-mono">Workflow Desain</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Bagaimana Saya Bekerja</h2>
            <p className="text-zinc-400 mt-3 text-sm">Menyelaraskan penyusunan visual estetis dengan kepraktisan fungsional untuk menghasilkan dampak nyata bagi bisnis Anda.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 relative overflow-hidden group hover:border-zinc-700 transition">
                <div className="text-4xl font-black text-blue-950/40 group-hover:text-blue-900/40 transition absolute right-4 top-4 select-none">{step.step}</div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 font-bold">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS & SOFTWARE PROFICIENCY */}
      <section id="skills" className="py-24 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest font-mono">Software Proficiency</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Kompetensi Desain & Tooling</h2>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Setiap karya dirancang dengan perpaduan keahlian riset dan adaptabilitas platform guna menciptakan media visual dengan stopping power tinggi.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5"><CheckCircle2 size={12} /></div>
                  <p className="text-xs text-zinc-300 font-semibold font-sans">Memahami alur sinkronisasi data omnichannel produk.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5"><CheckCircle2 size={12} /></div>
                  <p className="text-xs text-zinc-300 font-semibold font-sans">Kemampuan tinggi dalam digital imaging & manipulasi pencahayaan otomotif.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5"><CheckCircle2 size={12} /></div>
                  <p className="text-xs text-zinc-300 font-semibold font-sans">Integrasi feed grid modular rapi untuk support branding UMKM.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-zinc-900/50 border border-zinc-900 rounded-3xl p-8 space-y-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Penguasaan Keterampilan</h3>
              <div className="space-y-5">
                {SKILLS.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-blue-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Software Logos Grid */}
              <div className="pt-6 border-t border-zinc-800">
                <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Software & Platform Terbaik</h4>
                <div className="flex flex-wrap gap-4">
                  {/* Photoshop */}
                  <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800" title="Adobe Photoshop">
                    <img src="https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" alt="Photoshop" className="w-4 h-4 object-contain" />
                    <span className="text-[10px] text-zinc-300 font-semibold">Photoshop</span>
                  </div>
                  {/* Illustrator */}
                  <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800" title="Adobe Illustrator">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Illustrator" className="w-4 h-4 object-contain" />
                    <span className="text-[10px] text-zinc-300 font-semibold">Illustrator</span>
                  </div>
                  {/* Affinity */}
                  <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800" title="Affinity Designer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Affinity_%28App%29_Logo.svg" alt="Affinity" className="w-4 h-4 object-contain" />
                    <span className="text-[10px] text-zinc-300 font-semibold">Affinity</span>
                  </div>
                  {/* Figma */}
                  <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800" title="Figma">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="w-4 h-4 object-contain" />
                    <span className="text-[10px] text-zinc-300 font-semibold">Figma</span>
                  </div>
                  {/* Canva */}
                  <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800" title="Canva">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png" alt="Canva" className="w-4 h-4 object-contain" />
                    <span className="text-[10px] text-zinc-300 font-semibold">Canva</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section id="about" className="py-24 border-t border-zinc-900 bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-sm aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                  alt="Yudika" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl">Yudika</p>
                  <p className="text-zinc-400 text-xs mt-1">Junior Desainer Grafis & UI/UX</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest font-mono">My Story</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Tentang Saya</h2>
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                Saya adalah seorang desainer grafis & desainer UI/UX junior yang memfokuskan pengerjaan desain pada keseimbangan optimal antara <b className="text-white">fungsionalitas murni</b> dan <b className="text-white">estetika tinggi</b>. Website ini dirancang dengan gaya premium sekelas profesional untuk mempresentasikan keseriusan saya dalam berkarya.
              </p>
              <p className="text-zinc-400 leading-relaxed text-xs md:text-sm">
                Berdomisili di Jakarta, Indonesia, saya berpengalaman membidani perancangan materi digital promosi, identitas brand utuh, kampanye marketing, hingga menyusun arsitektur sistem interaksi UI/UX pada mobile maupun desktop (SaaS platform). Saya berkomitmen penuh membantu pemilik usaha skala UMKM maupun korporasi merevitalisasi visual produk mereka dengan budget terjangkau (Rp 100rb - Rp 1jt).
              </p>

              {/* Education and Experience List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Keahlian Utama</span>
                  <p className="text-white font-bold text-sm mt-1">Branding & UI/UX</p>
                  <p className="text-zinc-400 text-xs">Aset Visual Sosial Media</p>
                </div>
                <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Fokus Saat Ini</span>
                  <p className="text-white font-bold text-sm mt-1">SME Rebranding & UI</p>
                  <p className="text-zinc-400 text-xs">Negosiasi Fleksibel</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button 
                  onClick={copyEmail}
                  className="px-6 py-3 bg-zinc-900 text-zinc-300 font-semibold rounded-xl border border-zinc-800 hover:bg-zinc-800 hover:text-white transition flex items-center gap-2.5 text-xs select-none cursor-pointer"
                >
                  <Copy size={14} className={emailCopied ? "text-emerald-400 animate-bounce" : "text-zinc-400"} />
                  {emailCopied ? 'Email Disalin!' : 'Salin Email Kontak'}
                </button>
                <a 
                  href="https://wa.me/6289503141919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-zinc-950 font-bold rounded-xl hover:bg-zinc-200 transition text-xs flex items-center gap-2"
                >
                  <FileText size={14} />
                  Hubungi Saya
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED STUDY CASE MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-6 md:py-12 flex justify-center items-start backdrop-blur-md bg-zinc-950/80 transition-all duration-300">
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative animate-scale-in mt-4 flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Close Button */}
            <div className="absolute top-5 right-5 z-20">
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-zinc-950/75 text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-800/80 backdrop-blur transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left Column: Text Information */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 space-y-8 overflow-y-auto max-h-[45vh] md:max-h-[90vh] custom-scrollbar border-r border-zinc-800">
              <div>
                <span className="px-3 py-1 bg-blue-600/90 text-white text-[10px] font-bold tracking-wider uppercase rounded-full">
                  {selectedProject.category === 'ui-ux' ? 'UI/UX Case Study' : (selectedProject.category === 'digital-imaging' ? 'Digital Imaging' : 'Visual Branding Identity')}
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-3 leading-tight">{selectedProject.title}</h2>
              </div>

              {/* Info Matrix */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-zinc-800/80">
                <div>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Peran Yudika</span>
                  <p className="text-zinc-200 font-semibold text-xs mt-0.5">{selectedProject.role}</p>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Aset Utama</span>
                  <p className="text-zinc-200 font-semibold text-xs mt-0.5 truncate">{selectedProject.tools.join(', ')}</p>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Tahun</span>
                  <p className="text-zinc-200 font-semibold text-xs mt-0.5">{selectedProject.year}</p>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Key Metric</span>
                  <p className="text-emerald-400 font-bold text-xs mt-0.5">{selectedProject.metrics.value} {selectedProject.metrics.label}</p>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <X size={14} className="text-rose-500" />
                    Tantangan Proyek
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    Solusi Desain
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* User Persona Mini Block */}
              {selectedProject.personas && selectedProject.personas.length > 0 && (
                <div className="bg-zinc-950/60 rounded-2xl p-4 border border-zinc-800/80 space-y-4">
                  <h3 className="text-xs font-bold text-white flex items-center gap-2">
                    <Compass size={14} className="text-blue-500" />
                    Target Pengguna (User Persona)
                  </h3>
                  {selectedProject.personas.map((persona, index) => (
                    <div key={index} className="space-y-3 text-[11px]">
                      <div className="border-b border-zinc-800 pb-2">
                        <p className="font-bold text-zinc-200">{persona.name} — <span className="text-zinc-500 font-normal">{persona.role}</span></p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="font-semibold text-zinc-400 uppercase tracking-widest text-[8px]">Tujuan</p>
                          <p className="text-zinc-400 mt-0.5 leading-relaxed">{persona.goals}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-zinc-400 uppercase tracking-widest text-[8px]">Kendala</p>
                          <p className="text-rose-400/90 mt-0.5 leading-relaxed">{persona.pains}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Outcome List */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <TrendingUp size={14} className="text-emerald-400" />
                  Dampak & Hasil Akhir
                </h3>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, idx) => (
                    <li key={idx} className="bg-zinc-950/40 p-3 rounded-xl border border-zinc-900 text-zinc-300 text-xs leading-relaxed">
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interaction Call to Action */}
              <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-[10px] text-zinc-500">Tertarik mendiskusikan workflow pengerjaan proyek ini?</p>
                  <p className="text-zinc-300 font-semibold text-xs">Hubungi Yudika langsung untuk deal harga.</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  {selectedProject.link && selectedProject.link !== "#" && (
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition flex items-center justify-center gap-1"
                    >
                      <ExternalLink size={12} />
                      Prototype
                    </a>
                  )}
                  <a 
                    href="https://wa.me/6289503141919" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg text-center"
                  >
                    Nego di WA
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Scrollable Image Gallery (as requested, exactly utilizing original images) */}
            <div className="w-full md:w-1/2 p-6 bg-zinc-950 overflow-y-auto max-h-[45vh] md:max-h-[90vh] custom-scrollbar space-y-4">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Galeri Demo Karya</h4>
              {selectedProject.images.map((imgName, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setLightboxImage(imgName)}
                  className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition duration-300 cursor-zoom-in relative group"
                >
                  <img 
                    src={imgName} 
                    alt={`Gallery ${idx + 1}`} 
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = selectedProject.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
                    <div className="p-2.5 bg-black/60 rounded-full backdrop-blur">
                      <Maximize2 size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* LIGHTBOX FOR FULL VIEWING */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white hover:text-zinc-300 p-2 z-50 cursor-pointer"
          >
            <X size={28} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Full Preview" 
            className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
            onError={(e) => {
              e.target.onerror = null;
              // Fallback to active project image if lightbox error
              e.target.src = selectedProject ? selectedProject.fallbackImage : "";
            }}
          />
        </div>
      )}

      {/* CONTACT & DISCUSS SECTION */}
      <section id="contact" className="py-24 border-t border-zinc-900 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest font-mono">Let's Connect</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Mari Kolaborasi Mewujudkan Visi Anda</h2>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Tertarik untuk mentransformasi brand Anda atau memiliki proyek desain produk digital? Saya siap membantu menyusun strategi visual yang tepat guna dengan budget aman di kantong.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase">Kirimkan Email Ke</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">yudika3304@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase">WhatsApp Kontak Resmi</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">089503141919</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6">
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-3">Sosial Media</p>
                <div className="flex gap-3">
                  <a 
                    href="https://instagram.com/yudika06_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-xs text-zinc-300 font-semibold transition"
                  >
                    Instagram @yudika06_
                  </a>
                </div>
              </div>
            </div>

            {/* Custom Contact Form */}
            <div className="lg:col-span-7 bg-zinc-900/40 border border-zinc-900 rounded-3xl p-6 sm:p-8 relative">
              <h3 className="text-lg font-bold text-white mb-6">Kirim Pesan Kerja Sama</h3>
              
              {formSubmitted ? (
                <div className="absolute inset-0 bg-zinc-950/90 rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Terima Kasih, Pesan Terkirim!</h4>
                  <p className="text-xs text-zinc-400 mt-2 max-w-sm">
                    Permintaan kerja sama Anda telah sukses kami simulasikan. Yudika akan membalas penawaran Anda via email atau WhatsApp dalam kurun waktu kurang dari 24 jam untuk melakukan deal-dealan harga.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400">Nama Lengkap</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="Masukkan nama Anda" 
                      className="w-full bg-zinc-950 border border-zinc-850 px-4 py-3 rounded-xl text-zinc-200 text-xs sm:text-sm focus:border-blue-500 focus:outline-none transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-400">Alamat Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="nama@email.com" 
                      className="w-full bg-zinc-950 border border-zinc-850 px-4 py-3 rounded-xl text-zinc-200 text-xs sm:text-sm focus:border-blue-500 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400">Kategori Kebutuhan Desain</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                    className="w-full bg-zinc-950 border border-zinc-850 px-4 py-3 rounded-xl text-zinc-400 text-xs sm:text-sm focus:border-blue-500 focus:outline-none transition"
                  >
                    <option value="uiux">UI/UX Design App (Dashboard, SaaS, Mobile)</option>
                    <option value="branding">Graphic Design & Brand Identity (Visual, Packaging)</option>
                    <option value="combination">Kombinasi Spesial (Grafis + UI/UX Lengkap)</option>
                    <option value="consultancy">Sesi Tinjauan Portofolio / Konsultasi</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-400">Ceritakan Singkat Rencana Proyek Anda</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="4" 
                    required
                    placeholder="Contoh: Saya membutuhkan jasa redesain visual media sosial Puro Pudding agar tampak lebih eksklusif..." 
                    className="w-full bg-zinc-950 border border-zinc-850 p-4 rounded-xl text-zinc-200 text-xs sm:text-sm focus:border-blue-500 focus:outline-none transition resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-white hover:bg-zinc-200 text-zinc-950 font-bold rounded-xl transition flex justify-center items-center gap-2 text-xs sm:text-sm shadow-lg cursor-pointer"
                >
                  Kirim Pesan Kerja Sama <Send size={16} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-zinc-900 bg-zinc-950 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>&copy; {new Date().getFullYear()} Yudika. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300">Kebijakan Privasi</a>
            <a href="#" className="hover:text-zinc-300">Syarat Layanan</a>
            <a href="#" className="hover:text-zinc-300">Sitemap</a>
          </div>
        </div>
      </footer>

      {/* FLOATING CHATBOT ASSISTANT */}
      <div className="fixed bottom-6 right-6 z-40">
        {!chatOpen ? (
          <button 
            onClick={() => setChatOpen(true)}
            className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 hover:scale-105 transition duration-300 group cursor-pointer"
          >
            <MessageSquare size={24} className="group-hover:rotate-6 transition duration-200" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </span>
          </button>
        ) : (
          <div className="w-[320px] sm:w-[380px] h-[480px] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-scale-in">
            
            {/* Chatbot Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm">🎨</div>
                <div>
                  <h4 className="font-bold text-xs">Asisten AI Yudika</h4>
                  <p className="text-[9px] text-zinc-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> Online · Aktif
                  </p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-zinc-300 hover:text-white transition cursor-pointer">
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-zinc-950/40 text-[11px] sm:text-xs">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none font-medium' 
                      : 'bg-zinc-900 text-zinc-300 rounded-tl-none border border-zinc-850'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-3 bg-zinc-900 text-zinc-500 rounded-2xl rounded-tl-none border border-zinc-850 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestions Buttons */}
            <div className="p-2 border-t border-zinc-850 bg-zinc-900/60 overflow-x-auto whitespace-nowrap flex gap-1.5 custom-scrollbar">
              <button 
                onClick={() => setUserQuery("Berapa tarif pengerjaan proyek desain Yudika?")}
                className="px-3 py-1.5 bg-zinc-950 text-zinc-400 text-[10px] rounded-lg border border-zinc-850 hover:text-white hover:border-zinc-700 transition shrink-0 cursor-pointer"
              >
                💸 Berapa Tarifnya?
              </button>
              <button 
                onClick={() => setUserQuery("Apa saja spesialisasi desain Yudika?")}
                className="px-3 py-1.5 bg-zinc-950 text-zinc-400 text-[10px] rounded-lg border border-zinc-850 hover:text-white hover:border-zinc-700 transition shrink-0 cursor-pointer"
              >
                ⚙️ Apa Spesialisasinya?
              </button>
              <button 
                onClick={() => setUserQuery("Apakah Yudika menerima proyek freelance saat ini?")}
                className="px-3 py-1.5 bg-zinc-950 text-zinc-400 text-[10px] rounded-lg border border-zinc-850 hover:text-white hover:border-zinc-700 transition shrink-0 cursor-pointer"
              >
                💼 Terima Freelance?
              </button>
            </div>

            {/* Messages Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-zinc-900 border-t border-zinc-850 flex gap-2">
              <input 
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Tulis pesan ke AI Yudika..."
                className="flex-grow bg-zinc-950 text-zinc-200 px-3.5 py-2 rounded-xl border border-zinc-850 text-xs focus:border-blue-500 focus:outline-none transition"
              />
              <button 
                type="submit"
                className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition shrink-0 cursor-pointer"
              >
                <Send size={14} />
              </button>
            </form>

          </div>
        )}
      </div>

      {/* Embedded CSS Animations & Scrollbars */}
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #09090b;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
        }
      `}</style>
    </div>
  );
}
