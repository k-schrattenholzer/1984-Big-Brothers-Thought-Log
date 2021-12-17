import Thought from './Thought.jsx';
import './ThoughtList.css'

export default function ThoughtList({ thoughts, handleChangeThought, handleDeleteThought}) {
  return (
    <ul>
      {thoughts.map((thought) => (
        <li key={thought.id}>
          <Thought thought={thought} onChange={handleChangeThought} onDelete={handleDeleteThought}/>
        </li>
      ))}
    </ul>
  )
}
