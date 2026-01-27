
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, MessageSquareText, Bell, Phone } from 'lucide-react';
import { chatbotController } from '../controllers/chatbotController';
import { penalController } from '../controllers/penalController';
import { Expediente } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: '¡Hola! Soy Legalis AI. ¿Tienes alguna audiencia hoy o necesitas que redacte un mensaje de WhatsApp para un cliente?'}
  ]);
  const [casos, setCasos] = useState<Expediente[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    penalController.fetchCasos().then(setCasos);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);

    const botResponse = await chatbotController.sendMessage(userMsg, casos);
    setMessages(prev => [...prev, {role: 'bot', text: botResponse || ''}]);
  };

  const openWhatsApp = () => {
    const lastBotMsg = messages.filter(m => m.role === 'bot').pop();
    const message = lastBotMsg ? lastBotMsg.text : "Hola, te escribo desde Legalis Pro.";
    // Using a placeholder number, in a real app this would be the client's phone from context
    const link = chatbotController.generateWhatsAppLink('573000000000', message);
    window.open(link, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <MessageSquareText size={18} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Legalis AI</h3>
                <span className="text-[10px] text-blue-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> En línea
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[80%] px-4 py-2 rounded-2xl text-sm
                  ${m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'}
                `}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Footer / Actions */}
          <div className="p-4 bg-white border-t border-slate-100 space-y-3">
             <div className="flex gap-2">
               <button 
                 onClick={openWhatsApp}
                 className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-green-500 hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors"
               >
                 <Phone size={14} /> WhatsApp
               </button>
               <button 
                onClick={() => setMessages(prev => [...prev, {role: 'bot', text: 'Analizando audiencias próximas... Tienes 3 audiencias esta semana. ¿Quieres detalles?'}])}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-amber-100 hover:bg-amber-200 text-amber-700 text-xs font-bold rounded-lg transition-colors">
                 <Bell size={14} /> Recordatorios
               </button>
             </div>
             
             <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe tu consulta legal..."
                  className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none"
                />
                <button 
                  onClick={handleSend}
                  className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                >
                  <Send size={18} />
                </button>
             </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all active:scale-95 group relative"
        >
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold">
            !
          </div>
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
