import { Package, Plus, Search, Edit2, Trash2 } from 'lucide-react';

const products = [
  { id: 'PRD-001', name: 'Sony Wireless Headphones', category: 'Electronics', basePrice: 2000, currentPrice: 2150, stock: 15, status: 'Active' },
  { id: 'PRD-002', name: 'Mechanical Keyboard v2', category: 'Accessories', basePrice: 4500, currentPrice: 4200, stock: 120, status: 'Active' },
  { id: 'PRD-003', name: 'Gaming Mousepad (XL)', category: 'Accessories', basePrice: 999, currentPrice: 1199, stock: 5, status: 'Low Stock' },
  { id: 'PRD-004', name: '4K Web Camera', category: 'Electronics', basePrice: 3200, currentPrice: 3350, stock: 45, status: 'Active' },
  { id: 'PRD-005', name: 'USB-C Hub 8-in-1', category: 'Accessories', basePrice: 1500, currentPrice: 1500, stock: 0, status: 'Out of Stock' },
];

export function Products() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Products Catalog</h2>
          <p className="text-sm text-gray-500">Manage your inventory and baseline pricing</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products by name or ID..." 
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="px-6 py-3 font-medium">Product Details</th>
                <th className="px-6 py-3 font-medium">Category</th>
                <th className="px-6 py-3 font-medium">Stock</th>
                <th className="px-6 py-3 font-medium">Base Price</th>
                <th className="px-6 py-3 font-medium">AI Dynamic Price</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                        <Package className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-gray-500 text-xs">{product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.category}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      product.stock > 10 ? 'bg-green-100 text-green-700' : 
                      product.stock > 0 ? 'bg-orange-100 text-orange-700' : 
                      'bg-red-100 text-red-700'
                    }`}>
                      {product.stock} units
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">₹{product.basePrice}</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">₹{product.currentPrice}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                    <button className="p-1 text-gray-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
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
