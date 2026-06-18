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
          <label className="flex items-center justify-between text-sm">
            <span>Autentikasi 2 Faktor</span>
            <input type="checkbox" className="toggle" defaultChecked />
          </label>
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

    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><HelpCircle size={20}/> Bantuan & Dukungan</h3>
      <div className="grid grid-cols-3 gap-4">
        {[{t: 'Pusat Bantuan', d: 'FAQ'}, {t: 'Hubungi Kami', d: 'Support'}, {t: 'Ketentuan', d: 'Legal'}].map((item, i) => (
          <div key={i} className="p-4 border rounded-xl hover:bg-slate-50 cursor-pointer">
            <p className="font-bold text-sm">{item.t}</p>
            <p className="text-xs text-gray-500">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

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

const generateDates = (startDay) => Array.from({ length: 15 }, (_, i) => `${startDay + i}/06/2026`);

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
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-slate-800 mb-4 flex justify-between cursor-pointer" onClick={() => setActiveMenu('Cash Flow')}>Cash Flow Ringkasan <ChevronRight size={18}/></h3>
        <div className="text-sm space-y-3">
          <div className="flex justify-between border-b pb-2"><span>Inflow (Bulan ini)</span> <span className="font-bold text-green-600">Rp500.000.000</span></div>
          <div className="flex justify-between"><span>Outflow (Bulan ini)</span> <span className="font-bold text-red-600">Rp350.000.000</span></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-slate-800 mb-4 flex justify-between cursor-pointer" onClick={() => setActiveMenu('Profitability')}>Profitability (Top 3) <ChevronRight size={18}/></h3>
        <div className="text-sm space-y-3">
          <p>1. Software SaaS - Margin 66%</p>
          <p>2. Cloud Hosting - Margin 66%</p>
          <p>3. Web Development - Margin 66%</p>
        </div>
      </div>
    </div>
  </div>
);

const TransactionsContent = () => <Table headers={['Tanggal', 'Deskripsi', 'Jumlah']} data={generateDates(1).map((d, i) => ({d, desc: `Transaksi Bisnis #${100+i}`, amt: `Rp${(1000 + i * 100).toLocaleString('id-ID')}.000`}))} />;
const BudgetContent = () => <Table headers={['Kategori', 'Anggaran', 'Realisasi']} data={['Marketing', 'Tech Dev', 'Operasional'].map((cat, i) => ({cat, bud: `Rp50.000.000`, act: `Rp${(40+i).toLocaleString('id-ID')}.000.000`}))} />;
const CashFlowContent = () => <Table headers={['Tanggal', 'Jenis', 'Nominal']} data={generateDates(1).map((d, i) => ({d, t: i % 2 === 0 ? 'Inflow' : 'Outflow', n: `Rp${(5000 + i * 500).toLocaleString('id-ID')}.000`}))} />;
const ProfitabilityContent = () => <Table headers={['Produk', 'Margin']} data={['Software SaaS', 'Jasa Konsultasi'].map((p) => ({p, m: '66%'}))} />;
const ReportsContent = () => <Table headers={['Laporan', 'Status']} data={['Tahunan 2025', 'Audit Q1'].map((n) => ({n, s: 'Selesai'}))} />;
const AnalyticsContent = () => <Table headers={['Metrik', 'Nilai']} data={['User Growth', 'Retention'].map((m) => ({m, v: '12%'}))} />;
const AIInsightsContent = () => <div className="p-4 bg-blue-50 rounded-lg">AI Insight: Efisiensi meningkat 15%.</div>;
const KnowledgeBaseContent = () => <div className="p-4 bg-white border rounded-xl">Dokumentasi Prosedur...</div>;
const PayableContent = () => <Table headers={['Vendor', 'Nominal']} data={['PT Maju Jaya', 'CV Karya'].map((v) => ({v, n: 'Rp2.000.000'}))} />;
const TeamContent = () => <div className="p-4 bg-white border rounded-xl">List Tim...</div>;
const AssetsContent = () => <Table headers={['Aset', 'ID']} data={['Laptop', 'AST-01'].map((a) => ({a, id: 'AST-01'}))} />;
const PortfolioContent = () => <Table headers={['Saham', 'Nilai']} data={['BBCA', 'TLKM'].map((a) => ({a, v: 'Rp100jt'}))} />;
const GoalsContent = () => <div className="p-4 bg-white border rounded-xl">Target Q3...</div>;
const NotificationsContent = () => <div className="p-4 bg-white border rounded-xl">Notifikasi Baru...</div>;
const SecurityContent = () => <div className="p-4 bg-white border rounded-xl">Riwayat Login...</div>;
const Placeholder = ({ title }) => <div className="h-64 flex items-center justify-center text-gray-400">Halaman: {title}</div>;
