import React from 'react';
import DataTable from '../components/DataTable'; // import the DataTable component to display the user data

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