import React from "react";
import useLocalStorage from "use-local-storage";
import './index';


function App() {


  const[theme, setTheme] = useLocalStorage("theme" ? "Dark" : "Light");

  const themeName = theme;
  const onSwitch = () => {
    const newTheme = theme === "Light" ? "Dark" : "Light";
    setTheme(newTheme);
    themeName = newTheme;
  }
  
  
  return (
    <div className="main" dark-theme={theme}>
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
          <h3>{themeName} Mode</h3>
          <i class="fa-solid fa-toggle-on" onClick={onSwitch}></i>
        </div>

      </div>
    </div>
  );
}

export default App;
