import { useState } from "react";

export function Section({ title, data, setData, multiple }) {
  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => {
    setEditMode(editMode ? false : true);
  };
  const addAnother = () => {};

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
                  setData({
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
      {editMode ? (
        multiple ? (
          <button type="button" onClick={addAnother}>
            + Add another
          </button>
        ) : null
      ) : null}
      <button type="button" form={title} onClick={toggleEdit}>
        {editMode ? "Save" : "Edit"}
      </button>
    </form>
  );
}

export function Preview({ data: [general, education, work] }) {
  const degreeStart = new Date(education.Start.value).toLocaleString(
    "default",
    {
      month: "short",
    }
  );

  return (
    <div className="preview">
      <div className="general">
        <h2>{general.Name.value}</h2>
        <p>{general.Email.value}</p>
        <p>{general.Phone.value}</p>
      </div>
      <hr />
      <div className="work"></div>
      <hr />
      <div className="education">
        <h3>Education</h3>
        <div>
          <h4>{education.Degree.value}</h4>
          <p>{education.School.value}</p>
          <p>
            {education.Start.value
              ? `${degreeStart} - ${
                  education.End.value ? education.End.value : "Present"
                }`
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
