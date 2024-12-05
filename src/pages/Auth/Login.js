import React, { useState } from 'react'
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { Link, useNavigate, } from 'react-router-dom';
import { Input, message, Space } from 'antd';

import { useAuthContext } from '../../contexts/AuthContext';


export default function Login() {
  const navigate = useNavigate()

  const { dispatch } = useAuthContext()
  const [state, setState] = useState({ email: "", password: "" })

  const handleEmail = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
  const handlePassword = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = () => {

    console.log('state', state)

    let { email, password } = state
    const users = JSON.parse(localStorage.getItem("users")) || []

    let user = users.find(user => user.email === email)
    console.log('user', user)

    if (user) {
      if (user.password === password) {
        dispatch({ type: "SET_LOGGED_IN", payload: { user } });
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(user));
        message.success("Login successfully"); // Change to success message
        // Use navigate here
        navigate("/products");
      } else {
        message.error("Password doesn't match");
      }
    } else {
      message.error("User not found");
    }
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">

            <div className="outer w-100">
              <div className='login-styling'>
                <h2 className='text-white text-center'>Login</h2>

                <label htmlFor="email" className='text-white'>Email:</label>

                <Input size="large" name="email" placeholder="Email" value={state.email} onChange={handleEmail} required prefix={<MailOutlined />} />

                <label htmlFor="password:" className='text-white'>Password:</label>

                <Space direction="vertical">
                  <Input.Password size='large' name='password' placeholder="Password" onChange={handlePassword} prefix={<LockOutlined />} />
                </Space>


                <div className="row text-center ms-2 me-2 mt-4">
                  <div className="col">
                    <button className='btn btn-success ' onClick={handleSubmit}>Login</button>
                  </div>
                  <div className="col mt-2">
                    <Link to="/auth/forgotPassword">Forgot Password</Link>
                  </div>
                </div>
                <div className="row mt-2">

                  <div className="col text-center text-white">
                    <p>Don't have an account?                      
                      <Link to="/auth/register" style={{color:"#83c5be"}} >Register here!</Link>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

