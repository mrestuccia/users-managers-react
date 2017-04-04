import React from 'react';
import ManagerRender from './ManagerRender';
import ManagerSelector from './ManagerSelector';


const Users = ({ users, managers, onUserChange, location }) => {
  if (users === null) return null;
  return (
    <div>
      {
        users.map((user) => {
          return (
            <div key={user.id} className="panel panel-default">
              <div className="panel-heading">{user.name}</div>
              {(location === '/users') ?
                <ManagerRender key={user.id} user={user} /> :
                <ManagerSelector key={user.id} user={user} managers={managers} onUserChange={onUserChange} />}
            </div>
          );
        })
      }
    </div>
  );
};

export default Users;
