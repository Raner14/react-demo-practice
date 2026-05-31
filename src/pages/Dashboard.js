import React from 'react';
<<<<<<< HEAD
import DataTable from '../components/DataTable'; // import the DataTable component to display the user data
=======
import DataTable from '../components/DataTable'; // imorting the DataTable component to display user data
>>>>>>> ec2c75f970b37ebb590da433022313baee6befc3

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