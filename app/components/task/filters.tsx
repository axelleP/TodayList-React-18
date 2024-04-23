import TimeOfDaySelect from "./time-of-day-select";
import { StateTaskType } from '../../types/stateTaskType';
import { getStateTaskText } from '../../lib/utils';

//typage des fonctions
type SetFilterStateTask = (value: string) => void;
type SetFilterTimeOfDay = (value: string) => void;
type SetFilterName = (value: string) => void;

interface InfoProps {
  setFilterStateTask: SetFilterStateTask,
  setFilterTimeOfDay: SetFilterTimeOfDay,
  setFilterName: SetFilterName
}

export default function Filters({ setFilterStateTask, setFilterTimeOfDay, setFilterName }: InfoProps) {
  const stateTaskTypes = Object.values(StateTaskType);

  return (
    <div className="sm:flex sm:space-x-4 max-md:space-y-1 items-center">
      <input type="text" name="filter-search" placeholder="Rechercher..." className="border" onChange={ (e) => setFilterName(e.target.value)  }/>

      <div className="space-x-2">
        <label htmlFor="stateTask">Etat</label>
        <select name="stateTask" className="border" onChange={ (e) => setFilterStateTask(e.target.value)  }>
          { stateTaskTypes.map((state) => <option key={state} value={ state }>{ getStateTaskText(state as StateTaskType) }</option>) }
        </select>
      </div>

      <TimeOfDaySelect setFilterTimeOfDay={ setFilterTimeOfDay }/>
    </div>
  );
}
