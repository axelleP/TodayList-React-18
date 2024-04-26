import { StateType } from '../../types/stateType';
import { TimeOfDayType } from '../../types/timeOfDayType';
import { getTimeOfDayText } from '../../lib/utils';
import { getStateText } from '../../lib/utils';

interface InfoProps {
  filterState: StateType,
  filterTimeOfDay: TimeOfDayType,
  filterName: string,
  onSetFilterState: (value: StateType) => void,
  onSetFilterTimeOfDay: (value: TimeOfDayType) => void,
  onSetFilterName: (value: string) => void
}

export default function Filters({ filterState, filterTimeOfDay, filterName, onSetFilterState, onSetFilterTimeOfDay, onSetFilterName }: InfoProps) {
  const stateTypes = Object.values(StateType);
  const timeOfDayTypes = Object.values(TimeOfDayType);

  return (
    <div className="sm:flex sm:space-x-4 max-md:space-y-1 items-center">
      <input type="text" name="filter-search" placeholder="Rechercher..." className={ `border pl-1 ${ filterName ? 'border-sky-500 ring-1 ring-sky-500 focus:outline-none' : '' }` } onChange={ (e) => onSetFilterName(e.target.value) }/>

      <div className="space-x-2">
        <label htmlFor="state">Etat</label>
        <select name="state" className={ `border pl-1 ${ filterState != 'all' ? 'border-sky-500 ring-1 ring-sky-500 focus:outline-none' : '' }` } onChange={ (e) => onSetFilterState(e.target.value as StateType)  }>
          { stateTypes.map((state) => <option key={state} value={ state }>{ getStateText(state as StateType) }</option>) }
        </select>
      </div>

      <div className="space-x-2">
        <label htmlFor="timeOfDay">Moment de la journée</label>
        <select name="timeOfDay" className={ `border pl-1 ${ filterTimeOfDay != 'all' ? 'border-sky-500 ring-1 ring-sky-500 focus:outline-none' : '' }` } onChange={ (e) => onSetFilterTimeOfDay(e.target.value as TimeOfDayType)  }>
          { timeOfDayTypes.map((type) => <option key={type} value={ type }>{ getTimeOfDayText(type as TimeOfDayType) }</option>) }
        </select>
      </div>
    </div>
  );
}
