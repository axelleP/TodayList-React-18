import { TaskType } from '../../types/taskType';
import { TimeOfDayType } from '../../types/timeOfDayType';
import Row from './row';

interface InfoProps {
  tasks: TaskType[];//tableau de tâches
  isActiveUpdateForm: boolean,
  isCheckedSelectAllTasks: boolean,
  selectedTasksIds: number[],
  onClickCheckboxSelectTask: (id: number, checked: boolean) => void,
  onClickCheckboxSelectAllTasks: () => void,
  onSetTempUpdatedTasks: (id: number, propertyName: string, value: string | TimeOfDayType | boolean) => void,
  onDeleteTask: (value: number) => void
}

export default function Table({ tasks, isActiveUpdateForm, isCheckedSelectAllTasks, selectedTasksIds, onClickCheckboxSelectTask, onClickCheckboxSelectAllTasks, onSetTempUpdatedTasks, onDeleteTask }: InfoProps) {
  return (
    <table className="columns-3 table-auto w-full p-5 text-left">
      <thead className="bg-slate-300 text-center">
        <tr>
          { !isActiveUpdateForm ? <th className="px-1 py-1"><input type="checkbox" name="selectAllTask" checked={ isCheckedSelectAllTasks } onChange={ onClickCheckboxSelectAllTasks }/></th> : "" }
          <th className="px-1 py-1 w-5/12">Tâche</th>
          <th className="px-1 py-1">Moment de la journée</th>
          <th className="px-1 py-1">Complétée</th>
          <th className="px-1 py-1">Supprimer</th>
        </tr>
      </thead>
      <tbody>{ tasks.map((task) => 
        <Row 
          key={ task.id } 
          task={ task } 
          isActiveUpdateForm={ isActiveUpdateForm } 
          selectedTasksIds={ selectedTasksIds } 
          onClickCheckboxSelectTask={ onClickCheckboxSelectTask } 
          onSetTempUpdatedTasks={ onSetTempUpdatedTasks } 
          onDeleteTask={ onDeleteTask }/>
        )}
      </tbody>
    </table>
  );
}
