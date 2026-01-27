
import React from 'react';
import {
    Users,
    Calendar,
    Award,
    BookOpen,
    TrendingUp,
    MessageSquare,
    Baby
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Lun', asistencia: 22 },
    { name: 'Mar', asistencia: 25 },
    { name: 'Mie', asistencia: 24 },
    { name: 'Jue', asistencia: 20 },
    { name: 'Vie', asistencia: 25 },
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

const TransicionDashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Panel de Control - Transición</h1>
                    <p className="text-slate-500">Gestión pedagógica y comunicación con padres.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                        <Calendar size={18} /> Tomar Asistencia
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                        <MessageSquare size={18} /> Comunicado General
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    icon={<Users size={20} />}
                    label="Estudiantes"
                    value="25"
                    color="bg-blue-500"
                    trend="Completo"
                />
                <StatCard
                    icon={<Baby size={20} />}
                    label="Asistencia Hoy"
                    value="92%"
                    color="bg-amber-500"
                    trend="+2%"
                />
                <StatCard
                    icon={<Award size={20} />}
                    label="Logros Alcanzados"
                    value="12"
                    color="bg-emerald-500"
                    trend="+3"
                />
                <StatCard
                    icon={<BookOpen size={20} />}
                    label="Actividades Mes"
                    value="18"
                    color="bg-purple-500"
                    trend="+5"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h2 className="text-lg font-bold mb-6">Reporte de Asistencia Semanal</h2>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorAsistencia" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="asistencia" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorAsistencia)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h2 className="text-lg font-bold mb-4">Documentación Cargada</h2>
                    <div className="space-y-3">
                        {[
                            { name: 'Planilla de Asistencia 2026', file: 'ASISTECIA 2026.xlsx', type: 'Excel' },
                            { name: 'Modelo de Boletín', file: 'boletin.jpg', type: 'Imagen' },
                            { name: 'Diario de Campo', file: 'diario.jpg', type: 'Imagen' },
                            { name: 'Datos Básicos Estudiantes', file: 'datos basicos.jpg', type: 'Imagen' },
                        ].map((doc, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white rounded border border-slate-200 text-blue-600">
                                        <BookOpen size={16} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700">{doc.name}</p>
                                        <p className="text-[10px] text-slate-400 uppercase font-bold">{doc.type}</p>
                                    </div>
                                </div>
                                <a
                                    href={`/assets/${doc.file}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                                    title="Ver archivo"
                                >
                                    <TrendingUp size={16} className="rotate-45" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransicionDashboard;
