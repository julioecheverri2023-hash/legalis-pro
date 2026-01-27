
import React, { useState } from 'react';
import { Calculator, PieChart, TrendingUp, AlertTriangle } from 'lucide-react';

const FinancieroView: React.FC = () => {
  const [monto, setMonto] = useState(1000000);
  const [interes, setInteres] = useState(2.5);
  const [meses, setMeses] = useState(12);

  const totalInteres = monto * (interes / 100) * meses;
  const cuotaMensual = (monto + totalInteres) / meses;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Módulo Financiero</h1>
        <p className="text-slate-500">Calculadoras de liquidación y análisis de DataCrédito.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Calculator className="text-blue-600" size={20} />
            Calculadora de Crédito Simple
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Monto del Préstamo</span>
                <span className="text-blue-600">${monto.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="100000" max="50000000" step="100000"
                value={monto} onChange={(e) => setMonto(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Interés Mensual (%)</span>
                <span className="text-blue-600">{interes}%</span>
              </div>
              <input 
                type="range" min="0.1" max="10" step="0.1"
                value={interes} onChange={(e) => setInteres(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Plazo (Meses)</span>
                <span className="text-blue-600">{meses} meses</span>
              </div>
              <input 
                type="range" min="1" max="60"
                value={meses} onChange={(e) => setMeses(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-100 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Cuota Mensual</p>
              <p className="text-xl font-bold text-slate-800">${cuotaMensual.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Total Intereses</p>
              <p className="text-xl font-bold text-blue-600">${totalInteres.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <PieChart className="text-purple-600" size={20} />
              Resumen de Deuda
            </h2>
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg mb-4">
              <TrendingUp className="text-purple-600" size={32} />
              <div>
                <p className="text-sm font-bold text-purple-900">Análisis de Capacidad</p>
                <p className="text-xs text-purple-700">El cliente tiene una capacidad de endeudamiento del 40% mensual.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Capital a pagar</span>
                <span className="font-bold">75%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Intereses Totales</span>
                <span className="font-bold">25%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl flex gap-3">
             <AlertTriangle className="text-rose-500 shrink-0" size={24} />
             <div>
               <h4 className="font-bold text-rose-900">Alerta DataCrédito</h4>
               <p className="text-xs text-rose-700">Se detectó un reporte negativo reciente por valor de $500,000 en el sector financiero.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancieroView;
