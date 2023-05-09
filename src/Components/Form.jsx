import React, { useState } from "react";
import Notes from "./Notes";

const Form = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(getFormLs);
  localStorage.setItem("notes", JSON.stringify(notes));
  function getFormLs() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if (note) {
      return note;
    } else {
      return [];
    }
  }
  const inputHandler = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setDesc(e.target.value);
    }
    console.log(title, desc);
  };

  const addNotesHandler = (e) => {
    e.preventDefault();

    if (title !== "" && desc !== "") {
      setNotes((note) => {
        return [
          ...notes,
          {
            title: title,
            desc: desc,
            id: new Date().getTime(),
          },
        ];
      });
    }

    setDesc("");
    setDesc("");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form
              style={{
                border: "2px solid black",
                borderRadius: "10px",
                padding: "30px",
                margin: "3rem",
              }}
            >
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  aria-describedby="emailHelp"
                  value={title}
                  onChange={inputHandler}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Description
                </label>
                <textarea
                  value={desc}
                  onChange={inputHandler}
                  name="desc"
                  id="desc"
                  rows="3"
                  className="form-control"
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={addNotesHandler}
                class="btn btn-primary"
              >
                Add Notes
              </button>
            </form>
          </div>
        </div>
      </div>

      {notes.length === 0 ? (
        <div class="card mb-3">
          <div class="card-header">Your Notes</div>
          <div class="card-body">
            <h5 class="card-title">No Text</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      ) : (
        notes.map((element) => {
          return (
            <Notes
              element={element}
              key={element.id}
              notes={notes}
              setNotes={setNotes}
            />
          );
        })
      )}
    </>
  );
};

export default Form;
