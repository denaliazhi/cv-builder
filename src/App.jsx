import { useState } from "react";
import "./App.css";

function Section({ title, data, handleChange }) {
  return (
    <fieldset key={title} className={title}>
      <legend>{title}</legend>
      {Object.entries(data).map(([field, details]) => {
        return (
          <>
            <label>{field}</label>
            <input
              type={details.type}
              id={field}
              name={field}
              onChange={handleChange}
            />
          </>
        );
      })}
      <button>Save</button>
    </fieldset>
  );
}

function App() {
  const [generalData, setGeneralData] = useState({
    Name: {
      type: "text",
      required: true,
      value: "",
    },
    Email: {
      type: "email",
      required: true,
      value: "",
    },
    Phone: {
      type: "tel",
      required: false,
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
    </>
  );
}

export default App;
