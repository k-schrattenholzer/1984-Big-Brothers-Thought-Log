import { useReducer } from 'react';
import AddThought from '../../components/AddThought/AddThought';
import ThoughtList from '../../components/ThoughtList/ThoughtList';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import './ThoughtLog.css';

function thoughtsReducer(thoughts, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...thoughts,
        {
          id: Math.floor(Math.random() * 100),
          thought: action.text,
          resolved: false,
        },
      ];
    }
  }
}

export default function ThoughtLog() {
  const [thoughts, dispatch] = useReducer(thoughtsReducer, '');

  const handleAddThought = (thought) => {
    dispatch({
      type: 'add',
      thought,
    });
  };

  return (
    <div id="ThoughtLog">
      <Header />
      <main>
        <AddThought addThought={handleAddThought} />
        <ThoughtList thoughts={thoughts} />
      </main>
      <Footer />
    </div>
  );
}
