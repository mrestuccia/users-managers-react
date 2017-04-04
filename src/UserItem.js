import React from 'react';

const UserItem = ({ user, component }) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{user.name}</div>
      {component}
    </div>);
};

export default UserItem;
