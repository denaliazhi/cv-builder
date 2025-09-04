import { useState } from "react";
import "./App.css";
import { templates } from "./template.js";
import { SectionEditor } from "./components/SectionEditor.jsx";
import { SectionPreview } from "./components/SectionPreview.jsx";
import { Header } from "./components/Header.jsx";
import { Entry } from "./components/Entry.jsx";

function App() {
  const [basic, setBasic] = useState([]);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  const [showExample, setShowExample] = useState(true);

  return (
    <>
      <h1>CV Builder</h1>
      <div className="toolbar">
        <button onClick={() => setShowExample(showExample ? false : true)}>
          {showExample ? "Hide example" : "Show example"}
        </button>
      </div>
      <main>
        <div className="editor">
          <SectionEditor
            title={templates.basic.displayName}
            template={templates.basic.form}
            data={basic}
            setData={setBasic}
            allowMultiple={templates.basic.allowMultiple}
            setExample={setShowExample}
          />
          <SectionEditor
            title={templates.work.displayName}
            template={templates.work.form}
            data={work}
            setData={setWork}
            allowMultiple={templates.work.allowMultiple}
            setExample={setShowExample}
          />
          <SectionEditor
            title={templates.education.displayName}
            template={templates.education.form}
            data={education}
            setData={setEducation}
            allowMultiple={templates.education.allowMultiple}
            setExample={setShowExample}
          />
        </div>
        <div className="viewer">
          <Header content={basic} showExample={showExample} />
          <SectionPreview title={templates.work.displayName}>
            {showExample ? (
              <Entry
                title={templates.work.form.title.placeholder}
                subtitle={templates.work.form.company.placeholder}
                dates={["08/02/2023", "10/03/2024"]}
              >
                {templates.work.form.details.placeholder}
              </Entry>
            ) : (
              work.map((form) => (
                <Entry
                  title={form.title.value}
                  subtitle={form.company.value}
                  dates={[form.start.value, form.end.value]}
                >
                  {form.details.value}
                </Entry>
              ))
            )}
          </SectionPreview>
          <SectionPreview title={templates.education.displayName}>
            {showExample ? (
              <Entry
                title={templates.education.form.degree.placeholder}
                subtitle={templates.education.form.school.placeholder}
                dates={["09/02/2019", "05/03/2023"]}
              ></Entry>
            ) : (
              education.map((form) => (
                <Entry
                  title={form.degree.value}
                  subtitle={form.school.value}
                  dates={[form.start.value, form.end.value]}
                ></Entry>
              ))
            )}
          </SectionPreview>
        </div>
      </main>
    </>
  );
}

export default App;
