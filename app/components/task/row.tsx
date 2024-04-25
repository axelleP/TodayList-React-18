import { TaskType } from '../../types/taskType';
import { TimeOfDayType } from '../../types/timeOfDayType';
import { getTimeOfDayText } from '../../lib/utils';

interface InfoProps {
  task: TaskType,
  isActiveUpdateForm: boolean,
  onSetTempUpdatedTasks: (id: number, propertyName: string, value: string | TimeOfDayType | boolean) => void,
  onDeleteTask: (value: number) => void
}

export default function Row({ task, isActiveUpdateForm, onSetTempUpdatedTasks, onDeleteTask }: InfoProps) {
  let timeOfDayEnum = task.timeOfDay as TimeOfDayType;
  const timeOfDayTypes = Object.values(TimeOfDayType);

  let readonlyName = task.name;
  let editableName = <input type="text" name="name" value={ task.name } onChange={ (e) => onSetTempUpdatedTasks(task.id, e.target.name, e.target.value) } className="border pl-1 w-full"/>;

  let readonlyTimeOfDay = getTimeOfDayText(timeOfDayEnum);
  let editableTimeOfDay = <select name="timeOfDay" className="border" value={ task.timeOfDay } onChange={ (e) => onSetTempUpdatedTasks(task.id, e.target.name, e.target.value) }>
    { timeOfDayTypes.map((type) => <option key={type} value={ type }>{ getTimeOfDayText(type as TimeOfDayType) }</option>) }
  </select>;

  let readonlyCompletedBtn = <input type="checkbox" name="state" checked={ task.state == 'completed' } readOnly className="cursor-not-allowed opacity-50"/>;
  let editableCompletedBtn = <input type="checkbox" name="state" checked={ task.state == 'completed' } onChange={ (e) => onSetTempUpdatedTasks(task.id, e.target.name, e.target.checked ? "completed" : "notCompleted") }/>;

  let classNameDeleteBtn = "bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-sm text-white px-2";
  if (isActiveUpdateForm) {
    classNameDeleteBtn += " cursor-not-allowed opacity-50";
  }
  let readonlyDeleteBtn = <button type="submit" className={ classNameDeleteBtn }>x</button>;
  let editableDeletedBtn = <button type="submit" className={ classNameDeleteBtn } onClick={ (e) => onDeleteTask(task.id) }>x</button>;

  return (
    <tr className="bg-slate-100">
      <td className="px-1 py-1">{ isActiveUpdateForm ? editableName : readonlyName }</td>
      <td className="text-center">{ isActiveUpdateForm ? editableTimeOfDay : readonlyTimeOfDay }</td>
      <td className="text-center">{ isActiveUpdateForm ? editableCompletedBtn : readonlyCompletedBtn }</td>
      <td className="text-center">{ isActiveUpdateForm ? readonlyDeleteBtn : editableDeletedBtn }</td>
    </tr>
  );
}
