// components/CurrentTurnDetails.tsx
import { GameState } from "../types/GameState";

interface CurrentTurnDetailsProps {
  data: GameState;
}

export default function CurrentTurnDetails({ data }: CurrentTurnDetailsProps) {
  return (
    <div className="bg-[#1a1c1f] text-white p-6 rounded-2xl shadow-xl space-y-6 border border-gray-700">
      <h2 className="text-lg font-bold text-center text-yellow-400">
        🔁 Current Turn Decisions (Turn {data.turn})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="bg-green-900/20 border border-green-400 rounded-lg p-4 space-y-1">
          <h3 className="font-semibold text-green-300">🧑‍💼 Green Team</h3>
          <p>Price: ${data.green_team_price.toFixed(2)}</p>
          <p>Production: {data.green_team_last_production_target} units</p>
          <p>Marketing: ${data.green_team_last_marketing_spend}</p>
        </div>

        <div className="bg-blue-900/20 border border-blue-400 rounded-lg p-4 space-y-1">
          <h3 className="font-semibold text-blue-300">🤖 Blue Team (MAS)</h3>
          <p>Price: ${data.blue_team_price.toFixed(2)}</p>
          <p>Production: {data.blue_team_last_production_target} units</p>
          <p>Marketing: ${data.blue_team_last_marketing_spend}</p>
        </div>
      </div>
    </div>
  );
}
