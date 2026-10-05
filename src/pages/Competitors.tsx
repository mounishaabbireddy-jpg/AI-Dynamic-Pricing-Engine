import { Users, TrendingDown, TrendingUp, AlertCircle } from 'lucide-react';

const competitors = [
  { 
    id: 1, 
    product: 'Sony Wireless Headphones', 
    ourPrice: 2150, 
    competitorA: 2200, 
    competitorB: 2300,
    status: 'We are cheaper',
    actionRequired: false
  },
  { 
    id: 2, 
    product: 'Mechanical Keyboard v2', 
    ourPrice: 4200, 
    competitorA: 3999, 
    competitorB: 4150,
    status: 'Competitors undercutting',
    actionRequired: true
  },
  { 
    id: 3, 
    product: 'Gaming Mousepad (XL)', 
    ourPrice: 1199, 
    competitorA: 1199, 
    competitorB: 1250,
    status: 'Price matched',
    actionRequired: false
  },
];

export function Competitors() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Competitor Intel</h2>
          <p className="text-sm text-gray-500">Real-time market price monitoring</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Tracked Competitors</p>
            <p className="text-2xl font-bold text-gray-900">4</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <TrendingDown className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Price Advantage</p>
            <p className="text-2xl font-bold text-gray-900">68%</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm flex items-center gap-4 bg-red-50">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-red-600 font-medium">Losing Price War</p>
            <p className="text-2xl font-bold text-red-900">3 Items</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-800">Live Price Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="px-6 py-3 font-medium">Product</th>
                <th className="px-6 py-3 font-medium text-blue-600">Our Price</th>
                <th className="px-6 py-3 font-medium">Amazon (Est)</th>
                <th className="px-6 py-3 font-medium">Flipkart (Est)</th>
                <th className="px-6 py-3 font-medium">Market Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {competitors.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.product}</td>
                  <td className="px-6 py-4 font-bold text-blue-600">₹{item.ourPrice}</td>
                  <td className="px-6 py-4 text-gray-600">₹{item.competitorA}</td>
                  <td className="px-6 py-4 text-gray-600">₹{item.competitorB}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      item.actionRequired ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {item.actionRequired ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
