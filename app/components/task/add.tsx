'use client';

import { useState } from 'react';

import TimeOfDaySelect from "./time-of-day-select";
import { TimeOfDayType } from '../../types/timeOfDayType';

interface InfoProps {
  onAddTask: (name: string, timeOfDay: TimeOfDayType) => void
}

export default function Add({ onAddTask }: InfoProps ) {
  const [name, setName] = useState('');
  const [timeOfDay, setTimeOfDay] = useState(TimeOfDayType.All);

  function handleSubmitForm(e) {
    e.preventDefault();
    onAddTask(name, timeOfDay);
    setName('');
    setTimeOfDay(TimeOfDayType.All);
  }
  return (
    <form className="sm:flex sm:space-x-4 max-md:space-y-1 items-center" onSubmit={ (e) => handleSubmitForm(e) }>
      <label htmlFor="task">Nouvelle tâche : </label>
      <input type="text" name="name" className="border" value={ name } onChange={ (e) => { setName(e.target.value) } }/>

      <TimeOfDaySelect value={ timeOfDay } onChange={ setTimeOfDay }/>

      <button type="submit" className="bg-teal-500 shadow-md shadow-teal-500/50 hover:bg-teal-600 active:bg-teal-700 rounded-md p-1 text-white">Ajouter</button>
    </form>
  );
}
