
export enum AppRoute {
  Login = '/',
  Dashboard = '/dashboard',
  Penal = '/penal',
  Financiero = '/financiero',
  Inmobiliario = '/inmobiliario'
}

export interface Expediente {
  id: string;
  numero_caso: string;
  cliente: string;
  fecha_audiencia: string;
  estado: 'Abierto' | 'En Proceso' | 'Cerrado' | 'Vencido';
  url_archivo?: string;
  fecha_notificacion?: string;
  vencimiento?: string;
}

export interface ClienteInmobiliario {
  id: string;
  nombre: string;
  inmueble: string;
  tipo_contrato: 'Venta' | 'Arriendo';
  fecha_inicio: string;
  vencimiento: string;
  estado_pago: 'Al día' | 'Mora' | 'Pendiente';
}

export interface Usuario {
  id: string;
  nombre: string;
  rol: 'Admin' | 'Abogado' | 'Secretario';
  email: string;
}
