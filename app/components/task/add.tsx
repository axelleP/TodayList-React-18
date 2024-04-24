'use client';

import { useState } from 'react';

import { TimeOfDayType } from '../../types/timeOfDayType';
import { getTimeOfDayText } from '../../lib/utils';

interface InfoProps {
  isActiveUpdateForm: boolean,
  onAddTask: (name: string, timeOfDay: TimeOfDayType) => void
}

export default function Add({ isActiveUpdateForm, onAddTask }: InfoProps ) {
  const [name, setName] = useState('');
  const [timeOfDay, setTimeOfDay] = useState(TimeOfDayType.All);
  const timeOfDayTypes = Object.values(TimeOfDayType);
  let className = "bg-teal-500 shadow-md shadow-teal-500/50 hover:bg-teal-600 active:bg-teal-700 rounded-md p-1 text-white";
  if (isActiveUpdateForm) {
    className += " cursor-not-allowed opacity-50";
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    if (!isActiveUpdateForm) {
      onAddTask(name, timeOfDay);
      setName('');
      setTimeOfDay(TimeOfDayType.All);
    }
  }
  return (
    <form className="sm:flex sm:space-x-4 max-md:space-y-1 items-center" onSubmit={(e) => handleSubmitForm(e) }>
      <label htmlFor="task">Nouvelle tâche : </label>
      <input type="text" name="name" value={ name } onChange={ (e) => { setName(e.target.value) } } className="border"/>

      <div className="space-x-2">
        <label htmlFor="timeOfDay">Moment de la journée</label>
        <select name="timeOfDay" className="border" value={ timeOfDay } onChange={ (e) => setTimeOfDay(e.target.value as TimeOfDayType)  }>
          { timeOfDayTypes.map((type) => <option key={type} value={ type }>{ getTimeOfDayText(type as TimeOfDayType) }</option>) }
        </select>
      </div>

      <button type="submit" className={ className }>Ajouter</button>
    </form>
  );
}
