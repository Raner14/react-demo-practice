import React, { useState } from 'react';
// 1. מייבאים את useNavigate מתוך react-router-dom
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 2. מייצרים משתנה ניווט בתוך הרכיב
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // ולידציה בסיסית
    if (!email.includes('@')) {
      setErrorMessage('אימייל לא תקין - חייב להכיל @');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('הסיסמה חייבת להיות לפחות 6 תווים');
      return;
    }
    if (password.valueOf() === '      ') {
      setErrorMessage('סיסמה חלשה מדי - נא לבחור סיסמה אחרת');
      return;
    }

    // אם הכל תקין, מנקים שגיאות
    setErrorMessage('');
    
    // 3. כאן קורה הקסם! אנחנו מעבירים את המשתמש לעמוד הטבלה באופן אוטומטי
    navigate('/dashboard');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>התחברות למערכת</h2>
      
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>אימייל:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>סיסמה:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          התחבר
        </button>
      </form>
    </div>
  );
}

export default Login;