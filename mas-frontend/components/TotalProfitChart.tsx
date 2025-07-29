// components/TotalProfitChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GameState } from '../types/GameState';

interface TotalProfitChartProps {
  history: GameState['turn_history'];
}

export default function TotalProfitChart({ history }: TotalProfitChartProps) {
  const generateTicks = (min: number, max: number, interval: number) => {
    const ticks = [];
    for (let i = min; i <= max; i += interval) {
      ticks.push(i);
    }
    return ticks;
  };

  const yAxisTicks = generateTicks(70000, 150000, 5000);

  return (
    <div className="bg-[#0e0e10] text-white p-6 rounded-2xl shadow-xl border border-orange-500 mt-4">
      <h2 className="text-lg font-semibold text-orange-400 mb-4">💹 Total Profit</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="turn" stroke="#aaa" />
          <YAxis domain={[70000, 150000]} ticks={yAxisTicks} stroke="#aaa" />
          <Tooltip contentStyle={{ backgroundColor: "#1e1e20", borderColor: "#444", color: "#fff" }} />
          <Legend />
          <Line type="monotone" dataKey="blue_team_total_profit" stroke="#60a5fa" name="MAS Total Profit" />
          <Line type="monotone" dataKey="green_team_total_profit" stroke="#34d399" name="Human Total Profit" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
