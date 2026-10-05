import { useState, useEffect } from 'react';
import { Sliders, Activity, Tag, HelpCircle, ArrowRight, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

export function Simulation() {
  const [basePrice, setBasePrice] = useState(2000);
  const [demand, setDemand] = useState(50); // 0-100
  const [inventory, setInventory] = useState(15); // 0-100
  const [competitorPrice, setCompetitorPrice] = useState(2200);

  const [recommendedPrice, setRecommendedPrice] = useState(2000);
  const [insight, setInsight] = useState('');
  
  // Weights (alpha, beta, gamma)
  const alpha = 0.4; // Demand weight
  const beta = 0.3; // Scarcity weight
  const gamma = 0.3; // Competitor weight

  useEffect(() => {
    // Math logic based on user's formula
    // P_new = P_base * (1 + alpha*D + beta*S + gamma*C)
    // We'll normalize these values to be centered around 0 to allow price drops and increases.

    // Normalized Demand (-1 to 1)
    const D = (demand - 50) / 50; 
    
    // Normalized Scarcity (-1 to 1, lower inventory = higher scarcity)
    // Let's say max inventory is 50 for this demo.
    const S = (25 - inventory) / 25; 
    
    // Normalized Competitor (-1 to 1)
    const C = (competitorPrice - basePrice) / basePrice;

    let adjustmentFactor = (alpha * D) + (beta * S) + (gamma * C);
    
    // Add safeguard constraint (max 30% swing)
    adjustmentFactor = Math.max(-0.3, Math.min(0.3, adjustmentFactor));
    
    let newPrice = basePrice * (1 + adjustmentFactor);
    
    // Round to nearest 10
    newPrice = Math.round(newPrice / 10) * 10;
    
    setRecommendedPrice(newPrice);

    // Generate explainable AI text
    let explanation = [];
    if (D > 0.3) explanation.push("High demand is driving prices up.");
    else if (D < -0.3) explanation.push("Low demand requires a discount to move volume.");
    
    if (S > 0.4) explanation.push("Low inventory creates scarcity premium.");
    else if (S < -0.4) explanation.push("High stock levels allow for competitive discounting.");

    if (C < -0.05) explanation.push("Competitors are undercutting us, forcing a price match.");
    else if (C > 0.1) explanation.push("Competitors are pricing higher, giving us margin room.");

    if (explanation.length === 0) setInsight("Market conditions are stable. Maintaining baseline pricing.");
    else setInsight(explanation.join(" "));

  }, [basePrice, demand, inventory, competitorPrice]);

  const priceDiff = recommendedPrice - basePrice;
  const percentChange = ((priceDiff / basePrice) * 100).toFixed(1);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Controls Section */}
      <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6 border-b pb-4">
          <Sliders className="text-blue-600 w-6 h-6" />
          <h2 className="text-xl font-bold text-gray-800">What-if Simulator</h2>
        </div>
        
        <p className="text-sm text-gray-500 mb-6">
          Adjust the market conditions below to see how the AI Pricing Engine responds in real-time.
        </p>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
              <label>Base Price (₹)</label>
              <span className="text-blue-600">₹{basePrice}</span>
            </div>
            <input 
              type="range" min="500" max="5000" step="100" 
              value={basePrice} onChange={(e) => setBasePrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
              <label className="flex items-center gap-1"><Activity className="w-4 h-4"/> Market Demand</label>
              <span className="text-blue-600">{demand}%</span>
            </div>
            <input 
              type="range" min="0" max="100" 
              value={demand} onChange={(e) => setDemand(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
              <label className="flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> Inventory Scarcity</label>
              <span className="text-blue-600">{inventory} units</span>
            </div>
            <input 
              type="range" min="0" max="50" 
              value={inventory} onChange={(e) => setInventory(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Out of Stock</span>
              <span>Overstocked</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
              <label className="flex items-center gap-1"><Tag className="w-4 h-4"/> Competitor Price (₹)</label>
              <span className="text-blue-600">₹{competitorPrice}</span>
            </div>
            <input 
              type="range" min="500" max="5000" step="50"
              value={competitorPrice} onChange={(e) => setCompetitorPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full lg:w-1/3 space-y-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl shadow-lg text-white border border-slate-700">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-semibold text-slate-300">AI Recommendation</h3>
            <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
          
          <div className="text-center mb-8">
            <p className="text-sm text-slate-400 mb-1">Optimal Selling Price</p>
            <div className="text-5xl font-bold tracking-tight mb-3">
              ₹{recommendedPrice}
            </div>
            
            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${priceDiff > 0 ? 'bg-green-500/20 text-green-400' : priceDiff < 0 ? 'bg-red-500/20 text-red-400' : 'bg-slate-700 text-slate-300'}`}>
              <TrendingUp className={`w-4 h-4 ${priceDiff < 0 ? 'rotate-180' : ''}`} />
              {priceDiff > 0 ? '+' : ''}{percentChange}% 
              <span className="opacity-70 text-xs ml-1">(₹{Math.abs(priceDiff)})</span>
            </div>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-blue-400" />
              <h4 className="text-sm font-semibold text-slate-200">Explainable AI Insight</h4>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {insight}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-4">Formula Breakdown</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Base Price (<span className="italic">P_base</span>)</span>
              <span className="font-medium text-gray-900">₹{basePrice}</span>
            </div>
            <div className="flex justify-center text-gray-400">
              <ArrowRight className="w-4 h-4 rotate-90" />
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Demand Adj (<span className="italic">α</span>={alpha})</span>
              <span className={`font-medium ${demand > 50 ? 'text-green-600' : 'text-red-600'}`}>
                {((demand - 50)/50 * alpha * 100).toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Stock Adj (<span className="italic">β</span>={beta})</span>
              <span className={`font-medium ${inventory < 25 ? 'text-green-600' : 'text-red-600'}`}>
                {((25 - inventory)/25 * beta * 100).toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Competitor Adj (<span className="italic">γ</span>={gamma})</span>
              <span className={`font-medium ${competitorPrice > basePrice ? 'text-green-600' : 'text-red-600'}`}>
                {((competitorPrice - basePrice)/basePrice * gamma * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
