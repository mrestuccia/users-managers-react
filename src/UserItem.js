import React from 'react';
import { Link } from 'react-router';

const UserItem = ({ user }) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{user.name}</div>
      <div className="panel-body">Managed By <Link to="users/edit">{(user.manager) ? user.manager.name : 'nobody'}</Link></div>
    </div>);
};

export default UserItem;
