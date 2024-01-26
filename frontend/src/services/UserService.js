import httpAxios from "../httpAxios";
import axios from "axios";

const UserService = {
    index: () => {
        return httpAxios.get(`user/index`);
    },
    show: (id)=>{
        return httpAxios.get(`user/show/${id}`);
    },
    store: (data) =>{
        return httpAxios.post(`user/store`, data);
    },
    update: (data, id )=> {
        return httpAxios.post(`user/update/${id}`, data)
    },
    add: (data, id )=> {
        return httpAxios.post(`user/update/${id}`, data)
    },
    destroy: (id)=> {
        return httpAxios.delete(`user/delete/${id}`);
    },
    status: (id) =>{
        return httpAxios.get(`user/status/${id}`);
    },
    login: (user) => {
        return httpAxios.post(`user/login`, user);
    },
    
}
export default UserService