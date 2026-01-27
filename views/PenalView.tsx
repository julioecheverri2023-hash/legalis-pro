
import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Calendar, 
  Upload,
  Clock,
  ExternalLink,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Expediente } from '../types';
import { penalController } from '../controllers/penalController';

const PenalView: React.FC = () => {
  const [casos, setCasos] = useState<Expediente[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadCasos();
  }, []);

  const loadCasos = async () => {
    setLoading(true);
    const data = await penalController.fetchCasos();
    setCasos(data);
    setLoading(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Logic for the controller (Task 2.2)
      await penalController.subirExpediente(file, 'PEN-NEW');
      await loadCasos();
      setIsUploading(false);
      alert('Archivo subido correctamente');
    }
  };

  const filteredCasos = casos.filter(c => 
    c.cliente.toLowerCase().includes(search.toLowerCase()) || 
    c.numero_caso.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Gestión Penal</h1>
          <p className="text-slate-500">Control de expedientes y agenda de audiencias.</p>
        </div>
        <div className="flex gap-2">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            className="hidden" 
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <Upload size={18} />
            {isUploading ? 'Subiendo...' : 'Subir Expediente'}
          </button>
          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <Plus size={18} />
            <span className="hidden sm:inline">Nuevo Caso</span>
          </button>
        </div>
      </div>

      {/* Filters & Search - Mobile First Responsive Layout */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por cliente o radicado..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100">
            <Filter size={18} />
            <span>Filtros</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100">
            <Calendar size={18} />
            <span>Hoy</span>
          </button>
        </div>
      </div>

      {/* Tarea 2.3: DataTable / Responsive Layout */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Número de Caso</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Audiencia</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {loading ? (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-slate-500">Cargando expedientes...</td></tr>
              ) : filteredCasos.length === 0 ? (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-slate-500">No se encontraron expedientes.</td></tr>
              ) : filteredCasos.map((caso) => (
                <tr key={caso.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-semibold text-blue-600">{caso.numero_caso}</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">{caso.cliente}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock size={14} className="text-slate-400" />
                      {caso.fecha_audiencia}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${caso.estado === 'Abierto' ? 'bg-blue-100 text-blue-700' : ''}
                      ${caso.estado === 'En Proceso' ? 'bg-amber-100 text-amber-700' : ''}
                      ${caso.estado === 'Vencido' ? 'bg-red-100 text-red-700' : ''}
                      ${caso.estado === 'Cerrado' ? 'bg-emerald-100 text-emerald-700' : ''}
                    `}>
                      {caso.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 rounded-md">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-sm text-slate-500">Mostrando {filteredCasos.length} de {casos.length} resultados</span>
          <div className="flex gap-2">
            <button className="p-1 border rounded hover:bg-white disabled:opacity-50" disabled><ChevronLeft size={20}/></button>
            <button className="p-1 border rounded hover:bg-white"><ChevronRight size={20}/></button>
          </div>
        </div>
      </div>

      {/* Mobile Card Layout (visible only on very small screens) */}
      <div className="sm:hidden space-y-4">
        {filteredCasos.map(caso => (
          <div key={caso.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start mb-2">
                <span className="font-mono text-xs font-bold text-blue-600">{caso.numero_caso}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${caso.estado === 'Abierto' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'}`}>
                  {caso.estado}
                </span>
             </div>
             <h4 className="font-bold text-slate-800 mb-1">{caso.cliente}</h4>
             <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
               <Calendar size={12} /> Audiencia: {caso.fecha_audiencia}
             </div>
             <div className="flex gap-2">
               <button className="flex-1 bg-slate-100 text-slate-700 py-2 rounded-lg text-xs font-bold">Detalles</button>
               <button className="bg-blue-600 text-white p-2 rounded-lg"><ExternalLink size={16}/></button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PenalView;
