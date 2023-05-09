import React, { useState } from "react";
import EditModal from "./EditModal";

const Notes = ({ element, notes, setNotes }) => {
  const [editID, setEditId] = useState("");

  const removeHandler = (id) => {
    const newNotes = notes.filter((elm) => {
      if (elm.id !== id) {
        return elm;
      }
    });
    setNotes(newNotes);
  };

  const editHandler = (id) => {
    setEditId(id);
    notes.filter((elem) => {
      if (elem.id === id) {
        document.getElementById("edittitle").value = elem.title;
        document.getElementById("editdesc").value = elem.desc;
      }
    });
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div class="card mb-3 col-3">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">{element.title}</h5>
            <p class="card-text">{element.desc}</p>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              onClick={() => {
                editHandler(element.id);
              }}
              data-bs-target="#exampleModal"
            >
              Edit
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                removeHandler(element.id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
        <EditModal
          editID={editID}
          setEditId={setEditId}
          notes={notes}
          setNotes={setNotes}
        />
      </div>
    </>
  );
};

export default Notes;
