import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export const getTopRatedMovies = async (page = 1) => {
    try {
        const response = await api.get('/movie/top_rated', {
            params: {
                api_key: apiKey,
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