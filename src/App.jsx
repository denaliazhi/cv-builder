import { useState } from "react";
import "./App.css";
import { templates } from "./data.js";
import { Section } from "./components/section.jsx";
import { Viewer } from "./components/viewer.jsx";

function App() {
  const [basic, setBasic] = useState([]);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  return (
    <>
      <h1>CV Builder</h1>
      <main>
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
        <Viewer
          titles={[templates.work.displayName, templates.education.displayName]}
          data={[basic, work, education]}
        />
      </main>
    </>
  );
}

export default App;
