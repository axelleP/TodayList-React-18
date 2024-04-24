import { TaskType } from '../../types/taskType';
import Row from './row';

interface InfoProps {
  tasks: TaskType[];//tableau de tâches
  filterStateTask: string,
  filterTimeOfDay : string,
  filterName : string,
  onDeleteTask: (value: number) => void
}

export default function Table({ tasks, filterStateTask, filterTimeOfDay, filterName, onDeleteTask }: InfoProps) {
  let tasksFiltered = [] as TaskType[];

  tasks.forEach((task) => {
    if (!task.name.toLowerCase().includes(filterName.toLowerCase())) {
      return;
    }
    if (filterStateTask != 'all' && task.stateTask != filterStateTask) {
      return;
    }
    if (filterTimeOfDay != 'all' && task.timeOfDay != filterTimeOfDay) {
      return;
    }
    tasksFiltered.push(task);
  });

  return (
    <table className="columns-3 table-auto w-full p-5 text-left">
      <thead className="bg-slate-300 text-center">
        <tr>
          <th className="px-1 py-1 w-2/4">Tâche</th>
          <th className="px-1 py-1">Moment de la journée</th>
          <th className="px-1 py-1">Complétée</th>
          <th className="px-1 py-1">Supprimer</th>
        </tr>
      </thead>
      <tbody>{ tasksFiltered.map((task) => <Row key={ task.id } task={ task } onDeleteTask={ onDeleteTask }/>) }
      </tbody>
    </table>
  );
}
