import axios from 'axios';

const WASHER_API_BASE_URL = "http://localhost:9595/api/v1/washers";

class WasherService {

    getWasher(){
        return axios.get(WASHER_API_BASE_URL);
    }
    createWasher(washer){
        return axios.post(WASHER_API_BASE_URL, washer);
    }
    getWasherId(id){
        return axios.get(WASHER_API_BASE_URL+ '/'+ id);
    }

    updateWasher(washer, id){
        return axios.put(WASHER_API_BASE_URL+ '/' + id, washer);
    }

    deleteWasher(id){
        return axios.delete( WASHER_API_BASE_URL+ "/"+ id);
    }


}

export default new WasherService()