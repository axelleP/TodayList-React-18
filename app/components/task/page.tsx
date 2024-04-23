import { tasksData } from '../../lib/tasks-data.js';

import Info from './info';
import Filters from './filters';
import Add from './add';
import Table from './table';
import DeleteAll from './delete-all';

export default function Page() {
  return (
    <div className="self-center sm:mx-auto md:my-10 shadow-lg shadow-indigo-50 p-6 bg-white md:rounded-lg space-y-8">
      <Info tasks={ tasksData }/>
      <Add />
      <Filters />
      <DeleteAll />
      <Table tasks={ tasksData }/>
    </div>
  );
}
