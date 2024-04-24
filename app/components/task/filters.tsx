import TimeOfDaySelect from "./time-of-day-select";
import { StateType } from '../../types/stateType';
import { TimeOfDayType } from '../../types/timeOfDayType';
import { getStateText } from '../../lib/utils';

interface InfoProps {
  filterTimeOfDay : TimeOfDayType,
  onSetFilterState: (value: StateType) => void,
  onSetFilterTimeOfDay: (value: TimeOfDayType) => void,
  onSetFilterName: (value: string) => void
}

export default function Filters({ filterTimeOfDay, onSetFilterState, onSetFilterTimeOfDay, onSetFilterName }: InfoProps) {
  const stateTypes = Object.values(StateType);

  return (
    <div className="sm:flex sm:space-x-4 max-md:space-y-1 items-center">
      <input type="text" name="filter-search" placeholder="Rechercher..." className="border p-1" onChange={ (e) => onSetFilterName(e.target.value)  }/>

      <div className="space-x-2">
        <label htmlFor="state">Etat</label>
        <select name="state" className="border" onChange={ (e) => onSetFilterState(e.target.value as StateType)  }>
          { stateTypes.map((state) => <option key={state} value={ state }>{ getStateText(state as StateType) }</option>) }
        </select>
      </div>

      <TimeOfDaySelect value={ filterTimeOfDay } onChange={ onSetFilterTimeOfDay }/>
    </div>
  );
}
