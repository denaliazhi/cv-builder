import trash from "../assets/icons8-trash.png";

export function Form({ instance, data, setData, isEditing, isRemovable }) {
  function removeForm(id) {
    setData(data.filter((form) => form.id !== id));
  }
  return (
    <form id={instance.id}>
      {Object.entries(instance).map(
        // TO DO: when using map, need to add key to each item
        ([field, attribute]) =>
          field !== "id" && (
            <div>
              <label>{attribute.displayName}</label>
              {isEditing ? (
                <input
                  name={field}
                  onChange={(e) => {
                    const id = e.target.parentElement.parentElement.id;
                    const input = e.target.value;
                    setData(
                      data.map((form) => {
                        if (form.id === id) {
                          return {
                            ...form,
                            [field]: {
                              ...form[field],
                              value: input,
                            },
                          };
                        } else {
                          return form;
                        }
                      })
                    );
                  }}
                  {...attribute}
                />
              ) : (
                <p>{attribute.value}</p>
              )}
            </div>
          )
      )}
      {isEditing && isRemovable && (
        <>
          <button
            type="button"
            className="remove-btn"
            onClick={() => removeForm(instance.id)}
          >
            <span style={{ backgroundImage: `url(${trash})` }}></span>
            Remove
          </button>
        </>
      )}
      {isRemovable && <hr />}
    </form>
  );
}
