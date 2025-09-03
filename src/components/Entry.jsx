export function Entry({ title, subtitle, dates, children }) {
  return (
    <div className="cv-entry">
      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
      <p>
        {/* TO DO: only shows short month, missing year */}
        {dates[0]
          ? `${formatDate(dates[0])} - ${
              dates[1] ? formatDate(dates[1]) : "Present"
            }`
          : ""}
      </p>
      {children}
    </div>
  );
}

function formatDate(date) {
  return new Date(date).toLocaleString("default", {
    month: "short",
  });
}
