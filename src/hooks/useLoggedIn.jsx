
import { useState, useEffect } from "react";
import { callApi } from "../utilities/functions";

const useLoggedIn = () => {
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
                const response = await callApi("POST", "/api/check/student/login", { token });
                console.log(response);
                if (response.message === "Token is valid") {
                    localStorage.setItem("studentId", response.student.id);
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

    return { authenticated, loading };
};

export default useLoggedIn;
