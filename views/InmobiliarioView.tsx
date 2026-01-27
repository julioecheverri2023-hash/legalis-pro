
import React, { useState } from 'react';
import { FileText, Download, Building2, User, Landmark, DollarSign } from 'lucide-react';
import { inmobiliarioController } from '../controllers/inmobiliarioController';
import { ClienteInmobiliario } from '../types';

const InmobiliarioView: React.FC = () => {
  const [formData, setFormData] = useState<ClienteInmobiliario>({
    nombre: '',
    cedula: '',
    direccion_inmueble: '',
    valor_venta: 0,
    fecha_promesa: new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'valor_venta' ? Number(value) : value }));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.cedula) {
      alert('Por favor complete los campos obligatorios');
      return;
    }
    const success = inmobiliarioController.generarPromesaCompraventa(formData);
    if (success) {
      alert('Documento generado y descargado correctamente.');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Módulo Inmobiliario</h1>
        <p className="text-slate-500">Generación automática de contratos y gestión de propiedad.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <form onSubmit={handleGenerate} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold border-b pb-4 mb-4 flex items-center gap-2">
              <Building2 className="text-blue-600" size={20} />
              Datos de Promesa de Compraventa
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Nombre Comprador</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Nombre completo"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none" 
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Cédula / NIT</label>
                <div className="relative">
                  <Landmark className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Documento"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none" 
                  />
                </div>
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Dirección del Inmueble</label>
                <input 
                  name="direccion_inmueble"
                  value={formData.direccion_inmueble}
                  onChange={handleInputChange}
                  type="text" 
                  placeholder="Calle 00 # 00 - 00, Conjunto..."
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Valor de Venta (COP)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    name="valor_venta"
                    value={formData.valor_venta}
                    onChange={handleInputChange}
                    type="number" 
                    placeholder="0.00"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Fecha de Firma</label>
                <input 
                  name="fecha_promesa"
                  value={formData.fecha_promesa}
                  onChange={handleInputChange}
                  type="date" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none" 
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all"
              >
                <Download size={20} />
                Generar y Descargar Promesa
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">Plantillas Pro</h3>
              <p className="text-slate-400 text-sm mb-4">Usa nuestras plantillas validadas legalmente para evitar errores.</p>
              <ul className="text-xs space-y-2">
                <li className="flex items-center gap-2"><FileText size={14} className="text-blue-400" /> Arrendamiento Vivienda</li>
                <li className="flex items-center gap-2"><FileText size={14} className="text-blue-400" /> Arrendamiento Local</li>
                <li className="flex items-center gap-2"><FileText size={14} className="text-blue-400" /> Poder Especial</li>
              </ul>
            </div>
            <Building2 className="absolute -right-4 -bottom-4 text-slate-800" size={120} />
          </div>

          <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl text-amber-800 text-sm">
            <h4 className="font-bold mb-1 flex items-center gap-2">
              <FileText size={16} /> Nota Importante
            </h4>
            <p>Asegúrese de que los datos del inmueble coincidan exactamente con la escritura pública o certificado de tradición.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InmobiliarioView;
