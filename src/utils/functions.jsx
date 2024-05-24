import axios from 'axios';
import { baseUrl } from '../baseurl/BaseUrl';

export const callApi = async (method, url, dataObj = [], headers = {}, bUrl = true) => {
    const apiUrl = bUrl ? `${baseUrl}${url}` : `${url}`
    try {
        headers.Authorization = `Bearer ${localStorage.getItem("token")}`
        const response = await axios({
            method: method,
            url: apiUrl,
            data: dataObj,
            headers: headers
        });

        if (response.data.status == 403) {
            window.location.href = '/403/forbidden-page'
        }


        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response;
        } else {
            console.error('Error making API call:', error);
            return null;
        }
    }
};




export const organizeCategories = (categories) => {
    const organizedCategories = {};

    categories.forEach(category => {
        if (!category.parent_id) {
            organizedCategories[category.id] = { ...category, children: [] };
        } else {
            if (organizedCategories[category.parent_id]) {
                organizedCategories[category.parent_id].children.push({ ...category, children: [] });
            } else {
                console.error(`Parent category with ID ${category.parent_id} not found for category ${category.id}`);
            }
        }
    });

    return Object.values(organizedCategories);
};



export const checkPermit = (permissions, targetPath) => {
    return permissions.some(item => item.path === targetPath);
}


