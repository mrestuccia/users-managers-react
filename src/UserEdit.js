import React from 'react';
import UserItem from './UserItem';
import { Link } from 'react-router';

const managerSelect = (managers, user, onUserChange) => {

  const options = managers.map((manager) => {
    return (<option key={manager.key} value={manager.id}>{manager.name}</option>);
  });
  const currentManager = (user.manager) ? user.manager.id : 0;
  return (
    <div className="panel-body">
      <div className="form-group">
        <select className="form-control" value={currentManager} onChange={() => onUserChange(user.id, currentManager)}>
          <option key="0" value="">None</option>
          {options}
        </select>
        <Link to="/users">Cancel</Link>
      </div>
    </div>
  );
};

const UserEdit = ({ users, managers, onUserChange }) => {
  return (
    <div>
      {users.map((user) => {
        return (<UserItem
          key={user.id}
          user={user}
          component={managerSelect(managers, user, onUserChange)}
        />);
      })
      }
    </div>

  );
};

export default UserEdit;
