
import React from 'react';
import { 
  FileText, 
  Users, 
  AlertCircle, 
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ene', casos: 12 },
  { name: 'Feb', casos: 19 },
  { name: 'Mar', casos: 15 },
  { name: 'Abr', casos: 22 },
  { name: 'May', casos: 30 },
  { name: 'Jun', casos: 25 },
];

const StatCard = ({ icon, label, value, color, trend }: any) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg ${color} text-white`}>
        {icon}
      </div>
      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
        <TrendingUp size={12} /> {trend}
      </span>
    </div>
    <h3 className="text-slate-500 text-sm font-medium">{label}</h3>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

const DashboardView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Panel de Control</h1>
          <p className="text-slate-500">Bienvenido al sistema de gestión técnico legal.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Nuevo Expediente
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          icon={<FileText size={20} />} 
          label="Total Expedientes" 
          value="128" 
          color="bg-blue-500" 
          trend="+12%" 
        />
        <StatCard 
          icon={<AlertCircle size={20} />} 
          label="Vencimientos Prox." 
          value="8" 
          color="bg-amber-500" 
          trend="-2" 
        />
        <StatCard 
          icon={<CheckCircle2 size={20} />} 
          label="Casos Cerrados" 
          value="45" 
          color="bg-emerald-500" 
          trend="+5" 
        />
        <StatCard 
          icon={<Users size={20} />} 
          label="Clientes Activos" 
          value="92" 
          color="bg-purple-500" 
          trend="+8%" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold mb-6">Actividad de Casos</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorCasos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip />
                <Area type="monotone" dataKey="casos" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorCasos)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold mb-4">Agenda Reciente</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border-l-4 border-blue-500">
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-md px-3 py-1">
                  <span className="text-xs font-bold text-slate-500 uppercase">Jun</span>
                  <span className="text-lg font-bold leading-none">{14 + i}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Audiencia de Conciliación</h4>
                  <p className="text-xs text-slate-500">Exp: PEN-2024-00{i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
