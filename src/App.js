import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import ChangePassword from './components/page/ChangePassword';
import Home from './components/page/Home';
import Profile from './components/page/Profile';
import SignUpPage from './components/page/SignUpPage';
function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/reset' element={<ChangePassword />} />
        <Route path='/logout' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
