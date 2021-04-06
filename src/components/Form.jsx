import React, { useState } from "react"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';


function Form(props) {
const [noteDraft, setNoteDraft]=useState({title:"",content:""})
const [isExtended,setIsExtended]=useState(false)

function noteTitleDraft(event){
    const {name,value} = event.target
setNoteDraft(preValue => {return {...preValue,[name]:value}}); // return a controlled value

}

function noteContentDrat(event){
const {name,value} = event.target
setNoteDraft(preValue => {return {...preValue,[name]:value}}); // return a controlled value
}



    return (
      <div>
         
        <form className="create-note">
        
        {isExtended && <input onChange ={noteTitleDraft} value ={noteDraft.title} name="title" placeholder="Title" />}
          <textarea onClick ={()=>{setIsExtended(preValue =>{return !preValue})}} onChange ={noteContentDrat} value ={noteDraft.content} name="content" placeholder="Take a note..." rows={isExtended? 3:1} />
          <zoom in={isExtended}>
          <Fab onClick = {(e) => {
            props.notesPosted(noteDraft);
            e.preventDefault();
            setNoteDraft({title:"",content:""})
          }}><AddIcon /></Fab>
            </zoom>
        </form>
      </div>
    );
  }
  
  export default Form;