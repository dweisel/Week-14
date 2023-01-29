import './App.css';
import React from 'react';
import MovieList from './components/movie-list'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div id='App'>
      <div className='app'>
        <MovieList />
      </div>
    </div>
  );
}

export default App;
