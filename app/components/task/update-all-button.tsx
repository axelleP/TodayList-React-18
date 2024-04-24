interface InfoProps {
  onActivateUpdateForm: () => void
};

export default function UpdateAllButton({ onActivateUpdateForm } : InfoProps) {
  return (
    <button type="submit" onClick={ onActivateUpdateForm } className="bg-indigo-500 shadow-md shadow-indigo-400/50 hover:bg-indigo-600 active:bg-indigo-800 rounded-md mr-5 p-1 text-white">Modifier</button>
  );
}
