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
import DeleteAll from './delete-all';

export default function Page() {
  const [filterState, setFilterState] = useState(StateType.All);
  const [filterTimeOfDay, setFilterTimeOfDay] = useState(TimeOfDayType.All);
  const [filterName, setFilterName] = useState('');
  const [tasks, setTasks] = useState(tasksData as TaskType[]);

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleAddTask(name: string, timeOfDay: TimeOfDayType) {
    let id = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;
    let state = StateType.NotCompleted;
    setTasks([...tasks, { id, name, state, timeOfDay }]);
  }

  return (
    <div className="self-center sm:mx-auto md:my-10 shadow-lg shadow-indigo-50 p-6 bg-white md:rounded-lg space-y-8">
      <Info tasks={ tasks }/>
      <Add onAddTask={ handleAddTask }/>
      <Filters 
        filterTimeOfDay={ filterTimeOfDay }
        onSetFilterState={ setFilterState } 
        onSetFilterTimeOfDay={ setFilterTimeOfDay }
        onSetFilterName={ setFilterName }
      />
      <DeleteAll onDeleteAllTasks={ () => setTasks([] as TaskType[]) }/>
      <Table 
        tasks={ tasks } 
        filterState={ filterState }
        filterTimeOfDay={ filterTimeOfDay }
        filterName={ filterName }
        onDeleteTask={ handleDeleteTask }
      />
    </div>
  );
}
