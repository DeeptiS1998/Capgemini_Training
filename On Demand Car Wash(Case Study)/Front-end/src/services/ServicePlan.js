import axios from 'axios';

const SERVICE_API_BASE_URL = "http://localhost:7070/api/v1/servicePlan";


class ServicePlan {

    getService(){
        return axios.get(SERVICE_API_BASE_URL);
    }
    createService(service){
        return axios.post(SERVICE_API_BASE_URL, service);
    }

    getserviceById(serviceplanId){
        return axios.get(SERVICE_API_BASE_URL + '/' + serviceplanId);
    }

    updateService(service , serviceplanId){
        return axios.put(SERVICE_API_BASE_URL + '/' +  serviceplanId,service);
    }

    deleteService(serviceplanId){
        return axios.delete(SERVICE_API_BASE_URL + '/' + serviceplanId);
    }

}

export default new ServicePlan()