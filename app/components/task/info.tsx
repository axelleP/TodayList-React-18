import { Task } from '../../types/taskType';

interface InfoProps {
  tasks: Task[];//tableau de tâches
}

export default function Info({ tasks }: InfoProps) {
  const nbTasks = Object.keys(tasks).length;
  let nbTasksCompleted = 0;

  for (let task of Object.values(tasks)) {
    if (task.isCompleted) {
      nbTasksCompleted++;
    }
  };

  let percentTasksCompleted = (nbTasksCompleted / nbTasks) * 100;
  
  return (
    <div className="flex space-x-10">
      <div>Total tâche(s) : { nbTasks } </div>
      <div>{ Math.round(percentTasksCompleted) } % de tâches complétées</div>
    </div>
  );
}
