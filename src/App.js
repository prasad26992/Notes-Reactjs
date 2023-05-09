import { useState } from "react";
import EditModal from "./Components/EditModal";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Notes from "./Components/Notes";


function App() {

  return (
   <>
      {/* <Navbar/> */}
<Form/>
<div className="container">
<div className="row justify-content-center">
<div className="col-md-10">
{/* <h1 className="mb-3">Your Notes</h1> */}
{/* {
  notes.length===0?
  <div class="card mb-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">No Text</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    

  </div>
</div>:
Notes.map((element)=>{
  return(
    <Notes/>
  )
})
} */}
</div>
</div>
</div>
   </>
  );
}

export default App;
