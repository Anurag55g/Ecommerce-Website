import React from 'react'

function SignUp() {
  return (
    <>
      <div className="heading">
        <h1> SignUp Page</h1>
      </div>
      <div className="login">
        <div className="form-floating">
          <input
            type="name"
            className="form-control"
            id="floatingPassword"
            placeholder="Name"
          />
          <label for="floatingPassword">Name</label>
        </div>
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
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Confirm Password"
          />
          <label for="floatingPassword">confirm Password</label>
        </div>
        <div className="form-floating">
          <input
            type="Number"
            className="form-control"
            id="floatingPassword"
            placeholder="Phone Number"
          />
          <label for="floatingPassword">Phone Number</label>
        </div>
        <div className="login-btn">
          <button type="button" class="btn btn-primary">
            Create Account
          </button>
        </div>
      </div>
    </>
  )
}

export default SignUp
