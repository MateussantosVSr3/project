import {FaUser, FaLock} from "react-icons/fa";
import {useState} from "react";
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Sending datas: " +username + " - " + password);
    };

  return (
    <section className="Login" id="login">
    <div className="containerl">
        <form onSubmit={handleSubmit}>
            <h1>Access the live stream</h1>
            <div className="input-field">
                <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)}/>
                <FaUser className="icon"/>
            </div>
            <div className="input-field">
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className="icon"/>
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Remember me
                </label>
                <a href="#">Forgot password?</a>
            </div>
            <button>Enter</button>
            <div className="signup-link">
                <p>Don't have an account? <Link to="/register"><a href="#">Register</a></Link></p>
            </div>
        </form>
    </div>
    </section>
  );
};

export default Login;
