import Row from './row';

export default function Table() {
  return (
    <table className="table-auto w-full border-2 border-indigo-400 p-5 text-left">
      <thead className='bg-indigo-300 '>
        <tr>
          <th className="px-1 py-1">Tâche</th>
          <th>Moment de la journée</th>
          <th>Complétée</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <Row />
        <Row />
        <Row />
      </tbody>
    </table>
  );
}
