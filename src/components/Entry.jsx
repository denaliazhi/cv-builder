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
      <p>{children}</p>
    </div>
  );
}

function formatDate(date) {
  const options = { month: "short", year: "numeric" };
  return new Date(date).toLocaleString("default", options);
}
