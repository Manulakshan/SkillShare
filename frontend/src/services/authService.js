import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/auth';

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password
        });
        
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(response.data));
        
        return response.data;
    } catch (error) {
        // Handle different types of errors
        if (error.response) {
            // Server returned an error response
            const errorMessage = typeof error.response.data === 'string' 
                ? error.response.data 
                : error.response.data?.message || 'An error occurred during login';
            throw new Error(errorMessage);
        } else if (error.request) {
            // Request was made but no response was received
            throw new Error('No response received from server');
        } else {
            // Something happened in setting up the request
            throw new Error('Error setting up the request');
        }
    }
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data?.message || 'Registration failed');
        }
        throw new Error('Error during registration');
    }
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};
