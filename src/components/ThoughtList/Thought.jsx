import { useState } from "react";

export default function Thought({ thought, onChange, onDelete }) {
  const [beingEdited, setBeingEdited] = useState(false);

  let thoughtContent

  if(beingEdited) {
    thoughtContent = (
      <div>
        <input 
        type="text" 
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
      <input 
        type="checkbox"
        checked={thought.resolved}
        onChange={(e) => {
          onChange({
            ...thought,
            resolved: e.target.checked,
          })
        }}
      />
      {thoughtContent}
      <button
        type='button'
        onClick={() => onDelete(thought.id)}
      >
        Permanently Redact
      </button>
    </>
  )
}