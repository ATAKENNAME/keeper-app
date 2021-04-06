
import React from "react"
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

function Note(props) {

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => {props.removeNote(props.id)}}><DeleteOutlineOutlinedIcon /></button>
    </div>
  );
}

export default Note;
