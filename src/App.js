import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Event from './Pages/Event/Event';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div className='m-2'>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>} />
        <Route path="donation" element={<Donation></Donation>} />
        <Route path="event" element={<Event></Event>} />
        <Route path="blog" element={<Blog></Blog>} />
      </Routes>
      
      <h1>this is </h1>
    </div>
  );
}

export default App;
