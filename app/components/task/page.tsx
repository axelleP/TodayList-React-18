'use client';

import { useState } from 'react';

import { tasksData } from '../../lib/tasks-data.js';
import { TaskType } from '../../types/taskType';
import { StateType } from '../../types/stateType';
import { TimeOfDayType } from '../../types/timeOfDayType';

import Info from './info';
import Filters from './filters';
import Add from './add';
import Table from './table';
import UpdateAllButton from './update-all-button';
import ValidateAllButton from './validate-all-button';
import DeleteAllButton from './delete-all-button';

export default function Page() {
  const [filterState, setFilterState] = useState(StateType.All);
  const [filterTimeOfDay, setFilterTimeOfDay] = useState(TimeOfDayType.All);
  const [filterName, setFilterName] = useState('');
  const [isActiveUpdateForm, setIsActiveUpdateForm] = useState(false);
  const [tasks, setTasks] = useState(tasksData as TaskType[]);
  const [tempUpdatedTasks, setTempUpdatedTasks] = useState(tasks);
  const tasksForTable = isActiveUpdateForm ? tempUpdatedTasks : tasks;

  function handleAddTask(name: string, timeOfDay: TimeOfDayType) {
    let id = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;
    let state = StateType.NotCompleted;
    let newTasks = [...tasks, { id, name, state, timeOfDay }];
    setTasks(newTasks);
    setTempUpdatedTasks(newTasks);
  }

  function handleActivateUpdateForm() {
    setIsActiveUpdateForm(!isActiveUpdateForm);
  }

  //modification des tâches temporaires
  function handleSetTempUpdatedTasks(id: number, propertyName: string, value: string | TimeOfDayType) {
    setTempUpdatedTasks((prevTempTasks) => {
      return prevTempTasks.map((task) =>
        task.id === id ? { ...task, [propertyName]: value } : task
      );
    });
  }

  //remplacement des tâches par les tâches temporaires
  function handleSubmitUpdateForm() {
    setTasks(tempUpdatedTasks);
    setIsActiveUpdateForm(!isActiveUpdateForm);
  }

  function handleDeleteTask(id: number) {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    setTempUpdatedTasks(newTasks);
  }

  return (
    <div className="self-center sm:mx-auto md:my-10 shadow-lg shadow-indigo-50 p-6 bg-white md:rounded-lg space-y-8">
      <Info tasks={ tasks }/>
      <Add isActiveUpdateForm={ isActiveUpdateForm } onAddTask={ handleAddTask }/>
      <Filters 
        filterTimeOfDay={ filterTimeOfDay }
        onSetFilterState={ setFilterState } 
        onSetFilterTimeOfDay={ setFilterTimeOfDay }
        onSetFilterName={ setFilterName }
      />
      { tasks.length 
        ? isActiveUpdateForm ? <ValidateAllButton onSubmitUpdateForm={ handleSubmitUpdateForm } /> : <UpdateAllButton onActivateUpdateForm={ handleActivateUpdateForm }/> 
        : '' 
      }
      <DeleteAllButton isActiveUpdateForm={ isActiveUpdateForm } onDeleteAllTasks={ () => setTasks([] as TaskType[]) }/>
      <Table 
        tasks={ tasksForTable } 
        filterState={ filterState }
        filterTimeOfDay={ filterTimeOfDay }
        filterName={ filterName }
        isActiveUpdateForm={ isActiveUpdateForm }
        onSetTempUpdatedTasks={ handleSetTempUpdatedTasks }
        onDeleteTask={ handleDeleteTask }
      />
    </div>
  );
}
