import { TimeOfDayType } from "../types/timeOfDayType";
import { StateTaskType } from "../types/stateTaskType";

export function getTimeOfDayText(timeOfDay: TimeOfDayType): string {
    switch (timeOfDay) {
        case TimeOfDayType.All:
            return '--';
        case TimeOfDayType.Am:
            return 'Matin';
        case TimeOfDayType.Pm:
            return 'Après midi';
        default:
            return 'Erreur';
    }
};

export function getStateTaskText(state: StateTaskType): string {
    switch (state) {
        case StateTaskType.All:
            return '--';
        case StateTaskType.Completed:
            return 'Complétée';
        case StateTaskType.NotCompleted:
            return 'Non Complétée';
        default:
            return 'Erreur';
    }
};