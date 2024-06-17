export interface IUserIdentification {
  id: string;
}

export interface IHistorySchedule {
    date: string, 
    time: string
} 

export interface IUserInfo {
  id: string,
  name: string,
  clientSince: string,
  appointmentHistory: Array<IHistorySchedule>,
  loyaltyCard: {
    totalCuts: number,
    cutsNeeded: number,
    cutsRemaining: number
  }
}
