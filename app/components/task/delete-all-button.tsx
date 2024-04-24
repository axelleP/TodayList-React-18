interface InfoProps {
  isActiveUpdateForm: boolean,
  onDeleteAllTasks: () => void
};

export default function DeleteAllButton({ isActiveUpdateForm, onDeleteAllTasks }: InfoProps) {
  let className = "bg-rose-600 shadow-md shadow-rose-500/50 hover:bg-rose-700 active:bg-rose-800 rounded-md p-1 text-white";
  if (isActiveUpdateForm) {
    className += " cursor-not-allowed opacity-50";
  }

  return (
    <button type="submit" onClick={ !isActiveUpdateForm ? onDeleteAllTasks : () => {} } className={ className }>Tout supprimer</button>
  );
}
