import { TimeOfDayType } from '../../types/timeOfDayType';
import { getTimeOfDayText } from '../../lib/utils';

interface InfoProps {
  value: TimeOfDayType,
  onChange: (value: TimeOfDayType) => void
};

export default function TimeOfDaySelect({ value, onChange }: InfoProps) {
  const timeOfDayTypes = Object.values(TimeOfDayType);

  return (
    <div className="space-x-2">
        <label htmlFor="timeOfDay">Moment de la journée</label>
        <select name="timeOfDay" className="border" value={ value } onChange={ (e) => onChange(e.target.value as TimeOfDayType)  }>
          { timeOfDayTypes.map((type) => <option key={type} value={ type }>{ getTimeOfDayText(type as TimeOfDayType) }</option>) }
        </select>
    </div>
  );
}
