import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Songs from './pages/Songs/Songs';
import Menubar from './pages/Menubar/Menubar';
import AddSong from './pages/AddSong/AddSong';

/* 
lorem50+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
lorem50+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
lorem50+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
lorem50+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Menubar/>
          <Routes>
            <Route path="/Songs" element={<Songs />} />
            <Route path="/AddSong" element={<AddSong />} />
          </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
