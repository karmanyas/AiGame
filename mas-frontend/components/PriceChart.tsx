// components/PriceChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GameState } from '../types/GameState';

interface PriceChartProps {
  history: GameState['turn_history'];
}

export default function PriceChart({ history }: PriceChartProps) {
  return (
    <div className="bg-[#0e0e10] text-white p-6 rounded-2xl shadow-xl border border-blue-600 mt-4">
      <h2 className="text-lg font-semibold text-blue-400 mb-4">📈 Price Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="turn" stroke="#aaa" />
          <YAxis domain={[0, 20]} stroke="#aaa" />
          <Tooltip contentStyle={{ backgroundColor: "#1e1e20", borderColor: "#444", color: "#fff" }} />
          <Legend />
          <Line type="monotone" dataKey="blue_team_price" stroke="#60a5fa" name="MAS Price" />
          <Line type="monotone" dataKey="green_team_price" stroke="#34d399" name="Human Price" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
