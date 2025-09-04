export function Header({ content }) {
  const obj = content[0];
  return (
    <div className="cv-header">
      <h2>{obj.name.value}</h2>
      <div>
        <p>{obj.email.value}</p>
        <p>{obj.phone.value}</p>
      </div>
    </div>
  );
}
