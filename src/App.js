import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import Home from './components/page/Home';

function App() {
  return (
    <div className="App">

      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
