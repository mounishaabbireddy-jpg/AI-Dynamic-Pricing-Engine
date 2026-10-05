import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ArrowUpRight, TrendingUp, DollarSign, Package, Zap } from 'lucide-react';

const revenueData = [
  { name: 'Mon', revenue: 4000, fixed: 2400 },
  { name: 'Tue', revenue: 3000, fixed: 1398 },
  { name: 'Wed', revenue: 2000, fixed: 9800 },
  { name: 'Thu', revenue: 2780, fixed: 3908 },
  { name: 'Fri', revenue: 1890, fixed: 4800 },
  { name: 'Sat', revenue: 2390, fixed: 3800 },
  { name: 'Sun', revenue: 3490, fixed: 4300 },
];

const StatCard = ({ title, value, icon: Icon, trend, positive }: any) => (
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-gray-500 font-medium">{title}</h3>
      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <div className="flex items-end justify-between">
      <div>
        <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
      </div>
      <div className={`flex items-center gap-1 text-sm font-medium ${positive ? 'text-green-600' : 'text-red-600'}`}>
        <ArrowUpRight className="w-4 h-4" />
        {trend}
      </div>
    </div>
  </div>
);

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Revenue (Dynamic)" value="₹1,24,500" icon={DollarSign} trend="+12.5%" positive={true} />
        <StatCard title="Avg Price Increase" value="₹125" icon={TrendingUp} trend="+4.2%" positive={true} />
        <StatCard title="Active Price Updates" value="1,432" icon={Zap} trend="+84 today" positive={true} />
        <StatCard title="Items out of stock" value="12" icon={Package} trend="-2% vs yesterday" positive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Comparison Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800">Revenue: Dynamic vs Fixed Pricing</h3>
            <p className="text-sm text-gray-500">AI-optimized pricing generates significantly higher revenue.</p>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFixed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend />
                <Area type="monotone" dataKey="revenue" name="AI Dynamic Pricing" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" />
                <Area type="monotone" dataKey="fixed" name="Fixed Pricing" stroke="#94a3b8" fillOpacity={1} fill="url(#colorFixed)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">Recent AI Price Adjustments</h3>
            <button className="text-sm text-blue-600 font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-sm text-gray-500">
                  <th className="pb-3 font-medium">Product</th>
                  <th className="pb-3 font-medium">Old Price</th>
                  <th className="pb-3 font-medium">New Price</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-3 font-medium text-gray-800">Sony Wireless Headphones</td>
                  <td className="py-3 text-gray-500">₹2,000</td>
                  <td className="py-3 text-blue-600 font-bold">₹2,150</td>
                  <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">High Demand</span></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 font-medium text-gray-800">Mechanical Keyboard v2</td>
                  <td className="py-3 text-gray-500">₹4,500</td>
                  <td className="py-3 text-red-600 font-bold">₹4,200</td>
                  <td className="py-3"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">Competitor Drop</span></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 font-medium text-gray-800">Gaming Mousepad (XL)</td>
                  <td className="py-3 text-gray-500">₹999</td>
                  <td className="py-3 text-blue-600 font-bold">₹1,199</td>
                  <td className="py-3"><span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Low Stock</span></td>
                </tr>
                 <tr>
                  <td className="py-3 font-medium text-gray-800">4K Web Camera</td>
                  <td className="py-3 text-gray-500">₹3,200</td>
                  <td className="py-3 text-blue-600 font-bold">₹3,350</td>
                  <td className="py-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Weekend Surge</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Ensure Zap icon is imported correctly above if needed. Let's fix missing imports in App.tsx.
