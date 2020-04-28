import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';

const API_KEY = '317b43ddb7e19b9eae9f67bcbd4fa317';

export default function FetchAPI(endpoint, method= 'GET', body){
    return axios({
        method,
        url: `${API_URL}${endpoint}`,
        data: body,
        params: {
            api_key: API_KEY,
        }
    });
}