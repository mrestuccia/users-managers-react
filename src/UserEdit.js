import React from 'react';
import { Link } from 'react-router';

const UserEdit = () => {
  return (
    <div className="form-group">
      <select className="form-control">
        <option value="">None</option>
        <option value="2">larry</option>
        <option value="1">moe</option>
      </select>
      <Link to="/users">Cancel</Link>
    </div>
  );
};

export default UserEdit;
