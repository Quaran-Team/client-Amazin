import axios from 'axios'

const CUSTOMER_REVIEWS_API_URL = 'http://localhost:8080/customerReviews'

class customerReviewsDataService {

    retrieveAllCustomerReviews() {
        //axios.get calls the REST API with the GET method
        return axios.get(`${CUSTOMER_REVIEWS_API_URL}/`);
    }

    retrieveCustomerReviews(id) {
        return axios.get(`${CUSTOMER_REVIEWS_API_URL}/${id}`);
    }

}

export default new customerReviewsDataService()
//creating an instance of custRevDataService & making it available for other components