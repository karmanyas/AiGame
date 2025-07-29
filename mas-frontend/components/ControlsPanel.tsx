import { useState } from "react";

interface ControlsPanelProps {
  onSubmit: (decisions: {
    price: number;
    productionTarget: number;
    marketingSpend: number;
  }) => void;
}

export default function ControlsPanel({ onSubmit }: ControlsPanelProps) {
  const [price, setPrice] = useState(10);
  const [production, setProduction] = useState(50);
  const [marketing, setMarketing] = useState(0);

  const handleSubmit = () => {
    onSubmit({
      price,
      productionTarget: production,
      marketingSpend: marketing,
    });
  };

  return (
    <div className="bg-[#0a0f14] p-6 rounded-xl shadow-lg text-white">
      <h2 className="text-xl font-bold text-green-400 mb-4">🎮 Green Team Controls</h2>

      {/* Price Slider */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">💰 Price: ${price.toFixed(2)}</label>
        <input
          type="range"
          min={1}
          max={20}
          step={0.1}
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          className="w-full accent-green-400"
        />
      </div>

      {/* Production Slider */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">🏭 Production Target: {production}</label>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={production}
          onChange={(e) => setProduction(parseInt(e.target.value))}
          className="w-full accent-purple-400"
        />
      </div>

      {/* Marketing Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">📢 Marketing Spend</label>
        <input
          type="number"
          min={0}
          value={marketing}
          onChange={(e) => setMarketing(parseInt(e.target.value))}
          className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-semibold transition"
      >
        🚀 End Turn
      </button>
    </div>
  );
}
