import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/api';

function DataTable() {
  // 1. ניהול שלושת המצבים שנדרשים במטלה
  const [users, setUsers] = useState([]);       // המידע שיגיע מהשרת
  const [isLoading, setIsLoading] = useState(true); // האם הנתונים בטעינה כרגע
  const [error, setError] = useState(null);       // האם הייתה שגיאה בקריאה

  // 2. ה-Hook שרץ אוטומטית ברגע שהרכיב עולה על המסך
  useEffect(() => {
    // פונקציה שמבצעת את קריאת הרשת
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // פנייה לשרת אימונים חינמי שמחזיר רשימת משתמשים
        const data = await getUsers();
        
        setUsers(data); // שמירת הנתונים ב-State
      } catch (err) {
        setError(err.message); // שמירת השגיאה ב-State אם הייתה כזו
      } finally {
        setIsLoading(false); // סיום מצב הטעינה בכל מקרה
      }
    };

    fetchData();
  }, []); // מערך תלויות ריק [] אומר: תריץ את הקוד הזה רק פעם אחת כשהרכיב נטען

  // 3. תנאים להצגה על המסך לפי המצב הנוכחי
  if (isLoading) return <h3>🔄 טוען נתונים מהשרת, רק רגע...</h3>;
  if (error) return <h3 style={{ color: 'red' }}>❌ שגיאה: {error}</h3>;

  // 4. הצגת הטבלה במידה והנתונים הגיעו בהצלחה
  return (
    <div style={{ padding: '20px' }}>
      <h3>רשימת משתמשים דינמית מהשרת (דרישת חובה למטלה)</h3>
      <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'right', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>מזהה</th>
            <th>שם</th>
            <th>אימייל</th>
            <th>עיר</th>
          </tr>
        </thead>
        <tbody>
          {/* מיפוי (map) של מערך הנתונים לשורות בטבלה */}
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;