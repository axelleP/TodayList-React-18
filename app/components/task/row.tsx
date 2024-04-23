import { Task } from '../../types/taskType';
import { TimeOfDay } from '../../types/timeOfDayTypes';
import { getTimeOfDayText } from '../../lib/utils';

interface InfoProps {
  key: Number,
  task: Task;
}

export default function Row({ key, task }: InfoProps) {
  let timeOfDayEnum = task.timeOfDay as TimeOfDay;
  
  return (
    <tr className="bg-slate-100">
      <td className="px-1 py-1">{ task.name }</td>
      <td className="text-center">{ getTimeOfDayText(timeOfDayEnum) }</td>
      <td className="text-center"><input type="checkbox" name="action-completed" checked={ task.isCompleted } /></td>
      <td className="text-center"><button type="submit" className="bg-rose-600 hover:bg-rose-700 rounded-sm text-white px-2">x</button></td>
    </tr>
  );
}
