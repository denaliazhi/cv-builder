import { useState } from "react";
import "./App.css";
import { formFields } from "./data.js";
import { Section, Preview } from "./components.jsx";

function App() {
  const [general, setGeneral] = useState(formFields.General);
  const [education, setEducation] = useState(formFields.Education);

  return (
    <>
      <h1>CV Builder</h1>
      <div className="editor">
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
      </div>
      <Preview data={[general, education]}></Preview>
    </>
  );
}

export default App;
