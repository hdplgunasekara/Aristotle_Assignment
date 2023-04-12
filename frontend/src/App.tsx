import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Lead from './components/lead';


function App() {

  return (
    <div className="App">
  
    <Router>
      <Routes>
        {/* Admin routes */}
      <Route  path="/" element={<Lead />} />

       {/* 404 page */}
      {/* <Route path="*" element={<PageNotFound/>} /> */}

       
      </Routes>
    </Router>
  </div>
  );
}

export default App;
