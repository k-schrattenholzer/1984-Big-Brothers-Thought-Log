import Thought from './Thought.jsx';
import style from './ThoughtList.css'

export default function ThoughtList({ thoughts, handleChangeThought, handleDeleteThought}) {
  return (
    <ul className={style.ThoughtC}>
      {thoughts.map((thought) => (
        <li key={thought.id} className={style.ThoughtEl}>
          <Thought thought={thought} onChange={handleChangeThought} onDelete={handleDeleteThought}/>
        </li>
      ))}
    </ul>
  )
}
