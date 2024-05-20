
import './App.css';
import { Greet } from './components/Greet';
import {Person} from './components/Person';

function App() {
  const personName = {
    first: 'atul',
    last: 'kushwaha'
  }
  return (
    <div className="App">
     <Greet name="Atul" messageCount={10} isLoggedIn={false}/>
     <Person personName={personName} />
    </div>
  );
}

export default App;
