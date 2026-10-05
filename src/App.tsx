import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Simulation } from './pages/Simulation';

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
          {/* Placeholders for other tabs */}
          {['products', 'competitors', 'forecast', 'ai-insights'].includes(activeTab) && (
             <div className="flex flex-col items-center justify-center h-full text-gray-500">
               <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
               <p>This module is under development for the hackathon.</p>
             </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
