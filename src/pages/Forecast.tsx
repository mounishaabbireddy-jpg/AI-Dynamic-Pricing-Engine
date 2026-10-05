import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

const forecastData = [
  { day: 'Mon', historical: 120, predicted: 125 },
  { day: 'Tue', historical: 130, predicted: 140 },
  { day: 'Wed', historical: 110, predicted: 115 },
  { day: 'Thu', historical: 140, predicted: 155 },
  { day: 'Fri', historical: 190, predicted: 210 }, // Spike on Friday
  { day: 'Sat', historical: 250, predicted: 280 }, // Weekend surge
  { day: 'Sun', historical: 220, predicted: 245 },
];

export function Forecast() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Demand Forecasting</h2>
          <p className="text-sm text-gray-500">ML-powered predictions for the upcoming week</p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
          <Calendar className="w-4 h-4 text-gray-500" />
          Next 7 Days
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-5 rounded-xl border border-blue-200 shadow-sm bg-blue-50">
          <h3 className="text-sm font-medium text-blue-800 mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" /> Expected Weekend Surge
          </h3>
          <p className="text-sm text-blue-900">
            Our models predict a <strong>42% increase</strong> in electronics demand this weekend due to the upcoming holiday. Prices should be scaled accordingly.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-orange-200 shadow-sm bg-orange-50">
          <h3 className="text-sm font-medium text-orange-800 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Stock Warning
          </h3>
          <p className="text-sm text-orange-900">
            High predicted demand for 'Sony Wireless Headphones' may deplete current inventory by Saturday. Consider raising prices to throttle sales.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800">7-Day Volume Prediction</h3>
          <p className="text-sm text-gray-500">Historical average vs. AI predicted sales volume</p>
        </div>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={forecastData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend />
              <Line type="monotone" dataKey="historical" name="Historical Average" stroke="#94a3b8" strokeWidth={3} dot={{r: 4}} />
              <Line type="monotone" dataKey="predicted" name="AI Predicted Demand" stroke="#8b5cf6" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
