import Input from '../components/input/input.jsx'
import '../components/style/Login.css'
import Button from '../components/Button/Button.jsx'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  return (
    <div>
      <LoginCard></LoginCard>
    </div>
  );
};

export default Login;