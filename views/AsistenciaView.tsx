
import React, { useState } from 'react';
import { Search, UserCheck, UserX, AlertCircle, Save } from 'lucide-react';
import { Estudiante } from '../types';

const studentsData: Estudiante[] = [
    { id: '1', nombre: 'BARRETO PEREZ EMMA ISABELL', acudiente: 'Acudiente 1', email_acudiente: 'mama.emma@email.com', telefono_acudiente: '300 000 0001', asistencia: 'Presente' },
    { id: '2', nombre: 'BLANDON MONTOYA LUCIANA', acudiente: 'Acudiente 2', email_acudiente: 'mama.luciana@email.com', telefono_acudiente: '300 000 0002', asistencia: 'Presente' },
    { id: '3', nombre: 'CANTILLO MARQUEZ MATEO', acudiente: 'Acudiente 3', email_acudiente: 'papa.mateo@email.com', telefono_acudiente: '300 000 0003', asistencia: 'Presente' },
    { id: '4', nombre: 'CASARRUBIA GUERRERO EMILIANO', acudiente: 'Acudiente 4', email_acudiente: 'papa.emiliano@email.com', telefono_acudiente: '300 000 0004', asistencia: 'Presente' },
    { id: '5', nombre: 'CASTRO VALENCIA ALAHIA', acudiente: 'Acudiente 5', email_acudiente: 'mama.alahia@email.com', telefono_acudiente: '300 000 0005', asistencia: 'Presente' },
    { id: '6', nombre: 'CEDIEL VERGARA MARIA JOSE', acudiente: 'Acudiente 6', email_acudiente: 'mama.mariajose@email.com', telefono_acudiente: '300 000 0006', asistencia: 'Presente' },
    { id: '7', nombre: 'CIRO ARANGO SANTIAGO', acudiente: 'Acudiente 7', email_acudiente: 'papa.santiago@email.com', telefono_acudiente: '300 000 0007', asistencia: 'Presente' },
    { id: '8', nombre: 'D HOY ZAMBRANO ABRAHAM GAEL', acudiente: 'Acudiente 8', email_acudiente: 'papa.abraham@email.com', telefono_acudiente: '300 000 0008', asistencia: 'Presente' },
    { id: '9', nombre: 'ECHEVERRI GARCIA GABRIEL', acudiente: 'Acudiente 9', email_acudiente: 'papa.gabriel@email.com', telefono_acudiente: '300 000 0009', asistencia: 'Presente' },
    { id: '10', nombre: 'GALLEGO LOPEZ SAMUEL', acudiente: 'Acudiente 10', email_acudiente: 'papa.samuel@email.com', telefono_acudiente: '300 000 0010', asistencia: 'Presente' },
    { id: '11', nombre: 'GARCIA LOPEZ ANNY CRISTINA', acudiente: 'Acudiente 11', email_acudiente: 'mama.anny@email.com', telefono_acudiente: '300 000 0011', asistencia: 'Presente' },
    { id: '12', nombre: 'GOMEZ FUENTES SUSANA ISABEL', acudiente: 'Acudiente 12', email_acudiente: 'mama.susana@email.com', telefono_acudiente: '300 000 0012', asistencia: 'Presente' },
    { id: '13', nombre: 'GOMEZ YEPES JOSE EMILIO', acudiente: 'Acudiente 13', email_acudiente: 'papa.jose@email.com', telefono_acudiente: '300 000 0013', asistencia: 'Presente' },
    { id: '14', nombre: 'GRISALES GARCIA ANDRES DAVID', acudiente: 'Acudiente 14', email_acudiente: 'papa.andres@email.com', telefono_acudiente: '300 000 0014', asistencia: 'Presente' },
    { id: '15', nombre: 'GRISALES GARCIA JUAN DANIEL', acudiente: 'Acudiente 15', email_acudiente: 'papa.juan@email.com', telefono_acudiente: '300 000 0015', asistencia: 'Presente' },
    { id: '16', nombre: 'HENAO GARZON EMILIANO', acudiente: 'Acudiente 16', email_acudiente: 'papa.emiliano2@email.com', telefono_acudiente: '300 000 0016', asistencia: 'Presente' },
    { id: '17', nombre: 'HERRERA ZAMBRANO ADALUZ SAMANTHA', acudiente: 'Acudiente 17', email_acudiente: 'mama.adaluz@email.com', telefono_acudiente: '300 000 0017', asistencia: 'Presente' },
    { id: '18', nombre: 'HINCAPIE ALVAREZ AINHOA', acudiente: 'Acudiente 18', email_acudiente: 'mama.ainhoa@email.com', telefono_acudiente: '300 000 0018', asistencia: 'Presente' },
    { id: '19', nombre: 'IMITOLA BURGOS HIAM GAEL', acudiente: 'Acudiente 19', email_acudiente: 'papa.hiam@email.com', telefono_acudiente: '300 000 0019', asistencia: 'Presente' },
    { id: '20', nombre: 'JIMENEZ LONDOÑO JUAN JOSÉ', acudiente: 'Acudiente 20', email_acudiente: 'papa.juanjose@email.com', telefono_acudiente: '300 000 0020', asistencia: 'Presente' },
    { id: '21', nombre: 'ORTIZ MORENO SAMUEL', acudiente: 'Acudiente 21', email_acudiente: 'papa.samuel2@email.com', telefono_acudiente: '300 000 0021', asistencia: 'Presente' },
    { id: '22', nombre: 'OSPINA LONDOÑO ISAAC', acudiente: 'Acudiente 22', email_acudiente: 'papa.isaac@email.com', telefono_acudiente: '300 000 0022', asistencia: 'Presente' },
    { id: '23', nombre: 'PUERTA ZAPATA MATTHEW JOEL', acudiente: 'Acudiente 23', email_acudiente: 'papa.matthew@email.com', telefono_acudiente: '300 000 0023', asistencia: 'Presente' },
    { id: '24', nombre: 'SANOJA PEREZ SARA ANNELIESE', acudiente: 'Acudiente 24', email_acudiente: 'mama.sara@email.com', telefono_acudiente: '300 000 0024', asistencia: 'Presente' },
    { id: '25', nombre: 'SUAREZ BEDOYA BENJAMIN', acudiente: 'Acudiente 25', email_acudiente: 'papa.benjamin@email.com', telefono_acudiente: '300 000 0025', asistencia: 'Presente' },
    { id: '26', nombre: 'ZULUAGA GUARIN CRISTOBAL', acudiente: 'Acudiente 26', email_acudiente: 'papa.cristobal@email.com', telefono_acudiente: '300 000 0026', asistencia: 'Presente' }
];

const AsistenciaView: React.FC = () => {
    const [students, setStudents] = useState(studentsData);

    const toggleAsistencia = (id: string, state: 'Presente' | 'Ausente' | 'Excusa') => {
        setStudents(prev => prev.map(s => s.id === id ? { ...s, asistencia: state } : s));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Control de Asistencia</h1>
                    <p className="text-slate-500">Grado: Transición A - {new Date().toLocaleDateString()}</p>
                </div>
                <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
                    <Save size={18} /> Guardar Jornada
                </button>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex items-center gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Buscar estudiante..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold">
                            <tr>
                                <th className="px-6 py-4">Estudiante</th>
                                <th className="px-6 py-4">Acudiente</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {students.map((s) => (
                                <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs uppercase">
                                                {s.nombre.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className="font-medium text-slate-700">{s.nombre}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm">
                                            <p className="text-slate-700">{s.acudiente}</p>
                                            <p className="text-slate-400 text-xs">{s.telefono_acudiente}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`
                                            px-2 py-1 rounded-full text-[10px] font-bold uppercase
                                            ${s.asistencia === 'Presente' ? 'bg-green-100 text-green-700' :
                                                s.asistencia === 'Ausente' ? 'bg-red-100 text-red-700' :
                                                    'bg-amber-100 text-amber-700'}
                                        `}>
                                            {s.asistencia}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() => toggleAsistencia(s.id, 'Presente')}
                                                className={`p-2 rounded-lg transition-colors ${s.asistencia === 'Presente' ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                                            >
                                                <UserCheck size={16} />
                                            </button>
                                            <button
                                                onClick={() => toggleAsistencia(s.id, 'Ausente')}
                                                className={`p-2 rounded-lg transition-colors ${s.asistencia === 'Ausente' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                                            >
                                                <UserX size={16} />
                                            </button>
                                            <button
                                                onClick={() => toggleAsistencia(s.id, 'Excusa')}
                                                className={`p-2 rounded-lg transition-colors ${s.asistencia === 'Excusa' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                                            >
                                                <AlertCircle size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AsistenciaView;
