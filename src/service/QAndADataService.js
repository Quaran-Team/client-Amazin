import axios from 'axios'

const Q_AND_A_API_URL = 'http://localhost:8080/qAndAs/'


class QAndADataService {

    retrieveAllQAndAs() {
        return axios.get(`${Q_AND_A_API_URL}/`);
    }

    retrieveQAndA(id) {
        return axios.get(`${Q_AND_A_API_URL}/${id}`);
    }

}

export default new QAndADataService()