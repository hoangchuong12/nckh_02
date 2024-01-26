import httpAxios from "../httpAxios";
const TopicService = {
    index: () => {
        return httpAxios.get(`topic/index`);
    },
    show: (id) => {
        return httpAxios.get(`topic/show/${id}`);
    },

    store: (data) => {
        return httpAxios.post(`topic/store`, data);
    },
    destroy: (id) => {
        return httpAxios.delete(`topic/destroy/${id}`);
    },
    update: (data, id) => {
        return httpAxios.post(`topic/update/${id}`, data)
    },
    status: (id) => {
        return httpAxios.get(`topic/status/${id}`);
    },
}
export default TopicService