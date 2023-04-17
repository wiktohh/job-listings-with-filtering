import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <input type="text" className='input'/>
      <Main/>
    </div>
  );
}

export default App;
