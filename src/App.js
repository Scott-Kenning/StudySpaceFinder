import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ClassroomsPage from "./components/ClassroomsPage";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <div className="bg-gray-100 flex justify-center min-h-screen">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/classrooms" element={<ClassroomsPage />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
