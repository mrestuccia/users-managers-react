import React, { Component } from 'react';
import { Link } from 'react-router';

class ManagerRender extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="panel-body">
        Managed By <Link to="users/edit">
          {(this.props.user.manager) ? this.props.user.manager.name : 'nobody'}
        </Link>
      </div>
    );
  }
};

export default ManagerRender;