import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import GiphyList from './components/GiphyList';

class App extends Component{

  render() {
    return (
      <section id="gallery">
          
          <h1>Buscador de GIFs</h1>

          <p>Escolha um tema para buscar um GIF. Clique no GIF para copiar.</p>

          <SearchBar />

          <GiphyList />

          <h5>Powered by GIPHY</h5>

        </section>
    );
  }
}

export default App;
