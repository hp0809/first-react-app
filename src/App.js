import React from 'react';
import './App.css';
import Card from './composition/Card.js';
import STORE from './composition/store.js';
import List from './composition/List.js';

function App() {
  return (
    <main className='App'>
      <List></List>
    </main>
  );
}

export default App;