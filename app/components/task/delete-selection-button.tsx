interface InfoProps {
  onDeleteSelectedTasks: () => void
};

export default function DeleteSelectionButton({ onDeleteSelectedTasks }: InfoProps) {
  return (
    <button type="submit" onClick={ onDeleteSelectedTasks } className="bg-rose-600 shadow-md shadow-rose-500/50 hover:bg-rose-700 active:bg-rose-800 rounded-md mr-5 p-1 text-white">Supprimer la sélection</button>
  );
}
