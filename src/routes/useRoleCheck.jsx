import { useState, useEffect } from 'react';
import { callApi } from '../utils/functions';
import { Navigate } from 'react-router';

const useRoleCheck = () => {
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return <Navigate to="/login" />;
            }
            try {
                const response = await callApi('POST', '/api/user/check/login', { token });
                if (response.message === 'Token is valid') {
                    setRole(response.user);
                }
            } catch (error) {
                setRole(null);
            }
            setLoading(false);
        };

        checkToken();
    }, []);

    return { role, loading };
};

export default useRoleCheck;
