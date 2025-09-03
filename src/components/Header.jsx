export function Header({ content }) {
  const obj = content[0];

  console.log(obj);
  return (
    <div className="cv-header">
      {Object.entries(obj).map(([field, attribute]) => {
        if (field === "name") {
          return <h2>{attribute.value}</h2>;
        } else if (field !== "id") {
          return <p>{attribute.value}</p>;
        }
      })}
    </div>
  );
}
