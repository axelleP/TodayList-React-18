import { TimeOfDayType } from "../types/timeOfDayType";
import { StateType } from "../types/stateType";

export function getTimeOfDayText(timeOfDay: TimeOfDayType): string {
    switch (timeOfDay) {
        case TimeOfDayType.All:
            return '--';
        case TimeOfDayType.Am:
            return 'Matin';
        case TimeOfDayType.Pm:
            return 'Après midi';
        case TimeOfDayType.Evening:
            return 'Soir';
        default:
            return 'Erreur';
    }
};

export function getStateText(state: StateType): string {
    switch (state) {
        case StateType.All:
            return '--';
        case StateType.Completed:
            return 'Complétée';
        case StateType.NotCompleted:
            return 'Non Complétée';
        default:
            return 'Erreur';
    }
};