import React from 'react';
import GuestWords from './GuestWords';
import Congrats from './Congrats';

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Jotto App</h1>
      </div>
      <Congrats success={true} />
      <GuestWords guessedWords={[
        {guessedWord: 'train', letterMatchCount: 3}
      ]} />
    </div>
  );
}

export default App;
