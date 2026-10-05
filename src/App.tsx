import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Simulation } from './pages/Simulation';
import { Products } from './pages/Products';
import { Competitors } from './pages/Competitors';
import { Forecast } from './pages/Forecast';
import { Insights } from './pages/Insights';

function App() {
  const [activeTab, setActiveTab] = useState('simulation'); // Default to simulation for quick demo

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 p-6 overflow-y-auto">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'simulation' && <Simulation />}
          {activeTab === 'products' && <Products />}
          {activeTab === 'competitors' && <Competitors />}
          {activeTab === 'forecast' && <Forecast />}
          {activeTab === 'ai-insights' && <Insights />}
        </main>
      </div>
    </div>
  );
}

export default App;
