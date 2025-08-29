import { useState } from "react";

export function Section({ title, data, handleChange }) {
  const [editMode, setEditMode] = useState(false);
  const handleClick = () => {
    setEditMode(editMode ? false : true);
  };

  return (
    <form key={title} id={title}>
      <h2>{title}</h2>
      {Object.entries(data).map(([field, attributes]) => {
        return (
          <div>
            <label>{field}</label>
            {editMode ? (
              <input
                id={field}
                name={field}
                onChange={(e) => {
                  const id = e.target.id;
                  const input = e.target.value;
                  handleChange({
                    ...data,
                    [id]: { ...data[id], value: input },
                  });
                }}
                {...attributes}
              />
            ) : (
              <p>{attributes.value}</p>
            )}
          </div>
        );
      })}
      <button type="button" form={title} onClick={handleClick}>
        {editMode ? "Save" : "Edit"}
      </button>
    </form>
  );
}
