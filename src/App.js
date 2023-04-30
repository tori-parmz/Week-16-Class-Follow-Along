import { useLocation } from 'react-router';
import './App.css';

function App() {
  let { state } = useLocation();
  console.log(state);
  return (
    <div>
    <h1>I am Home.</h1>
    </div>

  );
}

export default App;
