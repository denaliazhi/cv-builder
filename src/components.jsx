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

export function Preview({ data: [general, education] }) {
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
