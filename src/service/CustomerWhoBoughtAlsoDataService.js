import axios from 'axios'

const CUSTOMER_WHO_BOUGHT_ALSO_API_URL = 'http://localhost:8080/customerWhoBoughtAlso'


class CustomerWhoBoughtAlsoDataService {

    retrieveAllCustomerWhoBoughtAlsos() {
        return axios.get(`${CUSTOMER_WHO_BOUGHT_ALSO_API_URL}/`);
    }

    retrieveCustomerWhoBoughtAlso(id) {
        return axios.get(`${CUSTOMER_WHO_BOUGHT_ALSO_API_URL}/${id}`);
    }

}

export default new CustomerWhoBoughtAlsoDataService()