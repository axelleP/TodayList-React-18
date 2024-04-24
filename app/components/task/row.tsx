import { TaskType } from '../../types/taskType';
import { TimeOfDayType } from '../../types/timeOfDayType';
import { getTimeOfDayText } from '../../lib/utils';

interface InfoProps {
  task: TaskType,
  onDeleteTask: (value: number) => void
}

export default function Row({ task, onDeleteTask }: InfoProps) {
  let timeOfDayEnum = task.timeOfDay as TimeOfDayType;

  return (
    <tr className="bg-slate-100">
      <td className="px-1 py-1">{ task.name }</td>
      <td className="text-center">{ getTimeOfDayText(timeOfDayEnum) }</td>
      <td className="text-center"><input type="checkbox" name="action-completed" checked={ task.stateTask == 'completed' } readOnly/></td>
      <td className="text-center"><button type="submit" className="bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-sm text-white px-2" onClick={ (e) => onDeleteTask(task.id) }>x</button></td>
    </tr>
  );
}
