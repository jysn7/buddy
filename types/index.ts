export interface Module {
    id: string
    name: string
    examDate: string // ISO
    weight: number
    desiredHours?: number
  }
  
  export interface Availability {
    dailyHours: number[] // Mon=0..Sun=6
    sessionLength: number
  }
  
  export interface Session {
    moduleId: string
    moduleName: string
    date: string // ISO
    minutes: number
  }
  