import { useState } from "react";
import "./App.css";

function Section({ title, fields, handleChange }) {
  return (
    <fieldset key={title} className={title}>
      <legend>{title}</legend>
      {Object.entries(fields).map(([field, details]) => {
        return (
          <>
            <label>{field}</label>
            <input
              type={details.type}
              id={field}
              name={field}
              // onChange={(e, field) => handleChange(e, field)}
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
  console.log(generalData);
  console.log(Object.entries(generalData).map(([field, details]) => field));

  return (
    <>
      <h1>CV Builder</h1>
      <Section
        title="General"
        fields={generalData}
        // handleChange={(e, field) =>
        //   setGeneralData({
        //     ...generalData,
        //     [field]: { ...generalData.field, value: e.target.value },
        //   })
        // }
      ></Section>
    </>
  );
}

export default App;
