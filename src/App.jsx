import React, { useState } from 'react';
import { 
  LayoutDashboard, ReceiptText, PieChart, TrendingUp, FileText, BarChart3, 
  Settings, LogOut, DollarSign, BrainCircuit, BookOpenText, 
  CreditCard, Users, Building, Briefcase, Target, Mail, ShieldCheck, Search,
  ArrowUpRight, ArrowDownRight, Users as UsersIcon, Activity, ChevronRight
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

const generateDates = (startDay) => Array.from({ length: 15 }, (_, i) => `${startDay + i}/06/2026`);

const DashboardContent = ({ setActiveMenu }) => (
  <div className="space-y-6">
    {/* Statistik Utama */}
    <div className="grid grid-cols-4 gap-6">
      {[ {l: 'Pendapatan', v: '250jt', c: 'text-green-600', i: <ArrowUpRight />}, {l: 'Pengeluaran', v: '150jt', c: 'text-red-600', i: <ArrowDownRight />}, {l: 'Laba Bersih', v: '100jt', c: 'text-blue-600', i: <Activity />}, {l: 'Total Tim', v: '15 Org', c: 'text-purple-600', i: <UsersIcon />} ].map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">{item.l}</p>
            <p className="text-2xl font-bold mt-1 text-slate-800">{item.v}</p>
          </div>
          <div className={`${item.c} bg-gray-50 p-3 rounded-full`}>{item.i}</div>
        </div>
      ))}
    </div>

    {/* Ringkasan Dashboard Lanjutan */}
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

    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-slate-800 mb-4 flex justify-between cursor-pointer" onClick={() => setActiveMenu('Financial Reports')}>Laporan Terbaru <ChevronRight size={18}/></h3>
        <ul className="text-sm list-disc pl-4 space-y-2 text-gray-600">
            <li>Laporan Tahunan 2025 (Selesai)</li>
            <li>Laporan Audit Q1 (Selesai)</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-slate-800 mb-4 flex justify-between cursor-pointer" onClick={() => setActiveMenu('Analytics')}>Analytics Snapshot <ChevronRight size={18}/></h3>
        <div className="text-sm space-y-2">
            <p>User Growth: <span className="font-bold text-blue-600">+12%</span></p>
            <p>Retention Rate: <span className="font-bold text-blue-600">+8%</span></p>
        </div>
      </div>
    </div>
  </div>
);

const TransactionsContent = () => <Table headers={['Tanggal', 'Deskripsi', 'Jumlah']} data={generateDates(1).map((d, i) => ({d, desc: `Transaksi Bisnis #${100+i}`, amt: `Rp${(1000 + i * 100).toLocaleString('id-ID')}.000`}))} />;

const BudgetContent = () => <Table headers={['Kategori', 'Anggaran', 'Realisasi']} data={['Marketing', 'Tech Dev', 'Operasional', 'R&D', 'Legal', 'HR', 'Logistik', 'Sewa', 'Pajak', 'Utilities', 'Maintenance', 'Pemasaran', 'Produksi', 'Training', 'Events'].map((cat, i) => ({cat, bud: `Rp50.000.000`, act: `Rp${(40+i).toLocaleString('id-ID')}.000.000`}))} />;

const CashFlowContent = () => <Table headers={['Tanggal', 'Jenis', 'Nominal']} data={generateDates(1).map((d, i) => ({d, t: i % 2 === 0 ? 'Inflow' : 'Outflow', n: `Rp${(5000 + i * 500).toLocaleString('id-ID')}.000`}))} />;

const ProfitabilityContent = () => <Table headers={['Produk', 'COGS', 'Harga Jual', 'Margin']} data={['Software SaaS', 'Jasa Konsultasi', 'Maintenance IT', 'Lisensi Aplikasi', 'Cloud Hosting', 'Digital Marketing', 'Web Development', 'UI/UX Design', 'Security Audit', 'Data Backup', 'Training Karyawan', 'API Service', 'Database Managed', 'App Maintenance', 'E-commerce Setup'].map((p) => ({p, c: 'Rp500.000', h: 'Rp1.500.000', m: '66%'}))} />;

const ReportsContent = () => <Table headers={['Nama Laporan', 'Tanggal Buat', 'Status']} data={['Laporan Tahunan 2025', 'Laporan Q1 2026', 'Audit Internal', 'Pajak Bulanan', 'Review Aset', 'Analisis Pasar', 'Laporan Gaji', 'Cash Flow Recap', 'Profit Margin Report', 'Budget Variance', 'Vendor Report', 'Client Billing', 'Risk Assessment', 'Compliance Audit', 'Inventory Audit'].map((n, i) => ({n, t: generateDates(1)[i], s: 'Selesai'}))} />;

const AnalyticsContent = () => <Table headers={['Metrik', 'Nilai', 'Tren']} data={['User Growth', 'Retention Rate', 'CAC', 'LTV', 'DAU', 'MAU', 'Churn', 'Conversion', 'Bounce Rate', 'Avg Session', 'CTR', 'ROAS', 'Sessions', 'Page Views', 'New Leads'].map((m, i) => ({m, v: `${100+i*2}%`, t: '+1%'}))} />;

const AIInsightsContent = () => <div className="space-y-2">{Array.from({length: 15}, (_, i) => <p key={i} className="p-3 bg-blue-50 text-sm rounded-lg border-l-4 border-blue-500">AI Insight #{i+1}: Tren data menunjukkan peningkatan efisiensi pada {generateDates(1)[i]}.</p>)}</div>;

const KnowledgeBaseContent = () => <ul className="space-y-2">{Array.from({length: 15}, (_, i) => <li key={i} className="p-3 bg-white border border-gray-100 rounded-xl text-sm">📖 Dokumentasi Prosedur #{i+1} - Diperbarui pada {generateDates(1)[i]}</li>)}</ul>;

const PayableContent = () => <Table headers={['Nama Vendor', 'Jatuh Tempo', 'Nominal']} data={['PT Maju Jaya', 'CV Karya Mandiri', 'Global Tech Solutions', 'Creative Media Corp', 'Supplier Logistik Indo', 'Cloud Server Utama', 'Jasa Kebersihan Bersih', 'Kantor Sewa Agung', 'Pajak Pratama', 'Bank Mega Finance', 'Indo Sarana Medis', 'Digital Marketing Pro', 'Toko ATK Sejahtera', 'Jasa Konsultan IT', 'Distributor Air Minum'].map((v, i) => ({v, jt: generateDates(1)[i], n: `Rp${(2000 + i*100).toLocaleString('id-ID')}.000`}))} />;

const TeamContent = () => (
  <div className="grid grid-cols-3 gap-4">
    {[
      { n: 'Budi Santoso', j: 'Finance Manager' },
      { n: 'Siti Aminah', j: 'Accounting Staff' },
      { n: 'Andi Wijaya', j: 'Data Analyst' },
      { n: 'Dewi Lestari', j: 'HR Manager' },
      { n: 'Eko Prasetyo', j: 'Marketing Head' },
      { n: 'Fanny Fitriani', j: 'Sales Executive' },
      { n: 'Gatot Subroto', j: 'IT Support' },
      { n: 'Hani Handayani', j: 'Operations Manager' },
      { n: 'Indra Permana', j: 'Legal Counsel' },
      { n: 'Joko Susilo', j: 'Supply Chain Specialist' },
      { n: 'Kartika Sari', j: 'Content Creator' },
      { n: 'Lutfi Hakim', j: 'Product Manager' },
      { n: 'Maya Anggraini', j: 'Customer Service' },
      { n: 'Naufal Rizky', j: 'System Admin' },
      { n: 'Olivia Putri', j: 'Internal Auditor' }
    ].map((m, i) => (
      <div key={i} className="p-4 bg-white rounded-xl shadow-sm border">
        <p className="font-bold text-slate-800">{m.n}</p>
        <p className="text-xs text-blue-600 font-medium">{m.j}</p>
      </div>
    ))}
  </div>
);

const AssetsContent = () => <Table headers={['Nama Aset', 'ID Aset', 'Kondisi']} data={['Laptop MacBook Pro', 'Monitor LG 27"', 'Kursi Ergonomis', 'Server Rack', 'Router Cisco', 'Printer HP Laser', 'Meja Rapat', 'AC Daikin', 'Proyektor Epson', 'Handphone Operasional', 'Kamera Canon', 'Mic Conference', 'Whiteboard Elektronik', 'Lampu Studio', 'Scanner Dokumen'].map((a, i) => ({a, id: `AST-00${i+1}`, k: 'Baik'}))} />;

const PortfolioContent = () => <Table headers={['Nama Aset/Saham', 'Jenis Investasi', 'Nilai']} data={['Saham BBCA', 'Obligasi Negara', 'Reksadana Saham', 'Saham TLKM', 'Saham ASII', 'Saham ICBP', 'Emas Batangan', 'Properti Komersial', 'Deposito Bank', 'Saham GGRM', 'Saham UNVR', 'Crypto Bitcoin', 'Saham KLBF', 'Saham HMSP', 'Saham SMGR'].map((a, i) => ({a, j: 'Equity/Bond', v: `Rp${(100+i*10).toLocaleString('id-ID')}.000.000`}))} />;

const GoalsContent = () => <div className="space-y-2">{['Mencapai Pendapatan 1M', 'Ekspansi Cabang Baru', 'Rekrutmen 10 Karyawan', 'Sertifikasi ISO', 'Upgrade Infrastruktur IT', 'Peluncuran Produk Baru', 'Market Share 10%', 'Pengurangan Biaya Operasional', 'Optimalisasi Supply Chain', 'Peningkatan Retensi Pelanggan', 'Target Penjualan Q3', 'Implementasi Sistem AI', 'Kemitraan Strategis', 'Pengembangan App Mobile', 'Event Branding Tahunan'].map((goal, i) => <div key={i} className="p-3 border rounded-xl flex justify-between"><span>{goal}</span><span className="font-bold text-blue-600">{10+i*5}%</span></div>)}</div>;

const NotificationsContent = () => <div className="space-y-2">{Array.from({length: 15}, (_, i) => <div key={i} className="p-3 border-b text-sm">Notifikasi {i+1}: Sistem telah memproses data pada {generateDates(1)[i]}</div>)}</div>;

const SecurityContent = () => <div className="bg-white p-6 rounded-2xl border border-gray-100 text-sm space-y-2">{Array.from({length: 15}, (_, i) => <p key={i}>Aktivitas Keamanan #{i+1}: Login terdeteksi dari IP 192.168.1.{i} pada {generateDates(1)[i]}</p>)}</div>;

const Placeholder = ({ title }) => (
  <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 h-96 flex flex-col items-center justify-center text-center text-gray-400">
    <FileText size={48} className="mb-4 opacity-20" />
    <h3 className="text-lg font-bold text-slate-800 mb-2">Halaman: {title}</h3>
  </div>
);