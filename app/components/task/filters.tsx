import TimeOfDaySelect from "./time-of-day-select";
import { StateTaskType } from '../../types/stateTaskType';
import { getStateTaskText } from '../../lib/utils';

interface InfoProps {
  onSetFilterStateTask: (value: string) => void,
  onSetFilterTimeOfDay: (value: string) => void,
  onSetFilterName: (value: string) => void
}

export default function Filters({ onSetFilterStateTask, onSetFilterTimeOfDay, onSetFilterName }: InfoProps) {
  const stateTaskTypes = Object.values(StateTaskType);

  return (
    <div className="sm:flex sm:space-x-4 max-md:space-y-1 items-center">
      <input type="text" name="filter-search" placeholder="Rechercher..." className="border p-1" onChange={ (e) => onSetFilterName(e.target.value)  }/>

      <div className="space-x-2">
        <label htmlFor="stateTask">Etat</label>
        <select name="stateTask" className="border" onChange={ (e) => onSetFilterStateTask(e.target.value)  }>
          { stateTaskTypes.map((state) => <option key={state} value={ state }>{ getStateTaskText(state as StateTaskType) }</option>) }
        </select>
      </div>

      <TimeOfDaySelect onSetFilterTimeOfDay={ onSetFilterTimeOfDay }/>
    </div>
  );
}
