import type { ImportantDate } from "@/content/types";

export function DateCards({ dates }: { dates: ImportantDate[] }) {
  return (
    <ul 
      className="date-grid text-center" 
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        listStyle: "none",
        padding: 20
      }}
    >
      {dates.map((row) => (
        <li 
          key={row.id} 
          className="date-card" 
          style={{   
            width: "100%", 
            maxWidth: "350px", 
            marginBottom: "1rem",
            height:"120px",
            textAlign:"center",
            paddingTop:"30px"
          }}
        >
          <p className="date-card-when">{row.date}</p>
          <h3>{row.label}</h3>
        </li>
      ))}
    </ul>
  );
}