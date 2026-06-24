import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  TrendingUp,
  Share2,
  FileText,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Users,
  Calendar,
  Download,
  Menu,
  X,
  Info,
  ThumbsUp,
  MessageSquare,
  User,
  Heart,
  Plus,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Truck,
  RotateCcw,
  Award,
  Cpu,
  Activity,
  Layers,
  Leaf,
  GraduationCap
} from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Diatur ke false agar menampilkan halaman Login di awal sesi sesuai permintaan
  const [loginEmail, setLoginEmail] = useState('admin@glowsphere.com');
  const [loginPassword, setLoginPassword] = useState('password123');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // State navigasi dasbor
  const [activeTab, setActiveTab] = useState('menu-1'); 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toasts, setToasts] = useState([]);
  
  // State interaktif simulasi penjualan & laporan kustom
  const [salesTimeframe, setSalesTimeframe] = useState('Bulanan');
  const [reportStartDate, setReportStartDate] = useState('2026-01-01');
  const [reportEndDate, setReportEndDate] = useState('2026-06-30');
  
  // AI Confidence rating state
  const [aiConfidence, setAiConfidence] = useState(91);

  // Profile Edit Simulator State
  const [profileName, setProfileName] = useState('Sophia Lorenza, M.Biomed');
  const [profileRole, setProfileRole] = useState('Direktur Utama & Ahli Kecantikan');
  const [profilePhone, setProfilePhone] = useState('+62 812-3456-7890');
  const [profileLocation, setProfileLocation] = useState('Headquarters Jakarta, ID');

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Handler Login dengan simulasi transisi loading
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setLoginError('Mohon isi email dan kata sandi Anda.');
      return;
    }

    setIsLoggingIn(true);
    setLoginError('');

    setTimeout(() => {
      if (loginEmail === 'admin@glowsphere.com' && loginPassword === 'password123') {
        setIsLoggedIn(true);
        setIsLoggingIn(false);
        showToast('Autentikasi Berhasil! Selamat datang di GlowSphere.', 'success');
      } else {
        setLoginError('Email atau kata sandi salah. Silakan coba lagi.');
        setIsLoggingIn(false);
        showToast('Autentikasi Gagal.', 'error');
      }
    }, 1500);
  };

  const infoMenus = [
    { 
      id: 1, 
      key: 'menu-1', 
      title: "Ringkasan Finansial", 
      icon: LayoutDashboard,
      desc: "Laporan neraca keuangan terpusat kuartal berjalan.",
      metrics: [
        { label: "Total Sales", val: "$24.85K", change: "▲ +300K +2.0%" },
        { label: "Total Revenue", val: "$3,599.8K", change: "▲ +500K +3.5%" },
        { label: "Total Orders", val: "338,948", change: "▲ +300K +0.3%" },
        { label: "Social Media Engagement", val: "41K", change: "▲ +250K +1.2%" }
      ]
    },
    { 
      id: 2, 
      key: 'menu-2', 
      title: "Transaksi Penjualan", 
      icon: Activity,
      desc: "Log volume pembelian produk oleh pelanggan harian.",
      metrics: [
        { label: "Daily Sales", val: "Rp 15.4 JT", change: "Sangat Stabil" },
        { label: "Weekly Sales", val: "Rp 112 JT", change: "Meningkat" },
        { label: "Monthly Sales", val: "Rp 480 JT", change: "Optimal" }
      ]
    },
    { 
      id: 3, 
      key: 'menu-3', 
      title: "Perencanaan Anggaran", 
      icon: Calendar,
      desc: "Distribusi alokasi pembiayaan operasional klinik & marketing.",
      metrics: [
        { label: "Bujet TikTok Shop", val: "Rp 450 JT", change: "45% Porsi" },
        { label: "Bahan Baku Lokal", val: "Rp 350 JT", change: "35% Porsi" },
        { label: "Operasional Klinik", val: "Rp 200 JT", change: "20% Porsi" }
      ]
    },
    { 
      id: 4, 
      key: 'menu-4', 
      title: "Arus Kas Operasional", 
      icon: TrendingUp,
      desc: "Pemantauan likuiditas kas riil dari aktivitas bisnis.",
      metrics: [
        { label: "Arus Masuk", val: "Rp 1.45 M", change: "Lancar" },
        { label: "Arus Keluar", val: "Rp 560 JT", change: "Terkendali" },
        { label: "Saldo Akhir Kas", val: "Rp 890 JT", change: "Surplus" }
      ]
    },
    { 
      id: 5, 
      key: 'menu-5', 
      title: "Analisis Profitabilitas", 
      icon: DollarSign,
      desc: "Metrik keuntungan bersih per lini kategori kosmetik.",
      metrics: [
        { label: "Margin Kotor", val: "74.1%", change: "Sesuai Target" },
        { label: "Margin Skincare", val: "78.2%", change: "Kategori Terbaik" },
        { label: "Margin Makeup", val: "64.5%", change: "Butuh Optimasi" }
      ]
    },
    { 
      id: 6, 
      key: 'menu-6', 
      title: "Laporan Keuangan", 
      icon: FileText,
      desc: "Daftar arsip dokumen pembukuan rugi laba siap cetak.",
      metrics: [
        { label: "Format Tersedia", val: "PDF & Excel", change: "Audited" },
        { label: "Periode Laporan", val: "Jan - Mei 2026", change: "Lengkap" },
        { label: "Kepatuhan Pajak", val: "Wajib Pajak", change: "Sesuai UU" }
      ]
    },
    { 
      id: 7, 
      key: 'menu-7', 
      title: "Analitik Penjualan", 
      icon: Share2,
      desc: "Peta persebaran konsumen kosmetik tingkat regional.",
      metrics: [
        { label: "Pangsa Jabodetabek", val: "42%", change: "Wilayah Utama" },
        { label: "Pangsa Jatim (Surabaya)", val: "18%", change: "Pertumbuhan Cepat" },
        { label: "Pangsa Jabar (Bandung)", val: "15%", change: "Stabil" }
      ]
    },
    { 
      id: 8, 
      key: 'menu-8', 
      title: "Wawasan AI Kecantikan", 
      icon: Cpu,
      desc: "Prediksi algoritma terhadap rekomendasi produk masa depan.",
      metrics: [
        { label: "Akurasi Prediksi", val: "91%", change: "Tingkat Akurasi" },
        { label: "Rasio Konversi Kombo", val: "+5.4%", change: "Moist + Serum" },
        { label: "Rekomendasi Trend", val: "Bakuchiol", change: "Paling Diminati" }
      ]
    },
    { 
      id: 9, 
      key: 'menu-9', 
      title: "Basis Pengetahuan", 
      icon: Layers,
      desc: "Dokumentasi kandungan kimia bahan aktif ramah lingkungan.",
      metrics: [
        { label: "Bahan Terdaftar", val: "24 Kandungan", change: "100% Halal" },
        { label: "Uji Sensitivitas", val: "Aman BPOM", change: "Terverifikasi" },
        { label: "Kategori Riset", val: "8 Kategori", change: "Cruelty Free" }
      ]
    },
    { 
      id: 10, 
      key: 'menu-10', 
      title: "Utang Usaha & Suplier", 
      icon: Truck,
      desc: "Penjadwalan jatuh tempo tagihan dengan mitra manufaktur.",
      metrics: [
        { label: "Batas Pembayaran", val: "14 Hari", change: "Tempo Aman" },
        { label: "Total Vendor", val: "12 Perusahaan", change: "Mitra Lokal" },
        { label: "Status Utang", val: "Lancar", change: "Rating A+" }
      ]
    },
    { 
      id: 11, 
      key: 'menu-11', 
      title: "Manajemen Tim Terapis", 
      icon: Users,
      desc: "Kualifikasi sertifikat kecantikan dan rating staf klinik.",
      metrics: [
        { label: "Terapis Bersertifikasi", val: "94%", change: "Kualifikasi Pro" },
        { label: "Rating Staf Rata-rata", val: "★ 4.8", change: "Sangat Ramah" },
        { label: "Sesi Pelayanan Harian", val: "140 Sesi", change: "Kapasitas Maks" }
      ]
    },
    { 
      id: 12, 
      key: 'menu-12', 
      title: "Aset Klinik & Inventaris", 
      icon: ShoppingBag,
      desc: "Status kalibrasi dan penyusutan nilai mesin estetika.",
      metrics: [
        { label: "Unit Laser Rejuvenation", val: "24 Unit", change: "99.2% Siap Pakai" },
        { label: "Siklus Pemeliharaan", val: "Bulanan", change: "Terjadwal" },
        { label: "Status Mesin", val: "Sangat Normal", change: "Tanpa Kendala" }
      ]
    },
    { 
      id: 13, 
      key: 'menu-13', 
      title: "Portofolio Produk Baru", 
      icon: Sparkles,
      desc: "Riset formula herbal alami dalam pendaftaran BPOM.",
      metrics: [
        { label: "Progres BPOM", val: "75% Selesai", change: "Tahap Akhir" },
        { label: "Target Peluncuran", val: "Oktober 2026", change: "Sesuai Jadwal" },
        { label: "Bahan Alami", val: "88% Organik", change: "Ramah Gen-Z" }
      ]
    },
    { 
      id: 14, 
      key: 'menu-14', 
      title: "Pelacakan Target", 
      icon: Award,
      desc: "Perbandingan realisasi pencapaian Key Performance Indicator.",
      metrics: [
        { label: "Pencapaian KPI Q2", val: "84% Tercapai", change: "Sangat Baik" },
        { label: "Realisasi Penjualan", val: "Rp 1.2 M", change: "Sisa Target Rp 200M" },
        { label: "Evaluasi Tahunan", val: "On Track", change: "Sesuai Rencana" }
      ]
    },
    { 
      id: 15, 
      key: 'menu-15', 
      title: "Pusat Notifikasi Sistem", 
      icon: Bell,
      desc: "Riwayat log keamanan server dan peringatan stok gudang.",
      metrics: [
        { label: "Notifikasi Kritis", val: "0 Pesan", change: "Sistem Aman" },
        { label: "Stok Menipis", val: "2 Produk", change: "Butuh Restock" },
        { label: "Sinkronisasi Server", val: "16:30 WIB", change: "Otomatis" }
      ]
    }
  ];

  const currentActiveMenu = infoMenus.find(m => m.key === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased relative selection:bg-purple-600 selection:text-white">
      
      {/* CSS internal global untuk jaminan bebas dari segala bentuk scrollbar di semua browser */}
      <style>{`
        * {
          -ms-overflow-style: none !important;  /* IE and Edge */
          scrollbar-width: none !important;     /* Firefox */
        }
        *::-webkit-scrollbar {
          display: none !important;             /* Chrome, Safari, Opera */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      {/* Kontainer Notifikasi Toast */}
      <div className="fixed top-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        {toasts.map(toast => (
          <div 
            key={toast.id} 
            className={`p-4 rounded-xl shadow-xl flex items-start gap-3 transform transition-all duration-300 translate-y-0 opacity-100 bg-slate-900 border border-slate-800 border-l-4 pointer-events-auto ${
              toast.type === 'success' ? 'border-emerald-500 text-emerald-100' : 
              toast.type === 'info' ? 'border-purple-500 text-purple-100' : 'border-rose-500 text-rose-100'
            }`}
          >
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />}
            <div>
              <p className="text-sm font-semibold">{toast.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ==================== SCREEN: LOGIN PAGE ==================== */}
      {!isLoggedIn ? (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12 relative overflow-hidden">
          
          {/* Latar Belakang Gradasi Glow Halus */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-pink-900/10 blur-[150px] pointer-events-none"></div>

          <div className="bg-slate-900/80 rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 min-h-[550px] border border-slate-800 backdrop-blur-xl">
            
            {/* Sisi Kiri: Formulir Login Premium */}
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                
                {/* Logo & Judul Brand */}
                <div className="flex items-center gap-2.5 mb-10">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-md shadow-purple-500/15">
                    G
                  </div>
                  <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">GlowSphere</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">Selamat Datang</h2>
                <p className="text-slate-400 text-xs mb-8">Silakan masuk menggunakan kredensial admin Anda untuk memantau data bisnis.</p>

                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  {loginError && (
                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{loginError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Alamat Email</label>
                    <input 
                      type="email" 
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                      placeholder="admin@glowsphere.com"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Kata Sandi</label>
                      <button 
                        type="button" 
                        onClick={() => showToast('Gunakan kredensial bawaan admin@glowsphere.com / password123.', 'info')} 
                        className="text-[10px] font-semibold text-purple-400 hover:underline"
                      >
                        Lupa kata sandi?
                      </button>
                    </div>
                    <input 
                      type="password" 
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                      placeholder="••••••••"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoggingIn}
                    className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs rounded-xl transition-all shadow-lg shadow-purple-950/40 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoggingIn ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Masuk</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-850">
                <p className="text-[10px] text-slate-500 text-center uppercase tracking-wider">
                  Professional • Elegant • Responsive
                </p>
              </div>
            </div>

            {/* Sisi Kanan: Ilustrasi Promosi Sesuai Gambar image_8b2908.jpg */}
            <div className="hidden md:flex flex-col justify-between p-12 bg-slate-950 border-l border-slate-850 text-white relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none"></div>
              
              <div className="flex justify-end z-10">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full border border-purple-800/30">
                  SYSTEM VERSION 3.0
                </span>
              </div>

              {/* Komponen Vektor Ilustrasi Monitor & Statistik */}
              <div className="my-auto z-10 flex flex-col items-center">
                <svg className="w-44 h-44 text-purple-500 animate-pulse" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Cloud/Gear */}
                  <circle cx="100" cy="95" r="50" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                  <circle cx="100" cy="95" r="35" stroke="currentColor" strokeWidth="1" />
                  {/* Computer Monitor */}
                  <rect x="55" y="60" width="90" height="60" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="3" />
                  {/* Screen Content - Line Chart */}
                  <path d="M65 110 L80 90 L95 100 L115 80 L135 95" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Monitor Stand */}
                  <path d="M90 120 L85 138 L115 138 L110 120 Z" fill="#475569" />
                  <rect x="75" y="138" width="50" height="4" rx="2" fill="#475569" />
                  {/* Floating Elements (Shopping Cart, Star, Chart) */}
                  <circle cx="45" cy="65" r="12" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
                  <path d="M42 62 H44 L46 68 H49 L51 64 H46" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
                  <circle cx="155" cy="115" r="10" fill="#1e293b" stroke="#f43f5e" strokeWidth="1.5" />
                  <rect x="151" y="110" width="8" height="10" rx="1" fill="#f43f5e" />
                </svg>

                <h1 className="text-sm font-extrabold text-slate-200 tracking-wider text-center max-w-xs mt-8">
                  "Empowering Beauty Business Through Data Intelligence"
                </h1>
              </div>

              <div className="z-10 text-center">
                <span className="text-[9px] text-slate-500 uppercase tracking-widest font-mono">GlowSphere Ecosystem Ltd</span>
              </div>
            </div>

          </div>
        </div>
      ) : (
        
        /* ==================== SCREEN: DASHBOARD SHELL (16:8 - 15 MENUS + PROFILE) ==================== */
        <div className="flex min-h-screen">
          
          {/* ==================== SIDEBAR NAVIGASI (BEBAS SCROLLBAR) ==================== */}
          <aside className={`fixed inset-y-0 left-0 z-40 w-72 shrink-0 bg-slate-900 text-slate-100 transform transition-transform duration-300 lg:translate-x-0 lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} border-r border-slate-800/60 flex flex-col justify-between`}>
            <div className="p-6 flex flex-col h-full overflow-hidden">
              
              {/* Judul Aplikasi (Logo) */}
              <div className="flex items-center justify-between mb-8 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-md shadow-purple-500/10">
                    G
                  </div>
                  <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">GlowSphere</span>
                </div>
                <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Navigasi - no-scrollbar menyembunyikan scrollbar sepenuhnya */}
              <div className="flex-1 overflow-y-auto no-scrollbar space-y-6">
                
                {/* Bagian Komando (15 Menu Penuh + Profile) */}
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-3.5 mb-3 flex items-center justify-between">
                    <span>Modul Komando</span>
                    <span className="bg-purple-900/30 text-purple-400 text-[8px] px-1.5 py-0.5 rounded-full font-mono font-bold">16 PANEL</span>
                  </p>
                  <div className="space-y-1">
                    
                    {/* Profil Saya Tab Navigasi */}
                    <button 
                      onClick={() => { setActiveTab('menu-profile'); setSidebarOpen(false); }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        activeTab === 'menu-profile' 
                          ? 'bg-gradient-to-r from-purple-650 to-pink-600 bg-purple-650 text-white shadow-lg shadow-purple-950/40 font-bold' 
                          : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <User className={`w-4 h-4 shrink-0 ${activeTab === 'menu-profile' ? 'text-white' : 'text-slate-400'}`} />
                        <span className="truncate">Profil Saya</span>
                      </div>
                      <span className="text-[8px] bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded font-mono">UTAMA</span>
                    </button>

                    {infoMenus.map((menu) => {
                      const MenuIcon = menu.icon;
                      const isSelected = activeTab === menu.key;
                      return (
                        <button 
                          key={menu.key}
                          onClick={() => { setActiveTab(menu.key); setSidebarOpen(false); }}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                            isSelected 
                              ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/40 font-semibold' 
                              : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            <MenuIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                            <span className="truncate">{menu.title}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Tombol Keluar / Logout di bagian paling bawah */}
              <div className="pt-4 border-t border-slate-850 shrink-0 mt-4">
                <button 
                  onClick={() => {
                    setIsLoggedIn(false);
                    showToast('Sesi berakhir. Berhasil keluar dari GlowSphere.', 'info');
                  }}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-rose-400 hover:bg-rose-950/30 hover:text-rose-300 transition-all"
                >
                  <LogOut className="w-4 h-4 text-rose-400" />
                  <span>Keluar Sesi</span>
                </button>
              </div>

            </div>
          </aside>

          {/* ==================== HALAMAN UTAMA DASHBOARD ==================== */}
          <main className="flex-1 min-w-0 flex flex-col min-h-screen bg-slate-950">
            
            {/* Header Bar */}
            <header className="sticky top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/60 z-30 px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:bg-slate-900">
                  <Menu className="w-6 h-6" />
                </button>
                <div>
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Pusat Kendali GlowSphere</span>
                  </h2>
                  <p className="text-xs text-slate-400 hidden sm:block">Pemantauan Bersih Tanpa Hambatan Visual</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-3.5 py-1.5 w-64 focus-within:ring-2 focus-within:ring-purple-500 transition-all">
                  <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Cari menu..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-slate-200 w-full focus:outline-none"
                  />
                </div>

                {/* Notifikasi Cepat */}
                <button 
                  onClick={() => showToast('Semua modul komando sinkron dengan database.', 'success')}
                  className="p-2 text-slate-400 hover:bg-slate-900 rounded-full transition-all"
                >
                  <Bell className="w-4 h-4" />
                </button>

                {/* Avatar Mini & Pintasan ke Profile */}
                <button 
                  onClick={() => { setActiveTab('menu-profile'); showToast('Membuka profil pengurus...', 'info'); }}
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-xs text-white shadow-md shadow-purple-500/10 border border-slate-800"
                >
                  SL
                </button>
              </div>
            </header>

            {/* AREA KONTEN: Dipecah berdasarkan Modul Sidebar yang aktif (DIBEDAKAN PER HALAMAN) */}
            <div className="p-6 flex-1 flex flex-col gap-6 no-scrollbar overflow-y-auto">
              
              {/* ==================== [NEW PAGE]: PROFIL SAYA (PROFILE DASHBOARD) ==================== */}
              {activeTab === 'menu-profile' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Kartu Header Profil Besar */}
                  <div className="bg-gradient-to-r from-purple-900/30 via-slate-900 to-pink-900/15 border border-slate-800 p-6 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] pointer-events-none rounded-full"></div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                      
                      {/* Avatar Simulator */}
                      <div className="relative group">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-black text-3xl text-white shadow-xl shadow-purple-500/15 relative">
                          SL
                        </div>
                        <div className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] text-white font-bold transition-all cursor-pointer">
                          Ganti Foto
                        </div>
                      </div>

                      {/* Detail Profil */}
                      <div className="text-center md:text-left flex-1 space-y-1">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                          <h3 className="text-xl font-black text-white">{profileName}</h3>
                          <span className="text-[9px] font-bold uppercase tracking-widest bg-purple-500/20 text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                            Super Admin
                          </span>
                        </div>
                        <p className="text-sm text-slate-300 font-medium">{profileRole}</p>
                        <p className="text-xs text-slate-500 font-mono">{profileLocation} • ID Karyawan: GS-0092</p>
                      </div>

                      {/* Tombol Aksi */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => showToast('Log Keamanan Diunduh.', 'success')}
                          className="px-4 py-2 bg-slate-800 hover:bg-slate-750 border border-slate-750 text-xs font-semibold rounded-xl text-slate-200 transition-all"
                        >
                          Unduh Log Akses
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* Form Edit Profil & Kartu Jadwal Kerja */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Sisi Kiri: Form Informasi Pribadi */}
                    <div className="bg-slate-900/60 border border-slate-800/85 p-6 rounded-3xl lg:col-span-2 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Sunting Informasi Profil</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1.5">Nama Lengkap & Gelar</label>
                          <input 
                            type="text" 
                            value={profileName}
                            onChange={(e) => setProfileName(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1.5">Jabatan / Peran</label>
                          <input 
                            type="text" 
                            value={profileRole}
                            onChange={(e) => setProfileRole(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1.5">Nomor Handphone</label>
                          <input 
                            type="text" 
                            value={profilePhone}
                            onChange={(e) => setProfilePhone(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1.5">Lokasi Kantor Cabang</label>
                          <input 
                            type="text" 
                            value={profileLocation}
                            onChange={(e) => setProfileLocation(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-850 flex justify-end">
                        <button 
                          onClick={() => showToast('Perubahan profil berhasil disimpan secara lokal!', 'success')}
                          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-xs font-bold rounded-xl text-white transition-all shadow-md shadow-purple-950/40"
                        >
                          Simpan Perubahan
                        </button>
                      </div>
                    </div>

                    {/* Sisi Kanan: Hak Akses & Riwayat Aktivitas */}
                    <div className="space-y-6">
                      
                      <div className="bg-slate-900/60 border border-slate-800/85 p-6 rounded-3xl space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Hak Akses Sistem Anda</h4>
                        <div className="space-y-3 text-xs font-medium">
                          <div className="flex justify-between items-center p-2.5 bg-slate-950/60 border border-slate-850 rounded-xl">
                            <span>Akses Basis Data</span>
                            <span className="text-emerald-400 font-bold">TERBUKA (FULL)</span>
                          </div>
                          <div className="flex justify-between items-center p-2.5 bg-slate-950/60 border border-slate-850 rounded-xl">
                            <span>Manajemen Keuangan</span>
                            <span className="text-emerald-400 font-bold">TERBUKA (FULL)</span>
                          </div>
                          <div className="flex justify-between items-center p-2.5 bg-slate-950/60 border border-slate-850 rounded-xl">
                            <span>Peluncuran Produk Baru</span>
                            <span className="text-purple-400 font-bold">VERIFIKASI BPOM</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-900/60 border border-slate-800/85 p-6 rounded-3xl space-y-3 text-xs">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Riwayat Login Terakhir</h4>
                        <div className="space-y-2 font-mono text-[11px] text-slate-400">
                          <div className="flex justify-between py-1 border-b border-slate-850">
                            <span>Safari - Mac OS</span>
                            <span className="text-white">Hari ini, 17:30</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-slate-850">
                            <span>Chrome - Windows</span>
                            <span className="text-white">Kemarin, 09:12</span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span>Vercel Deploy Bot</span>
                            <span className="text-white">23 Juni 2026</span>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              )}

              {/* ==================== [PAGE 1]: RINGKASAN FINANSIAL (Main Dashboard Layout) ==================== */}
              {activeTab === 'menu-1' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Kartu Metrik Ringkasan Finansial yang Kaya Informasi */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentActiveMenu.metrics.map((met, idx) => (
                      <div key={idx} className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">{met.label}</span>
                        <h3 className="text-2xl font-black text-white mt-1.5">{met.val}</h3>
                        <p className="text-[10px] text-emerald-400 mt-2 font-bold flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full w-fit">
                          {met.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Grafik Keuangan Besar & Distribusi Media Sosial */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl lg:col-span-2">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Monthly Sales Graph (Triwulan #2)</h4>
                          <p className="text-[11px] text-slate-500">Logaritma perkembangan pendapatan bersih per kuartal</p>
                        </div>
                        <span className="bg-slate-950 px-3 py-1.5 border border-slate-850 rounded-lg text-[10px] font-mono text-purple-400 font-bold cursor-pointer">
                          Bulanan (2026) ▼
                        </span>
                      </div>
                      <div className="h-56 relative pt-4">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="glowGrad1" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25"/>
                              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                          <path d="M 10 160 Q 90 40 180 130 T 360 80 T 490 30 L 490 200 L 10 200 Z" fill="url(#glowGrad1)" />
                          <path d="M 10 160 Q 90 40 180 130 T 360 80 T 490 30" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
                          <circle cx="180" cy="130" r="4" fill="#ec4899" />
                          <circle cx="360" cy="80" r="4" fill="#a855f7" />
                        </svg>
                      </div>
                      <div className="flex justify-between text-slate-500 font-mono text-[9px] mt-2">
                        <span>Januari</span>
                        <span>Februari</span>
                        <span>Maret</span>
                        <span>April</span>
                        <span>Mei</span>
                      </div>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Social Media Engagement</h4>
                        <p className="text-[11px] text-slate-500 mb-6">Sumber interaksi pengguna harian</p>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-medium"><span className="text-slate-400">Instagram</span><span>45%</span></div>
                          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style={{width: '45%'}} /></div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-medium"><span className="text-slate-400">TikTok Shop</span><span>35%</span></div>
                          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden"><div className="bg-pink-500 h-full rounded-full" style={{width: '35%'}} /></div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-medium"><span className="text-slate-400">YouTube Ads</span><span>20%</span></div>
                          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden"><div className="bg-indigo-500 h-full rounded-full" style={{width: '20%'}} /></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ringkasan Penjualan Produk Terbaik & Trafik Organik */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Traffic Source (%)</h4>
                      <div className="w-32 h-32 mx-auto relative flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#10172a" strokeWidth="12" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#8B5CF6" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="100" />
                        </svg>
                        <span className="absolute text-xs font-black font-mono">60% Organic</span>
                      </div>
                      <p className="text-[10px] text-slate-500 text-center mt-3">Mayoritas lalu lintas berasal dari pencarian murni di google & konten edukatif.</p>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl md:col-span-2 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Top Selling Products (Pangsa Terlaris)</h4>
                      <div className="space-y-3 text-xs font-mono">
                        <div className="flex justify-between items-center p-3 bg-slate-950/40 border border-slate-850 rounded-xl">
                          <span className="text-white font-medium">1. Serum C-Glow Booster</span>
                          <span className="font-bold text-purple-400">Rp 186.00 JT</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-950/40 border border-slate-850 rounded-xl">
                          <span className="text-white font-medium">2. GlowLip Velvet Matte (Shade 04)</span>
                          <span className="font-bold text-purple-400">Rp 98.00 JT</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-950/40 border border-slate-850 rounded-xl">
                          <span className="text-white font-medium">3. Hydrating Moisture Gel Cream</span>
                          <span className="font-bold text-purple-400">Rp 74.20 JT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 2]: TRANSAKSI PENJUALAN (Sales Analysis Page Layout) ==================== */}
              {activeTab === 'menu-2' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Selector Rentang Waktu */}
                  <div className="flex items-center justify-between bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl">
                    <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-850 gap-1">
                      {['Daily', 'Weekly', 'Monthly', 'Annual'].map(p => (
                        <button 
                          key={p} 
                          onClick={() => { setSalesTimeframe(p); showToast(`Timeframe ${p} dipilih!`); }}
                          className={`px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all ${salesTimeframe === p ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-purple-400 bg-purple-900/20 border border-purple-800/30 px-3 py-1.5 rounded-xl font-bold">
                      Periode Berjalan: {salesTimeframe}
                    </span>
                  </div>

                  {/* Grid 3 Kartu Analitik Penjualan */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-3xl flex flex-col justify-between h-48">
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">Harian (Daily Sales)</span>
                        <h4 className="text-2xl font-black text-white mt-1">Rp 15.4 JT</h4>
                      </div>
                      <div className="h-16">
                        <svg className="w-full h-full" viewBox="0 0 100 50">
                          <path d="M0,45 Q25,10 50,30 T100,5" fill="none" stroke="#10B981" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-3xl flex flex-col justify-between h-48">
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">Mingguan (Weekly Sales)</span>
                        <h4 className="text-2xl font-black text-white mt-1">Rp 112 JT</h4>
                      </div>
                      <div className="h-16">
                        <svg className="w-full h-full" viewBox="0 0 100 50">
                          <path d="M0,40 Q25,5 50,35 T100,20" fill="none" stroke="#EC4899" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-3xl flex flex-col justify-between h-48">
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">Bulanan (Monthly Sales)</span>
                        <h4 className="text-2xl font-black text-white mt-1">Rp 480 JT</h4>
                      </div>
                      <div className="h-16 flex items-end justify-between gap-1">
                        {[30, 50, 40, 70, 90, 60, 80, 50, 75, 95].map((h, i) => (
                          <div key={i} className="bg-purple-600 rounded-t w-full" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Transaksi Produk Terbaik Terkini */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl lg:col-span-2 space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Arsip Penjualan 5 Teratas</h4>
                      <div className="space-y-2.5 text-xs font-mono">
                        <div className="flex justify-between py-2 border-b border-slate-800/50"><span>1. Serum Vitamin C Booster</span><span className="font-bold text-white">Rp 186.00 JT</span></div>
                        <div className="flex justify-between py-2 border-b border-slate-800/50"><span>2. Barrier Hydration Moisturizer</span><span className="font-bold text-white">Rp 144.00 JT</span></div>
                        <div className="flex justify-between py-2 border-b border-slate-800/50"><span>3. GlowLip Velvet Matte Shade 04</span><span className="font-bold text-white">Rp 98.00 JT</span></div>
                        <div className="flex justify-between py-2 border-b border-slate-800/50"><span>4. Sunscreen Shield Gel SPF50</span><span className="font-bold text-white">Rp 61.00 JT</span></div>
                        <div className="flex justify-between py-2"><span>5. Anti-Aging Peptide Ampoule</span><span className="font-bold text-white">Rp 54.20 JT</span></div>
                      </div>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Average Transaction Value (ATV)</h4>
                        <p className="text-3xl font-black text-purple-400 mt-2">Rp 245.500</p>
                        <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">Rata-rata pengeluaran belanja per individu pelanggan di platform GlowSphere Clinic & E-Commerce.</p>
                      </div>
                      <button onClick={() => showToast('Detail data transaksi diekspor!')} className="w-full mt-4 py-2.5 bg-purple-650 hover:bg-purple-700 text-white text-xs font-semibold rounded-xl transition-all shadow-md">
                        Unduh Rincian Lengkap
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 3]: PERENCANAAN ANGGARAN (Budgeting Page Layout) ==================== */}
              {activeTab === 'menu-3' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl space-y-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Alokasi Anggaran Utama (Q2)</h4>
                      <div className="space-y-5">
                        <div>
                          <div className="flex justify-between text-xs mb-1.5"><span className="text-slate-300">Pemasaran TikTok & KOL</span><span className="font-mono text-purple-400">Rp 450 JT (45%)</span></div>
                          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full animate-pulse" style={{width: '45%'}} /></div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1.5"><span className="text-slate-300">Bahan Baku & Riset Klinik</span><span className="font-mono text-emerald-400">Rp 350 JT (35%)</span></div>
                          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full" style={{width: '35%'}} /></div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1.5"><span className="text-slate-300">Operasional & Kalibrasi Mesin</span><span className="font-mono text-blue-400">Rp 200 JT (20%)</span></div>
                          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full" style={{width: '20%'}} /></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between">
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Pengeluaran Bulan Ini</h4>
                        <h3 className="text-3xl font-black text-white">Rp 890 JT</h3>
                        <p className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-lg w-fit mt-2">
                          ✓ Terkendali - Sesuai Batas Anggaran (91% Terpakai)
                        </p>
                      </div>
                      <div className="border-t border-slate-800/60 pt-4 mt-6">
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>Sisa Cadangan Kas Darurat:</span>
                          <span className="font-bold text-white font-mono">Rp 150 JT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tambahan: Tabel Alokasi Vendor Bahan Baku */}
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Daftar Pengeluaran Vendor Terbesar</h4>
                    <div className="overflow-x-auto text-xs font-mono">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-slate-850 text-slate-500 pb-2">
                            <th className="py-2">Nama Vendor</th>
                            <th className="py-2">Kategori Pengeluaran</th>
                            <th className="py-2 text-right">Jumlah Dana</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-850 text-slate-300">
                          <tr>
                            <td className="py-3 font-semibold text-white">PT. Kimia Herbal Jaya</td>
                            <td className="py-3">Kandungan Bakuchiol & Niacinamide</td>
                            <td className="py-3 text-right font-bold text-purple-400">Rp 142 JT</td>
                          </tr>
                          <tr>
                            <td className="py-3 font-semibold text-white">Mitra Botol Sejahtera</td>
                            <td className="py-3">Botol Kaca Serum Daur Ulang</td>
                            <td className="py-3 text-right font-bold text-purple-400">Rp 88 JT</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 4]: ARUS KAS OPERASIONAL ==================== */}
              {activeTab === 'menu-4' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Arus Kas Masuk vs Keluar (Cash Flow)</h4>
                        <p className="text-[11px] text-slate-500">Visualisasi likuiditas operasional mingguan</p>
                      </div>
                      <div className="flex justify-center gap-4 text-xs font-bold font-mono">
                        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" /> Masuk</span>
                        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-amber-500 rounded-full" /> Keluar</span>
                      </div>
                    </div>
                    <div className="h-60 relative">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                        {/* Cash Inflow - Green Curve */}
                        <path d="M 10 180 Q 150 40 300 90 T 490 20" fill="none" stroke="#10B981" strokeWidth="3" />
                        {/* Cash Outflow - Orange Curve */}
                        <path d="M 10 150 Q 150 110 300 130 T 490 100" fill="none" stroke="#F59E0B" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  {/* Log Detil Arus Kas Terakhir */}
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Log Arus Kas Masuk & Keluar Terkini</h4>
                    <div className="divide-y divide-slate-850 text-xs font-mono">
                      <div className="py-3 flex justify-between items-center">
                        <span className="text-emerald-400 font-semibold">+ Pemasukan TikTok Shop Live</span>
                        <span className="font-bold text-white">Rp 45.20 JT</span>
                      </div>
                      <div className="py-3 flex justify-between items-center">
                        <span className="text-rose-400 font-semibold">- Tagihan Listrik & Operasional Klinik</span>
                        <span className="font-bold text-white">Rp 12.50 JT</span>
                      </div>
                      <div className="py-3 flex justify-between items-center">
                        <span className="text-emerald-400 font-semibold">+ Deposit Layanan Botox Premium</span>
                        <span className="font-bold text-white">Rp 22.00 JT</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 5]: ANALISIS PROFITABILITAS ==================== */}
              {activeTab === 'menu-5' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl border-l-4 border-l-purple-500">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Margin Kotor Rata-rata</span>
                      <h3 className="text-3xl font-black text-purple-400 mt-2">74.1%</h3>
                      <span className="text-[9px] text-emerald-400 font-semibold">Memenuhi Target Utama</span>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl border-l-4 border-l-pink-500">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Margin Lini Skincare</span>
                      <h3 className="text-3xl font-black text-pink-400 mt-2">78.2%</h3>
                      <span className="text-[9px] text-emerald-400 font-semibold">Margin Tertinggi</span>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl border-l-4 border-l-indigo-500">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Margin Lini Makeup</span>
                      <h3 className="text-3xl font-black text-indigo-400 mt-2">64.5%</h3>
                      <span className="text-[9px] text-rose-400 font-semibold">Perlu Optimasi Bahan</span>
                    </div>
                  </div>

                  {/* Penjelasan Kontribusi Lini Produk */}
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Daftar Kontribusi Margin Per Produk</h4>
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center p-3 bg-slate-950/40 border border-slate-850 rounded-xl">
                        <span className="text-white font-medium">Serum C-Glow Booster</span>
                        <span className="font-bold text-emerald-400 font-mono">82% Margin</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-950/40 border border-slate-850 rounded-xl">
                        <span className="text-white font-medium">GlowLip Velvet Matte</span>
                        <span className="font-bold text-amber-400 font-mono">68% Margin</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 6]: LAPORAN KEUANGAN (Reports Page Layout) ==================== */}
              {activeTab === 'menu-6' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Penyusunan Filter Tanggal Laporan</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Mulai Tanggal</label>
                        <input 
                          type="date" 
                          value={reportStartDate}
                          onChange={(e) => setReportStartDate(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 text-slate-100"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Akhir Tanggal</label>
                        <input 
                          type="date" 
                          value={reportEndDate}
                          onChange={(e) => setReportEndDate(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 text-slate-100"
                        />
                      </div>
                      <button 
                        onClick={() => {
                          showToast('Menyusun arsip laporan kustom baru...');
                        }}
                        className="py-2.5 px-4 bg-purple-600 text-white font-medium text-xs rounded-xl hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
                      >
                        <Plus className="w-4 h-4" /> Susun Laporan
                      </button>
                    </div>
                  </div>

                  {/* Berkas Unduhan Laporan Terkini */}
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Berkas Unduhan Laporan</h4>
                      <div className="flex gap-2">
                        <button onClick={() => showToast('Menunduh seluruh laporan format PDF...', 'success')} className="px-3 py-1.5 bg-rose-950/40 border border-rose-800/40 text-rose-300 rounded-lg text-[9px] font-bold">Download PDF</button>
                        <button onClick={() => showToast('Mengunduh seluruh laporan format Excel...', 'success')} className="px-3 py-1.5 bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 rounded-lg text-[9px] font-bold">Download Excel</button>
                      </div>
                    </div>

                    <div className="divide-y divide-slate-850 text-xs font-mono">
                      <div className="py-3 flex justify-between items-center">
                        <span>Laporan_Keuangan_Mei2026.pdf</span>
                        <button onClick={() => showToast('File Mei 2026 diunduh!')} className="text-purple-400 hover:underline">Unduh (2.4 MB)</button>
                      </div>
                      <div className="py-3 flex justify-between items-center">
                        <span>Ekspor_Data_Penjualan_Q1.xlsx</span>
                        <button onClick={() => showToast('File Excel Q1 diunduh!')} className="text-purple-400 hover:underline">Unduh (1.8 MB)</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 7]: ANALITIK PENJUALAN ==================== */}
              {activeTab === 'menu-7' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl text-center">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Peta Sebaran Konsumen Kosmetik Regional</h4>
                    <div className="h-64 flex items-center justify-center bg-slate-950/40 rounded-2xl border border-slate-850 relative overflow-hidden">
                      <div className="w-48 h-48 rounded-full border border-purple-500/10 flex items-center justify-center animate-pulse">
                        <div className="w-32 h-32 rounded-full border border-purple-500/20 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/40" />
                        </div>
                      </div>
                      <div className="absolute top-12 left-1/4 text-[10px] bg-purple-900/40 border border-purple-800/30 px-2.5 py-1 rounded-xl">Jabodetabek (42%)</div>
                      <div className="absolute bottom-16 right-1/4 text-[10px] bg-pink-900/40 border border-pink-800/30 px-2.5 py-1 rounded-xl">Surabaya (18%)</div>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Rasio Pengiriman Berdasarkan Provinsi</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center py-2 border-b border-slate-850">
                        <span>DKI Jakarta (Pusat Distribusi Utama)</span>
                        <span className="font-mono text-purple-400 font-bold">14,250 Paket / Bln</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span>Jawa Timur (Gudang Surabaya)</span>
                        <span className="font-mono text-purple-400 font-bold">6,120 Paket / Bln</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 8]: WAWASAN AI KECANTIKAN ==================== */}
              {activeTab === 'menu-8' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-3xl text-center flex flex-col justify-center">
                      <span className="text-[10px] uppercase font-bold text-slate-500">Akurasi Algoritma AI</span>
                      <h2 className="text-4xl font-black text-emerald-400 mt-2">{aiConfidence}%</h2>
                      <button onClick={() => { setAiConfidence(94); showToast('Algoritma AI berhasil diperbarui!', 'success'); }} className="text-[9px] text-purple-400 hover:underline mt-2 inline-block">Minta Rekalkulasi Akurasi</button>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-3xl md:col-span-2 flex flex-col justify-between">
                      <span className="text-[10px] uppercase font-bold text-slate-500">Rekomendasi Paket Kombo</span>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">Kombo "Moisturizer + Serum Anti-Aging" diprediksi menghasilkan kenaikan konversi belanja hingga 5.4% kuartal ini berdasarkan analisis data kecocokan kulit otomatis.</p>
                      <button onClick={() => showToast('Paket kombo diaktifkan di TikTok Shop!', 'success')} className="w-fit px-4 py-2 bg-purple-650 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all mt-4">
                        Terapkan Paket Kombo
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 9]: BASIS PENGETAHUAN ==================== */}
              {activeTab === 'menu-9' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">Bahan Aktif Kimia Ramah Lingkungan</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                        <p className="font-bold text-white mb-1">Niacinamide (10% Konsentrasi)</p>
                        <span className="text-[10px] text-slate-500">Mencerahkan bintik hitam, teruji aman di BPOM Indonesia.</span>
                      </div>
                      <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                        <p className="font-bold text-white mb-1">Bakuchiol (Retinol Alami)</p>
                        <span className="text-[10px] text-slate-500">Kandungan alami bebas kerutan, cocok untuk jenis kulit sensitif.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 10]: UTANG USAHA & SUPLIER ==================== */}
              {activeTab === 'menu-10' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Siklus Pembayaran Tagihan Vendor</h4>
                    <div className="divide-y divide-slate-850 text-xs font-mono">
                      <div className="py-3 flex justify-between items-center">
                        <span>PT. Kimia Herbal Jaya (Bahan Baku)</span>
                        <span className="text-amber-400 font-bold">Tempo: 14 Hari</span>
                      </div>
                      <div className="py-3 flex justify-between items-center">
                        <span>Pabrik Botol Sejahtera (Kemasan)</span>
                        <span className="text-emerald-400 font-bold">Status: Lunas</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 11]: TIM TERAPIS ==================== */}
              {activeTab === 'menu-11' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {}
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Sertifikasi & Kualifikasi Tim Estetika (12 Anggota Aktif)</h4>
                        <p className="text-xs text-slate-500 mt-1">Status kehadiran, penugasan sesi klinik harian, dan lisensi dermatologi terapis.</p>
                      </div>
                      <button 
                        onClick={() => showToast('Simulasi pendaftaran terapis baru diaktifkan.', 'info')}
                        className="px-4 py-2 bg-purple-650 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-purple-950/25 flex items-center gap-1.5 shrink-0"
                      >
                        <Plus className="w-4 h-4" /> Tambah Anggota
                      </button>
                    </div>

                    {/* Grid Anggota Tim Terapis (12 Orang) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {[
                        { id: 1, name: "Sophia Clarissa, M.Biomed", role: "Terapis Senior", spec: "Laser Rejuvenation", rating: "4.9", status: "Tersedia", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                        { id: 2, name: "David Andrean, Amd.Kep", role: "Spesialis Facial", spec: "Chemical Peeling", rating: "4.8", status: "Sesi Kerja", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
                        { id: 3, name: "Amanda Putri, Amd.Keb", role: "Terapis Skin-Barrier", spec: "Microdermabrasion", rating: "4.7", status: "Tersedia", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                        { id: 4, name: "Budi Santoso", role: "Aesthetic Specialist", spec: "Blue Light Therapy", rating: "4.6", status: "Istirahat", color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
                        { id: 5, name: "Citra Lestari, S.Kep", role: "Terapis Anti-Aging", spec: "RF Microneedling", rating: "4.9", status: "Sesi Kerja", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
                        { id: 6, name: "Farhan Hakim", role: "Konsultan Kulit", spec: "Skin Analysis", rating: "4.8", status: "Tersedia", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                        { id: 7, name: "Grace Natalia", role: "Terapis Hidrasi", spec: "HydraFacial Specialist", rating: "4.7", status: "Sesi Kerja", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
                        { id: 8, name: "Hendra Wijaya, Amd.Kep", role: "Laser Technician", spec: "IPL Hair Removal", rating: "4.8", status: "Tersedia", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                        { id: 9, name: "Indah Permata", role: "Aesthetician Senior", spec: "Facial Massage & Gua Sha", rating: "4.9", status: "Tersedia", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                        { id: 10, name: "Kevin Pratama", role: "Spesialis Peeling", spec: "Deep Chemical Peel", rating: "4.5", status: "Sesi Kerja", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
                        { id: 11, name: "Larasati Ningrum", role: "Terapis Herbal", spec: "Organic Facial", rating: "4.6", status: "Tersedia", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                        { id: 12, name: "Muhammad Rizky", role: "Spesialis Laser CO2", spec: "Scar Reduction", rating: "4.8", status: "Sesi Kerja", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" }
                      ].map((member) => (
                        <div 
                          key={member.id} 
                          className="p-4 bg-slate-950/40 border border-slate-850 hover:border-purple-500/30 rounded-2xl flex flex-col justify-between gap-4 transition-all hover:-translate-y-0.5 group"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                              <div className="flex items-center gap-1.5">
                                <p className="font-bold text-xs text-white group-hover:text-purple-400 transition-colors">{member.name}</p>
                              </div>
                              <p className="text-[10px] text-slate-400 font-medium">{member.role} • <span className="text-purple-300 font-semibold">{member.spec}</span></p>
                              <div className="flex items-center gap-1 text-[10px] text-amber-400 font-bold pt-1">
                                <span>★ {member.rating}</span>
                                <span className="text-slate-600 font-normal">| {member.id * 3 + 12} Sesi Selesai</span>
                              </div>
                            </div>
                            <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full border shrink-0 ${member.color}`}>
                              {member.status}
                            </span>
                          </div>
                          <div className="pt-3 border-t border-slate-900/60 flex justify-between items-center text-[10px]">
                            <span className="text-slate-500 font-mono">ID: GS-T0{member.id + 10}</span>
                            <button 
                              onClick={() => showToast(`Membuka histori penugasan ${member.name}`, 'info')}
                              className="text-purple-400 hover:text-white hover:underline font-semibold"
                            >
                              Detail Tugas
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* ==================== [PAGE 12]: ASET KLINIK & INVENTARIS ==================== */}
              {activeTab === 'menu-12' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Kelayakan Aset Estetika Medis</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                        <p className="text-xl font-black text-white">24 Unit</p>
                        <span className="text-[10px] text-slate-500">Laser Rejuvenation (99.2% Siap)</span>
                      </div>
                      <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                        <p className="text-xl font-black text-white">Bulanan</p>
                        <span className="text-[10px] text-slate-500">Jadwal Kalibrasi Mesin</span>
                      </div>
                      <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                        <p className="text-xl font-black text-white">Surplus</p>
                        <span className="text-[10px] text-slate-500">Bebas Penyusutan Kritis</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 13]: PORTFOLIO PRODUK BARU ==================== */}
              {activeTab === 'menu-13' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Riset Formula Serum Herbal Alami (Batch #4)</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Proses pendaftaran BPOM saat ini berada dalam pengawasan uji klinis tahap akhir. Diestimasikan meluncur komersial pada **Oktober 2026**.
                    </p>
                    <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style={{width: '75%'}} />
                    </div>
                    <span className="text-[9px] text-slate-500 mt-2 block font-mono">Penyelesaian Dokumen BPOM: 75% selesai</span>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 14]: PELACAKAN TARGET ==================== */}
              {activeTab === 'menu-14' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl text-center">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">KPI Target Q2 Tercapai</h4>
                    <h2 className="text-4xl font-black text-emerald-400 mt-1">84%</h2>
                    <p className="text-xs text-slate-300 mt-2">Dibutuhkan Rp 200 JT transaksi tambahan untuk memenuhi target tahunan Rp 1.4 M.</p>
                  </div>
                </div>
              )}

              {/* ==================== [PAGE 15]: PUSAT NOTIFIKASI SISTEM ==================== */}
              {activeTab === 'menu-15' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">Riwayat Log Sinkronisasi Otomatis</h4>
                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-purple-900/10 border border-purple-800/30 text-purple-200 rounded-xl flex items-center justify-between">
                        <span>✓ Sistem sinkron otomatis dengan server utama</span>
                        <span className="text-[10px] text-slate-500">1 jam lalu</span>
                      </div>
                      <div className="p-3 bg-rose-900/10 border border-rose-800/30 text-rose-200 rounded-xl flex items-center justify-between">
                        <span>⚠ Stok lipstik shade 04 tersisa 48 unit</span>
                        <span className="text-[10px] text-slate-500">1 hari lalu</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Kaki Halaman (Footer) */}
            <footer className="px-6 py-4 border-t border-slate-900 text-center text-[10px] text-slate-500 shrink-0">
              © 2026 GlowSphere. Hak Cipta Dilindungi Undang-Undang. Komando Terintegrasi Tanpa Hambatan.
            </footer>

          </main>

        </div>
      )}

    </div>
  );
}
