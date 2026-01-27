
import { supabaseService } from '../services/supabaseService';
import { Expediente } from '../types';

export const penalController = {
  
  /**
   * Tarea 2.2: Calcula vencimiento sumando días hábiles (Lunes a Viernes).
   */
  calcularVencimiento: (fechaNotificacion: string, diasHabiles: number = 10): string => {
    const date = new Date(fechaNotificacion);
    let count = 0;
    while (count < diasHabiles) {
      date.setDate(date.getDate() + 1);
      const day = date.getDay();
      if (day !== 0 && day !== 6) { // Not Sunday (0) or Saturday (6)
        count++;
      }
    }
    return date.toISOString().split('T')[0];
  },

  /**
   * Tarea 2.2: Sube un expediente procesando el archivo localmente primero.
   */
  subirExpediente: async (file: File, numeroCaso: string): Promise<string | null> => {
    try {
      const url = await supabaseService.uploadFile(file);
      await supabaseService.saveExpediente({
        numero_caso: numeroCaso,
        url_archivo: url,
        estado: 'En Proceso'
      });
      return url;
    } catch (error) {
      console.error('Error en subirExpediente:', error);
      return null;
    }
  },

  fetchCasos: async (): Promise<Expediente[]> => {
    return await supabaseService.getExpedientes();
  }
};
