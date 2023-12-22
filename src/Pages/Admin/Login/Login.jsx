import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    // setting focus on username input on load
    const usernameRef = useRef();
    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        if (username === 'admin' && password === 'password')
            navigate("/admin/dashboard", { replace: true })
        else
            alert('invalid credentials')
    }

    return (
        <main className="login-wrapper">
            <div>
                <h1 className="login-heading">HCI@NITT</h1>
            </div>
            <div>
                <form className="login-form" onSubmit={handleLogin}>
                    <section className="login-title">Sign in</section>
                    <section className="login-field">
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            id="username"
                            ref={usernameRef}
                            placeholder=" "
                            autoComplete="off"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="username" className="login-label">
                            Username
                        </label>
                    </section>
                    <section className="login-field">
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            id="password"
                            placeholder=" "
                            autoComplete="off"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password" className="login-label">
                            Password
                        </label>
                    </section>
                    <button className="login-btn">Login</button>
                </form>
            </div>
        </main>
    );
}

export default Login;