export interface Deal {
  id: string;
  dealName: string;
  dealStage: string;
  closeDate: string;
  dealOwner: string;
  amount: number;
}

export type DealStage =
  | 'Presentation Scheduled'
  | 'Qualified to Buy'
  | 'Contract Sent'
  | 'Closed Won'
  | 'Closed Lost'
  | 'Appointment Scheduled'
  | 'Decision Maker Bought In';