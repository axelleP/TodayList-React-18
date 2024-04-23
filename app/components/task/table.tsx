import { Task } from '../../types/taskType';
import Row from './row';

interface InfoProps {
  tasks: Task[];//tableau de tâches
}

export default function Table({ tasks }: InfoProps) {
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
      <tbody>{ tasks.map((task) => <Row key={ task.id } task={ task }/>) }
      </tbody>
    </table>
  );
}
