export default function TimeOfDaySelect() {
  return (
    <div className="space-x-2">
        <label htmlFor="timeOfDay">Moment de la journée</label>
        <select name="timeOfDay">
          <option value="none">--</option>
          <option value="am">Matin</option>
          <option value="pm">Après midi</option>
        </select>
    </div>
  );
}
