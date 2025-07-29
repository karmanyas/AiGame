// components/ControlsPanel.tsx
import { useState } from "react";

interface ControlsProps {
  onSubmit: (decisions: {
    price: number;
    marketingSpend: number;
    productionTarget: number;
  }) => void;
}

export default function ControlsPanel({ onSubmit }: ControlsProps) {
  const [price, setPrice] = useState(10);
  const [marketingSpend, setMarketingSpend] = useState(0);
  const [productionTarget, setProductionTarget] = useState(50);

  const handleSubmit = () => {
    onSubmit({ price, marketingSpend, productionTarget });
  };

  return (
    <div className="bg-[#0f172a] text-white p-6 rounded-2xl shadow-xl space-y-5 border border-green-500">
      <h2 className="text-xl font-bold text-green-300">🎮 Green Team Controls</h2>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-300">💰 Price: ${price.toFixed(2)}</label>
        <input
          type="range"
          min="8"
          max="15"
          step="0.1"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-green-500"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-300">🏭 Production Target</label>
        <input
          type="number"
          value={productionTarget}
          onChange={(e) => setProductionTarget(Number(e.target.value))}
          className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-1 text-white"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-300">📣 Marketing Spend</label>
        <select
          value={marketingSpend}
          onChange={(e) => setMarketingSpend(Number(e.target.value))}
          className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-1 text-white"
        >
          <option value={0}>$0</option>
          <option value={500}>$500</option>
          <option value={2000}>$2000</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 hover:bg-green-700 text-white w-full py-2 mt-2 rounded-xl font-semibold transition"
      >
        🚀 End Turn
      </button>
    </div>
  );
}
