import React from 'react';
import { LayoutDashboard, Sliders, Box, Users, BarChart2, Zap } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'simulation', label: 'Live Simulation', icon: Sliders },
    { id: 'products', label: 'Products', icon: Box },
    { id: 'competitors', label: 'Competitor Intel', icon: Users },
    { id: 'forecast', label: 'Demand Forecast', icon: BarChart2 },
    { id: 'ai-insights', label: 'AI Insights', icon: Zap },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col">
      <div className="flex items-center gap-2 px-2 py-4 mb-6">
        <Zap className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold tracking-tight">PriceSense AI</h1>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 border border-slate-700">
          <p className="font-semibold text-white mb-1">Hackathon Build</p>
          <p className="text-xs">Dynamic Pricing Engine v1.0</p>
        </div>
      </div>
    </div>
  );
}
