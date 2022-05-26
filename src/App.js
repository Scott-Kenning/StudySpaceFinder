import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import BuildingsPage from './components/BuildingsPage';


function App() {
  return (
    <main>
      <Header/>
      <div className="bg-gray-100 flex justify-center min-h-screen">
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/buildings" element={<BuildingsPage/>} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
