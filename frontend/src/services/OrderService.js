import httpAxios from "../httpAxios";
const OrderService = {
    index: () => {
        return httpAxios.get(`order/index`);
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
    destroy: (id) => {
        return httpAxios.delete(`order/destroy/${id}`);
    },
    status: (id) => {
        return httpAxios.get(`order/status/${id}`);
    },
    add: (data) => {
        return httpAxios.post(`order/addProductToCart`, data);
    },
    getCart: (user_id) => {
        return httpAxios.get(`order/getCart/?user_id=${user_id}`);
    },
    details: (id) => {
        return httpAxios.get(`order/details/${id}`);
    }

}
export default OrderService