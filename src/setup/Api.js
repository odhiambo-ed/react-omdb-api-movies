import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    },
});

export const getTopRatedMovies = async (page = 1) => {
    try {
        const response = await api.get(`/movie/top_rated`, {
            params: {
                language: 'en-US',
                page,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
        throw error;
    }
};