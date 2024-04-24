import { TaskType } from '../../types/taskType';

interface InfoProps {
  tasks: TaskType[];//tableau de tâches
}

export default function Info({ tasks }: InfoProps) {
  let nbTasks = 0;
  let nbTasksCompleted = 0;

  for (let task of Object.values(tasks)) {
    nbTasks++;
    if (task.state == 'completed') {
      nbTasksCompleted++;
    }
  };

  let percentTasksCompleted = (nbTasksCompleted / nbTasks) * 100;
  
  return (
    <div className="flex space-x-10">
      <div>Total tâche(s) : { nbTasks } </div>
      <div>{ Math.floor(percentTasksCompleted) } % de tâches complétées</div>
    </div>
  );
}
