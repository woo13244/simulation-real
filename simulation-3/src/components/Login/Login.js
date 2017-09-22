import React, {Component} from 'react';
import logo from './logo.png';
import './Login.css'

class Login extends Component {
    render() {
      return (
    <div className="auth">
        <div className='splash-screen'>
          <img className='' src={logo}/>
          <span className='name'>Helo</span>
          <a href={process.env.REACT_APP_LOGIN}>
          <button>Login / Register</button>
          </a>
        </div>
      </div>

      );
    }
  }
  
  export default Login;
  