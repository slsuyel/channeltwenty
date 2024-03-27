import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { callApi } from '../utils/functions';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const from = location.state?.from?.pathname || "/dashboard";

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setLoading(true); // Show loader
            const res = await callApi("POST", "/api/user/login", { email, password });
            if (res.token) {
                localStorage.setItem("token", res.token);
                toast.success('Login successfully!', {
                    position: toast.POSITION.TOP_CENTER
                });
                navigate(from, { replace: true });
            } else {
                toast.error(error, {
                    position: toast.POSITION.TOP_CENTER
                });
                console.log('Login failed: Token missing in the response.');
                setError("Login failed");
            }
        } catch (error) {
            console.error("An error occurred while logging in:", error);
            setError("An error occurred while logging in");
        } finally {
            setLoading(false); // Hide loader
        }
    };

    return (
        <div className="container mt-5">
            <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
                <h2 className="mb-4 primary-bg rounded text-center text-white">Member Login</h2>
                <div className="mb-3">
                    <input
                        type="email"
                        className="border-2 border-danger form-control"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="border-2 border-danger form-control"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                </div>
                <div className='text-center'>
                    <button disabled={loading} type="submit" className="btn btn-success rounded-2 w-25">
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
