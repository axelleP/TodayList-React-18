interface InfoProps {
  onSubmitUpdateForm: () => void
};

export default function ValidateAllButton({ onSubmitUpdateForm } : InfoProps) {
  return (
    <button type="submit" onClick={ onSubmitUpdateForm } className="bg-teal-500 shadow-md shadow-teal-400/50 hover:bg-teal-600 active:bg-teal-800 rounded-md mr-5 p-1 text-white">Valider</button>
  );
}
