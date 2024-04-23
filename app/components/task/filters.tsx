import TimeOfDaySelect from "./time-of-day-select";

export default function Filters() {
  return (
    <div className="sm:flex sm:space-x-4 max-md:space-y-1 items-center">
      <input type="text" name="filter-search" placeholder="Rechercher..." className="border"/>

      <div className="space-x-2">
        <label htmlFor="filter-completed">Complétée</label>
        <input type="checkbox" name="filter-completed" />
      </div>

      <TimeOfDaySelect />
    </div>
  );
}
