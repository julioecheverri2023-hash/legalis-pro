
import React, { useState } from 'react';
import {
    DollarSign,
    ArrowUpCircle,
    ArrowDownCircle,
    Plus,
    FileText,
    Download,
    Filter,
    PieChart,
    ShoppingBag,
    Zap,
    Coffee,
    Calendar
} from 'lucide-react';

const TesoreriaView: React.FC = () => {
    const [balance, setBalance] = useState(1250000); // Pesos COP de ejemplo
    const [transactions, setTransactions] = useState([
        { id: '1', concepto: 'Aporte Actividad Día de la Madre', monto: 520000, tipo: 'ingreso', fecha: '2026-01-20', categoria: 'Aportes' },
        { id: '2', concepto: 'Compra de materiales: Vinilos y Pinceles', monto: -85000, tipo: 'egreso', fecha: '2026-01-15', categoria: 'Materiales' },
        { id: '3', concepto: 'Refrigerios Comité de Padres', monto: -42000, tipo: 'egreso', fecha: '2026-01-10', categoria: 'Alimentación' },
        { id: '4', concepto: 'Aportes Cuota de Aseo Mensual', monto: 130000, tipo: 'ingreso', fecha: '2026-01-05', categoria: 'Servicios' }
    ]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Tesorería de Grado</h1>
                    <p className="text-slate-500">Control de ingresos, gastos y fondos del salón.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-slate-900 text-white px-5 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
                        <Download size={18} /> Exportar Reporte
                    </button>
                    <button className="bg-green-600 text-white px-5 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-green-700 transition-all shadow-lg shadow-green-500/20">
                        <Plus size={18} /> Registrar Movimiento
                    </button>
                </div>
            </div>

            {/* Tarjetas de Resumen Financiero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative group">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                            <DollarSign size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Saldo Disponible</p>
                            <h2 className="text-3xl font-black text-slate-800 tracking-tighter">${balance.toLocaleString()}</h2>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative group">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <ArrowUpCircle size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Ingresos Anual</p>
                            <h2 className="text-2xl font-black text-slate-800 tracking-tighter text-blue-600">$6,840,000</h2>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative group">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-rose-50 text-rose-600 rounded-2xl group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                            <ArrowDownCircle size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Gastos Anual</p>
                            <h2 className="text-2xl font-black text-slate-800 tracking-tighter text-rose-600">$4,250,000</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabla de Movimientos y Categorías */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2 uppercase text-xs tracking-widest">
                                <FileText size={16} className="text-slate-400" /> Historial de Movimientos
                            </h3>
                            <button className="text-blue-600 text-[10px] font-bold uppercase hover:underline">Ver Todo</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase">Fecha</th>
                                        <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase">Concepto</th>
                                        <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase text-right">Monto</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {transactions.map((tx) => (
                                        <tr key={tx.id} className="hover:bg-slate-50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <span className="text-xs font-bold text-slate-400">{tx.fecha}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{tx.concepto}</span>
                                                    <span className="text-[10px] text-slate-400 font-bold uppercase">{tx.categoria}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className={`text-sm font-black ${tx.tipo === 'ingreso' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                                    {tx.tipo === 'ingreso' ? '+' : ''}${Math.abs(tx.monto).toLocaleString()}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                        <h3 className="font-black text-xs text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <PieChart size={16} /> Distribución de Gastos
                        </h3>
                        <div className="space-y-4">
                            {[
                                { cat: 'Materiales', porc: 65, color: 'bg-blue-500', icon: <ShoppingBag size={14} /> },
                                { cat: 'Eventos', porc: 20, color: 'bg-purple-500', icon: <Calendar size={14} /> },
                                { cat: 'Aseo/Mantenimiento', porc: 10, color: 'bg-emerald-500', icon: <Zap size={14} /> },
                                { cat: 'Otros', porc: 5, color: 'bg-slate-500', icon: <Coffee size={14} /> }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tight">
                                        <div className="flex items-center gap-2 text-slate-600 italic font-medium">
                                            <span className={`p-1 rounded-md ${item.color.replace('bg-', 'bg-')}/10 ${item.color.replace('bg-', 'text-')}`}>
                                                {item.icon}
                                            </span>
                                            {item.cat}
                                        </div>
                                        <span className="text-slate-800">{item.porc}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.porc}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-lg font-black mb-1 uppercase tracking-tighter">Fondo de Emergencia</h3>
                            <p className="text-xs text-blue-100 mb-6 font-medium italic opacity-80">Reservado para reparaciones locativas o imprevistos.</p>
                            <div className="flex justify-between items-end">
                                <span className="text-3xl font-black tracking-tighter">$450,000</span>
                                <button className="bg-white/20 hover:bg-white/30 p-3 rounded-xl backdrop-blur-md transition-all">
                                    <ArrowUpCircle size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="absolute -right-4 -bottom-4 text-white/5 rotate-12 scale-150">
                            <DollarSign size={120} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TesoreriaView;
