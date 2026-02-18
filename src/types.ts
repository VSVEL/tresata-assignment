// src/types.ts
export type Status = 'Pending' | 'In Progress' | 'Completed';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: Status;
    date: string;
}