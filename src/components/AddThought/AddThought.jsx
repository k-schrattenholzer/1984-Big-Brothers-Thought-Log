import { useState } from 'react';

export default function AddThought({ addThought }) {
  const [thought, setThought] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setThought('');
    addThought(thought);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Report Your Thoughts'
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      />
      <button 
        type='submit'
      >Submit for Review</button>
    </form>
  )
}
