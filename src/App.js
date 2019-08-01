import React from 'react';
import GuestWords from './GuestWords';
import Congrats from './Congrats';

function App() {
  return (
    <div className="App">
      <h1>Jotto App</h1>
      <Congrats success />
      <GuestWords guessedWords={[
        {guessedWord: 'train', letterMatchCount: 3}
      ]} />
    </div>
  );
}

export default App;
