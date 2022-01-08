import { useState } from "react";
import style from './ThoughtList.css'

export default function Thought({ thought, onChange, onDelete }) {
  const [beingEdited, setBeingEdited] = useState(false);

  let thoughtContent

  if(beingEdited) {

    thoughtContent = (
      <div>
        <input 
        type="text"
        aria-label='edit-thought' 
        className={style.EditInput}
        placeholder={thought.text}
        onChange={(e) => {
          onChange({
            ...thought,
            text: e.target.value,
            })
          }}
        />
        <button
          type='button'
          aria-label='submit-edit' 
          onClick={() => setBeingEdited(false)}
        >
          Submit Changes for Review
        </button>
      </div>
    )
  } else {
    thoughtContent = (
      <div>
        <p>{thought.text}</p>
        <button
          type='button'
          aria-label={`edit-btn-${thought.text}`}
          onClick={() => setBeingEdited(true)}
        >
          Modify Submission 
        </button>
      </div>
    )
  }
  return (
    <div>
      {thoughtContent}
      <button 
        type="checkbox"
        checked={thought.resolved}
        onChange={(e) => {
          onChange({
            ...thought,
            resolved: e.target.checked,
          })
        }}
      >Resolve</button>
      <button
        type='button'
        onClick={() => onDelete(thought.id)}
      >
        Permanently Redact
      </button>
    </div>
  )
}