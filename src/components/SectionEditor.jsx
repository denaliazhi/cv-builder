import { useState } from "react";
import { FormGroup } from "./FormGroup";

export function SectionEditor({ title, ...formFeatures }) {
  const [isEditing, setIsEditing] = useState(false);
  function toggleEdit() {
    // TO DO: Add logic to validate required fields before changing state
    setIsEditing(isEditing ? false : true);
  }
  return (
    <section>
      <h2>{title}</h2>
      <button className="edit-btn" onClick={toggleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <FormGroup {...formFeatures} isEditing={isEditing} />
    </section>
  );
}
