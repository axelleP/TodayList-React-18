import { TimeOfDayType } from "./timeOfDayType";
import { StateTaskType } from "./stateTaskType";

export interface TaskType {
    id: number;
    name: string;
    timeOfDay: TimeOfDayType;
    stateTask: StateTaskType;
}