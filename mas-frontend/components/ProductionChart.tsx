// components/ProductionChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GameState } from '../types/GameState';

interface ProductionChartProps {
  history: GameState['turn_history'];
}

export default function ProductionChart({ history }: ProductionChartProps) {
  return (
    <div className="bg-[#0e0e10] text-white p-6 rounded-2xl shadow-xl border border-purple-600 mt-4">
      <h2 className="text-lg font-semibold text-purple-400 mb-4">🏭 Production Targets</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="turn" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip contentStyle={{ backgroundColor: "#1e1e20", borderColor: "#444", color: "#fff" }} />
          <Legend />
          <Line type="monotone" dataKey="blue_team_production_target" stroke="#a855f7" strokeWidth={3} dot={{ r: 2 }} name="MAS Production" />
          <Line type="monotone" dataKey="green_team_production_target" stroke="#34d399" strokeWidth={2} dot={{ r: 2 }} name="Human Production" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
