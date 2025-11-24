"use client"
import { Module } from "@/types";
import { Button } from "@/components/ui/button";

interface Props { modules:Module[], removeModule:(id:string)=>void }

export const ModuleList = ({modules,removeModule}:Props) => {
  return (
    <div className="space-y-1 max-h-60 overflow-auto">
      {modules.map(m=>(
        <div key={m.id} className="flex justify-between items-center p-2 border rounded">
          <div>{m.name} ({m.examDate}) - weight {m.weight}</div>
          <Button size="sm" variant="destructive" onClick={()=>removeModule(m.id)}>X</Button>
        </div>
      ))}
    </div>
  )
}
