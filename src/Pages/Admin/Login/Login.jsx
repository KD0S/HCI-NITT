import { useState } from 'react'
import './Login.css'
import { Alert, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleLogin = () => {
        if ((username === 'admin') && (password === 'password'))
            navigate('/admin/dashboard')
        else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div>
            <div>{error ? <Alert severity="error" variant='filled'><strong>Invalid Credentials</strong></Alert> : null}</div>
            <div className='login'>
                <h1 className='login-header'>HCI@NITT</h1>
                <div className='login-form'>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                required
                                id="username"
                                label="Username"
                                variant='standard'
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="password"
                                label="Password"
                                type='password'
                                variant='standard'
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div id='btn'>
                            <Button variant='contained'
                                onClick={handleLogin}>Login</Button>
                        </div>
                    </Box>
                </div>
            </div>
        </div >
    )
}

export default Login