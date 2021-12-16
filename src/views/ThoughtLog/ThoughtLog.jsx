import { useReducer } from "react"
import AddThought from '../../components/AddThought/AddThought'
import ThoughtList from '../../components/ThoughtList/ThoughtList'

export default function ThoughtLog() {
  return (
    <div>
      <AddThought />
      <ThoughtList />
    </div>
  )
}

//FILE TO DO 
//