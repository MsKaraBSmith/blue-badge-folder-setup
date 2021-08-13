import './App.css';

import ClickCounter from './components/day02-challenge/ClickCounter/ClickCounter';



function App() {
  // This is a comment
  const welcomeName = "Rob!!!";

  // const phrase = "I wasn't alive then."

  return (
    <div className="App">
     <h1>Welcome to React, {welcomeName}</h1>
    
     <ClickCounter />
    </div>
  );
}

export default App;



