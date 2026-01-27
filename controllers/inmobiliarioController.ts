
import { ClienteInmobiliario } from '../types';

export const inmobiliarioController = {
  /**
   * Tarea 3: Genera una promesa de compraventa reemplazando marcadores.
   */
  generarPromesaCompraventa: (datos: ClienteInmobiliario) => {
    const plantilla = `
PROMESA DE COMPRAVENTA

En la ciudad de Bogotá, a los ${new Date(datos.fecha_promesa).toLocaleDateString()}, entre el suscrito ____________________ y el señor(a) ${datos.nombre.toUpperCase()}, identificado con CC ${datos.cedula}, se ha celebrado el presente contrato de PROMESA DE COMPRAVENTA sobre el inmueble ubicado en ${datos.direccion_inmueble}.

VALOR DEL CONTRATO: $${datos.valor_venta.toLocaleString()} COP.

Las partes se comprometen a cumplir con lo estipulado...
    `;

    // Simulación de guardado local
    const blob = new Blob([plantilla], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Promesa_Compraventa_${datos.cedula}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    return true;
  }
};
