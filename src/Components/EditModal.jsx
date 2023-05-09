import React from 'react'

const EditModal = ({editID,notes,setNotes}) => {

    const updateHandler=()=>{
      const updateNotes=  notes.map((elem)=>{
            if(editID===elem.id){
                return(
                {...elem,
                    title:document.getElementById("edittitle").value,
                    desc:document.getElementById("editdesc").value
                })
               
            }else{
                return elem
            }
        })
        console.log((updateNotes));
        setNotes(updateNotes)
    }
  return (
    <>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form style={{border:"2px solid black",borderRadius:"10px",padding:"30px",margin:"3rem"}}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="edittitle"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Description
          </label>
          <textarea name='desc' id='editdesc' rows='3' className="form-control"></textarea>
        </div>
        
        
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={updateHandler}>Edit</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default EditModal