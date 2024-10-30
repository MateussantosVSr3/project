import {FaUser, FaLock, FaPhone} from "react-icons/fa";
import {useState} from "react";
import "./Register.css";

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Sending datas: " +username + " - " + password + " - " + number);
    };

  return (
    <section className="Register" id="register">
    <div className="containerr">
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-field">
                <input type="name" placeholder="Complete Name" onChange={(e) => setUsername(e.target.value)}/>
                <FaUser className="icon"/>
            </div>
            <div className="input-field">
                <input type="number" placeholder="Telephone" onChange={(e) => setNumber(e.target.value)}/>
                <FaPhone className="icon"/>
            </div>
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
                    Accept Terms
                </label>
            </div>
            <button>Register</button>
        </form>
    </div>
    </section>
  );
};

export default Register;
