import React from 'react';
import UserItem from './UserItem';
import ManagerSelector from './ManagerSelector';

const UserEdit = ({ users, managers, onUserChange }) => {
  return (
    <div>
      {users.map((user) => {
        return (<UserItem
          key={ user.id }
          user={ user }
          component={<ManagerSelector key={user.id} user={user} managers={managers} onUserChange={onUserChange} />}
        />);
      })
      }
    </div>

  );
};

export default UserEdit;
