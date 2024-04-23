import { TimeOfDayType } from '../../types/timeOfDayType';
import { getTimeOfDayText } from '../../lib/utils';

type SetFilterTimeOfDay = (value:string) => void;

interface InfoProps {
  setFilterTimeOfDay?: SetFilterTimeOfDay
};

export default function TimeOfDaySelect({ setFilterTimeOfDay = () => {} }: InfoProps) {
  const timeOfDayTypes = Object.values(TimeOfDayType);

  return (
    <div className="space-x-2">
        <label htmlFor="timeOfDay">Moment de la journée</label>
        <select name="timeOfDay" className="border" onChange={ (e) => setFilterTimeOfDay(e.target.value)  }>
          { timeOfDayTypes.map((type) => <option key={type} value={ type }>{ getTimeOfDayText(type as TimeOfDayType) }</option>) }
        </select>
    </div>
  );
}
