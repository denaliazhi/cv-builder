import { useState } from "react";
import "./App.css";
import { templates } from "./data.js";
import { SectionEditor } from "./components/SectionEditor.jsx";
import { SectionPreview } from "./components/SectionPreview.jsx";
import { Header } from "./components/Header.jsx";
import { Entry } from "./components/Entry.jsx";

function App() {
  const [basic, setBasic] = useState([]);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  return (
    <>
      <h1>CV Builder</h1>
      <main>
        <div className="editor">
          <SectionEditor
            title={templates.basic.displayName}
            template={templates.basic.form}
            data={basic}
            setData={setBasic}
            allowMultiple={templates.basic.allowMultiple}
          />
          <SectionEditor
            title={templates.education.displayName}
            template={templates.education.form}
            data={education}
            setData={setEducation}
            allowMultiple={templates.education.allowMultiple}
          />
          <SectionEditor
            title={templates.work.displayName}
            template={templates.work.form}
            data={work}
            setData={setWork}
            allowMultiple={templates.work.allowMultiple}
          />
        </div>
        <div className="viewer">
          <Header content={basic} />
          <SectionPreview title={templates.work.displayName}>
            {work.map((form) => (
              <Entry
                title={form.title.value}
                subtitle={form.company.value}
                dates={[form.start.value, form.end.value]}
              >
                {form.details.value}
              </Entry>
            ))}
          </SectionPreview>
          <SectionPreview title={templates.education.displayName}>
            {education.map((form) => (
              <Entry
                title={form.degree.value}
                subtitle={form.school.value}
                dates={[form.start.value, form.end.value]}
              ></Entry>
            ))}
          </SectionPreview>
        </div>
      </main>
    </>
  );
}

export default App;
