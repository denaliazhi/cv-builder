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

function Form({ instance, data, setData, isEditing, isRemovable }) {
  function removeForm(id) {
    setData(data.filter((form) => form.id !== id));
  }
  return (
    <form id={instance.id}>
      {isEditing && isRemovable && (
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeForm(instance.id)}
        >
          Remove
        </button>
      )}
      {Object.entries(instance).map(
        // TO DO: when using map, need to add key to each item
        ([field, attribute]) =>
          field !== "id" && (
            <div>
              <label>{attribute.displayName}</label>
              {isEditing ? (
                <input
                  name={field}
                  onChange={(e) => {
                    const id = e.target.parentElement.parentElement.id;
                    const input = e.target.value;
                    setData(
                      data.map((form) => {
                        if (form.id === id) {
                          return {
                            ...form,
                            [field]: {
                              ...form[field],
                              value: input,
                            },
                          };
                        } else {
                          return form;
                        }
                      })
                    );
                  }}
                  {...attribute}
                />
              ) : (
                <p>{attribute.value}</p>
              )}
            </div>
          )
      )}
    </form>
  );
}
