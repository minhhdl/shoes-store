import React from 'react';
import { TextField, Button } from '../../../commons/uikit';

const LoginForm = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        label={"Username"}
        onChange={(e) => handleChange("username", e.target.value)}
      />
      <TextField 
        label={"Password"}
        type="password"
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <div className="flex-center">
        <Button type="submit" onClick={handleSubmit}>Login</Button>
      </div>
    </form>
  )
}

export default LoginForm;