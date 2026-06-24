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
  Layers,
  Leaf,
  GraduationCap,
  Briefcase,
  HelpCircle,
  Clock,
  Wrench,
  Bookmark
} from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
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

  // Toast notification helper
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  const infoMenus = [
    { id: 1, key: 'menu-1', title: "Ringkasan Finansial", icon: LayoutDashboard },
    { id: 2, key: 'menu-2', title: "Transaksi Penjualan", icon: ActivityIcon },
    { id: 3, key: 'menu-3', title: "Perencanaan Anggaran", icon: Calendar },
    { id: 4, key: 'menu-4', title: "Arus Kas Operasional", icon: TrendingUp },
    { id: 5, key: 'menu-5', title: "Analisis Profitabilitas", icon: DollarSign },
    { id: 6, key: 'menu-6', title: "Laporan Keuangan", icon: FileText },
    { id: 7, key: 'menu-7', title: "Analitik Penjualan", icon: Share2 },
    { id: 8, key: 'menu-8', title: "Wawasan AI Kecantikan", icon: Cpu },
    { id: 9, key: 'menu-9', title: "Basis Pengetahuan", icon: Layers },
    { id: 10, key: 'menu-10', title: "Utang Usaha & Suplier", icon: Truck },
    { id: 11, key: 'menu-11', title: "Manajemen Tim Terapis", icon: Users },
    { id: 12, key: 'menu-12', title: "Aset Klinik & Inventaris", icon: ShoppingBag },
    { id: 13, key: 'menu-13', title: "Portofolio Produk Baru", icon: Sparkles },
    { id: 14, key: 'menu-14', title: "Pelacakan Target", icon: Award },
    { id: 15, key: 'menu-15', title: "Pusat Notifikasi Sistem", icon: Bell }
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

            {/* Menu Navigasi - Gulir Bebas Scrollbar */}
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-6">
              
              {/* Bagian Komando (15 Menu Penuh) */}
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-3.5 mb-3 flex items-center justify-between">
                  <span>Modul Komando</span>
                  <span className="bg-purple-900/30 text-purple-400 text-[8px] px-1.5 py-0.5 rounded-full font-mono font-bold">15 PANEL</span>
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

          {/* AREA KONTEN: Dipecah berdasarkan Modul Sidebar yang aktif (DIBEDAKAN PER HALAMAN) */}
          <div className="p-6 flex-1 flex flex-col gap-6 no-scrollbar overflow-y-auto">
            
            {/* ==================== [PAGE 1]: RINGKASAN FINANSIAL (Main Dashboard Layout) ==================== */}
            {activeTab === 'menu-1' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Total Sales</span>
                    <h3 className="text-2xl font-black mt-1">$24.85K</h3>
                    <p className="text-[10px] text-emerald-400 mt-1 font-semibold flex items-center gap-1">▲ +300K +2.0%</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Total Revenue</span>
                    <h3 className="text-2xl font-black mt-1">$3,599.8K</h3>
                    <p className="text-[10px] text-emerald-400 mt-1 font-semibold flex items-center gap-1">▲ +500K +3.5%</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Total Orders</span>
                    <h3 className="text-2xl font-black mt-1">338,948</h3>
                    <p className="text-[10px] text-emerald-400 mt-1 font-semibold flex items-center gap-1">▲ +300K +0.3%</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Social Media Engagement</span>
                    <h3 className="text-2xl font-black mt-1">41K</h3>
                    <p className="text-[10px] text-emerald-400 mt-1 font-semibold flex items-center gap-1">▲ +250K +1.2%</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl lg:col-span-2">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Monthly Sales Graph</h4>
                      <span className="bg-slate-950 px-2 py-1 border border-slate-800 rounded-lg text-[9px] font-mono text-purple-400">Monthly ▼</span>
                    </div>
                    <div className="h-48 relative">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="glowGrad1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25"/>
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path d="M 10 160 Q 90 40 180 130 T 360 80 T 490 30 L 490 200 L 10 200 Z" fill="url(#glowGrad1)" />
                        <path d="M 10 160 Q 90 40 180 130 T 360 80 T 490 30" fill="none" stroke="#8B5CF6" strokeWidth="3" />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Social Media Engagement</h4>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs"><span className="text-slate-400">Instagram</span><span>45%</span></div>
                        <div className="w-full bg-slate-950 h-2 rounded-full"><div className="bg-pink-500 h-full rounded-full" style={{width: '45%'}} /></div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs"><span className="text-slate-400">TikTok</span><span>35%</span></div>
                        <div className="w-full bg-slate-950 h-2 rounded-full"><div className="bg-purple-500 h-full rounded-full" style={{width: '35%'}} /></div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs"><span className="text-slate-400">Facebook</span><span>20%</span></div>
                        <div className="w-full bg-slate-950 h-2 rounded-full"><div className="bg-indigo-500 h-full rounded-full" style={{width: '20%'}} /></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Traffic Source (%)</h4>
                    <div className="w-32 h-32 mx-auto relative flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="12" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#8B5CF6" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="100" />
                      </svg>
                      <span className="absolute text-sm font-black">60% Organic</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl md:col-span-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Top Selling Products</h4>
                    <div className="space-y-2.5 text-xs">
                      <div className="flex justify-between p-2.5 bg-slate-950/40 border border-slate-850 rounded-xl">
                        <span>Serum C-Glow Booster</span>
                        <span className="font-bold text-purple-400">Rp 186.00 JT</span>
                      </div>
                      <div className="flex justify-between p-2.5 bg-slate-950/40 border border-slate-850 rounded-xl">
                        <span>GlowLip Velvet Matte</span>
                        <span className="font-bold text-purple-400">Rp 98.00 JT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 2]: TRANSAKSI PENJUALAN (Sales Analysis Page Layout) ==================== */}
            {activeTab === 'menu-2' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl">
                  <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-850 gap-1">
                    {['Daily', 'Weekly', 'Monthly', 'Annual'].map(p => (
                      <button 
                        key={p} 
                        onClick={() => { setSalesTimeframe(p); showToast(`Timeframe ${p} dipilih!`); }}
                        className={`px-3 py-1.5 text-[10px] font-bold rounded-lg ${salesTimeframe === p ? 'bg-purple-600 text-white' : 'text-slate-400'}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-900/20 border border-purple-800/30 px-3 py-1.5 rounded-xl">
                    Time period ▼
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Daily Sales Card */}
                  <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-3xl">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Daily Sales</span>
                    <h4 className="text-lg font-black mt-1">Rp 15.4 JT</h4>
                    <div className="h-28 mt-4">
                      <svg className="w-full h-full" viewBox="0 0 100 50">
                        <path d="M0,45 Q25,10 50,30 T100,5" fill="none" stroke="#10B981" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  {/* Weekly Sales Card */}
                  <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-3xl">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Weekly Sales</span>
                    <h4 className="text-lg font-black mt-1">Rp 112 JT</h4>
                    <div className="h-28 mt-4">
                      <svg className="w-full h-full" viewBox="0 0 100 50">
                        <path d="M0,40 Q25,5 50,35 T100,20" fill="none" stroke="#EC4899" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  {/* Monthly Sales Card */}
                  <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-3xl">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Monthly Sales</span>
                    <h4 className="text-lg font-black mt-1">Rp 480 JT</h4>
                    <div className="h-28 mt-4 flex items-end justify-between gap-1">
                      {[30, 50, 40, 70, 90, 60, 80].map((h, i) => (
                        <div key={i} className="bg-purple-600 rounded-t w-full" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl lg:col-span-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Top 10 Best selling Products</h4>
                    <div className="space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between py-1 border-b border-slate-800/40"><span>1. Product 01</span><span>Rp 186M</span></div>
                      <div className="flex justify-between py-1 border-b border-slate-800/40"><span>2. Product 02</span><span>Rp 144M</span></div>
                      <div className="flex justify-between py-1 border-b border-slate-800/40"><span>3. Product 03</span><span>Rp 98M</span></div>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Average Transaction Value</h4>
                      <p className="text-2xl font-black text-purple-400 mt-2">$139.54</p>
                      <p className="text-[10px] text-slate-500 mt-1">Average spent across all beauty platforms.</p>
                    </div>
                    <button onClick={() => showToast('Detail diunduh!')} className="w-full mt-4 py-2 bg-purple-600/30 text-purple-300 border border-purple-800/40 text-xs font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all">
                      Unduh Rincian
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 3]: PERENCANAAN ANGGARAN (Budgeting Page Layout) ==================== */}
            {activeTab === 'menu-3' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Alokasi Anggaran Utama</h4>
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between text-xs mb-1"><span>Pemasaran TikTok</span><span>Rp 450 JT (45%)</span></div>
                        <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style={{width: '45%'}} /></div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1"><span>Bahan Baku Organik</span><span>Rp 350 JT (35%)</span></div>
                        <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full" style={{width: '35%'}} /></div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1"><span>Operasional Klinik</span><span>Rp 200 JT (20%)</span></div>
                        <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full" style={{width: '20%'}} /></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Pengeluaran Bulan Ini</h4>
                      <h3 className="text-3xl font-black mt-2">Rp 890 JT</h3>
                      <p className="text-[11px] text-emerald-400 mt-1 font-semibold">✓ Di dalam batas aman anggaran (91% terpakai)</p>
                    </div>
                    <div className="border-t border-slate-800 pt-4 mt-6">
                      <div className="flex justify-between text-xs text-slate-400"><span>Cadangan Kas Darurat:</span><span className="font-bold text-white">Rp 150 JT</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 4]: ARUS KAS OPERASIONAL ==================== */}
            {activeTab === 'menu-4' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Arus Kas Masuk vs Keluar</h4>
                  <div className="h-64 relative">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                      {/* Cash Inflow - Green Curve */}
                      <path d="M 10 180 Q 150 40 300 90 T 490 20" fill="none" stroke="#10B981" strokeWidth="3" />
                      {/* Cash Outflow - Orange Curve */}
                      <path d="M 10 150 Q 150 110 300 130 T 490 100" fill="none" stroke="#F59E0B" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex justify-center gap-6 text-xs mt-4">
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-emerald-500 rounded-full" /> Masuk</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-amber-500 rounded-full" /> Keluar</span>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 5]: ANALISIS PROFITABILITAS ==================== */}
            {activeTab === 'menu-5' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Margin Kotor</span>
                    <h3 className="text-2xl font-black text-purple-400 mt-1">74.1%</h3>
                  </div>
                  <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Margin Skincare</span>
                    <h3 className="text-2xl font-black text-pink-400 mt-1">78.2%</h3>
                  </div>
                  <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Margin Makeup</span>
                    <h3 className="text-2xl font-black text-indigo-400 mt-1">64.5%</h3>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 6]: LAPORAN KEUANGAN (Reports Page Layout) ==================== */}
            {activeTab === 'menu-6' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Filter & Atur Tanggal Laporan</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Mulai Tanggal</label>
                      <input 
                        type="date" 
                        value={reportStartDate}
                        onChange={(e) => setReportStartDate(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Akhir Tanggal</label>
                      <input 
                        type="date" 
                        value={reportEndDate}
                        onChange={(e) => setReportEndDate(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <button 
                      onClick={() => showToast('Menyusun laporan kustom...')}
                      className="py-2.5 px-4 bg-purple-600 text-white font-medium text-xs rounded-xl hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" /> Susun Laporan
                    </button>
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Berkas Unduhan Laporan</h4>
                    <div className="flex gap-2">
                      <button onClick={() => showToast('Mengunduh semua file PDF...')} className="px-3 py-1.5 bg-rose-950/40 border border-rose-800/40 text-rose-300 rounded-lg text-[9px] font-bold">Download PDF</button>
                      <button onClick={() => showToast('Mengunduh semua file Excel...')} className="px-3 py-1.5 bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 rounded-lg text-[9px] font-bold">Download Excel</button>
                    </div>
                  </div>

                  <div className="divide-y divide-slate-800/60 text-xs font-mono">
                    <div className="py-3 flex justify-between items-center">
                      <span>Laporan_Keuangan_Mei2026.pdf</span>
                      <button onClick={() => showToast('File diunduh!')} className="text-purple-400 hover:underline">Unduh (2.4 MB)</button>
                    </div>
                    <div className="py-3 flex justify-between items-center">
                      <span>Ekspor_Data_Penjualan_Q1.xlsx</span>
                      <button onClick={() => showToast('File diunduh!')} className="text-purple-400 hover:underline">Unduh (1.8 MB)</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 7]: ANALITIK PENJUALAN ==================== */}
            {activeTab === 'menu-7' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl text-center">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Sebaran Demografi Pembeli regional</h4>
                  <div className="h-64 flex items-center justify-center bg-slate-950/40 rounded-2xl border border-slate-850 relative overflow-hidden">
                    {/* Simulasi radar sebaran */}
                    <div className="w-48 h-48 rounded-full border border-purple-500/10 flex items-center justify-center animate-pulse">
                      <div className="w-32 h-32 rounded-full border border-purple-500/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/40" />
                      </div>
                    </div>
                    <div className="absolute top-12 left-1/4 text-[10px] bg-purple-900/40 border border-purple-800/30 px-2 py-1 rounded">Jakarta (42%)</div>
                    <div className="absolute bottom-16 right-1/4 text-[10px] bg-pink-900/40 border border-pink-800/30 px-2 py-1 rounded">Surabaya (18%)</div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 8]: WAWASAN AI KECANTIKAN (Social Media Analysis layout model) ==================== */}
            {activeTab === 'menu-8' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-3xl text-center">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Akurasi Prediksi Tren</span>
                    <h2 className="text-3xl font-black text-emerald-400 mt-2">{aiConfidence}%</h2>
                    <button onClick={() => setAiConfidence(94)} className="text-[9px] text-purple-400 hover:underline mt-2 inline-block">Minta Rekalkulasi</button>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-3xl md:col-span-2 flex flex-col justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Rekomendasi Paket Kombo</span>
                    <p className="text-xs text-slate-300 mt-2">Kombo "Moisturizer + Serum Anti-Aging" diprediksi menghasilkan kenaikan konversi belanja hingga 5.4% kuartal ini.</p>
                    <div className="mt-4 flex gap-2">
                      <button onClick={() => showToast('Paket kombo diaktifkan di toko online!')} className="px-3 py-1.5 bg-purple-600 text-white text-xs font-semibold rounded-lg hover:bg-purple-700 transition-all">Terapkan Paket</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 9]: BASIS PENGETAHUAN ==================== */}
            {activeTab === 'menu-9' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">Bahan Aktif Terdaftar</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-950/40 border border-slate-850 rounded-xl">
                      <p className="font-bold">Niacinamide (10%)</p>
                      <span className="text-[10px] text-slate-500">Pencerah kulit utama, aman uji sensitivitas.</span>
                    </div>
                    <div className="p-3 bg-slate-950/40 border border-slate-850 rounded-xl">
                      <p className="font-bold">Bakuchiol (Retinol Alternatif)</p>
                      <span className="text-[10px] text-slate-500">Anti-aging natural, ramah kulit sensitif.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 10]: UTANG USAHA & SUPLIER ==================== */}
            {activeTab === 'menu-10' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Siklus & Jadwal Vendor Bahan Baku</h4>
                  <div className="divide-y divide-slate-800 text-xs font-mono">
                    <div className="py-3 flex justify-between items-center">
                      <span>Mitra Tani Organik (Lokal)</span>
                      <span className="text-amber-400">Tempo: 14 Hari</span>
                    </div>
                    <div className="py-3 flex justify-between items-center">
                      <span>Pabrik Botol Daur Ulang</span>
                      <span className="text-emerald-400">Status: Lunas</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 11]: TIM TERAPIS ==================== */}
            {activeTab === 'menu-11' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Performa & Sertifikasi Tim</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="font-bold text-xs text-white">Sophia Clarissa (Terapis Utama)</p>
                        <span className="text-[10px] text-slate-500">Rating: ★ 4.9 (Pro-Laser)</span>
                      </div>
                      <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">Tersedia</span>
                    </div>
                    <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="font-bold text-xs text-white">David Andrean (Facial Specialist)</p>
                        <span className="text-[10px] text-slate-500">Rating: ★ 4.8</span>
                      </div>
                      <span className="text-[9px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full">Sesi Berlangsung</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 12]: ASET KLINIK & INVENTARIS ==================== */}
            {activeTab === 'menu-12' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Status Layanan Alat Klinik</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                      <p className="text-lg font-black text-white">24 Unit</p>
                      <span className="text-[10px] text-slate-500">Laser Rejuvenation (99.2% Siap)</span>
                    </div>
                    <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                      <p className="text-lg font-black text-white">Setiap Bulan</p>
                      <span className="text-[10px] text-slate-500">Jadwal Kalibrasi Mesin</span>
                    </div>
                    <div className="p-4 bg-slate-950/40 border border-slate-850 rounded-xl">
                      <p className="text-lg font-black text-white">Normal</p>
                      <span className="text-[10px] text-slate-500">Penyusutan Aset Tahunan</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 13]: PORTFOLIO PRODUK BARU ==================== */}
            {activeTab === 'menu-13' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Riset Formula Skincare Baru (Batch #4)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Pendaftaran BPOM untuk 3 variasi serum herbal alami saat ini berada dalam tahap uji klinis lanjutan. Target rilis: **Oktober 2026**.
                  </p>
                  <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style={{width: '75%'}} />
                  </div>
                  <span className="text-[9px] text-slate-500 mt-2 block">Progres Pendaftaran BPOM: 75% selesai</span>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 14]: PELACAKAN TARGET ==================== */}
            {activeTab === 'menu-14' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl text-center">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">KPI Target Q2 Tercapai</h4>
                  <h2 className="text-3xl font-black text-emerald-400 mt-1">84%</h2>
                  <p className="text-xs text-slate-300 mt-2">Dibutuhkan Rp 200 JT tambahan penjualan untuk pemenuhan target Rp 1.4 M tahunan.</p>
                </div>
              </div>
            )}

            {/* ==================== [PAGE 15]: PUSAT NOTIFIKASI SISTEM ==================== */}
            {activeTab === 'menu-15' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-3xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Riwayat Log Keamanan & Sinkronisasi</h4>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-purple-900/10 border border-purple-800/30 text-purple-200 rounded-xl flex items-center justify-between">
                      <span>✓ Server sinkron otomatis pada 16:30 WIB</span>
                      <span className="text-[10px] text-slate-500">1 jam lalu</span>
                    </div>
                    <div className="p-3 bg-rose-900/10 border border-rose-800/30 text-rose-200 rounded-xl flex items-center justify-between">
                      <span>⚠ Peringatan: Stok Serum C-Glow Booster tersisa 12 unit</span>
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

    </div>
  );
}

// Komponen Ikon Kustom Sederhana untuk Transaksi Penjualan
function ActivityIcon(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
