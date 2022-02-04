import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Songs from './pages/Songs/Songs';
import Menubar from './pages/Menubar/Menubar';
import AddSong from './pages/AddSong/AddSong';
import Register from './pages/Register/Register';
import AllUsers from './pages/AllUsers/AllUsers';
import Home from './pages/Home/Home';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Menubar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Songs" element={<Songs />} />
            <Route path="/AllUsers" element={<AllUsers />} />
            <Route path="/AddSong" element={<AddSong />} />
            <Route path="/register" element={<Register />} />
          </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
