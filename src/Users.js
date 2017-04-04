import React from 'react';
import { Link } from 'react-router';
import UserItem from './UserItem';


const managerRender = (user) => (
  <div className="panel-body">Managed By <Link to="users/edit">{(user.manager) ? user.manager.name : 'nobody'}</Link></div>
);


const Users = ({ users }) => {
  return (
    <div>
      {
        users.map((user) => {
          return (<UserItem
            key={user.id}
            user={user}
            component={managerRender(user)}
          />);
        })
      }
    </div>
  );
};

export default Users;