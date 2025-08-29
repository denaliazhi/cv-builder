import { useState } from "react";
import "./App.css";
import { formFields } from "./data.js";
import { Section, Preview } from "./components.jsx";

function App() {
  const [general, setGeneral] = useState(formFields.General);
  const [education, setEducation] = useState(formFields.Education);
  const [work, setWork] = useState(formFields.Work);

  return (
    <>
      <h1>CV Builder</h1>
      <div className="editor">
        <Section
          title="General"
          data={general}
          setData={setGeneral}
          multiple={false}
        ></Section>
        <Section
          title="Education"
          data={education}
          setData={setEducation}
          multiple={false}
        ></Section>
        <Section
          title="Work"
          data={work}
          setData={setWork}
          multiple={true}
        ></Section>
      </div>
      <Preview data={[general, education, work]}></Preview>
    </>
  );
}

export default App;
