
import { GoogleGenAI } from "@google/genai";
import { Expediente } from "../types";

export const chatbotController = {
  sendMessage: async (prompt: string, context: Expediente[]) => {
    try {
      const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY });
      const systemInstruction = `
        Eres 'Nestor AI', un asistente experto para técnicos legales.
        Tu objetivo es ayudar al usuario a recordar tareas, audiencias y gestionar sus casos.
        Aquí tienes los casos actuales: ${JSON.stringify(context)}.
        
        Reglas:
        1. Sé profesional y conciso.
        2. Si el usuario te pide recordar algo de último momento, busca en los casos.
        3. Si el usuario desea enviar algo a WhatsApp, indícale que puede usar el botón de WhatsApp o genera un mensaje estructurado.
        4. Responde en español.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
        },
      });

      return response.text;
    } catch (error) {
      console.error("Chatbot error:", error);
      return "Lo siento, tuve un problema procesando tu solicitud legal. ¿En qué más puedo ayudarte?";
    }
  },

  generateWhatsAppLink: (phone: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  }
};
