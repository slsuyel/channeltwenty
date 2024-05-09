/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { callApi } from "../utils/functions";
import SkeletonLoader from "../components/Utilites/SkeletonLoader";

const UserCheck = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkUserAuthentication = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setAuthenticated(false);
                setLoading(false);
                return;
            }
            try {
                const response = await callApi("POST", "/api/user/check/login", { token });

                if (response.message == 'Token is valid') {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                setAuthenticated(false);
            }
            setLoading(false);
        };

        checkUserAuthentication();
    }, []);

    if (loading) {
        return <SkeletonLoader />;
    }
    return authenticated ? children : <Navigate to="/login" />;
};

export default UserCheck;
