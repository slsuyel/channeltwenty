import React, { useState, useEffect } from 'react';
import { callApi } from '../utilities/functions';

const useStudent = (id,api='/api/students') => {
    const [studentData, setStudentData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await callApi("GET", `${api}/${id}`);
                setStudentData(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching student data:', error);
                setIsLoading(false);
            }
        };
        fetchStudentData();
    }, [id]);

    return { studentData, isLoading };
};

export default useStudent;
