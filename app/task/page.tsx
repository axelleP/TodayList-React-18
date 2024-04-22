import Info from './info';
import Filters from './filters';
import Add from './add';
import Table from './table';
import DeleteAll from './delete-all';

export default function Page() {
  return (
    <div className="self-center sm:mx-auto md:my-10 p-6 bg-indigo-100 md:rounded-lg space-y-8">
      <Info />
      <Add />
      <Filters />
      <DeleteAll />
      <Table />
    </div>
  );
}
