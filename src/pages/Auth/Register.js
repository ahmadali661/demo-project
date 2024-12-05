import React, { useState } from 'react'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Space, Button, message } from 'antd';
import { Link } from 'react-router-dom';


export default function Register() {

  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleFullName = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
  const handleEmail = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
  const handlePassword = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
  const handleConfirmPassword = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleRegister = () => {

    let { fullName, email, password, confirmPassword } = state

    fullName = fullName.trim()
    email = email.trim()

    if (fullName.length < 3) { return message.error("Please Enter Your Full Name") }
    // if (emailRegex.test(email)) { return alert("Please Enter Your Correct Email") }
    if (password.length < 6) { return message.error("Password must be atleast six charactrs") }
    // if (password !== confirmPassword) { return alert("Confirm Password dos't Match") }
    if (password !== confirmPassword) { return message.error("Confirm Password doesn't Match"); }


    const user = { fullName, email, password, confirmPassword }

    const users = JSON.parse(localStorage.getItem("users")) || []

    let isFound = users.find(u => u.email === user.email)

    if (!isFound) {
      users.push(user)
      localStorage.setItem("users", JSON.stringify(users));
      message.success("User added")

      setState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } else {
      message.error("user aleady exist")
    }
  }


  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">

            <div className="outer w-100">
              <div className='register-styling'>
                <h2 className='text-white text-center'>Register</h2>

                <label htmlFor="userName" className='text-white'>User Name:</label>
                <Input size="large" name="fullName" placeholder="User Name" value={state.fullName} onChange={handleFullName} required prefix={<UserOutlined />} />

                <label htmlFor="email" className='text-white'>Email:</label>
                <Input size="large" name="email" placeholder="Email" value={state.email} onChange={handleEmail} required prefix={<MailOutlined />} />


                <label htmlFor="password:" className='text-white'>Password:</label>
                <Space direction="vertical">
                  <Input.Password size='large' name='password' placeholder="Password" value={state.password} onChange={handlePassword} required prefix={<LockOutlined />} />
                </Space>


                <label htmlFor="password:" className='text-white'>Confirm Password:</label>
                <Space direction="vertical">
                  <Input.Password size='large' name='confirmPassword' placeholder="Confirm Password" value={state.confirmPassword} onChange={handleConfirmPassword} required prefix={<LockOutlined />} />
                </Space>


                <div className="row text-center ms-2 me-2 mt-4">
                  <div className="col ">
                    <button className='btn btn-success w-100' onClick={handleRegister}>Register</button>
                  </div>
                </div>
                <div className="row">

                <div className="col text-center mt-2">
                  <p> <span className='text-white'>Already have an acount?</span> 

                  <Link to="/auth/login" style={{color:"#83c5be"}} >Login!</Link>
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
