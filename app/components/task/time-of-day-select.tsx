import { TimeOfDayType } from '../../types/timeOfDayType';
import { getTimeOfDayText } from '../../lib/utils';

interface InfoProps {
  onSetFilterTimeOfDay?: (value:string) => void
};

export default function TimeOfDaySelect({ onSetFilterTimeOfDay = () => {} }: InfoProps) {
  const timeOfDayTypes = Object.values(TimeOfDayType);

  return (
    <div className="space-x-2">
        <label htmlFor="timeOfDay">Moment de la journée</label>
        <select name="timeOfDay" className="border" onChange={ (e) => onSetFilterTimeOfDay(e.target.value)  }>
          { timeOfDayTypes.map((type) => <option key={type} value={ type }>{ getTimeOfDayText(type as TimeOfDayType) }</option>) }
        </select>
    </div>
  );
}
