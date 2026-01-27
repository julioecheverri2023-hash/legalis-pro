
import React, { useState } from 'react';
import {
    Search,
    Baby,
    Phone,
    Mail,
    User,
    Calendar,
    Filter,
    MoreVertical,
    ExternalLink,
    ChevronRight
} from 'lucide-react';

// Simularemos los datos que vendrían del Excel de forma dinámica
const initialStudents = [
    { id: '1', nombre: 'BARRETO PEREZ EMMA ISABELL', acudiente: 'Acudiente 1', email: 'mama.emma@email.com', telefono: '300 000 0001', rh: 'O+', genero: 'F', fechaNacimiento: '2019-05-15', progreso: 85, estado: 'Activo' },
    { id: '2', nombre: 'BLANDON MONTOYA LUCIANA', acudiente: 'Acudiente 2', email: 'mama.luciana@email.com', telefono: '300 000 0002', rh: 'A+', genero: 'F', fechaNacimiento: '2019-02-20', progreso: 92, estado: 'Activo' },
    { id: '3', nombre: 'CANTILLO MARQUEZ MATEO', acudiente: 'Acudiente 3', email: 'papa.mateo@email.com', telefono: '300 000 0003', rh: 'O+', genero: 'M', fechaNacimiento: '2019-08-10', progreso: 45, estado: 'Observación' },
    { id: '4', nombre: 'CASARRUBIA GUERRERO EMILIANO', acudiente: 'Acudiente 4', email: 'papa.emiliano@email.com', telefono: '300 000 0004', rh: 'B+', genero: 'M', fechaNacimiento: '2019-11-12', progreso: 88, estado: 'Activo' },
    { id: '5', nombre: 'CASTRO VALENCIA ALAHIA', acudiente: 'Acudiente 5', email: 'mama.alahia@email.com', telefono: '300 000 0005', rh: 'O-', genero: 'F', fechaNacimiento: '2019-03-05', progreso: 75, estado: 'Activo' },
    { id: '6', nombre: 'CEDIEL VERGARA MARIA JOSE', acudiente: 'Acudiente 6', email: 'mama.mariajose@email.com', telefono: '300 000 0006', rh: 'AB+', genero: 'F', fechaNacimiento: '2019-06-18', progreso: 90, estado: 'Activo' },
    { id: '7', nombre: 'CIRO ARANGO SANTIAGO', acudiente: 'Acudiente 7', email: 'papa.santiago@email.com', telefono: '300 000 0007', rh: 'O+', genero: 'M', fechaNacimiento: '2019-01-22', progreso: 82, estado: 'Activo' },
    { id: '8', nombre: 'D HOY ZAMBRANO ABRAHAM GAEL', acudiente: 'Acudiente 8', email: 'papa.abraham@email.com', telefono: '300 000 0008', rh: 'A-', genero: 'M', fechaNacimiento: '2019-09-30', progreso: 60, estado: 'Observación' },
    { id: '9', nombre: 'ECHEVERRI GARCIA GABRIEL', acudiente: 'Acudiente 9', email: 'papa.gabriel@email.com', telefono: '300 000 0009', rh: 'O+', genero: 'M', fechaNacimiento: '2019-04-12', progreso: 95, estado: 'Activo' },
    { id: '10', nombre: 'GALLEGO LOPEZ SAMUEL', acudiente: 'Acudiente 10', email: 'papa.samuel@email.com', telefono: '300 000 0010', rh: 'B-', genero: 'M', fechaNacimiento: '2019-07-08', progreso: 88, estado: 'Activo' },
    { id: '11', nombre: 'GARCIA LOPEZ ANNY CRISTINA', acudiente: 'Acudiente 11', email: 'mama.anny@email.com', telefono: '300 000 0011', rh: 'O+', genero: 'F', fechaNacimiento: '2019-12-25', progreso: 80, estado: 'Activo' },
    { id: '12', nombre: 'GOMEZ FUENTES SUSANA ISABEL', acudiente: 'Acudiente 12', email: 'mama.susana@email.com', telefono: '300 000 0012', rh: 'A+', genero: 'F', fechaNacimiento: '2019-10-14', progreso: 92, estado: 'Activo' },
    { id: '13', nombre: 'GOMEZ YEPES JOSE EMILIO', acudiente: 'Acudiente 13', email: 'papa.jose@email.com', telefono: '300 000 0013', rh: 'O+', genero: 'M', fechaNacimiento: '2019-05-30', progreso: 77, estado: 'Activo' },
    { id: '14', nombre: 'GRISALES GARCIA ANDRES DAVID', acudiente: 'Acudiente 14', email: 'papa.andres@email.com', telefono: '300 000 0014', rh: 'O-', genero: 'M', fechaNacimiento: '2019-02-11', progreso: 85, estado: 'Activo' },
    { id: '15', nombre: 'GRISALES GARCIA JUAN DANIEL', acudiente: 'Acudiente 15', email: 'papa.juan@email.com', telefono: '300 000 0015', rh: 'O+', genero: 'M', fechaNacimiento: '2019-02-11', progreso: 83, estado: 'Activo' },
    { id: '16', nombre: 'HENAO GARZON EMILIANO', acudiente: 'Acudiente 16', email: 'papa.emiliano2@email.com', telefono: '300 000 0016', rh: 'AB-', genero: 'M', fechaNacimiento: '2019-08-24', progreso: 91, estado: 'Activo' },
    { id: '17', nombre: 'HERRERA ZAMBRANO ADALUZ SAMANTHA', acudiente: 'Acudiente 17', email: 'mama.adaluz@email.com', telefono: '300 000 0017', rh: 'O+', genero: 'F', fechaNacimiento: '2019-11-29', progreso: 94, estado: 'Activo' },
    { id: '18', nombre: 'HINCAPIE ALVAREZ AINHOA', acudiente: 'Acudiente 18', email: 'mama.ainhoa@email.com', telefono: '300 000 0018', rh: 'A-', genero: 'F', fechaNacimiento: '2019-04-03', progreso: 89, estado: 'Activo' },
    { id: '19', nombre: 'IMITOLA BURGOS HIAM GAEL', acudiente: 'Acudiente 19', email: 'papa.hiam@email.com', telefono: '300 000 0019', rh: 'O+', genero: 'M', fechaNacimiento: '2019-01-15', progreso: 70, estado: 'Activo' },
    { id: '20', nombre: 'JIMENEZ LONDOÑO JUAN JOSÉ', acudiente: 'Acudiente 20', email: 'papa.juanjose@email.com', telefono: '300 000 0020', rh: 'B+', genero: 'M', fechaNacimiento: '2019-09-02', progreso: 86, estado: 'Activo' },
    { id: '21', nombre: 'ORTIZ MORENO SAMUEL', acudiente: 'Acudiente 21', email: 'papa.samuel2@email.com', telefono: '300 000 0021', rh: 'O+', genero: 'M', fechaNacimiento: '2019-06-12', progreso: 93, estado: 'Activo' },
    { id: '22', nombre: 'OSPINA LONDOÑO ISAAC', acudiente: 'Acudiente 22', email: 'papa.isaac@email.com', telefono: '300 000 0022', rh: 'A+', genero: 'M', fechaNacimiento: '2019-03-27', progreso: 88, estado: 'Activo' },
    { id: '23', nombre: 'PUERTA ZAPATA MATTHEW JOEL', acudiente: 'Acudiente 23', email: 'papa.matthew@email.com', telefono: '300 000 0023', rh: 'O-', genero: 'M', fechaNacimiento: '2019-10-05', progreso: 42, estado: 'Observación' },
    { id: '24', nombre: 'SANOJA PEREZ SARA ANNELIESE', acudiente: 'Acudiente 24', email: 'mama.sara@email.com', telefono: '300 000 0024', rh: 'O+', genero: 'F', fechaNacimiento: '2019-07-19', progreso: 97, estado: 'Activo' },
    { id: '25', nombre: 'SUAREZ BEDOYA BENJAMIN', acudiente: 'Acudiente 25', email: 'papa.benjamin@email.com', telefono: '300 000 0025', rh: 'B+', genero: 'M', fechaNacimiento: '2019-12-08', progreso: 84, estado: 'Activo' },
    { id: '26', nombre: 'ZULUAGA GUARIN CRISTOBAL', acudiente: 'Acudiente 26', email: 'papa.cristobal@email.com', telefono: '300 000 0026', rh: 'A-', genero: 'M', fechaNacimiento: '2019-05-22', progreso: 91, estado: 'Activo' }
];

const DatosBasicosView: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('Todos');

    const filteredStudents = initialStudents.filter(s =>
        s.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter === 'Todos' || s.estado === filter)
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Fichas de Estudiantes</h1>
                    <p className="text-slate-500">Información dinámica de "Datos Básicos" (Sincronizado con Excel).</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center gap-2">
                        <ExternalLink size={18} /> Exportar Reporte
                    </button>
                </div>
            </div>

            {/* Filtros y Búsqueda */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar por nombre del estudiante..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                </div>
                <div className="flex gap-2">
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'Todos' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`} onClick={() => setFilter('Todos')}>Todos</button>
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'Activo' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`} onClick={() => setFilter('Activo')}>Activos</button>
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'Observación' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`} onClick={() => setFilter('Observación')}>Observación</button>
                </div>
            </div>

            {/* Grid de Fichas Dinámicas */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredStudents.map((student) => (
                    <div key={student.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                        {/* Header de la Ficha */}
                        <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${student.genero === 'M' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'}`}>
                                    {student.nombre.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 line-clamp-1">{student.nombre}</h3>
                                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${student.estado === 'Activo' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                        {student.estado}
                                    </span>
                                </div>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 p-1">
                                <MoreVertical size={20} />
                            </button>
                        </div>

                        {/* Contenido de la Ficha */}
                        <div className="p-5 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">Acudiente</p>
                                    <div className="flex items-center gap-2 text-sm text-slate-700">
                                        <User size={14} className="text-slate-400" />
                                        <span className="font-medium">{student.acudiente}</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">RH / Sangre</p>
                                    <div className="flex items-center gap-2 text-sm text-slate-700">
                                        <div className="w-5 h-5 bg-red-100 text-red-600 rounded flex items-center justify-center text-[10px] font-bold">
                                            {student.rh}
                                        </div>
                                        <span>Sanitario</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg text-sm text-slate-600">
                                    <Phone size={14} className="text-slate-400" />
                                    <span>{student.telefono}</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg text-sm text-slate-600">
                                    <Mail size={14} className="text-slate-400" />
                                    <span className="truncate">{student.email}</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg text-sm text-slate-600">
                                    <Calendar size={14} className="text-slate-400" />
                                    <span>Nacimiento: {student.fechaNacimiento}</span>
                                </div>
                            </div>

                            {/* Barra de Progreso */}
                            <div className="pt-2">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[11px] font-bold text-slate-500 uppercase">Progreso Logros</span>
                                    <span className="text-[12px] font-bold text-blue-600">{student.progreso}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-1000 ${student.progreso > 80 ? 'bg-emerald-500' : student.progreso > 50 ? 'bg-blue-500' : 'bg-amber-500'}`}
                                        style={{ width: `${student.progreso}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        {/* Footer de la Ficha */}
                        <div className="p-3 bg-slate-50 border-t border-slate-100">
                            <button className="w-full flex items-center justify-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors py-1">
                                VER REPORTE COMPLETO <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DatosBasicosView;
