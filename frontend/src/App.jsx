import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import './App.css';

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        {/* Add more routes here following same pattern */}
      </Routes>
    </Router>
  </div>
  );
}