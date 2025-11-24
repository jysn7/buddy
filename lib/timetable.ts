import { Module, Session, Availability } from "@/types";

export function daysBetween(a:string,b:string){
  return Math.ceil((new Date(b).getTime()-new Date(a).getTime())/(1000*60*60*24));
}

export function addDays(date:string|Date,n:number){
  const d=new Date(date);
  d.setDate(d.getDate()+n);
  return d;
}

export function generateSessions(modules:Module[],avail:Availability):Session[]{
  if(modules.length===0) return [];
  const today=new Date(); today.setHours(0,0,0,0);
  const {dailyHours,sessionLength}=avail;
  const sessions:Session[]=[];

  const moduleSlots=modules.map(m=>{
    const exam=new Date(m.examDate); exam.setHours(0,0,0,0);
    const days=daysBetween(today.toISOString(),exam.toISOString());
    let totalSlots=0;
    for(let i=0;i<=days;i++){
      const d=addDays(today,i);
      const dow=(d.getDay()+6)%7; // Mon=0
      totalSlots+=Math.floor((dailyHours[dow]||0*60)/sessionLength);
    }
    const weightSum=modules.reduce((s,m)=>s+m.weight,0);
    const desiredSlots=Math.max(1,Math.round(totalSlots*(m.weight/weightSum)));
    return {...m, totalSlots, remaining:desiredSlots};
  });

  const latestExam=modules.reduce((a,b)=>new Date(a.examDate)>new Date(b.examDate)?a:b).examDate;
  const totalDays=daysBetween(today.toISOString(),latestExam);

  for(let i=0;i<=totalDays;i++){
    const day=addDays(today,i);
    const dow=(day.getDay()+6)%7;
    let slotsToday=Math.floor((dailyHours[dow]||0*60)/sessionLength);
    while(slotsToday>0){
      let bestIdx=-1,bestScore=-1;
      for(let j=0;j<moduleSlots.length;j++){
        const ms=moduleSlots[j];
        const daysLeft=Math.max(1,daysBetween(day.toISOString(),ms.examDate));
        const score=ms.remaining/daysLeft;
        if(new Date(day)<=new Date(ms.examDate)&&ms.remaining>0&&score>bestScore){
          bestScore=score; bestIdx=j;
        }
      }
      if(bestIdx===-1) break;
      sessions.push({moduleId:moduleSlots[bestIdx].id,moduleName:moduleSlots[bestIdx].name,date:day.toISOString().slice(0,10),minutes:sessionLength});
      moduleSlots[bestIdx].remaining--;
      slotsToday--;
    }
  }

  return sessions;
}
