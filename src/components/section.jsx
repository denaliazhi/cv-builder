import { useState } from "react";

export function Section({ title, ...formFeatures }) {
  const [isEditing, setIsEditing] = useState(false);
  function toggleEdit() {
    // TO DO: Add logic to validate required fields before changing state
    setIsEditing(isEditing ? false : true);
  }
  return (
    <div className="section">
      <h2>{title}</h2>
      <button className="edit-btn" onClick={toggleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <FormGroup {...formFeatures} isEditing={isEditing} />
    </div>
  );
}

function FormGroup({ template, data, setData, allowMultiple, isEditing }) {
  function addForm() {
    setData([...data, template]);
    console.log("added a form");
  }
  return (
    <div className="form-group">
      {/* Render each form that belongs to section */}
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

function Form({ props }) {
  // TO DO: add func to update state of form values when user input
  return <></>;
}
