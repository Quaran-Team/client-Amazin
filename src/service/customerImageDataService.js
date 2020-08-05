import axios from 'axios'

const CUSTOMER_IMAGE_API_URL = 'http://localhost:8080/customerImages'


class CustomerImageDataService {

    retrieveAllCustomerImages() {
        return axios.get(`${CUSTOMER_IMAGE_API_URL}/`);
    }

    retrieveCustomerImage(id) {
        return axios.get(`${CUSTOMER_IMAGE_API_URL}/${id}`);
    }

}

export default new CustomerImageDataService()