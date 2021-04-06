import React, {useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Form from "./Form"
import Note from "./Note"

function App (){
const [noteSubmitted, setNoteSubmitted] =useState([])


function submitNotes(noteDraft){
    
    setNoteSubmitted(preValue => {return [...preValue,noteDraft]}); // return an array
        }

function noteRemover(id){
    setNoteSubmitted(preValue=> preValue.filter((note,index)=> {
        return index !==id
    }))
    

}
    return (<div>
        
        <Header />
        <Footer />
        <Form 
        notesPosted = {submitNotes}/>
        {noteSubmitted.map((note,index) => <Note 
        key={index}
        id={index}
        title ={note.title}
        content ={note.content}
        removeNote={noteRemover}
        />)}
        
        </div>)
}


export default App;