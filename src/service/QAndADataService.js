import axios from 'axios'

const Q_AND_A_API_URL = 'http://localhost:8080/qAndAs/'
const ANSWERS_API_URL = 'http://localhost:8080/answers/'


class QAndADataService {

    retrieveAllQAndAs() {
        return axios.get(`${Q_AND_A_API_URL}/`);
    }

    retrieveQAndA(id) {
        return axios.get(`${Q_AND_A_API_URL}/${id}`);
    }

    retrieveAllAnswers() {
        return axios.get(`${ANSWERS_API_URL}/`)
    }

}

export default new QAndADataService()