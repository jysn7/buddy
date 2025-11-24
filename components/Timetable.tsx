"use client"
import { Session } from "@/types";

interface Props { sessions:Session[] }

export const Timetable = ({sessions}:Props) => {
  const grouped:Record<string,Session[]>={};
  sessions.forEach(s=>(grouped[s.date]=grouped[s.date]||[]).push(s));
  return (
    <div className="grid gap-2">
      {Object.keys(grouped).sort().map(d=>(
        <div key={d} className="p-2 border rounded bg-white/5">
          <strong>{d}</strong>
          {grouped[d].map((s,i)=>(
            <div key={i} className="p-1 my-1 bg-black/10 rounded">{s.moduleName} — {s.minutes} min</div>
          ))}
        </div>
      ))}
    </div>
  )
}
