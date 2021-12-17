import { useReducer } from 'react';
import AddThought from '../../components/AddThought/AddThought';
import ThoughtList from '../../components/ThoughtList/ThoughtList';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import style from './ThoughtLog.css';

const initialThoughts = [
  { id: 0, text: 'I would like to cry near a lighthouse', resolved: false },
  {
    id: 1,
    text: 'Thought about licking all the crystals at the crystal shop',
    resolved: false,
  },
  {
    id: 2,
    text: 'I think lizards make the world a better place',
    resolved: false,
  },
];

function thoughtsReducer(thoughts, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...thoughts,
        {
          id: Math.floor(Math.random() * 100),
          text: action.text,
          resolved: false,
        },
      ];
    }
    case 'update': {
      return thoughts.map((thought) => {
        if (thought.id === action.task.id) {
          return action.task;
        }
        return thought;
      });
    }
    case 'delete': {
      return thoughts.filter((thought) => thought.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`)
    }
    //new cases above this line
  }
}

export default function ThoughtLog() {
  const [thoughts, dispatch] = useReducer(thoughtsReducer, initialThoughts);

  const handleAddThought = (text) => {
    dispatch({
      type: 'add',
      text,
    });
  };

  const handleUpdateThought = (task) => {
    dispatch({
      type: 'update',
      task
    })
  }

  const handleDeleteThought = (taskId) => {
    dispatch({
      type: 'delete',
      id: taskId
    })
  }

  return (
    <div className={style.ThoughtLog}>
      <Header />
      <main>
        <AddThought addThought={handleAddThought} />
        <ThoughtList thoughts={thoughts} handleChangeThought={handleUpdateThought} handleDeleteThought={handleDeleteThought} />
      </main>
      <Footer />
    </div>
  );
}
