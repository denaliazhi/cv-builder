export function Header({ content }) {
  const obj = content[0];
  return (
    <div className="cv-header">
      {Object.entries(obj).map(([field, attribute]) => {
        if (field === "name") {
          return <h2>{attribute.value}</h2>;
        } else {
          return <p>{attribute.value}</p>;
        }
      })}
    </div>
  );
}
