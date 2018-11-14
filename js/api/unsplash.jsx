import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 619c181c3337954d2d0ccc5d14bac30079fd45a2e7a8eb36523ea0df26771886'
    }
});