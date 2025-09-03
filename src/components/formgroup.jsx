import { Form } from "./form";

export function FormGroup({
  template,
  data,
  setData,
  allowMultiple,
  isEditing,
}) {
  function addForm() {
    const clone = structuredClone(template);
    clone.id = crypto.randomUUID();
    setData([...data, clone]);
  }
  return (
    <div className="form-group">
      {/* Render each form that belongs to section
            Create a form if none exist yet for that section */}
      {data.length === 0
        ? addForm()
        : data.map((form) => (
            <Form
              instance={form}
              data={data}
              setData={setData}
              isEditing={isEditing}
              isRemovable={allowMultiple}
            />
          ))}
      {isEditing && allowMultiple && (
        <button className="add-btn" onClick={addForm}>
          + Add Entry
        </button>
      )}
    </div>
  );
}
