import React, {useState} from 'react'
import Nav from './components/Nav'
import MapItems from './components/MapItems'
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <main className="App">
      <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MapItems searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </main>
  );
}

export default App;
