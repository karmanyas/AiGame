import { GameState } from "../types/GameState";
import { useState } from "react";

interface DashboardProps {
  data: GameState;
}

export default function Dashboard({ data }: DashboardProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="px-4 py-6 text-white">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white tracking-tight">🏆 BrewMasters CEO Challenge</h1>
        <h2 className="text-xl font-semibold text-yellow-400 mt-1">
          Outsmart the AI and Dominate the Market!
        </h2>
        <div className="mt-3 flex justify-center gap-4 text-sm">
          <span className="bg-black/80 px-4 py-1 rounded-full border border-yellow-400">
            Market Size: <span className="font-bold text-yellow-300">{data.current_market_cap.toLocaleString()} customers</span>
          </span>
          <span className="bg-black/80 px-4 py-1 rounded-full border border-green-400">
            Competition: <span className="font-bold text-green-300">Active</span>
          </span>
        </div>

        {/* Info Panel Toggle Button */}
        <div className="mt-6">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg shadow hover:brightness-110 transition"
          >
            {showInfo ? "❌ Hide Game Terms" : "ℹ️ What Do These Terms Mean?"}
          </button>
        </div>

        {/* Info Panel Content */}
        {showInfo && (
          <div className="mt-4 p-4 bg-black/70 rounded-xl border border-purple-500 text-sm text-white space-y-2 max-w-3xl mx-auto text-left">
            <p><strong>💰 Price:</strong> The selling price per unit of your product.</p>
            <p><strong>🏭 Production Target:</strong> Number of units you aim to produce this turn.</p>
            <p><strong>📢 Marketing Spend:</strong> How much money you invest in advertising to boost demand.</p>
            <p><strong>📦 Inventory:</strong> Remaining stock from previous turns that wasn’t sold.</p>
            <p><strong>🎯 Demand:</strong> The total number of units customers want to buy (may exceed your inventory).</p>
            <p><strong>🛒 Sales:</strong> Number of units sold this turn, limited by demand and inventory.</p>
            <p><strong>📈 Profit:</strong> Total money earned after subtracting production and marketing costs.</p>
          </div>
        )}
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Green Team */}
        <div className="bg-[#101417] p-6 rounded-2xl shadow-xl border-l-4 border-green-400 relative">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-green-300 flex items-center gap-2">🧑‍💼 Green Team</h3>
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">YOU</span>
          </div>
          <h2 className="text-3xl font-extrabold mt-2 text-white">${data.green_team_profit.toLocaleString()}</h2>
          <p className="text-sm text-green-400">+${data.green_team_profit_this_turn.toFixed(2)} this turn</p>
          <ul className="mt-4 space-y-1 text-sm text-gray-200">
            <li>🥫 Inventory: {data.green_team_inventory} units</li>
            <li>💰 Price: ${data.green_team_price}</li>
            <li>🎯 Demand: {data.green_team_projected_demand.toFixed(0)}</li>
            <li>📦 Sales: {data.green_team_total_sales}</li>
          </ul>
          <div className="absolute bottom-3 right-4 text-xs text-gray-500">
            Production: {data.green_team_total_production} units
          </div>
        </div>

        {/* Blue Team */}
        <div className="bg-[#101417] p-6 rounded-2xl shadow-xl border-l-4 border-blue-400 relative">
          <h3 className="text-lg font-bold text-blue-300 flex items-center gap-2">🤖 Blue Team (MAS)</h3>
          <h2 className="text-3xl font-extrabold mt-2 text-white">${data.blue_team_profit.toLocaleString()}</h2>
          <p className="text-sm text-red-400">${data.blue_team_profit_this_turn.toFixed(2)} this turn</p>
          <ul className="mt-4 space-y-1 text-sm text-gray-200">
            <li>🥫 Inventory: {data.blue_team_inventory} units</li>
            <li>💰 Price: ${data.blue_team_price}</li>
            <li>🎯 Demand: {data.blue_team_projected_demand.toFixed(0)}</li>
            <li>📦 Sales: {data.blue_team_total_sales}</li>
          </ul>
          <div className="absolute bottom-3 right-4 text-xs text-gray-500">
            Production: {data.blue_team_total_production} units
          </div>
        </div>
      </div>
    </div>
  );
}
