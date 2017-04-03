import React from 'react';
import UserItem from './UserItem';

const Users = ({ users }) => {
  return (
    <div>
      {
        users.map((user) => {
          return (<UserItem key={user.id} user={user} />);
        })
      }
    </div>
  );
};

export default Users;