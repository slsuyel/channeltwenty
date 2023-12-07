import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you can add your authentication logic using the entered username and password
        console.log('Username:', username);
        console.log('Password:', password);
        // Add authentication logic here, such as sending a request to a server
    };

    return (
        <div className="container mt-5">

            <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
                <h2 className="mb-4 primary-bg rounded text-center text-white">Member Login</h2>
                <div className="mb-3">
                    <input
                        type="text"
                        className="border-2 border-danger form-control"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter your username"
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
                    <button type="submit" className="btn btn-success rounded-2 w-25">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
