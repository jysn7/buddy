"use client"
import { useState,useEffect } from "react";
import { ModuleForm } from "@/components/ModuleForm";
import { ModuleList } from "@/components/ModuleList";
import { AvailabilityForm } from "@/components/AvailabilityForm";
import { Timetable } from "@/components/Timetable";
import { Module,Availability,Session } from "@/types";
import { generateSessions } from "@/lib/timetable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

export default function HomePage(){
  const [modules,setModules]=useState<Module[]>([]);
  const [availability,setAvailability]=useState<Availability>({dailyHours:Array(7).fill(0),sessionLength:60});
  const [sessions,setSessions]=useState<Session[]>([]);
  const [showPopup,setShowPopup]=useState(false);

  useEffect(()=>{
    const firstTime=!localStorage.getItem('seenPopup');
    if(firstTime){
      setShowPopup(true);
      localStorage.setItem('seenPopup','true');
    }
  },[]);

  const addModule=(m:Module)=>setModules(prev=>[...prev,m]);
  const removeModule=(id:string)=>setModules(prev=>prev.filter(m=>m.id!==id));
  const generate=()=>setSessions(generateSessions(modules,availability));
  const save=()=>{
    localStorage.setItem('modules',JSON.stringify(modules));
    localStorage.setItem('availability',JSON.stringify(availability));
  }
  const load=()=>{
    const m=JSON.parse(localStorage.getItem('modules')||'[]');
    const a=JSON.parse(localStorage.getItem('availability')||'{}');
    setModules(m); setAvailability(a);
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-4">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Study Timetable Generator</h1>
        <p className="text-white/70">Plan your study sessions, track your progress, and never miss an exam!</p>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6">
        <div className="space-y-6 bg-white/5 p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold">Add Modules</h2>
          <ModuleForm addModule={addModule}/>
          <ModuleList modules={modules} removeModule={removeModule}/>
          <h2 className="text-xl font-semibold mt-4">Set Availability</h2>
          <AvailabilityForm availability={availability} setAvailability={setAvailability}/>
          <div className="flex gap-2 mt-4">
            <Button onClick={generate}>Generate Timetable</Button>
            <Button onClick={save}>Save</Button>
            <Button onClick={load}>Load</Button>
            <Button onClick={()=>window.print()}>Print</Button>
          </div>
        </div>
        <div className="space-y-4 bg-white/5 p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold">Generated Timetable</h2>
          {sessions.length===0?<p className="text-white/60">No sessions yet. Add modules, set availability, and click "Generate Timetable".</p>:
          <Timetable sessions={sessions}/>}
        </div>
      </div>

      {/* Popup Instructions */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How to Use</DialogTitle>
            <DialogDescription>
              <ul className="list-disc ml-4">
                <li>Add your modules with exam dates and priority.</li>
                <li>Set your daily available hours and session length.</li>
                <li>Click "Generate Timetable" to see your study plan.</li>
                <li>You can save/load your data and print your timetable.</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={()=>setShowPopup(false)}>Got it!</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
