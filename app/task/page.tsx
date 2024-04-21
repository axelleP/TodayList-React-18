import Info from './info';
import Filters from './filters';
import Add from './add';
import Table from './table';

export default function Page() {
  return (
    <div>
      Composant page
      <Info />
      <Filters />
      <Add />
      <Table />
    </div>
  );
}
