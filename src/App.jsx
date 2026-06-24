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
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [activeTab, setActiveTab] = useState('menu-1'); 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [toasts, setToasts] = useState([]);
  
  // State interaktif simulasi khusus modul komando
  const [cloudLoad, setCloudLoad] = useState(42);
  const [liveViewers, setLiveViewers] = useState(14200);

  useEffect(() => {
    const interval = setInterval(() => {
      setCloudLoad(prev => Math.min(Math.max(prev + (Math.random() * 6 - 3), 20), 85));
      setLiveViewers(prev => Math.min(Math.max(prev + Math.floor(Math.random() * 200 - 100), 12000), 18000));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  const infoMenus = [
    {
      id: 1,
      key: 'menu-1',
      title: "Ringkasan Finansial",
      subtitle: "Dashboard arus kas & margin bersih",
      value: "Rp 3.59 M",
      change: "+12.4%",
      isPositive: true,
      icon: LayoutDashboard,
      color: "from-purple-500 to-indigo-600",
      desc: "Menampilkan total margin kotor, pendapatan operasional bersih, serta proyeksi pertumbuhan keuangan kuartal ini berdasarkan kontribusi seluruh cabang GlowSphere.",
      kpis: [
        { label: "Margin Kotor", val: "72.4%" },
        { label: "Biaya Operasional", val: "Rp 940 JT" },
        { label: "Proyeksi Q3", val: "+14.8%" }
      ]
    },
    {
      id: 2,
      key: 'menu-2',
      title: "Transaksi Penjualan",
      subtitle: "Arsip riwayat pembelian produk",
      value: "14.2K Transaksi",
      change: "Sangat Stabil",
      isPositive: true,
      icon: Activity,
      color: "from-pink-500 to-rose-600",
      desc: "Laporan pelacakan transaksi masuk harian. Sistem mencatat lonjakan pembelian pada kategori perawatan kulit (skincare) booster.",
      kpis: [
        { label: "Rata-rata Transaksi", val: "Rp 245.000" },
        { label: "Metode QRIS", val: "68.2%" },
        { label: "Gagal Proses", val: "0.02%" }
      ]
    },
    {
      id: 3,
      key: 'menu-3',
      title: "Perencanaan Anggaran",
      subtitle: "Alokasi biaya promosi & operasional",
      value: "Rp 1.20 M",
      change: "Tercapai 91%",
      isPositive: true,
      icon: Calendar,
      color: "from-emerald-400 to-teal-600",
      desc: "Sistem penganggaran terpusat untuk memantau pengeluaran tak terduga serta optimasi dana iklan di berbagai kanal digital.",
      kpis: [
        { label: "Anggaran Iklan", val: "Rp 450 JT" },
        { label: "Dana Darurat", val: "Rp 150 JT" },
        { label: "Efisiensi Biaya", val: "+12.4%" }
      ]
    },
    {
      id: 4,
      key: 'menu-4',
      title: "Arus Kas Operasional",
      subtitle: "Visualisasi likuiditas harian",
      value: "Surplus Rp 890 JT",
      change: "+8.3% vs pekan lalu",
      isPositive: true,
      icon: TrendingUp,
      color: "from-cyan-500 to-blue-600",
      desc: "Arus dana masuk dan keluar riil (real cash). Menjamin kelancaran pembayaran vendor kemasan serta bahan baku organik utama.",
      kpis: [
        { label: "Arus Masuk", val: "Rp 1.45 M" },
        { label: "Arus Keluar", val: "Rp 560 JT" },
        { label: "Rasio Likuiditas", val: "2.4x" }
      ]
    },
    {
      id: 5,
      key: 'menu-5',
      title: "Analisis Profitabilitas",
      subtitle: "Margin kontribusi per kategori",
      value: "74.1% Margin",
      change: "+2.1% re-order",
      isPositive: true,
      icon: DollarSign,
      color: "from-amber-400 to-orange-600",
      desc: "Menghitung keuntungan murni per produk kecantikan setelah dipotong biaya formulasi, pengemasan, dan komisi agen.",
      kpis: [
        { label: "Profit Skincare", val: "78.2%" },
        { label: "Profit Makeup", val: "64.5%" },
        { label: "Kategori Terbaik", val: "Serum Booster" }
      ]
    },
    {
      id: 6,
      key: 'menu-6',
      title: "Laporan Keuangan",
      subtitle: "Ekspor berkas neraca rugi laba",
      value: "Tersedia (Q2)",
      change: "Sudah Audit",
      isPositive: true,
      icon: FileText,
      color: "from-indigo-500 to-violet-700",
      desc: "Dokumen komprehensif yang siap diunduh untuk kebutuhan rapat pemegang saham dan pelaporan wajib pajak berkala.",
      kpis: [
        { label: "Format Berkas", val: "PDF / XLSX" },
        { label: "Laporan Q1", val: "Terunduh 24x" },
        { label: "Status Audit", val: "WTP" }
      ]
    },
    {
      id: 7,
      key: 'menu-7',
      title: "Analitik Penjualan",
      subtitle: "Performa sebaran demografi pembeli",
      value: "DKI Jakarta (42%)",
      change: "Sangat Efisien",
      isPositive: true,
      icon: Share2,
      color: "from-fuchsia-500 to-purple-800",
      desc: "Analisis spasial lokasi pembeli tertinggi. Jabodetabek memimpin disusul oleh kota besar di Pulau Jawa dan Sumatera.",
      kpis: [
        { label: "Pangsa Jakarta", val: "42.0%" },
        { label: "Pangsa Surabaya", val: "18.4%" },
        { label: "Kanal Utama", val: "TikTok Shop" }
      ]
    },
    {
      id: 8,
      key: 'menu-8',
      title: "Wawasan AI Kecantikan",
      subtitle: "Rekomendasi tren produk otomatis",
      value: "91% Akurat",
      change: "+5.4% konversi",
      isPositive: true,
      icon: Cpu,
      color: "from-sky-400 to-indigo-600",
      desc: "Prediksi kecerdasan buatan terhadap produk yang berpotensi menjadi tren berdasarkan tren pencarian kosmetik global saat ini.",
      kpis: [
        { label: "Akurasi Saran", val: "91.0%" },
        { label: "Rekomendasi Paket", val: "Moist + Serum" },
        { label: "Konversi Tambahan", val: "Rp 45 JT" }
      ]
    },
    {
      id: 9,
      key: 'menu-9',
      title: "Basis Pengetahuan",
      subtitle: "Formulasi & edukasi kandungan",
      value: "142 Artikel",
      change: "Diperbarui",
      isPositive: true,
      icon: Layers,
      desc: "Dokumentasi internal mengenai kandungan bahan aktif produk seperti Niacinamide, Retinol alternatif, serta sertifikasi halal.",
      kpis: [
        { label: "Bahan Aktif", val: "24 Jenis" },
        { label: "Sertifikat Uji", val: "BPOM Selesai" },
        { label: "Kategori Edukasi", val: "8 Topik" }
      ]
    },
    {
      id: 10,
      key: 'menu-10',
      title: "Utang Usaha & Suplier",
      subtitle: "Kontrak & tempo pembayaran vendor",
      value: "Rp 120 JT Tempo",
      change: "Lancar",
      isPositive: true,
      icon: Truck,
      color: "from-rose-500 to-red-700",
      desc: "Mengelola siklus pembayaran bahan baku dengan para petani lokal dan penyuplai botol kaca daur ulang demi keberlanjutan produk.",
      kpis: [
        { label: "Jatuh Tempo", val: "14 Hari" },
        { label: "Total Vendor", val: "12 Perusahaan" },
        { label: "Rasio Utang", val: "Sangat Rendah" }
      ]
    },
    {
      id: 11,
      key: 'menu-11',
      title: "Manajemen Tim Terapis",
      subtitle: "Jadwal & performa staf klinik",
      value: "95.6% Rating",
      change: "+1.2% kepuasan",
      isPositive: true,
      icon: Users,
      color: "from-yellow-500 to-amber-700",
      desc: "Ulasan kepuasan pelayanan langsung dari para pelanggan terhadap terapis GlowSphere di seluruh klinik cabang.",
      kpis: [
        { label: "Staf Aktif", val: "182 Orang" },
        { label: "Sertifikasi Pro", val: "94%" },
        { label: "Jam Kerja Total", val: "1.400 Jam" }
      ]
    },
    {
      id: 12,
      key: 'menu-12',
      title: "Aset Klinik & Inventaris",
      subtitle: "Pemeliharaan alat kecantikan",
      value: "99.2% Siap Pakai",
      change: "Sistem Optimal",
      isPositive: true,
      icon: ShoppingBag,
      color: "from-violet-500 to-fuchsia-600",
      desc: "Status kelayakan operasional mesin terapi kulit seperti alat laser, pembersih komedo ultrasonik, dan pendingin produk.",
      kpis: [
        { label: "Mesin Laser", val: "24 Unit" },
        { label: "Jadwal Servis", val: "Setiap Bulan" },
        { label: "Penyusutan Aset", val: "Normal" }
      ]
    },
    {
      id: 13,
      key: 'menu-13',
      title: "Portofolio Produk Baru",
      subtitle: "Tahap riset & peluncuran sampel",
      value: "3 Produk Baru",
      change: "Riset BPOM",
      isPositive: true,
      icon: Sparkles,
      color: "from-emerald-500 to-green-600",
      desc: "Laporan perkembangan pendaftaran produk kosmetik baru yang ramah lingkungan dan bebas dari eksploitasi hewan.",
      kpis: [
        { label: "Sampel Riset", val: "Batch #4" },
        { label: "Estimasi Rilis", val: "Oktober 2026" },
        { label: "Uji Sensitivitas", val: "100% Aman" }
      ]
    },
    {
      id: 14,
      key: 'menu-14',
      title: "Pelacakan Target",
      subtitle: "Pencapaian KPI tahunan",
      value: "84% Tercapai",
      change: "+2% pekan ini",
      isPositive: true,
      icon: Award,
      color: "from-blue-500 to-indigo-700",
      desc: "Membandingkan performa penjualan riil dengan target tahunan guna menjaga motivasi seluruh divisi tim penjualan.",
      kpis: [
        { label: "Target Q2", val: "Rp 1.4 M" },
        { label: "Realisasi Q2", val: "Rp 1.2 M" },
        { label: "Sisa Target", val: "Rp 200 JT" }
      ]
    },
    {
      id: 15,
      key: 'menu-15',
      title: "Pusat Notifikasi Sistem",
      subtitle: "Log peringatan & pesan otomatis",
      value: "2 Aktif",
      change: "Normal",
      isPositive: true,
      icon: Bell,
      color: "from-green-400 to-emerald-600",
      desc: "Menyaring informasi krusial seperti stok menipis ataupun pengunggahan data otomatis dari server utama ke dasbor pusat.",
      kpis: [
        { label: "Pesan Masuk", val: "4 Item" },
        { label: "Peringatan Stok", val: "2 Produk" },
        { label: "Akurasi Kirim", val: "100%" }
      ]
    }
  ];

  const currentActiveMenu = infoMenus.find(m => m.key === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased relative selection:bg-purple-600 selection:text-white">
      
      {}
      <style>{`
        /* Universal scrollbar removal across all tags, classes, and elements */
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

      {/* ==================== PANEL UTAMA DENGAN SIDEBAR BEBAS SCROLLBAR ==================== */}
      <div className="flex min-h-screen">
        
        {/* ==================== SIDEBAR UTAMA (BEBAS SCROLLBAR - NO SCROLLBAR) ==================== */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-slate-900 text-slate-100 transform transition-transform duration-300 lg:translate-x-0 lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} border-r border-slate-800/60 flex flex-col justify-between`}>
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

            {}
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-6">
              
              {/* Bagian Komando (15 Menu Penuh) */}
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-3.5 mb-3 flex items-center justify-between">
                  <span>Modul Komando</span>
                  <span className="bg-purple-900/30 text-purple-400 text-[8px] px-1.5 py-0.5 rounded-full font-mono">15 Menu</span>
                </p>
                <div className="space-y-1">
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
                  showToast('Berhasil keluar dari sesi GlowSphere.', 'info');
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
            </div>
          </header>

          {}
          <div className="p-6 flex-1 flex flex-col gap-6">
            {currentActiveMenu && (
              <div className="space-y-6 animate-fadeIn">
                
                {/* Banner Selamat Datang / Informasi Modul */}
                <div className="bg-gradient-to-r from-slate-900/80 via-slate-900 to-slate-950 border border-slate-800/80 p-6 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-50/5 blur-3xl pointer-events-none rounded-full"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-900/40">
                      {React.createElement(currentActiveMenu.icon, { className: "w-5 h-5" })}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono text-purple-400 font-bold uppercase tracking-widest">MODUL KOMANDO</span>
                        <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">{currentActiveMenu.change}</span>
                      </div>
                      <h3 className="text-xl font-black text-white mt-1">{currentActiveMenu.title}</h3>
                      <p className="text-xs text-slate-400 mt-1 max-w-xl">{currentActiveMenu.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button 
                      onClick={() => showToast(`Audit log diunduh.`, 'success')}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-800 rounded-xl transition-all"
                    >
                      Audit Log
                    </button>
                  </div>
                </div>

                {/* Dashboard Konten Utama Modul Aktif */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  <div className="lg:col-span-2 space-y-6">
                    
                    {/* Visualisasi Grafik SVG */}
                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl relative overflow-hidden">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h4 className="text-xs font-bold text-slate-200">Grafik Komando Real-Time</h4>
                          <p className="text-xs text-slate-400">Monitoring pergerakan data otomatis</p>
                        </div>
                      </div>

                      <div className="h-64 w-full flex items-end justify-between px-2 pt-6 relative border-b border-slate-800">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                          <hr className="border-slate-800" />
                          <hr className="border-slate-800" />
                          <hr className="border-slate-800" />
                        </div>

                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2"/>
                              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                          <path d="M 10 180 Q 90 40 180 130 T 360 80 T 490 20 L 490 200 L 10 200 Z" fill="url(#glowGrad)" />
                          <path d="M 10 180 Q 90 40 180 130 T 360 80 T 490 20" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
                        </svg>

                        <div className="absolute top-1/2 left-1/4 bg-slate-950 border border-purple-500/20 text-purple-300 text-[10px] px-2.5 py-1 rounded-lg">
                          Metrik Aktif: {currentActiveMenu.value}
                        </div>
                      </div>

                      <div className="flex justify-between text-slate-500 text-[9px] mt-3 font-semibold px-1">
                        <span>08:00</span>
                        <span>12:00</span>
                        <span>16:00</span>
                        <span>20:00</span>
                      </div>
                    </div>

                    {/* Baris Grid KPI Modul */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {currentActiveMenu.kpis.map((kpi, idx) => (
                        <div key={idx} className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                          <span className="text-[9px] text-slate-400 font-semibold block uppercase tracking-wider">{kpi.label}</span>
                          <span className="text-base font-bold text-white mt-1.5 block font-mono">{kpi.val}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Sisi Kanan: Panel Asisten AI */}
                  <div className="space-y-6">
                    
                    <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl text-center relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Nilai Indeks Utama</span>
                      <h4 className="text-2xl font-black text-white mt-2 font-mono">{currentActiveMenu.value}</h4>
                      <span className="text-[9px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 rounded-full inline-block mt-3 border border-emerald-500/20">
                        {currentActiveMenu.change} SINKRON
                      </span>
                    </div>

                    <div className="bg-gradient-to-tr from-purple-950/20 to-slate-900/40 border border-purple-500/20 p-6 rounded-3xl space-y-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                        <h4 className="text-xs font-bold text-white">Rekomendasi GlowSphere AI</h4>
                      </div>
                      
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Analisis data historis untuk **{currentActiveMenu.title}** mengindikasikan status optimal. Direkomendasikan melakukan audit rutin berkala setiap awal kuartal.
                      </p>

                      <button 
                        onClick={() => showToast("Melakukan sinkronisasi AI...", "success")}
                        className="w-full py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white border border-purple-500/20 text-xs font-semibold rounded-xl transition-all"
                      >
                        Optimasi Otomatis
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            )}
          </div>

          {/* Kaki Halaman (Footer) */}
          <footer className="px-6 py-4 border-t border-slate-900 text-center text-[10px] text-slate-500">
            © 2026 GlowSphere. Hak Cipta Dilindungi Undang-Undang. Komando Terintegrasi Tanpa Hambatan.
          </footer>

        </main>

      </div>

    </div>
  );
}
