import React from "react";

function App() {
  return (
    <div className="main">
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="header">
          <i class="fa-brands fa-google"></i>
          <i class="fa-brands fa-twitter-square"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-instagram-square"></i>
          </div>
          <p className="divider"><span>OR</span></p>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password"  />
            <div className="check">
              <input type="checkbox" checked />
              <p>Remember me!</p>  
            </div>
            <button>Log In</button>
          </form>
          <div className="footer">
            <p>Forgot your password?</p>
            <a href="/">Reset Password</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
          <h2>Light theme</h2>
          <i class="fa-solid fa-toggle-on"></i>
        </div>

      </div>
    </div>
  );
}

export default App;
