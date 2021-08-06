import { useState } from 'react';
import '../assets/styles/App.css';
import Evatar from './avatar/evatar';
import Toolbar from './toolbar/toolbar';

function App() {
  return (
    <div className="App">
      <header>
        <Toolbar/>
      </header>
      <div className="container">
        <Evatar height={200} width={200} />
      </div>
    </div>
  );
}

export default App;
