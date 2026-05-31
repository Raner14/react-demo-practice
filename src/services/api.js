// הגדרת כתובת הבסיס של השרת (במטלה שלכם זה יהיה http://localhost:3000)
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// פונקציה שמביאה את המשתמשים מהשרת ומחזירה את הנתונים
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('שגיאה במשיכת נתונים מהשרת');
  }
  return await response.json(); // מחזיר את מערך האובייקטים מהשרת
};