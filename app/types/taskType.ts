import { TimeOfDay } from "../types/timeOfDayTypes";

export interface Task {
    id: number;
    name: string;
    timeOfDay: string | TimeOfDay;
    isCompleted: boolean;
}