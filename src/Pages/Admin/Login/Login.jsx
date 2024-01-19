import { useState, useEffect, useRef } from "react";
import Alert from '../../../Components/Alert/Alert'
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    // setting focus on username input on load
    const usernameRef = useRef();
    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        const host = "students.nitt.edu"

        const data = {
            'app': '',
            'login_post': '1',
            'url': '',
            'anchor_string': '',
            'horde_user': username,
            'horde_pass': password,
            'horde_select_view': 'auto',
        }

        fetch('https://students.nitt.edu/horde/login.php', {
            method: "POST",
            mode: 'cors',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Language': 'en-GB,en;q=0.9,fr;q=0.8,ta-IN;q=0.7,ta;q=0.6,en-US;q=0.5,hi;q=0.4',
                'Cache-Control': 'max-age=0',
                'Connection': 'keep-alive',
                'Origin': 'https://' + host,
                'Referer': 'https://students.nitt.edu/horde/login.php',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-User': '?1',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
                'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Linux"',
            },
            data
        }).then((res) => {
            if (res.url === 'https://students.nitt.edu/horde/login.php') {
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000)
            }
            else
                navigate("/admin/dashboard", { replace: true })
        })
    }

    return (
        <main className="login-wrapper">
            {error ? <Alert type={'error'} message={'Invalid Credentials'}></Alert> : null}
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