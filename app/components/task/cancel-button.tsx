interface InfoProps {
  onActivateUpdateForm: () => void
};

export default function CancelButton({ onActivateUpdateForm }: InfoProps) {
  return (
    <button type="submit" onClick={ onActivateUpdateForm } className="bg-rose-600 shadow-md shadow-rose-500/50 hover:bg-rose-700 active:bg-rose-800 rounded-md p-1 text-white">Annuler</button>
  );
}
