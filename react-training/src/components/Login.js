import React from 'react';
import '../assets/css/login.css';
import background from './../assets/images/background.png';

const Login = () => {
  return (
    <div className="container login-container bg-image" style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5",
      overflow: "hidden"
    }}>
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-body">
            <h5 class="card-title" style={{color: "#fff"}}>Login</h5>
            <form>
              <div className="input-group form-group form-label-group">
                <input type="text" className="form-control" placeholder="User ID" />
              </div>
              <div className="input-group form-group form-label-group">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
                <p style={{color: "#fff"}}>Forgot password</p>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"><a href="/" style={{textDecoration: "none", color: "#fff"}}>Login</a></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
