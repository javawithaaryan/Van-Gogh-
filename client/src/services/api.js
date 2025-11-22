import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getArtworks = async () => {
    try {
        const response = await axios.get(`${API_URL}/artworks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching artworks:', error);
        return [];
    }
};

export const getTimeline = async () => {
    try {
        const response = await axios.get(`${API_URL}/timeline`);
        return response.data;
    } catch (error) {
        console.error('Error fetching timeline:', error);
        return [];
    }
};

export const getLetters = async () => {
    try {
        const response = await axios.get(`${API_URL}/letters`);
        return response.data;
    } catch (error) {
        console.error('Error fetching letters:', error);
        return [];
    }
};

export const getStories = async () => {
    try {
        const response = await axios.get(`${API_URL}/stories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching stories:', error);
        return [];
    }
};
