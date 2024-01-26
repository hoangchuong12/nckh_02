import httpAxios from "../httpAxios";
import axios from "axios";

const MenuService = {
    index: () => {
        return httpAxios.get(`menu/index`);
    },
    show: (id)=>{
        return httpAxios.get(`menu/show/${id}`);
    },
    store: (menu) =>{
        return httpAxios.post(`menu/store`, menu);
    },
    update: (data, id )=> {
        return httpAxios.post(`menu/update/${id}`, data)
    },
  
    destroy: (id)=> {
        return httpAxios.delete(`menu/destroy/${id}`);
    },
    status: (id) =>{
        return httpAxios.get(`menu/status/${id}`);
    },
}
export default MenuService