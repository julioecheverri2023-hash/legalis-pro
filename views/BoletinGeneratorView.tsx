
import React, { useState } from 'react';
import {
    FileText,
    ChevronRight,
    Baby,
    Brain,
    Heart,
    Activity,
    Palette,
    MessageCircle,
    Download,
    CheckCircle,
    Plus
} from 'lucide-react';

const dimensiones = {
    COGNITIVA: { color: 'bg-purple-100 text-purple-700', icon: <Brain size={20} />, label: 'D. Cognitiva' },
    CORPORAL: { color: 'bg-blue-100 text-blue-700', icon: <Activity size={20} />, label: 'D. Corporal' },
    COMUNICATIVA: { color: 'bg-orange-100 text-orange-700', icon: <MessageCircle size={20} />, label: 'D. Comunicativa' },
    SOCIOAFECTIVA: { color: 'bg-pink-100 text-pink-700', icon: <Heart size={20} />, label: 'D. Socio-Afectiva' },
    ESTETICA: { color: 'bg-green-100 text-green-700', icon: <Palette size={20} />, label: 'D. Estética-Creativa' }
};

const LOGROS_BANCO = [
    // COGNITIVA
    { cycle: 'I', dimension: 'COGNITIVA', texto: 'Diferencia cuando es niño o niña.' },
    { cycle: 'I', dimension: 'COGNITIVA', texto: 'Identifica segmentos corporales como: cabeza, ojos, nariz, boca, brazos, piernas.' },
    { cycle: 'II', dimension: 'COGNITIVA', texto: 'Reconoce miembros de la familia como: papa, mama, abuelo-a, tía-o.' },
    { cycle: 'II', dimension: 'COGNITIVA', texto: 'Se inicia en el reconocimiento de las nociones: arriba-abajo.' },
    { cycle: 'III', dimension: 'COGNITIVA', texto: 'Observa con atención y pronuncia el nombre del círculo.' },
    { cycle: 'III', dimension: 'COGNITIVA', texto: 'Reconoce los animales domésticos e imita algunos de sus sonidos.' },
    { cycle: 'IV', dimension: 'COGNITIVA', texto: 'Muestra comprensión por las reglas de juego.' },
    { cycle: 'IV', dimension: 'COGNITIVA', texto: 'Reconoce los medios de transporte como avión, carro, barco.' },

    // CORPORAL
    { cycle: 'I', dimension: 'CORPORAL', texto: 'Camina sobre figuras y formas pintadas en el piso.' },
    { cycle: 'I', dimension: 'CORPORAL', texto: 'Garabatea libremente con crayolas y tiza.' },
    { cycle: 'II', dimension: 'CORPORAL', texto: 'Puede agacharse y ponerse de pie sin ayuda.' },
    { cycle: 'II', dimension: 'CORPORAL', texto: 'Sube y baja escalones con ayuda.' },
    { cycle: 'III', dimension: 'CORPORAL', texto: 'Expresa con palabras lo que desea.' },
    { cycle: 'III', dimension: 'CORPORAL', texto: 'Participa en rondas que giren en ambas direcciones.' },
    { cycle: 'IV', dimension: 'CORPORAL', texto: 'Sus movimientos poseen buen equilibrio, coordinación y seguridad.' },
    { cycle: 'IV', dimension: 'CORPORAL', texto: 'Controla esfínteres.' },

    // COMUNICATIVA
    { cycle: 'I', dimension: 'COMUNICATIVA', texto: 'Tararea canciones y rimas.' },
    { cycle: 'I', dimension: 'COMUNICATIVA', texto: 'Expresa sus necesidades y deseos.' },
    { cycle: 'II', dimension: 'COMUNICATIVA', texto: 'Sigue instrucciones dadas por un adulto.' },
    { cycle: 'II', dimension: 'COMUNICATIVA', texto: 'Escucha y participa de las actividades.' },
    { cycle: 'III', dimension: 'COMUNICATIVA', texto: 'Distingue e imita sonidos de animales.' },
    { cycle: 'III', dimension: 'COMUNICATIVA', texto: 'Dice el nombre de algunos compañeros.' },
    { cycle: 'IV', dimension: 'COMUNICATIVA', texto: 'Contesta preguntas con palabras correctas.' },
    { cycle: 'IV', dimension: 'COMUNICATIVA', texto: 'Construye frases espontáneamente.' },

    // SOCIOAFECTIVA
    { cycle: 'I', dimension: 'SOCIOAFECTIVA', texto: 'Se adaptó fácilmente al CDI integrándose con alegría.' },
    { cycle: 'II', dimension: 'SOCIOAFECTIVA', texto: 'Manifiesta actitud de amor hacia los compañeros.' },
    { cycle: 'III', dimension: 'SOCIOAFECTIVA', texto: 'Colabora en pequeñas tareas.' },
    { cycle: 'IV', dimension: 'SOCIOAFECTIVA', texto: 'Es un bebe participativo, dinámico, alegre y sociable.' },

    // ESTETICA
    { cycle: 'I', dimension: 'ESTETICA', texto: 'Disfruta de las actividades con pintura.' },
    { cycle: 'II', dimension: 'ESTETICA', texto: 'Disfruta de la hora de títeres.' },
    { cycle: 'III', dimension: 'ESTETICA', texto: 'Se inicia en el juego simbólico.' },
    { cycle: 'IV', dimension: 'ESTETICA', texto: 'Le gusta moldear creativamente, pintar y dibujar.' }
];

const BoletinGeneratorView: React.FC = () => {
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCycle, setSelectedCycle] = useState('I');
    const [selectedLogros, setSelectedLogros] = useState<string[]>([]);
    const [observaciones, setObservaciones] = useState('');

    const toggleLogro = (logro: string) => {
        setSelectedLogros(prev =>
            prev.includes(logro) ? prev.filter(l => l !== logro) : [...prev, logro]
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Generador Maestro de Boletines</h1>
                    <p className="text-slate-500">Gestión de logros por dimensiones y ciclos educativos.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => { alert('Iniciando descarga de reporte para ' + (selectedStudent || 'Estudiante')); }}
                        disabled={!selectedStudent || selectedLogros.length === 0}
                        className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
                    >
                        <Download size={18} /> Descargar PDF Oficial
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Configuración */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Estudiante</label>
                        <select
                            className="w-full bg-slate-50 border-slate-100 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium"
                            onChange={(e) => setSelectedStudent(e.target.value)}
                        >
                            <option value="">Seleccionar...</option>
                            <option value="1">BARRETO PEREZ EMMA ISABELL</option>
                            <option value="2">BLANDON MONTOYA LUCIANA</option>
                            <option value="3">CANTILLO MARQUEZ MATEO</option>
                        </select>

                        <label className="block text-xs font-bold text-slate-400 mb-2 mt-6 uppercase tracking-widest">Ciclo Académico</label>
                        <div className="grid grid-cols-2 gap-2">
                            {['I', 'II', 'III', 'IV'].map(c => (
                                <button
                                    key={c}
                                    onClick={() => setSelectedCycle(c)}
                                    className={`py-2 rounded-lg text-xs font-bold transition-all ${selectedCycle === c ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                                >
                                    CICLO {c}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <label className="block text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">Observaciones Personales</label>
                        <textarea
                            value={observaciones}
                            onChange={(e) => setObservaciones(e.target.value)}
                            placeholder="Escriba algo personalizado sobre el desempeño..."
                            className="w-full bg-slate-50 border-none rounded-xl p-4 text-xs min-h-[150px] outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                        />
                    </div>
                </div>

                {/* Banco de Logros */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                                <Plus size={20} className="text-blue-500" /> Banco de Logros Oficiales
                            </h2>
                            <span className="text-[10px] bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase shadow-sm">
                                DINÁMICO: CICLO {selectedCycle}
                            </span>
                        </div>

                        <div className="space-y-10">
                            {Object.entries(dimensiones).map(([key, info]) => (
                                <div key={key} className="relative">
                                    <div className={`flex items-center gap-3 mb-4 font-bold text-[11px] uppercase tracking-widest opacity-70`}>
                                        <span className={`p-1.5 rounded-lg ${info.color}`}>{info.icon}</span>
                                        {info.label}
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {LOGROS_BANCO.filter(l => l.dimension === key && l.cycle === selectedCycle).map((logro, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => toggleLogro(logro.texto)}
                                                className={`
                                                    text-left p-4 rounded-xl border text-xs transition-all flex justify-between items-center group
                                                    ${selectedLogros.includes(logro.texto)
                                                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                                                        : 'border-slate-50 bg-slate-50/50 text-slate-600 hover:bg-white hover:border-slate-200'}
                                                `}
                                            >
                                                <span className="font-medium">{logro.texto}</span>
                                                <div className={`p-1 rounded-md transition-colors ${selectedLogros.includes(logro.texto) ? 'bg-blue-600 text-white' : 'bg-slate-200 text-transparent group-hover:text-slate-400 group-hover:bg-slate-100'}`}>
                                                    <CheckCircle size={14} />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Previsualización del Boletín */}
                <div className="lg:col-span-1 border-l border-slate-100 pl-4">
                    <div className="sticky top-24 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl min-h-[500px] flex flex-col">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto flex items-center justify-center mb-3">
                                <Baby size={32} className="text-blue-400" />
                            </div>
                            <h3 className="font-black text-sm uppercase tracking-tighter">Reporte Pedagógico</h3>
                            <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Previsualización</p>
                        </div>

                        <div className="flex-1 space-y-4">
                            {selectedLogros.length > 0 ? (
                                selectedLogros.map((l, i) => (
                                    <div key={i} className="flex gap-3 items-start animate-in slide-in-from-right-2 duration-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                        <p className="text-[11px] leading-relaxed font-medium text-slate-300">{l}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10 opacity-30">
                                    <Plus className="mx-auto mb-2" />
                                    <p className="text-[10px] font-bold uppercase">Agregue logros</p>
                                </div>
                            )}

                            {observaciones && (
                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <p className="text-[10px] font-bold text-blue-400 uppercase mb-2">Nota de la Docente:</p>
                                    <p className="text-[11px] italic text-slate-400">{observaciones}</p>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10 text-center">
                            <div className="w-32 h-10 border-b border-white/20 mx-auto mb-2" />
                            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Firma de Coordinación</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoletinGeneratorView;
