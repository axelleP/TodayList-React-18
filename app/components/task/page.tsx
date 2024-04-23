'use client';

import { useState } from 'react';

import { tasksData } from '../../lib/tasks-data.js';
import { TaskType } from '../../types/taskType';

import Info from './info';
import Filters from './filters';
import Add from './add';
import Table from './table';
import DeleteAll from './delete-all';

export default function Page() {
  const [filterStateTask, setFilterStateTask] = useState('all');
  const [filterTimeOfDay, setFilterTimeOfDay] = useState('all');
  const [filterName, setFilterName] = useState('');

  let tasks = tasksData as TaskType[];

  return (
    <div className="self-center sm:mx-auto md:my-10 shadow-lg shadow-indigo-50 p-6 bg-white md:rounded-lg space-y-8">
      <Info tasks={ tasks }/>
      <Add />
      <Filters 
        setFilterStateTask={ setFilterStateTask } 
        setFilterTimeOfDay={ setFilterTimeOfDay }
        setFilterName={ setFilterName }
      />
      <DeleteAll />
      <Table 
        tasks={ tasks } 
        filterStateTask={ filterStateTask }
        filterTimeOfDay={ filterTimeOfDay }
        filterName={ filterName }
      />
    </div>
  );
}
