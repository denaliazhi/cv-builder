import { useState } from "react";
import "./App.css";
import { templates } from "./data.js";
import { Section } from "./components/section.jsx";
// import { Section, Preview } from "./components.jsx";

function App() {
  const [basic, setBasic] = useState([]);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  return (
    <>
      <h1>CV Builder</h1>
      <div className="editor">
        <Section
          title={templates.basic.displayName}
          template={templates.basic.form}
          data={basic}
          setData={setBasic}
          allowMultiple={templates.basic.allowMultiple}
        />
        <Section
          title={templates.education.displayName}
          template={templates.education.form}
          data={education}
          setData={setEducation}
          allowMultiple={templates.education.allowMultiple}
        />
        <Section
          title={templates.work.displayName}
          template={templates.work.form}
          data={work}
          setData={setWork}
          allowMultiple={templates.work.allowMultiple}
        />
      </div>
      {/* <div className="editor">
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
      <Preview data={[general, education, work]}></Preview> */}
    </>
  );
}

export default App;
