interface InfoProps {
  onDeleteAllTasks: () => void
};

export default function DeleteAllButton({ onDeleteAllTasks }: InfoProps) {
  return (
    <button type="submit" onClick={ onDeleteAllTasks } className="bg-rose-600 shadow-md shadow-rose-500/50 hover:bg-rose-700 active:bg-rose-800 rounded-md p-1 text-white">Tout supprimer</button>
  );
}
