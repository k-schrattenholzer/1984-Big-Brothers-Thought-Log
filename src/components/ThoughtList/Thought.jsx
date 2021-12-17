import { useState } from "react";

export default function Thought({ thought, onChange, onDelete }) {
  const [beingEdited, setBeingEdited] = useState(false);

  let thoughtContent

  if(beingEdited) {
    thoughtContent = (
      <div>
        <input 
        type="text" 
        placeholder={thought.text}
        onChange={(e) => {
          onChange({
            ...thought,
            thought: e.target.value,
            })
          }}
        />
        <button
          type='button'
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
          onClick={() => setBeingEdited(true)}
        >
          Modify Submission 
        </button>
      </div>
    )
  }
  return (
    <>
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
    </>
  )
}