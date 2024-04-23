import { TimeOfDay } from '../../types/timeOfDayTypes';
import { getTimeOfDayText } from '../../lib/utils';

export default function TimeOfDaySelect() {
  const timeOfDayTypes = Object.values(TimeOfDay);

  return (
    <div className="space-x-2">
        <label htmlFor="timeOfDay">Moment de la journée</label>
        <select name="timeOfDay" className="border">
          { timeOfDayTypes.map((type) => <option key={type} value={ type }>{ getTimeOfDayText(type as TimeOfDay) }</option>) }
        </select>
    </div>
  );
}
