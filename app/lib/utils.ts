import { TimeOfDay } from "../types/timeOfDayTypes";

export function getTimeOfDayText(timeOfDay: TimeOfDay): string {
    switch (timeOfDay) {
        case TimeOfDay.All:
            return '--';
        case TimeOfDay.Am:
            return 'Matin';
        case TimeOfDay.Pm:
            return 'Après midi';
        default:
            return 'Erreur';
    }
};