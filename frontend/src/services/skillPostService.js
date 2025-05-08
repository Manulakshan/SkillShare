import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/skill-posts';

export const getSkillPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/getallposts`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || 'Failed to fetch posts');
    }
};

export const getSkillPostById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || 'Post not found');
    }
};

export const createSkillPost = async (postData) => {
    try {
        const response = await axios.post(`${API_URL}`, {
            userId: postData.userId,
            title: postData.title,
            description: postData.description
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || 'Failed to create post');
    }
};

export const updateSkillPost = async (id, postData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, {
            userId: postData.userId,
            title: postData.title,
            description: postData.description
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || 'Failed to update post');
    }
};

export const deleteSkillPost = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error(error.response?.data || 'Failed to delete post');
    }
};