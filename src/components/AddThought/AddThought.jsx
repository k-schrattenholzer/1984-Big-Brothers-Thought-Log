import { useState } from 'react';
import style from './AddThought.css'

export default function AddThought({ addThought }) {
  const [thought, setThought] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setThought('');
    addThought(thought);
  };

  return (
    <div className={style.FormC}>
      <form onSubmit={handleSubmit} className={style.AddThoughtForm}>
        <textarea
          className={style.AddThoughtInput}
          placeholder='Report Your Thoughts'
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        />
        <button 
          type='submit'
        >Submit for Review</button>
      </form>
    </div>
  )
}
