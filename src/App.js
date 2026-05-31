import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div style={{ direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
        
        {/* תפריט ניווט עליון (Navbar) - דרישה של המטלה! */}
        <nav style={{ padding: '15px', backgroundColor: '#333', color: 'white' }}>
          <Link to="/" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none' }}>התחברות</Link>
          <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>לוח בקרה (טבלה)</Link>
        </nav>

        {/* הגדרת נתיבי העמודים באפליקציה */}
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;