import { useState } from "react";
import "./App.css";
import { formFields } from "./data.js";

function Section({ title, data, handleChange }) {
  const [editMode, setEditMode] = useState(false);
  const handleClick = () => {
    setEditMode(editMode ? false : true);
  };

  return (
    <form key={title} id={title}>
      <h2>{title}</h2>
      {Object.entries(data).map(([field, details]) => {
        return (
          <div>
            <label>{field}</label>
            {editMode ? (
              <input
                type={details.type}
                placeholder={details.placeholder}
                value={details.value}
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
                required={details.required}
              />
            ) : (
              <p>{details.value}</p>
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

function App() {
  const [general, setGeneral] = useState(formFields.General);
  const [education, setEducation] = useState(formFields.Education);

  return (
    <>
      <h1>CV Builder</h1>
      <Section
        title="General"
        data={general}
        handleChange={setGeneral}
      ></Section>
      <Section
        title="Education"
        data={education}
        handleChange={setEducation}
      ></Section>
    </>
  );
}

export default App;
