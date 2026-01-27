
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Gavel,
  Calculator,
  Home,
  Menu,
  X,
  Bell,
  User
} from 'lucide-react';
import DashboardView from './views/DashboardView';
import PenalView from './views/PenalView';
import InmobiliarioView from './views/InmobiliarioView';
import FinancieroView from './views/FinancieroView';
import Chatbot from './components/Chatbot';
import { AppRoute } from './types';

const Sidebar = ({ isOpen, toggle }: { isOpen: boolean, toggle: () => void }) => {
  const location = useLocation();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: AppRoute.Dashboard },
    { icon: <Gavel size={20} />, label: 'Módulo Penal', path: AppRoute.Penal },
    { icon: <Calculator size={20} />, label: 'Financiero', path: AppRoute.Financiero },
    { icon: <Home size={20} />, label: 'Inmobiliario', path: AppRoute.Inmobiliario },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggle}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
      `}>
        <div className="p-6 flex items-center justify-between border-b border-slate-800/50">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Gavel size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white italic">LEGALIS <span className="text-blue-500">PRO</span></h1>
          </div>
          <button onClick={toggle} className="lg:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => { if (window.innerWidth < 1024) toggle(); }}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${location.pathname === item.path ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
              `}
            >
              {item.icon}
              <span className="font-semibold text-sm tracking-tight">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
      <button onClick={toggleSidebar} className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md">
        <Menu size={24} />
      </button>

      <div className="flex-1 lg:flex-none"></div>

      <div className="flex items-center gap-6">
        <button className="p-2.5 text-slate-400 hover:bg-slate-50 rounded-xl relative transition-colors">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
          <div className="hidden md:block text-right">
            <p className="text-sm font-bold text-slate-800">Abogado Principal</p>
            <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Admin Global</p>
          </div>
          <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold shadow-xl shadow-slate-200">
            AP
          </div>
        </div>
      </div>
    </header>
  );
};

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <HashRouter>
      <div className="flex min-h-screen bg-slate-50/50">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route
            path="/*"
            element={
              <div className="flex flex-1 overflow-hidden">
                <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
                <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                  <Header toggleSidebar={toggleSidebar} />
                  <main className="flex-1 overflow-y-auto p-4 lg:p-10 relative">
                    <Routes>
                      <Route path="/dashboard" element={<DashboardView />} />
                      <Route path="/penal" element={<PenalView />} />
                      <Route path="/financiero" element={<FinancieroView />} />
                      <Route path="/inmobiliario" element={<InmobiliarioView />} />
                    </Routes>
                  </main>
                  <Chatbot />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
