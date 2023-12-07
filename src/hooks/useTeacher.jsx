import React, { useState, useEffect } from 'react';
import { callApi } from '../utilities/functions';

const useTeacher = (id) => {
    const [teacherData, setTeacherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTeacherData = async () => {
            try {
                const response = await callApi("GET", `/api/teachers/${id}`);
                setTeacherData(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching student data:', error);
                setIsLoading(false);
            }
        };
        fetchTeacherData();
    }, [id]);

    return { teacherData, isLoading };
};

export default useTeacher;
