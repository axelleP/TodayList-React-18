import TimeOfDaySelect from "./time-of-day-select";

export default function Add() {
  return (
    <div className="sm:flex sm:space-x-4 max-md:space-y-1 items-center">
      <label htmlFor="task">Nouvelle tâche : </label>
      <input type="text" name="task" />

      <TimeOfDaySelect />

      <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 rounded-md p-1 text-white">Ajouter</button>
    </div>
  );
}
