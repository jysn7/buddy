"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Module } from "@/types";

interface Props { addModule: (m:Module)=>void }

export const ModuleForm = ({addModule}:Props) => {
  const [name,setName]=useState('');
  const [exam,setExam]=useState('');
  const [weight,setWeight]=useState(1);

  const handleAdd=()=>{
    if(!name||!exam) return;
    addModule({id:'m'+Date.now(),name,examDate:exam,weight});
    setName(''); setExam(''); setWeight(1);
  }

  return (
    <div className="grid gap-2">
      <Label>Module Name</Label>
      <Input placeholder="e.g. Calculus" value={name} onChange={e=>setName(e.target.value)} />
      <Label>Exam Date</Label>
      <Input type="date" value={exam} onChange={e=>setExam(e.target.value)} />
      <Label>Priority (1-low to 5-high)</Label>
      <Input type="number" min={1} max={5} value={weight} onChange={e=>setWeight(parseInt(e.target.value))}/>
      <Button onClick={handleAdd}>Add Module</Button>
    </div>
  )
}
