import { TimeOfDayType } from "./timeOfDayType";
import { StateType } from "./stateType";

export interface TaskType {
    id: number;
    name: string;
    timeOfDay: TimeOfDayType;
    state: StateType;
}