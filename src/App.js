import React from 'react';
import './styles/main.sass';
import './App.sass';

import Example from './components/Example/Example';

function App() {
  return (
    <div className="app">
      <Example prop1 prop2="property" />
    </div>
  );
}

export default App;
