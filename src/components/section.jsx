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

function Form({ instance, data, setData, isEditing, isRemovable }) {
  // TO DO: add func to update state of form values when user input
  console.log(instance);
  console.log(Object.entries(instance));
  function removeForm() {
    // TO DO: add logic to remove form
    return;
  }
  return (
    <form>
      {isEditing && isRemovable && (
        <button className="remove-btn" onClick={removeForm}>
          Remove
        </button>
      )}
      {Object.entries(instance).map(([field, attribute]) => (
        <div>
          <label>{attribute.displayName}</label>
          {isEditing ? (
            <input
              id={field}
              name={field}
              onChange={(e) => {
                const id = e.target.id;
                const input = e.target.value;
                // TO DO: change this to update form corresponding to index in array
                //   setData({
                //     ...data,
                //     [id]: { ...data[id], value: input },
                //   });
              }}
              {...attribute}
            />
          ) : (
            <p>{attribute.value}</p>
          )}
        </div>
      ))}
    </form>
  );
}
