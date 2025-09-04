import { useState } from "react";
import { FormGroup } from "./FormGroup";
import save from "../assets/icons8-save.png";
import edit from "../assets/icons8-edit.png";

export function SectionEditor({ title, setExample, ...formFeatures }) {
  const [isEditing, setIsEditing] = useState(false);
  function toggleEdit() {
    if (isEditing) {
      setExample(false);
    }
    // TO DO: Add logic to validate required fields before changing state
    setIsEditing(isEditing ? false : true);
  }
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <button className="edit-btn" onClick={toggleEdit}>
          <span
            style={
              isEditing
                ? { backgroundImage: `url(${save})` }
                : { backgroundImage: `url(${edit})` }
            }
          ></span>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <FormGroup {...formFeatures} isEditing={isEditing} />
    </section>
  );
}
