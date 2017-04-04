import React, { Component } from 'react';
import { Link } from 'react-router';

class managerSelector extends Component {
  constructor(props) {
    super();
    this.state = { value: (props.user.manager) ? props.user.manager.id : 0 };

    this.onChange = this.onChange.bind(this);
    this.onUserChange = props.onUserChange; //this appends the parent function
  }
  onChange(ev) {
    this.setState({ value: ev.target.value });
    this.onUserChange(this.props.user.id, ev.target.value);
  }
  render() {
    const managers = this.props.managers || [];

    const options = managers.map((manager) => {
      return (<option key={manager.id} value={manager.id}>{manager.name}</option>);
    });

    return (
      <div className="panel-body">
        <div className="form-group">
          <select className="form-control" value={this.state.value} onChange={this.onChange}>
            <option key="0" value="">None</option>
            {options}
          </select>
          <Link to="/users">Cancel</Link>
        </div>
      </div>
    );
  }
}

export default managerSelector;
