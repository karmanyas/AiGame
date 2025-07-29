// components/EventLog.tsx
interface EventLogProps {
  log: string[];
}

export default function EventLog({ log }: EventLogProps) {
  return (
    <div className="bg-[#111317] text-white p-6 rounded-2xl shadow-xl border border-yellow-500 max-h-60 overflow-y-auto text-sm">
      <h2 className="text-lg font-bold text-yellow-400 mb-4">📜 Event Log</h2>
      <ul className="space-y-1 list-disc list-inside">
        {log.map((line, idx) => (
          <li key={idx} className="text-gray-300">{line}</li>
        ))}
      </ul>
    </div>
  );
}
