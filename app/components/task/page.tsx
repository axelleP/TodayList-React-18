'use client';

import { useState } from 'react';

import { TaskType } from '../../types/taskType';
import { StateType } from '../../types/stateType';
import { TimeOfDayType } from '../../types/timeOfDayType';

import useTaskManager from './lib/useTaskManager';

import Info from './info';
import Filters from './filters';
import Add from './add';
import Table from './table';
import UpdateAllButton from './update-all-button';
import ValidateAllButton from './validate-all-button';
import CancelButton from './cancel-button';
import DeleteSelectionButton from './delete-selection-button';
import DeleteAllButton from './delete-all-button';

interface InfoProps {
  initTasks: TaskType[];//tableau de tâches
}

export default function Page({ initTasks } : InfoProps) {
  let taskManager = useTaskManager({initTasks});
  const {
    tasks,
    tasksForTable,
    selectedTasksIds,
    isActiveUpdateForm,
    isCheckedSelectAllTasks,
    handleAddTask,
    handleActivateUpdateForm,
    handleClickCheckboxSelectAllTasks,
    handleClickCheckboxSelectTask,
    handleSetTempUpdatedTasks,
    handleSubmitUpdateForm,
    handleDeleteSelectedTasks,
    handleDeleteAllTasks,
    handleDeleteTask,
  } = taskManager;

  const [filterState, setFilterState] = useState(StateType.All);
  const [filterTimeOfDay, setFilterTimeOfDay] = useState(TimeOfDayType.All);
  const [filterName, setFilterName] = useState('');

  return (
    <div className="self-center sm:mx-auto md:my-10 shadow-lg shadow-indigo-50 p-6 bg-white md:rounded-lg space-y-8">
      <Info tasks={ tasks }/>
      <Add isActiveUpdateForm={ isActiveUpdateForm } onAddTask={ handleAddTask }/>
      <Filters 
        onSetFilterState={ setFilterState } 
        onSetFilterTimeOfDay={ setFilterTimeOfDay }
        onSetFilterName={ setFilterName }
      />

      { tasks.length 
        ? isActiveUpdateForm ? <ValidateAllButton onSubmitUpdateForm={ handleSubmitUpdateForm } /> : <UpdateAllButton onActivateUpdateForm={ handleActivateUpdateForm }/> 
        : '' 
      }

      { tasks.length && !isActiveUpdateForm ? <DeleteSelectionButton onDeleteSelectedTasks={ handleDeleteSelectedTasks }/> : "" }
      
      { tasks.length 
        ? isActiveUpdateForm ? <CancelButton onActivateUpdateForm={ handleActivateUpdateForm }/> : <DeleteAllButton onDeleteAllTasks={ () => handleDeleteAllTasks() }/>
        : ''
      }

      <Table 
        tasks={ tasksForTable } 
        filterState={ filterState }
        filterTimeOfDay={ filterTimeOfDay }
        filterName={ filterName }
        isActiveUpdateForm={ isActiveUpdateForm }
        isCheckedSelectAllTasks={ isCheckedSelectAllTasks }
        selectedTasksIds={ selectedTasksIds }
        onClickCheckboxSelectTask={ handleClickCheckboxSelectTask }
        onClickCheckboxSelectAllTasks={ handleClickCheckboxSelectAllTasks }
        onSetTempUpdatedTasks={ handleSetTempUpdatedTasks }
        onDeleteTask={ handleDeleteTask }
      />
    </div>
  );
}
