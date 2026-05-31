import React from 'react';

// component to display user information in a card format
function UserCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px 0', backgroundColor: '#f9f9f9' }}>
      <h3>שם המשתמש: {props.name}</h3>
      <p>תפקיד במערכת: {props.role}</p>
    </div>
  );
}

export default UserCard;