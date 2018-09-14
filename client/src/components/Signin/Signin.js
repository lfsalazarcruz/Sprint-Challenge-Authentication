import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
  state = {
    username: '',
    password: ''
};

render() {
  return (
      <form>
        <div className="input-container">
          <input
            name="username"
            value={ this.state.username }
            onChange={ this.handleChange }
            type="text"
          />
        </div>
        <div>
          <input
            name="password"
            value={ this.state.password }
            onChange={ this.handleChange }
            type="password"
          />
        </div>
        <div>
          <button type="submit">LOG IN</button>
        </div>
      </form>
    );
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  signin = event => {
    event.preventDefault();

    axios
      .post('http:localhost:3300/api/login', this.state)
      .then(res => {
        console.log('response:', res);
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/users');
      })
      .catch(err => {
        this.props.history.push('/signin');
        console.error('response:', err)
      })
  }
}

export default Signin;