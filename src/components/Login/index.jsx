import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = 'kaskioua@gmail.com'
  const adminPass = '123AZE@@'
  const [email, setEmail] = useState(adminEmail)
  const [password, setPassword] = useState(adminPass)

  const handelLogin = (e) => {
    e.preventDefault()
    if (email === adminEmail && password === adminPass) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true)
          setIsAuthenticated(true)
          Swal.fire({
            icon: 'success',
            title: 'successfuly logged in',
            showConfirmButton: false,
            timer: 1500,
          })
        },
      })
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'iconrect email or password',
            showConfirmButton: true,
          })
        },
      })
    }
  }

  return (
    <div className="small-container">
      <form onSubmit={handelLogin}>
        <h1>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="kamalaskioua@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="123AZE@@"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input style={{ marginTop: '12px' }} type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
