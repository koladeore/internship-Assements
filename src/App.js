import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Individual, ForBusiness } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Individual />} />
          <Route path="/business" element={<ForBusiness />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
