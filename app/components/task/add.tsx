import TimeOfDaySelect from "./time-of-day-select";

export default function Add() {
  return (
    <div className="sm:flex sm:space-x-4 max-md:space-y-1 items-center">
      <label htmlFor="task">Nouvelle tâche : </label>
      <input type="text" name="task" className="border"/>

      <TimeOfDaySelect />

      <button type="submit" className="bg-teal-500 shadow-md shadow-teal-500/50 hover:bg-teal-600 active:bg-teal-700 rounded-md p-1 text-white">Ajouter</button>
    </div>
  );
}
