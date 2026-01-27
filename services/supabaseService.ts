
import { Expediente } from '../types';

// Mocking Supabase Client behavior for UI demonstration
export const supabaseService = {
  getExpedientes: async (): Promise<Expediente[]> => {
    // Simulating API latency
    await new Promise(r => setTimeout(r, 500));
    return [
      { id: '1', numero_caso: 'PEN-2024-001', cliente: 'Juan Pérez', fecha_audiencia: '2024-06-15', estado: 'Abierto' },
      { id: '2', numero_caso: 'PEN-2024-002', cliente: 'María López', fecha_audiencia: '2024-06-20', estado: 'En Proceso' },
      { id: '3', numero_caso: 'PEN-2024-003', cliente: 'Carlos Ruiz', fecha_audiencia: '2024-05-30', estado: 'Vencido' },
    ];
  },

  uploadFile: async (file: File): Promise<string> => {
    console.log('Subiendo archivo a Supabase Storage:', file.name);
    await new Promise(r => setTimeout(r, 1000));
    return `https://supabase-storage.url/v1/obj/${file.name}`;
  },

  saveExpediente: async (data: Partial<Expediente>) => {
    console.log('Guardando en tabla expedientes:', data);
    return { ...data, id: Math.random().toString(36).substr(2, 9) };
  }
};
