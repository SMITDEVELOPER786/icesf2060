import type { ImportantDate } from "@/content/types";

export function DatesTable({ dates }: { dates: ImportantDate[] }) {
  return (
    <table className="dates">
      <caption className="kicker">Important dates</caption>
      <tbody>
        {dates.map((row) => (
          <tr key={row.id}>
            <th scope="row">{row.label}</th>
            <td>{row.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
