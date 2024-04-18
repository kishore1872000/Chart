import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sigin from './Component/Sigin/Sigin';
import Siginup from './Component/Siginup/Siginup';
import Main from './Component/Main/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sigin />} />
        <Route path="/Siginup" element={<Siginup />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
