import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import axios from 'axios';

// Custom Component
import Home from './Home';
import Users from './Users';



// Main Component
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      managers: []
    };
    // Context Binding
    this.onUserChange = this.onUserChange.bind(this);
  }
  componentDidMount() {
    axios.get('/api/users')
      .then(users => (users.data))
      .then(users => { this.setState({ users }); });

    axios.get('/api/managers')
      .then(managers => (managers.data))
      .then(managers => { this.setState({ managers }); });
  }
  onUserChange(id, managerId) {
    axios.put(`/api/users/${id}`, { managerId })
      .then(() => { return axios.get('/api/users'); })
      .then(users => (users.data))
      .then(users => { return this.setState({ users }); })
      .then(() => { return hashHistory.push('/users'); });
  }
  render() {
    const active = (pathname) => this.props.router.location.pathname === pathname;
    const obj = Object.assign({}, this.state, { onUserChange: this.onUserChange, location: this.props.router.location.pathname });
    return (
      <div className="container">
        <h1>Users Managers React</h1>
        <ul className="nav nav-tabs" style={{ marginBottom: '10px' }}>
          <li className={active('/') ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={(active('/users') || active('/users/edit')) ? 'active' : ''}>
            <Link to="/users">Users ({this.state.users.length})</Link>
          </li>
        </ul>
        {this.props.children && React.cloneElement(this.props.children, obj)}
      </div>
    );
  }
}

// Render to root element
const root = document.getElementById('root');

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/users/edit" component={Users} />
    </Route>
  </Router>
);

ReactDOM.render(router, root);
