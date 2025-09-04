export function Header({ content, showExample }) {
  const obj = content[0];
  return (
    <div className="cv-header">
      {obj && (
        <>
          <h2>{showExample ? obj.name.placeholder : obj.name.value}</h2>
          <div>
            <p>{showExample ? obj.email.placeholder : obj.email.value}</p>
            <p>{showExample ? obj.phone.placeholder : obj.phone.value}</p>
          </div>
        </>
      )}
    </div>
  );
}
