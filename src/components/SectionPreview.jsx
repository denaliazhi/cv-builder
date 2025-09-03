export function SectionPreview({ title, children }) {
  return (
    <>
      <hr />
      <div className="cv-section">
        <h3>{title}</h3>
        {children}
      </div>
    </>
  );
}
