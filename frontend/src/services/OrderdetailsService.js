import httpAxios from "../httpAxios";
const OrderService = {
    index: () => {
        return httpAxios.get(`order/indexByUser`);
    },
    show: (id) => {
        return httpAxios.get(`order/show/${id}`);
    },
    get: (id) => {
        return httpAxios.get(`order/get/${id}`);
    },
    store: (data) => {
        return httpAxios.post(`order/store`, data);
    },
    add: (data) => {
        return httpAxios.post(`order/addProductToCart`, data);
    },
   
  
}
export default OrderService