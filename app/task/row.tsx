export default function Row() {
  return (
    <tr className="bg-indigo-100">
      <td className="px-1 py-1">Jardiner</td>
      <td>Matin</td>
      <td><input type="checkbox" name="action-completed"/></td>
      <td><button type="submit">X</button></td>
    </tr>
  );
}
