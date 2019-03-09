import React from 'react';
import cn from 'classnames';
import { login } from './services/AuthServices';
import LoginForm from './components/LoginForm';
import { User } from '../../commons/utils/user';

import s from './Auth.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }
  handleChange(field, value) {
    let state = this.state;
    state[field] = value;
    this.setState(Object.assign({}, state));
  }
  async handleSubmit(e) {
    e.preventDefault();
    const data = await login(this.state);

    if(data) {
      User.store(data.user, data.access_token);
      window.location.href = '/admin';
    }
  }
  render() {
    return (
      <div className={cn("flex-center", s["auth-page"])}>
        <div className={s["auth-block"]}>
          <h1 className={s["auth-block-title"]}>Sign In to Admin</h1>
          <LoginForm handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
        </div>
      </div>
    )
  }
}

export default Login;