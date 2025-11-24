"use client"
import { Availability } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props { availability:Availability, setAvailability:(a:Availability)=>void }

export const AvailabilityForm = ({availability,setAvailability}:Props) => {
  const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  return (
    <div className="grid gap-2">
      <Label>Session Length (minutes)</Label>
      <Input type="number" min={15} max={180} value={availability.sessionLength} onChange={e=>setAvailability({...availability,sessionLength:parseInt(e.target.value)})}/>
      <Label>Daily Available Hours</Label>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d,i)=>(
          <Input key={i} type="number" min={0} max={12} placeholder={d} value={availability.dailyHours[i]} onChange={e=>{
            const newHours=[...availability.dailyHours];
            newHours[i]=parseFloat(e.target.value);
            setAvailability({...availability,dailyHours:newHours});
          }}/>
        ))}
      </div>
    </div>
  )
}
