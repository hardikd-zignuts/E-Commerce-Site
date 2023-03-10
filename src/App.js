import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import ProductView from './components/common/ProductView';
import ChangePassword from './components/Auth/ChangePassword';
import ErrorPage from './components/Auth/ErrorPage';
import Home from './components/page/Home';
import LoginPage from './components/Auth/LoginPage';
import ProductGallery from './components/page/ProductGallery';
import Profile from './components/page/Profile';
import SignUpPage from './components/Auth/SignUpPage';
import IsAuthorized from './components/Auth/IsAuthorized';
function App() {

  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route exact path='/' element={
          <IsAuthorized>
            <Home />
          </IsAuthorized>
        } />
        <Route exact path='login' element={<LoginPage />} />
        <Route exact path='signup' element={<SignUpPage />} />
        <Route exact path='/products' element={
          <IsAuthorized>
            <ProductGallery />
          </IsAuthorized>
        } />
        <Route path="/products/:productId" element={<ProductView />} />
        <Route exact path='profile' element={
          <IsAuthorized>
            <Profile />
          </IsAuthorized>
        } />
        <Route exact path='reset' element={
          <IsAuthorized>
            <ChangePassword />
          </IsAuthorized>
        } />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;