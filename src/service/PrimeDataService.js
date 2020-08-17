import axios from 'axios'

const PRIME_API_URL = 'http://localhost:8080/prime'


class PrimeDataService {

    retrieveAllPrimes() {
        return axios.get(`${PRIME_API_URL}/`);
    }

    retrievePrime(id) {
        return axios.get(`${PRIME_API_URL}/${id}`);
    }

}

export default new PrimeDataService()