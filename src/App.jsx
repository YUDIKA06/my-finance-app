import React, { useState } from 'react';
import { 
  LayoutDashboard, ReceiptText, PieChart, TrendingUp, FileText, BarChart3, 
  Settings, LogOut, DollarSign, BrainCircuit, BookOpenText, 
  CreditCard, Users, Building, Briefcase, Target, Mail, ShieldCheck, Search,
  ArrowUpRight, ArrowDownRight, Users as UsersIcon, Activity, ChevronRight, User, HelpCircle, Lock, Bell
} from 'lucide-react';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Transactions', icon: <ReceiptText size={20} /> },
    { name: 'Budget Planning', icon: <PieChart size={20} /> },
    { name: 'Cash Flow', icon: <TrendingUp size={20} /> },
    { name: 'Profitability', icon: <DollarSign size={20} /> },
    { name: 'Financial Reports', icon: <FileText size={20} /> },
    { name: 'Analytics', icon: <BarChart3 size={20} /> },
    { name: 'AI Insights', icon: <BrainCircuit size={20} /> },
    { name: 'Knowledge Base', icon: <BookOpenText size={20} /> },
    { name: 'Accounts Payable', icon: <CreditCard size={20} /> },
    { name: 'Team Management', icon: <Users size={20} /> },
    { name: 'Corporate Assets', icon: <Building size={20} /> },
    { name: 'Portfolio', icon: <Briefcase size={20} /> },
    { name: 'Goal Tracking', icon: <Target size={20} /> },
    { name: 'Notification Center', icon: <Mail size={20} /> },
    { name: 'Security Settings', icon: <ShieldCheck size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'Dashboard': return <DashboardContent setActiveMenu={setActiveMenu} />;
      case 'Transactions': return <TransactionsContent />;
      case 'Budget Planning': return <BudgetContent />;
      case 'Cash Flow': return <CashFlowContent />;
      case 'Profitability': return <ProfitabilityContent />;
      case 'Financial Reports': return <ReportsContent />;
      case 'Analytics': return <AnalyticsContent />;
      case 'AI Insights': return <AIInsightsContent />;
      case 'Knowledge Base': return <KnowledgeBaseContent />;
      case 'Accounts Payable': return <PayableContent />;
      case 'Team Management': return <TeamContent />;
      case 'Corporate Assets': return <AssetsContent />;
      case 'Portfolio': return <PortfolioContent />;
      case 'Goal Tracking': return <GoalsContent />;
      case 'Notification Center': return <NotificationsContent />;
      case 'Security Settings': return <SecurityContent />;
      case 'Settings': return <SettingsContent />;
      default: return <Placeholder title={activeMenu} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col h-screen sticky top-0 overflow-y-auto">
        <div className="text-2xl font-bold mb-8 flex items-center gap-2 text-blue-400">
          <TrendingUp /> FinanceTrack
        </div>
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <button key={item.name} onClick={() => setActiveMenu(item.name)} className={`w-full flex items-center gap-4 p-2.5 rounded-xl transition text-sm ${activeMenu === item.name ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
              {item.icon} {item.name}
            </button>
          ))}
        </nav>
        <button className="flex items-center gap-4 p-3 text-red-400 hover:text-red-300 mt-4 border-t border-slate-800">
          <LogOut size={20} /> Keluar
        </button>
      </aside>

      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">{activeMenu}</h2>
          <div className="flex items-center gap-4 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
            <Search className="text-gray-400 ml-2" size={18} />
            <input type="text" placeholder="Cari..." className="outline-none text-sm w-48" />
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
}

const Table = ({ headers, data }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <table className="w-full text-sm text-left">
      <thead className="bg-slate-50 border-b">
        <tr>{headers.map(h => <th key={h} className="p-4">{h}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b last:border-0 hover:bg-slate-50">
            {Object.values(row).map((val, j) => <td key={j} className="p-4">{val}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DashboardContent = ({ setActiveMenu }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-4 gap-6">
      {[ {l: 'Pendapatan', v: '250jt', c: 'text-green-600', i: <ArrowUpRight />}, {l: 'Pengeluaran', v: '150jt', c: 'text-red-600', i: <ArrowDownRight />}, {l: 'Laba Bersih', v: '100jt', c: 'text-blue-600', i: <Activity />}, {l: 'Total Tim', v: '15 Org', c: 'text-purple-600', i: <UsersIcon />} ].map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div><p className="text-gray-500 text-sm">{item.l}</p><p className="text-2xl font-bold mt-1 text-slate-800">{item.v}</p></div>
          <div className={`${item.c} bg-gray-50 p-3 rounded-full`}>{item.i}</div>
        </div>
      ))}
    </div>
  </div>
);

const SettingsContent = () => (
  <div className="max-w-4xl space-y-8">
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2"><User size={20}/> Profil Akun</h3>
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl">YU</div>
        <div className="space-y-2 flex-1">
          <input className="w-full p-2 border rounded-lg" defaultValue="Yudesign Creator" />
          <input className="w-full p-2 border rounded-lg" defaultValue="yudesign@email.com" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Simpan</button>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Lock size={20}/> Keamanan</h3>
        <div className="space-y-4">
          <label className="flex items-center justify-between text-sm"><span>Autentikasi 2 Faktor</span><input type="checkbox" className="toggle" defaultChecked /></label>
          <button className="text-sm text-blue-600 font-medium">Ubah Kata Sandi</button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Bell size={20}/> Notifikasi</h3>
        <div className="space-y-3 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Update Sistem</label>
          <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Laporan Bulanan</label>
        </div>
      </div>
    </div>
  </div>
);

const TransactionsContent = () => <Table headers={['ID', 'Tanggal', 'Deskripsi', 'Jumlah']} data={Array.from({length: 10}, (_, i) => ({id: i+1, d: '18/06/2026', desc: `Transaksi Bisnis #${i+101}`, amt: `Rp${(1000 + i * 50).toLocaleString('id-ID')}.000`}))} />;
const BudgetContent = () => <Table headers={['ID', 'Kategori', 'Anggaran', 'Status']} data={['Marketing', 'Tech Dev', 'Operasional', 'R&D', 'Legal', 'HR', 'Logistik', 'Sewa', 'Pajak', 'Utilities'].map((cat, i) => ({id: i+1, k: cat, a: `Rp50.000.000`, s: 'Aktif'}))} />;
const CashFlowContent = () => <Table headers={['ID', 'Tanggal', 'Jenis', 'Nominal']} data={Array.from({length: 10}, (_, i) => ({id: i+1, d: '18/06/2026', j: i % 2 === 0 ? 'Inflow' : 'Outflow', n: `Rp${(5000 + i * 200).toLocaleString('id-ID')}.000`}))} />;
const ProfitabilityContent = () => <Table headers={['ID', 'Produk', 'COGS', 'Margin']} data={['Software SaaS', 'Jasa Konsultasi', 'Maintenance IT', 'Lisensi Aplikasi', 'Cloud Hosting', 'Digital Marketing', 'Web Development', 'UI/UX Design', 'Security Audit', 'Data Backup'].map((p, i) => ({id: i+1, p, c: 'Rp500.000', m: '66%'}))} />;
const ReportsContent = () => <Table headers={['ID', 'Nama Laporan', 'Tanggal', 'Status']} data={['Laporan Tahunan 2025', 'Laporan Q1 2026', 'Audit Internal', 'Pajak Bulanan', 'Review Aset', 'Analisis Pasar', 'Laporan Gaji', 'Cash Flow Recap', 'Profit Margin Report', 'Budget Variance'].map((n, i) => ({id: i+1, n, t: '18/06/2026', s: 'Selesai'}))} />;
const AnalyticsContent = () => <Table headers={['ID', 'Metrik', 'Nilai', 'Tren']} data={['User Growth', 'Retention Rate', 'CAC', 'LTV', 'DAU', 'MAU', 'Churn', 'Conversion', 'Bounce Rate', 'Avg Session'].map((m, i) => ({id: i+1, m, v: '15%', t: '+2%'}))} />;
const AIInsightsContent = () => <div className="space-y-2">{Array.from({length: 10}, (_, i) => <p key={i} className="p-3 bg-blue-50 rounded-lg text-sm border-l-4 border-blue-500">AI Insight #{i+1}: Analisis tren menunjukkan performa stabil pada departemen keuangan.</p>)}</div>;
const KnowledgeBaseContent = () => <div className="space-y-2">{Array.from({length: 10}, (_, i) => <div key={i} className="p-3 bg-white border rounded-lg text-sm">📖 Dokumentasi Prosedur #{i+1}: Panduan operasional standar internal.</div>)}</div>;
const PayableContent = () => <Table headers={['ID', 'Vendor', 'Jatuh Tempo', 'Nominal']} data={Array.from({length: 10}, (_, i) => ({id: i+1, v: `Vendor Utama #${i+1}`, jt: '20/06/2026', n: `Rp${(2000 + i * 300).toLocaleString('id-ID')}.000`}))} />;
const TeamContent = () => <div className="grid grid-cols-2 gap-4">{Array.from({length: 10}, (_, i) => <div key={i} className="p-4 bg-white border rounded-lg shadow-sm">Anggota Tim ${i+1}: Nama Karyawan Profesional</div>)}</div>;
const AssetsContent = () => <Table headers={['ID', 'Nama Aset', 'Kategori', 'Kondisi']} data={Array.from({length: 10}, (_, i) => ({id: i+1, a: `Perangkat Aset #${i+1}`, k: 'Elektronik', c: 'Baik'}))} />;
const PortfolioContent = () => <Table headers={['ID', 'Nama Saham/Aset', 'Jenis', 'Nilai']} data={Array.from({length: 10}, (_, i) => ({id: i+1, s: `Aset Investasi ${i+1}`, j: 'Equity', v: `Rp${(100 + i * 50).toLocaleString('id-ID')}.000.000`}))} />;
const GoalsContent = () => <div className="space-y-2">{Array.from({length: 10}, (_, i) => <div key={i} className="p-3 border rounded-lg flex justify-between items-center"><span>Target Strategis #{i+1}</span><span className="font-bold text-blue-600">Progres 85%</span></div>)}</div>;
const NotificationsContent = () => <div className="space-y-2">{Array.from({length: 10}, (_, i) => <div key={i} className="p-3 border rounded-lg text-sm">🔔 Notifikasi #{i+1}: Laporan sistem telah diperbarui pada pukul 12:00 WIB.</div>)}</div>;
const SecurityContent = () => <div className="space-y-2">{Array.from({length: 10}, (_, i) => <div key={i} className="p-3 border rounded-lg text-sm font-mono">🔑 Log Keamanan #{i+1}: Akses login terdeteksi dari IP 192.168.1.{i+1}</div>)}</div>;
const Placeholder = ({ title }) => <div className="h-64 flex items-center justify-center text-gray-400">Halaman: {title}</div>;
