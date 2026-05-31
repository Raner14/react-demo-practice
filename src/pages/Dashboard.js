import React from 'react';
import DataTable from '../components/DataTable'; // ייבוא הטבלה מהתיקייה שלה

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>לוח בקרה (Dashboard)</h1>
      <p>ברוך הבא למערכת! הנה הנתונים שהתקבלו מהשרת:</p>
      <DataTable />
    </div>
  );
}

export default Dashboard;