import { useState } from "react";
import "./App.css";

function Section({ title, data, handleChange }) {
  const [editMode, setEditMode] = useState(false);
  const handleClick = () => {
    setEditMode(editMode ? false : true);
  };

  return (
    <fieldset key={title} className={title}>
      <legend>{title}</legend>
      {Object.entries(data).map(([field, details]) => {
        return (
          <>
            <label>{field}</label>
            {editMode ? (
              <input
                type={details.type}
                placeholder={details.placeholder}
                value={details.value}
                id={field}
                name={field}
                onChange={handleChange}
              />
            ) : (
              <p>{details.value}</p>
            )}
          </>
        );
      })}
      <button onClick={handleClick}>{editMode ? "Save" : "Edit"}</button>
    </fieldset>
  );
}

function App() {
  const [generalData, setGeneralData] = useState({
    Name: {
      type: "text",
      required: true,
      placeholder: "Ivan Tor",
      value: "",
    },
    Email: {
      type: "email",
      required: true,
      placeholder: "ivantor@gmail.com",
      value: "",
    },
    Phone: {
      type: "tel",
      required: false,
      placeholder: "135-792-4680",
      value: "",
    },
  });

  const handleChange = (e) => {
    const field = e.target.id;
    const input = e.target.value;
    setGeneralData({
      ...generalData,
      [field]: { ...generalData[field], value: input },
    });
  };

  return (
    <>
      <h1>CV Builder</h1>
      <Section
        title="General"
        data={generalData}
        handleChange={handleChange}
      ></Section>
      <div>{JSON.stringify(generalData)}</div>
    </>
  );
}

export default App;
