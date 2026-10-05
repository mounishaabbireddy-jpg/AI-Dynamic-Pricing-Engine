import { BrainCircuit, FileText, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const featureImportance = [
  { feature: 'Competitor Pricing', impact: 45 },
  { feature: 'Current Inventory', impact: 25 },
  { feature: 'Historical Demand', impact: 15 },
  { feature: 'Seasonality', impact: 10 },
  { feature: 'Time of Day', impact: 5 },
];

export function Insights() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Explainable AI (XAI)</h2>
          <p className="text-sm text-gray-500">Understand the \"why\" behind the engine's pricing decisions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <div className="flex items-center gap-2 mb-6">
            <BrainCircuit className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-bold text-gray-800">Model Feature Importance</h3>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Our Random Forest model weighs several factors before suggesting a price. Here is how much each feature influences the final decision.
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={featureImportance} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" hide />
                <YAxis dataKey="feature" type="category" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12}} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="impact" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-gray-800">Audit Log: Recent Decision</h3>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-gray-900">Sony Wireless Headphones</h4>
                <p className="text-xs text-gray-500">Timestamp: 2026-10-05 14:30:00 UTC</p>
              </div>
              <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">
                ₹2,000 → ₹2,150
              </span>
            </div>

            <div className="space-y-3 mt-6">
              <h5 className="text-xs font-bold uppercase text-gray-400 tracking-wider">AI Reasoning Chain</h5>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-700"><strong className="text-gray-900">Demand Trigger:</strong> 42% spike in weekend search volume detected.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-700"><strong className="text-gray-900">Inventory Constraint:</strong> Only 15 units remaining (high scarcity index).</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-700"><strong className="text-gray-900">Competitor Check:</strong> Amazon currently priced at ₹2,200. We have room to increase margin while remaining the cheapest option.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-700"><strong className="text-gray-900">Rule Engine:</strong> Applied +7.5% increase. Safely below the 15% maximum surge protection cap.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
