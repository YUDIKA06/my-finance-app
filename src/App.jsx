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
  GraduationCap,
  Sparkle
} from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Diatur default true agar langsung melihat dashboard
  const [loginEmail, setLoginEmail] = useState('admin@glowsphere.com');
  const [loginPassword, setLoginPassword] = useState('password123');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [activeTab, setActiveTab] = useState('command-center'); // Default langsung ke menu 16:8 yang baru
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [salesTimeframe, setSalesTimeframe] = useState('Bulanan');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null); // Menyimpan menu 16:8 yang sedang dibuka

  const infoMenus = [
    {
      id: 1,
      title: "Ringkasan Finansial",
      subtitle: "Arus kas & margin bersih",
      value: "Rp 3.59 M",
      change: "+12.4%",
      isPositive: true,
      icon: DollarSign,
      color: "from-purple-500 to-indigo-600",
      glowColor: "rgba(139, 92, 246, 0.4)",
      desc: "Menampilkan total margin kotor, pendapatan operasional bersih, serta proyeksi pertumbuhan keuangan kuartal ini berdasarkan kontribusi penjualan dari seluruh cabang GlowSphere."
    },
    {
      id: 2,
      title: "Status Stok Gudang",
      subtitle: "Optimalisasi rantai pasok",
      value: "94.2% Terisi",
      change: "Stok Aman",
      isPositive: true,
      icon: ShoppingBag,
      color: "from-pink-500 to-rose-600",
      glowColor: "rgba(236, 72, 153, 0.4)",
      desc: "Pemantauan real-time kapasitas penyimpanan utama. Sistem mencatat 12 produk berkategori 'Fast Moving' memiliki cadangan yang cukup untuk 45 hari ke depan."
    },
    {
      id: 3,
      title: "Kepuasan CSAT",
      subtitle: "Ulasan & sentimen pembeli",
      value: "4.82 / 5.0",
      change: "+0.15% poin",
      isPositive: true,
      icon: ThumbsUp,
      color: "from-emerald-400 to-teal-600",
      glowColor: "rgba(16, 185, 129, 0.4)",
      desc: "Rasio kepuasan pelanggan diperoleh melalui survei pasca-pembelian otomatis. 96% responden menyukai kecepatan respon admin dan kualitas kemasan ramah lingkungan."
    },
    {
      id: 4,
      title: "Performa TikTok Live",
      subtitle: "Konversi langsung penonton",
      value: "14.2K Penonton",
      change: "+32% hari ini",
      isPositive: true,
      icon: Activity,
      color: "from-cyan-500 to-blue-600",
      glowColor: "rgba(6, 182, 212, 0.4)",
      desc: "Analisis lalu lintas siaran langsung TikTok. Sesi hari ini menghasilkan rasio klik-ke-keranjang belanja sebesar 8.7% dengan Serum C-Glow sebagai produk paling laris dibeli."
    },
    {
      id: 5,
      title: "Retensi Pelanggan",
      subtitle: "Persentase loyalitas pembeli",
      value: "68.4%",
      change: "+2.1% re-order",
      isPositive: true,
      icon: Users,
      color: "from-amber-400 to-orange-600",
      glowColor: "rgba(245, 158, 11, 0.4)",
      desc: "Mengukur rasio pelanggan yang melakukan pembelian ulang dalam waktu 90 hari. Kehadiran program loyalitas tiering terbukti mendongkrak retensi hingga 6.8%."
    },
    {
      id: 6,
      title: "Peta Distribusi Geo",
      subtitle: "Asal pesanan terbanyak",
      value: "DKI Jakarta",
      change: "42% Pangsa",
      isPositive: true,
      icon: Layers,
      color: "from-indigo-500 to-violet-700",
      glowColor: "rgba(99, 102, 241, 0.4)",
      desc: "Distribusi geografis pesanan regional. Wilayah Jabodetabek mendominasi pesanan, disusul oleh Jawa Timur (Surabaya) dan Jawa Barat (Bandung) dengan peningkatan pesat."
    },
    {
      id: 7,
      title: "Efektivitas KOL",
      subtitle: "Rasio ROI pemasaran",
      value: "4.2x ROAS",
      change: "Sangat Efisien",
      isPositive: true,
      icon: Share2,
      color: "from-fuchsia-500 to-purple-800",
      glowColor: "rgba(217, 70, 239, 0.4)",
      desc: "Analisis efisiensi biaya kampanye melalui influencer media sosial. Kerja sama mikro-KOL kecantikan memberikan dampak interaksi autentik paling stabil dibandingkan makro-KOL."
    },
    {
      id: 8,
      title: "Durasi Logistik",
      subtitle: "Kecepatan proses kirim",
      value: "1.2 Hari",
      change: "-4 jam lebih cepat",
      isPositive: true,
      icon: Truck,
      color: "from-sky-400 to-indigo-600",
      glowColor: "rgba(56, 189, 248, 0.4)",
      desc: "Metrik durasi dari pembayaran divalidasi hingga paket diserahkan ke kurir logistik pihak ketiga. Integrasi gudang otomatis mempercepat sortir pengemasan."
    },
    {
      id: 9,
      title: "Rasio Retur Produk",
      subtitle: "Persentase komplain & cacat",
      value: "0.14%",
      change: "-0.05% turun",
      isPositive: true,
      icon: RotateCcw,
      color: "from-rose-500 to-red-700",
      glowColor: "rgba(244, 63, 94, 0.4)",
      desc: "Laporan komplain dan retur barang. Angka yang sangat minim ini mencerminkan keberhasilan protokol kontrol kualitas (QC) berlapis pada lini produksi pengemasan botol."
    },
    {
      id: 10,
      title: "Program Loyalitas",
      subtitle: "Member aktif GlowSphere",
      value: "84.3K Member",
      change: "+1.8K minggu ini",
      isPositive: true,
      icon: Award,
      color: "from-yellow-500 to-amber-700",
      glowColor: "rgba(234, 179, 8, 0.4)",
      desc: "Statistik keanggotaan aktif. Tier Gold dan Platinum mencatat transaksi belanja dengan rata-rata nominal keranjang 2.5 kali lebih besar dibanding pembeli non-member."
    },
    {
      id: 11,
      title: "Rekomendasi AI",
      subtitle: "Akurasi presisi kecocokan",
      value: "91% Akurat",
      change: "Sistem Optimal",
      isPositive: true,
      icon: Cpu,
      color: "from-violet-500 to-fuchsia-600",
      glowColor: "rgba(139, 92, 246, 0.4)",
      desc: "Algoritma rekomendasi AI di aplikasi web memprediksi kombo produk berikutnya untuk pengguna. Skincare anti-aging dikombinasikan dengan moisturizer mencatat penjualan paket tertinggi."
    },
    {
      id: 12,
      title: "Infrastruktur Cloud",
      subtitle: "Keandalan respons sistem",
      value: "99.98% Uptime",
      change: "Sangat Stabil",
      isPositive: true,
      icon: ShieldCheck,
      color: "from-emerald-500 to-green-600",
      glowColor: "rgba(16, 185, 129, 0.4)",
      desc: "Status server backend dan basis data. Kecepatan memuat halaman (page-load time) rata-rata berada pada kisaran 120ms, memastikan kenyamanan belanja tanpa hambatan."
    },
    {
      id: 13,
      title: "Biaya Akuisisi (CAC)",
      subtitle: "Biaya per pelanggan baru",
      value: "Rp 18.500",
      change: "Hemat Rp 2.000",
      isPositive: true,
      icon: Users,
      color: "from-blue-500 to-indigo-700",
      glowColor: "rgba(59, 130, 246, 0.4)",
      desc: "Customer Acquisition Cost (CAC) sukses diturunkan berkat optimasi organik konten edukatif kecantikan di platform video pendek, memotong ketergantungan iklan berbayar."
    },
    {
      id: 14,
      title: "Bahan Baku Berkelanjutan",
      subtitle: "Indeks ramah lingkungan",
      value: "88% Organik",
      change: "+5% kenaikan",
      isPositive: true,
      icon: Leaf,
      color: "from-green-400 to-emerald-600",
      glowColor: "rgba(52, 211, 153, 0.4)",
      desc: "Menghitung persentase material alami terverifikasi ramah lingkungan dan bebas dari eksploitasi hewan (cruelty-free), meningkatkan reputasi jenama di mata pasar gen-Z."
    },
    {
      id: 15,
      title: "Edukasi Staf Klinik",
      subtitle: "Skor sertifikasi tim terapis",
      value: "95.6% Lulus",
      change: "Kualifikasi Pro",
      isPositive: true,
      icon: GraduationCap,
      color: "from-amber-500 to-rose-500",
      glowColor: "rgba(245, 158, 11, 0.4)",
      desc: "Indeks kompetensi staf kecantikan GlowSphere. Pelatihan berkala mengenai pengenalan kandungan aktif skincare terbaru menjamin saran yang akurat bagi para pelanggan."
    }
  ];

  const [reportStartDate, setReportStartDate] = useState('2026-01-01');
  const [reportEndDate, setReportEndDate] = useState('2026-06-30');
  const [reportsList, setReportsList] = useState([
    { id: 1, name: 'Laporan_Analitik_GlowSphere_Mei2026.pdf', date: '25 Mei 2026', size: '2.4 MB', type: 'PDF' },
    { id: 2, name: 'Ekspor_Data_Penjualan_Q1_2026.xlsx', date: '12 Apr 2026', size: '1.8 MB', type: 'Excel' },
    { id: 3, name: 'Metrik_Keterlibatan_Medsos_April.pdf', date: '02 Apr 2026', size: '4.1 MB', type: 'PDF' },
    { id: 4, name: 'Kinerja_Produk_Skincare_Tahunan.xlsx', date: '20 Jan 2026', size: '850 KB', type: 'Excel' }
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Target Penjualan Tercapai!', text: 'Penjualan produk Serum C-Glow melampaui target bulanan sebesar 15%.', time: '5 mnt lalu', read: false },
    { id: 2, title: 'Analisis Medsos Siap', text: 'Laporan mingguan TikTok & Instagram terkini telah selesai dibuat.', time: '1 jam lalu', read: false },
    { id: 3, title: 'Peringatan Stok Rendah', text: 'Stok lipstik "GlowLip Velvet shade 04" tersisa kurang dari 50 unit.', time: '1 hari lalu', read: true }
  ]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setLoginError('Email dan password wajib diisi.');
      return;
    }
    
    setIsLoggingIn(true);
    setLoginError('');

    setTimeout(() => {
      if (loginEmail === 'admin@glowsphere.com' && loginPassword === 'password123') {
        setIsLoggedIn(true);
        setIsLoggingIn(false);
        showToast('Selamat datang kembali di GlowSphere Hub!', 'success');
      } else {
        setLoginError('Email atau sandi salah. Gunakan kredensial bawaan.');
        setIsLoggingIn(false);
      }
    }, 1200);
  };

  const handleDownloadReport = (fileName) => {
    showToast(`Memulai unduhan berkas: ${fileName}`, 'info');
    setTimeout(() => {
      showToast(`Berkas "${fileName}" berhasil tersimpan di perangkat Anda!`, 'success');
    }, 1500);
  };

  const handleCreateReport = (e) => {
    e.preventDefault();
    const newReport = {
      id: Date.now(),
      name: `Laporan_Kustom_${reportStartDate}_ke_${reportEndDate}.pdf`,
      date: 'Hari Ini',
      size: '1.2 MB',
      type: 'PDF'
    };
    setReportsList([newReport, ...reportsList]);
    showToast('Laporan kustom baru berhasil disusun!', 'success');
  };

  const markAllNotificationsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    showToast('Semua notifikasi ditandai sebagai dibaca.', 'success');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased relative selection:bg-purple-500 selection:text-white">
      
      {/* Container untuk Toasts Notifikasi */}
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

      {/* ==================== LOGIN PAGE ==================== */}
      {!isLoggedIn ? (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-950 via-purple-950/20 to-slate-950 p-4">
          <div className="bg-slate-900/60 rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 min-h-[550px] border border-slate-800 backdrop-blur-xl">
            
            {/* Form Login */}
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-black shadow-md shadow-purple-900/50">
                    G
                  </div>
                  <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">GlowSphere</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">Selamat Datang Kembali!</h2>
                <p className="text-slate-400 text-sm mb-6">Silakan masuk untuk mengelola dan memantau bisnis kecantikan Anda.</p>

                <form onSubmit={handleLogin} className="space-y-4">
                  {loginError && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{loginError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Alamat Email</label>
                    <input 
                      type="email" 
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 rounded-xl border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="nama@email.com"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Kata Sandi</label>
                      <button 
                        type="button" 
                        onClick={() => showToast('Hubungi sistem administrator untuk mereset sandi demo ini.', 'info')} 
                        className="text-xs text-purple-400 hover:underline"
                      >
                        Lupa Kata Sandi?
                      </button>
                    </div>
                    <input 
                      type="password" 
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 rounded-xl border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoggingIn}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                  >
                    {isLoggingIn ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Masuk ke Dasbor</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-xs text-slate-500 text-center">
                  GlowSphere Enterprise • Profesional, Elegan & Responsif
                </p>
              </div>
            </div>

            {/* Ilustrasi & Pemasaran */}
            <div className="hidden md:flex flex-col justify-between p-12 bg-gradient-to-tr from-purple-900 to-indigo-950 text-white relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] w-[350px] h-[350px] rounded-full bg-purple-500/20 blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-[-20%] left-[-20%] w-[350px] h-[350px] rounded-full bg-pink-500/10 blur-3xl pointer-events-none"></div>

              <div className="flex justify-between items-center z-10">
                <span className="text-xs font-semibold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">PRO VERSION 2.5</span>
                <span className="text-xs text-purple-300 font-mono">GlowSphere.co</span>
              </div>

              <div className="my-auto z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-pink-300 animate-pulse" />
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-200">
                  "Empowering Beauty Business Through Data Intelligence"
                </h1>
                <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                  Kelola penjualan produk, pantau keterlibatan audiens media sosial, dan ambil keputusan bisnis berbasis data kecantikan yang kuat di satu tempat.
                </p>
              </div>

              <div className="z-10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-purple-800 bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-900">R</div>
                  <div className="w-8 h-8 rounded-full border-2 border-purple-800 bg-purple-300 flex items-center justify-center text-[10px] font-bold text-slate-900">A</div>
                  <div className="w-8 h-8 rounded-full border-2 border-purple-800 bg-indigo-300 flex items-center justify-center text-[10px] font-bold text-slate-900">S</div>
                </div>
                <span className="text-xs text-purple-200">Dipercaya oleh 5,000+ klinik kecantikan secara global</span>
              </div>
            </div>

          </div>
        </div>
      ) : (
        
        // ==================== DAFTAR APLIKASI UTAMA (DASHBOARD SHELL) ====================
        <div className="flex min-h-screen">
          
          {/* Sidebar Navigasi */}
          <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-100 transform transition-transform duration-300 lg:translate-x-0 lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} border-r border-slate-800/60`}>
            <div className="h-full flex flex-col justify-between p-6">
              <div>
                
                {/* Logo Sidebar */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-sm">
                      G
                    </div>
                    <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">GlowSphere</span>
                  </div>
                  <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Navigasi */}
                <nav className="space-y-1.5">
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest pl-3 mb-2">PILIHAN PANEL</p>
                  
                  {/* Menu baru: 16:8 Command Center */}
                  <button 
                    onClick={() => { setActiveTab('command-center'); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === 'command-center' 
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/40' 
                        : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <Sparkle className="w-4 h-4 shrink-0 text-pink-400" />
                    <span>Komando 16:8 (15 Menu)</span>
                  </button>

                  <button 
                    onClick={() => { setActiveTab('dashboard'); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === 'dashboard' 
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/40' 
                        : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <LayoutDashboard className="w-4 h-4 shrink-0" />
                    <span>Dasbor Utama</span>
                  </button>

                  <button 
                    onClick={() => { setActiveTab('sales'); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === 'sales' 
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/40' 
                        : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    <span>Analisis Penjualan</span>
                  </button>

                  <button 
                    onClick={() => { setActiveTab('social'); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === 'social' 
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/40' 
                        : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <Share2 className="w-4 h-4 shrink-0" />
                    <span>Analisis Media Sosial</span>
                  </button>

                  <button 
                    onClick={() => { setActiveTab('reports'); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === 'reports' 
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/40' 
                        : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    <span>Laporan & Ekspor</span>
                  </button>

                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest pl-3 pt-6 mb-2">KONFIGURASI</p>

                  <button 
                    onClick={() => { setActiveTab('settings'); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === 'settings' 
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/40' 
                        : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <Settings className="w-4 h-4 shrink-0" />
                    <span>Pengaturan</span>
                  </button>
                </nav>
              </div>

              {/* Tombol Logout & Info Profil Singkat */}
              <div>
                <div className="p-3 bg-slate-800/40 rounded-xl mb-3 flex items-center gap-3 border border-slate-800/30">
                  <div className="w-9 h-9 rounded-lg bg-pink-900/40 border border-pink-700/50 flex items-center justify-center text-pink-300 font-bold text-sm shrink-0">
                    S
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold text-white truncate">Sophia Lorenza</p>
                    <p className="text-[10px] text-slate-400 truncate">Direktur Kecantikan</p>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setIsLoggedIn(false);
                    showToast('Berhasil keluar dari sesi dasbor.', 'info');
                  }}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-950/40 hover:text-rose-300 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar Akun</span>
                </button>
              </div>

            </div>
          </aside>

          {/* Sisi Konten Utama */}
          <main className="flex-1 min-w-0 flex flex-col min-h-screen">
            
            {/* Header Konten */}
            <header className="sticky top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 z-30 px-6 py-4 flex items-center justify-between gap-4">
              
              {/* Kiri: Judul dan Tombol Hamburger */}
              <div className="flex items-center gap-3">
                <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:bg-slate-900">
                  <Menu className="w-6 h-6" />
                </button>
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    {activeTab === 'command-center' && (
                      <>
                        <span>Pusat Komando Eksekutif 16:8</span>
                        <span className="text-[10px] bg-purple-900/60 border border-purple-500/30 text-purple-300 px-2 py-0.5 rounded-full font-mono uppercase tracking-widest hidden sm:inline-block">15 Menu Utama</span>
                      </>
                    )}
                    {activeTab === 'dashboard' && 'Dasbor Utama'}
                    {activeTab === 'sales' && 'Analisis Penjualan Lengkap'}
                    {activeTab === 'social' && 'Analisis Performa Media Sosial'}
                    {activeTab === 'reports' && 'Laporan & Ekspor Berkas'}
                    {activeTab === 'settings' && 'Pengaturan GlowSphere'}
                  </h2>
                  <p className="text-xs text-slate-400 hidden sm:block">Perusahaan Kecantikan Berbasis Data Kecerdasan Buatan</p>
                </div>
              </div>

              {/* Kanan: Pencarian, Notifikasi & Profil */}
              <div className="flex items-center gap-3 relative">
                
                {/* Search Bar */}
                <div className="hidden md:flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-3 py-1.5 w-64 focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-transparent transition-all">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Cari menu, laporan, produk..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-slate-200 w-full focus:outline-none"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-200 text-xs font-semibold px-1">✕</button>
                  )}
                </div>

                {/* Notification Icon */}
                <div className="relative">
                  <button 
                    onClick={() => {
                      setShowNotifications(!showNotifications);
                      setShowProfileDropdown(false);
                    }}
                    className="p-2 text-slate-400 hover:bg-slate-900 rounded-full relative transition-all"
                  >
                    <Bell className="w-5 h-5" />
                    {notifications.some(n => !n.read) && (
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500 ring-2 ring-slate-950"></span>
                    )}
                  </button>

                  {/* Panel Notifikasi */}
                  {showNotifications && (
                    <div className="absolute right-0 mt-3 w-80 bg-slate-900 rounded-2xl shadow-xl border border-slate-800 py-3 z-50">
                      <div className="flex items-center justify-between px-4 pb-2 border-b border-slate-800">
                        <span className="text-xs font-bold text-white">Pemberitahuan</span>
                        <button 
                          onClick={markAllNotificationsRead} 
                          className="text-[10px] font-semibold text-purple-400 hover:underline"
                        >
                          Tandai semua dibaca
                        </button>
                      </div>
                      <div className="max-h-72 overflow-y-auto pt-1">
                        {notifications.map(item => (
                          <div 
                            key={item.id} 
                            onClick={() => {
                              setNotifications(notifications.map(n => n.id === item.id ? { ...n, read: true } : n));
                              showToast(`Terbaca: ${item.title}`, 'info');
                            }}
                            className={`p-3.5 hover:bg-slate-800 transition-all cursor-pointer border-b border-slate-800/40 flex gap-2 ${!item.read ? 'bg-purple-900/10' : ''}`}
                          >
                            <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0 mt-1.5 opacity-80" />
                            <div>
                              <p className={`text-xs ${!item.read ? 'font-bold text-white' : 'text-slate-300'}`}>{item.title}</p>
                              <p className="text-[11px] text-slate-400 leading-normal mt-0.5">{item.text}</p>
                              <span className="text-[9px] text-slate-500 block mt-1">{item.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Profil Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => {
                      setShowProfileDropdown(!showProfileDropdown);
                      setShowNotifications(false);
                    }}
                    className="flex items-center gap-2 hover:bg-slate-900 p-1.5 rounded-full transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white font-bold flex items-center justify-center text-xs">
                      SL
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
                  </button>

                  {/* Panel Dropdown Profil */}
                  {showProfileDropdown && (
                    <div className="absolute right-0 mt-3 w-48 bg-slate-900 rounded-xl shadow-xl border border-slate-800 py-1.5 z-50">
                      <div className="px-4 py-2 border-b border-slate-800">
                        <p className="text-xs font-bold text-white">Sophia Lorenza</p>
                        <p className="text-[10px] text-slate-400">admin@glowsphere.com</p>
                      </div>
                      <button onClick={() => { setActiveTab('settings'); setShowProfileDropdown(false); }} className="w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-purple-400" /> Profil Saya
                      </button>
                      <button onClick={() => { setActiveTab('settings'); setShowProfileDropdown(false); }} className="w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 flex items-center gap-2">
                        <Settings className="w-3.5 h-3.5 text-pink-400" /> Pengaturan
                      </button>
                      <hr className="my-1 border-slate-800" />
                      <button 
                        onClick={() => {
                          setIsLoggedIn(false);
                          showToast('Berhasil keluar.', 'info');
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-rose-400 hover:bg-rose-950/40 flex items-center gap-2"
                      >
                        <LogOut className="w-3.5 h-3.5" /> Keluar Sesi
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </header>

            {/* Konten Menu Utama */}
            <div className="p-6 flex-1">
              
              {/* ==================== SCREEN: PUSAT KOMANDO 16:8 (15 MENU) ==================== */}
              {activeTab === 'command-center' && (
                <div className="space-y-6">
                  
                  {/* Banner Info Ringkas */}
                  <div className="bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/10 border border-purple-800/30 p-5 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">War-Room Executive Monitor</h3>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                        Aplikasi telah dikonfigurasi ke dalam dimensi aspek rasio **16:8** yang ideal untuk layar monitoring lebar. Silakan klik salah satu dari **15 Menu Informasi Utama** di bawah untuk memproses detail analitik data kecantikan internal.
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-slate-400 font-mono">STATUS: <strong className="text-emerald-400 animate-pulse">SINKRONISASI AKTIF</strong></span>
                    </div>
                  </div>

                  {/* FRAME UTAMA DENGAN FORMAT RASIO LEBAR 16:8 */}
                  <div className="w-full bg-slate-900/50 rounded-3xl border border-slate-800/80 p-6 shadow-2xl relative overflow-hidden">
                    
                    {/* Pembatas Efek Cahaya Latar Belakang */}
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[100px] pointer-events-none"></div>

                    {/* Pembungkus Konten 16:8 - Grid 15 Menu (5 Kolom x 3 Baris pada Desktop) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {infoMenus.map((menu) => {
                        const IconComponent = menu.icon;
                        return (
                          <div
                            key={menu.id}
                            onClick={() => {
                              setSelectedMenu(menu);
                              showToast(`Memuat modul: ${menu.title}`, 'info');
                            }}
                            className="bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-purple-500/50 p-4 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between min-h-[140px] group relative overflow-hidden"
                            style={{
                              boxShadow: `0 4px 20px -5px ${menu.glowColor}`
                            }}
                          >
                            {/* Garis Aksen Hover */}
                            <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${menu.color} opacity-80 group-hover:w-2 transition-all`}></div>

                            {/* Header Kartu */}
                            <div className="flex justify-between items-start pl-2">
                              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-semibold">INFO #{menu.id}</span>
                              <div className={`p-1.5 rounded-lg bg-gradient-to-tr ${menu.color} text-white`}>
                                <IconComponent className="w-4 h-4" />
                              </div>
                            </div>

                            {/* Judul & Konten Utama */}
                            <div className="pl-2 mt-3">
                              <h4 className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{menu.title}</h4>
                              <p className="text-[9px] text-slate-500 line-clamp-1 mt-0.5">{menu.subtitle}</p>
                            </div>

                            {/* Nilai / Metrik & Perubahan */}
                            <div className="pl-2 mt-3 pt-2 border-t border-slate-900 flex items-center justify-between">
                              <span className="text-sm font-black text-white font-mono tracking-tight">{menu.value}</span>
                              <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">{menu.change}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>

                  {/* ==================== PANEL MODAL DETAIL DIALOG (INTERAKTIF) ==================== */}
                  {selectedMenu && (
                    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all animate-fadeIn">
                      {}
                      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl transform scale-100 transition-transform">
                        
                        {/* Header Modal */}
                        <div className={`p-6 bg-gradient-to-r ${selectedMenu.color} text-white flex justify-between items-center`}>
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/10 rounded-xl">
                              {React.createElement(selectedMenu.icon, { className: "w-5 h-5 text-white" })}
                            </div>
                            <div>
                              <span className="text-[9px] font-mono bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider">MODUL INFORMASI #{selectedMenu.id}</span>
                              <h3 className="text-base font-extrabold mt-1">{selectedMenu.title}</h3>
                            </div>
                          </div>
                          <button 
                            onClick={() => setSelectedMenu(null)}
                            className="p-1.5 bg-black/10 hover:bg-black/20 rounded-full transition-all"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Konten Modal */}
                        <div className="p-6 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold block">Nilai Tercatat</span>
                              <span className="text-2xl font-black text-purple-400 mt-1 block font-mono">{selectedMenu.value}</span>
                            </div>
                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold block">Perubahan Tren</span>
                              <span className="text-lg font-bold text-emerald-400 mt-2 block flex items-center gap-1 font-mono">
                                <TrendingUp className="w-4 h-4 shrink-0" /> {selectedMenu.change}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-widest">Penjelasan Detil</h5>
                            <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/50">
                              {selectedMenu.desc}
                            </p>
                          </div>

                          <div className="bg-purple-950/20 border border-purple-500/20 p-3.5 rounded-xl flex items-start gap-2 text-[11px] text-purple-300">
                            <Sparkles className="w-4 h-4 shrink-0 text-pink-400 mt-0.5" />
                            <span><strong>Saran AI:</strong> Data ini telah diaudit dan disinkronkan secara real-time dengan basis data pusat GlowSphere untuk memaksimalkan margin pengambilan keputusan Anda.</span>
                          </div>
                        </div>

                        {/* Footer Modal */}
                        <div className="p-4 bg-slate-950 border-t border-slate-800/60 flex justify-end gap-2">
                          <button 
                            onClick={() => {
                              showToast(`Menyalin log data Modul #${selectedMenu.id}`, 'success');
                              setSelectedMenu(null);
                            }}
                            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-xl font-medium transition-all"
                          >
                            Salin Log Data
                          </button>
                          <button 
                            onClick={() => {
                              showToast(`Mengekspor laporan Modul #${selectedMenu.id} sebagai PDF...`, 'info');
                              setSelectedMenu(null);
                            }}
                            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-xs text-white rounded-xl font-medium transition-all"
                          >
                            Ekspor PDF
                          </button>
                        </div>

                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* ==================== SCREEN: DASBOR UTAMA ==================== */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  
                  {/* Bagian Statistik Kartu Atas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    {/* Total Penjualan */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm flex items-start justify-between">
                      <div>
                        <span className="text-xs font-medium text-slate-400">Total Penjualan</span>
                        <h3 className="text-2xl font-extrabold text-white mt-1">Rp 385.50 JT</h3>
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full mt-2">
                          <TrendingUp className="w-3 h-3" /> +3.0% bulan ini
                        </span>
                      </div>
                      <div className="p-3 bg-purple-950/40 border border-purple-800/30 rounded-xl text-purple-400 shrink-0">
                        <ShoppingBag className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Total Pendapatan */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm flex items-start justify-between">
                      <div>
                        <span className="text-xs font-medium text-slate-400">Total Pendapatan</span>
                        <h3 className="text-2xl font-extrabold text-white mt-1">Rp 3.59 M</h3>
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full mt-2">
                          <TrendingUp className="w-3 h-3" /> +3.5%
                        </span>
                      </div>
                      <div className="p-3 bg-indigo-950/40 border border-indigo-800/30 rounded-xl text-indigo-400 shrink-0">
                        <DollarSign className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Total Pesanan */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm flex items-start justify-between">
                      <div>
                        <span className="text-xs font-medium text-slate-400">Total Pesanan</span>
                        <h3 className="text-2xl font-extrabold text-white mt-1">338,948</h3>
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full mt-2">
                          <TrendingUp className="w-3 h-3" /> +0.3%
                        </span>
                      </div>
                      <div className="p-3 bg-pink-950/40 border border-pink-800/30 rounded-xl text-pink-400 shrink-0">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Keterlibatan Sosmed */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm flex items-start justify-between">
                      <div>
                        <span className="text-xs font-medium text-slate-400">Interaksi Medsos</span>
                        <h3 className="text-2xl font-extrabold text-white mt-1">41.2K</h3>
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full mt-2">
                          <TrendingUp className="w-3 h-3" /> +1.2%
                        </span>
                      </div>
                      <div className="p-3 bg-cyan-950/40 border border-cyan-800/30 rounded-xl text-cyan-400 shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                    </div>

                  </div>

                  {/* Grafik Dua Sisi */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Grafik Penjualan Bulanan */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm lg:col-span-2">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h4 className="text-sm font-bold text-slate-200">Tren Penjualan Bulanan</h4>
                          <p className="text-xs text-slate-400">Visualisasi data penjualan triwulan kedua</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 bg-slate-950 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" /> 2026
                          </span>
                        </div>
                      </div>

                      {/* Simulasi Grafik Line Modern Menggunakan SVG */}
                      <div className="h-64 w-full relative">
                        <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="chartGradientDark" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <line x1="0" y1="50" x2="500" y2="50" stroke="#1e293b" strokeWidth="1" />
                          <line x1="0" y1="100" x2="500" y2="100" stroke="#1e293b" strokeWidth="1" />
                          <line x1="0" y1="150" x2="500" y2="150" stroke="#1e293b" strokeWidth="1" />
                          
                          <path 
                            d="M 10 160 C 100 140, 150 70, 250 110 C 350 150, 400 40, 490 30 L 490 200 L 10 200 Z" 
                            fill="url(#chartGradientDark)" 
                          />
                          
                          <path 
                            d="M 10 160 C 100 140, 150 70, 250 110 C 350 150, 400 40, 490 30" 
                            fill="none" 
                            stroke="#8B5CF6" 
                            strokeWidth="4" 
                            strokeLinecap="round"
                          />

                          <circle cx="250" cy="110" r="6" fill="#8B5CF6" stroke="#0f172a" strokeWidth="2" className="cursor-pointer" />
                          <circle cx="490" cy="30" r="6" fill="#8B5CF6" stroke="#0f172a" strokeWidth="2" />
                        </svg>

                        <div className="absolute top-[80px] left-[45%] bg-slate-950 text-white text-[10px] px-2 py-1 rounded border border-slate-800 shadow-lg pointer-events-none">
                          April: Rp 120 JT
                        </div>
                      </div>

                      <div className="flex justify-between text-slate-500 text-xs px-2 mt-4 font-medium">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>Mei</span>
                        <span>Jun</span>
                      </div>
                    </div>

                    {/* Grafik Interaksi Medsos */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h4 className="text-sm font-bold text-slate-200">Keterlibatan Sosial</h4>
                          <p className="text-xs text-slate-400">Perbandingan antarsaluran</p>
                        </div>
                      </div>

                      <div className="space-y-4 h-64 flex flex-col justify-end">
                        
                        {/* TikTok */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-slate-400">TikTok</span>
                            <span className="text-purple-400">45% (Sangat Baik)</span>
                          </div>
                          <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden">
                            <div className="bg-purple-600 h-full rounded-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>

                        {/* Instagram */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-slate-400">Instagram</span>
                            <span className="text-pink-400">35% (Stabil)</span>
                          </div>
                          <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden">
                            <div className="bg-pink-500 h-full rounded-full" style={{ width: '35%' }}></div>
                          </div>
                        </div>

                        {/* Facebook */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-slate-400">Facebook</span>
                            <span className="text-indigo-400">15% (Butuh Optimasi)</span>
                          </div>
                          <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden">
                            <div className="bg-indigo-500 h-full rounded-full" style={{ width: '15%' }}></div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>

                </div>
              )}

              {/* ==================== SCREEN: ANALISIS PENJUALAN ==================== */}
              {activeTab === 'sales' && (
                <div className="space-y-6">
                  
                  {/* Filter Tab Jangka Waktu */}
                  <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 p-3.5 rounded-2xl border border-slate-800 shadow-sm">
                    <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-850">
                      {['Harian', 'Mingguan', 'Bulanan', 'Tahunan'].map(tf => (
                        <button 
                          key={tf}
                          onClick={() => {
                            setSalesTimeframe(tf);
                            showToast(`Rentang waktu diubah ke: ${tf}`, 'info');
                          }}
                          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                            salesTimeframe === tf 
                              ? 'bg-slate-900 text-white border border-slate-800' 
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {tf}
                        </button>
                      ))}
                    </div>

                    <div className="text-xs text-slate-400">
                      Menampilkan data penjualan untuk: <strong className="text-purple-400">{salesTimeframe} (Terbaru)</strong>
                    </div>
                  </div>

                  {/* Grid Grafik Berdasarkan Tab Penjualan */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Visualisasi Grafik Besar */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm lg:col-span-2">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h4 className="text-sm font-bold text-slate-200">Grafik Perkembangan Penjualan</h4>
                          <p className="text-xs text-slate-400">Garis kurva volume penjualan total</p>
                        </div>
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">+12.4% vs kuartal lalu</span>
                      </div>

                      <div className="h-72 w-full relative">
                        {salesTimeframe === 'Harian' && (
                          <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                            <path d="M 10 170 Q 100 80 200 120 T 400 60 T 490 20" fill="none" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
                          </svg>
                        )}
                        {salesTimeframe === 'Mingguan' && (
                          <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                            <path d="M 10 150 Q 120 40 250 140 T 490 50" fill="none" stroke="#6366F1" strokeWidth="4" strokeLinecap="round" />
                          </svg>
                        )}
                        {salesTimeframe === 'Bulanan' && (
                          <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                            <path d="M 10 160 C 100 140, 150 70, 250 110 C 350 150, 400 40, 490 30" fill="none" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" />
                          </svg>
                        )}
                        {salesTimeframe === 'Tahunan' && (
                          <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                            <path d="M 10 180 Q 150 140 250 80 T 490 10" fill="none" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Rincian Rata-rata */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm flex flex-col justify-between">
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Metrik Nilai Belanja</h4>
                        <div className="p-4 bg-slate-950 rounded-xl border border-slate-850">
                          <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Rata-rata Transaksi</span>
                          <span className="text-xl font-black text-white font-mono mt-1 block">Rp 245.500</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed mt-4">
                        Data audit mencerminkan efisiensi kampanye GlowSphere yang terkonversi menjadi omset bersih bulanan.
                      </p>
                    </div>

                  </div>

                </div>
              )}

              {/* ==================== SCREEN: ANALISIS MEDIA SOSIAL ==================== */}
              {activeTab === 'social' && (
                <div className="space-y-6">
                  
                  {/* KPI Baris Atas */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center shadow-sm">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Suka (Likes)</span>
                      <h4 className="text-xl font-black text-white mt-1">163K+</h4>
                      <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block mt-2">+5.4%</span>
                    </div>

                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center shadow-sm">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Komentar</span>
                      <h4 className="text-xl font-black text-white mt-1">2,530</h4>
                      <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block mt-2">+2.1%</span>
                    </div>

                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center shadow-sm">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Bagikan</span>
                      <h4 className="text-xl font-black text-white mt-1">4.7K</h4>
                      <span className="text-[10px] text-pink-400 font-semibold bg-pink-500/10 px-2 py-0.5 rounded-full inline-block mt-2">-0.8%</span>
                    </div>

                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center shadow-sm">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pengikut Baru</span>
                      <h4 className="text-xl font-black text-white mt-1">53.8K</h4>
                      <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block mt-2">+14.2%</span>
                    </div>
                  </div>

                </div>
              )}

              {/* ==================== SCREEN: LAPORAN & EKSPOR ==================== */}
              {activeTab === 'reports' && (
                <div className="space-y-6">
                  
                  {/* Form Pembuat Laporan Kustom */}
                  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm">
                    <h4 className="text-sm font-bold text-white mb-1">Susun Laporan Kustom Baru</h4>
                    <p className="text-xs text-slate-400 mb-6">Pilih tanggal spesifik untuk memproses laporan keuangan secara real-time</p>

                    <form onSubmit={handleCreateReport} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">Tanggal Mulai</label>
                        <input 
                          type="date" 
                          value={reportStartDate}
                          onChange={(e) => setReportStartDate(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">Tanggal Selesai</label>
                        <input 
                          type="date" 
                          value={reportEndDate}
                          onChange={(e) => setReportEndDate(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                      </div>
                      <button 
                        type="submit"
                        className="py-2.5 px-4 bg-purple-600 text-white font-medium text-xs rounded-xl hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
                      >
                        <Plus className="w-4 h-4" /> Susun Laporan Sekarang
                      </button>
                    </form>
                  </div>

                </div>
              )}

              {/* ==================== SCREEN: PENGATURAN ==================== */}
              {activeTab === 'settings' && (
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-white">Pengaturan Akun & Aplikasi</h4>
                    <p className="text-xs text-slate-400">Kelola identitas jenama (brand) dan preferensi visual dasbor Anda</p>
                  </div>

                  <hr className="border-slate-800" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Nama Klinik Kecantikan / Jenama</label>
                      <input 
                        type="text" 
                        defaultValue="GlowSphere Clinic" 
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        onChange={() => showToast('Perubahan nama klinik disimpan sementara.', 'info')}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Mata Uang Utama</label>
                      <select className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none">
                        <option>Rupiah (IDR)</option>
                        <option>Dollar Amerika (USD)</option>
                      </select>
                    </div>
                  </div>

                </div>
              )}

            </div>

            {/* Footer Hak Cipta */}
            <footer className="px-6 py-4 border-t border-slate-900 text-center text-[10px] text-slate-500">
              © 2026 GlowSphere. Hak Cipta Dilindungi Undang-Undang. Memberdayakan Analitik Bisnis Kecantikan Profesional.
            </footer>

          </main>

        </div>
      )}

    </div>
  );
}
