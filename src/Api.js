const API_KEY = 'kdu6Klk468L6onsdq8iPdqJRbVFAJYIa'; 
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';

export const fetchArticles = async (period = 7) => {
    try {
        const response = await fetch(`${BASE_URL}/${period}.json?api-key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log('Fetched Articles:', data.results); 
        return data.results;
    } catch (err) {
        console.error('Error fetching articles:', err);
        return [];
    }
};