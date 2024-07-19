import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Calendar from './Component/Pages/Calendra';
import Navbar from './Component/Pages/Navbar';
import Projects from './Component/Pages/Projects';
import Tracker from './Component/Pages/Tracker';
import './App.css';
import Overview from './Component/Pages/OverView';
import Timeline from './Component/Pages/Timeline';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/Tracker" element={<Tracker />} />
        <Route path="/Project" element={<Projects />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
};

export default App;
