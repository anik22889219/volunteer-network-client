import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Event from './Pages/Event/Event';
import Blog from './Pages/Blog/Blog';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className=' '>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>} />
        <Route path="donation" element={<Donation></Donation>} />
        <Route path="event" element={<Event></Event>} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="login" element={<Login></Login>} />
      </Routes>
      
    </div>
  );
}

export default App;
