export function Entry({ title, subtitle, dates, children }) {
  return (
    <div className="cv-entry">
      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
      <p>
        {dates[0]
          ? `${formatDate(dates[0])} - ${
              dates[1] ? formatDate(dates[1]) : "Present"
            }`
          : ""}
      </p>
      <ul>
        {children && children.split(",").map((line) => <li>{line.trim()}</li>)}
      </ul>
    </div>
  );
}

function formatDate(date) {
  const options = { month: "short", year: "numeric" };
  return new Date(date).toLocaleString("default", options);
}
