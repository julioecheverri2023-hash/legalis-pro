
import React, { useState } from 'react';
import {
    Camera,
    Plus,
    Calendar,
    BookOpen,
    Image as ImageIcon,
    Save,
    Clock,
    MapPin,
    Tag
} from 'lucide-react';

const DiarioCampoView: React.FC = () => {
    const [entries, setEntries] = useState([
        {
            id: '1',
            fecha: '2026-01-26',
            titulo: 'Exploración Sensorial: Pintura con Dedos',
            descripcion: 'Hoy los niños exploraron diferentes texturas utilizando pintura dactilar. Trabajamos la motricidad fina y el reconocimiento del color azul.',
            categoria: 'Pedagógica',
            fotos: ['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop'],
            hora: '09:30 AM'
        },
        {
            id: '2',
            fecha: '2026-01-25',
            titulo: 'Ronda de Integración Social',
            descripcion: 'Realizamos actividades grupales para fortalecer el vínculo entre compañeros. Se observó gran participación y alegría.',
            categoria: 'Socio-afectiva',
            fotos: ['https://images.unsplash.com/photo-1481142914109-84728564177d?w=400&h=400&fit=crop'],
            hora: '10:45 AM'
        }
    ]);

    const [newEntry, setNewEntry] = useState({ titulo: '', descripcion: '', categoria: 'Pedagógica' });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Diario de Campo</h1>
                    <p className="text-slate-500">Bitácora diaria de experiencias y evidencias pedagógicas.</p>
                </div>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                    <Plus size={18} /> Nueva Entrada
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Formulario de Registro */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                        <h2 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <BookOpen size={20} className="text-blue-600" /> Registrar Actividad
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-widest">Título de la Experiencia</label>
                                <input
                                    type="text"
                                    placeholder="Ej: Explorando texturas..."
                                    className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-widest">Categoría</label>
                                <select className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none">
                                    <option>Pedagógica</option>
                                    <option>Socio-afectiva</option>
                                    <option>Corporal</option>
                                    <option>Evento Especial</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-widest">Descripción del Proceso</label>
                                <textarea
                                    className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm h-32 resize-none focus:ring-2 focus:ring-blue-500/20 outline-none shadow-inner"
                                    placeholder="¿Qué sucedió hoy en el salón?..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <button className="flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 rounded-xl p-4 text-slate-400 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                                    <Camera size={20} />
                                    <span className="text-[10px] font-bold uppercase">Foto</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 rounded-xl p-4 text-slate-400 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                                    <Tag size={20} />
                                    <span className="text-[10px] font-bold uppercase">Dimensión</span>
                                </button>
                            </div>

                            <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl mt-4 flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-xl">
                                <Save size={18} /> Publicar en el Diario
                            </button>
                        </div>
                    </div>
                </div>

                {/* Línea de Tiempo del Diario */}
                <div className="lg:col-span-2 space-y-6">
                    {entries.map((entry) => (
                        <div key={entry.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex gap-4">
                                        <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 flex flex-col items-center justify-center min-w-[60px]">
                                            <span className="text-xs font-bold uppercase">{entry.fecha.split('-')[1]}</span>
                                            <span className="text-xl font-black">{entry.fecha.split('-')[2]}</span>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full uppercase tracking-tighter">
                                                    {entry.categoria}
                                                </span>
                                                <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                                                    <Clock size={10} /> {entry.hora}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-lg text-slate-800">{entry.titulo}</h3>
                                        </div>
                                    </div>
                                    <button className="p-2 text-slate-300 hover:text-slate-500 rounded-full">
                                        <Plus className="rotate-45" size={20} />
                                    </button>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {entry.descripcion}
                                </p>

                                <div className="grid grid-cols-2 gap-3">
                                    {entry.fotos.map((foto, idx) => (
                                        <div key={idx} className="relative rounded-2xl overflow-hidden aspect-video group/img">
                                            <img src={foto} alt="Evidencia" className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" />
                                            <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/0 transition-colors" />
                                            <button className="absolute bottom-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white opacity-0 group-hover/img:opacity-100 transition-opacity">
                                                <ImageIcon size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                                    <MapPin size={10} /> Salón de Transición - Actividad Presencial
                                </span>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                                    ))}
                                    <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600">
                                        +26
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button className="w-full py-4 text-sm font-bold text-slate-400 hover:text-blue-500 transition-colors border-2 border-dashed border-slate-200 rounded-2xl">
                        Cargar experiencias anteriores...
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiarioCampoView;
