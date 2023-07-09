import React from 'react'

function Login() {
  return (
    <>
      <div className="heading">
        <h1> Login Page</h1>
      </div>
      <div className="login">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="login-btn">
          <button type="button" class="btn btn-primary">
            Login
          </button>
          <button type="button" class="btn btn-primary">
            LogOut
          </button>
        </div>
      </div>
    </>
  )
}
export default Login
