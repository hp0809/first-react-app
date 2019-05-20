import React from 'react';
import './App.css';
import List from './composition/List.js';

function App(store) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        <List />
      </div>

    </main>
  );
}

export default App;