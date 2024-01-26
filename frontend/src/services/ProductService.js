import httpAxios from "../httpAxios";
const productService = {
    index: () => {
        return httpAxios.get(`product/index`);
    },
    sale: () => {
        return httpAxios.get(`product/sale`);
    },
    import: () => {
        return httpAxios.get(`product/import`);
    },
    show: (id) => {
        return httpAxios.get(`product/show/${id}`);
    },
    store: (data) => {
        return httpAxios.post(`product/store`, data);
    },
    storeSale: (data) => {
        return httpAxios.post(`product/storesale`, data);
    },
    storeImport: (data) => {
        return httpAxios.post(`product/storeimport`, data);
    },
    update: (data, id) => {
        return httpAxios.post(`product/update/${id}`, data)
    },
    updateSale: (data, id) => {
        return httpAxios.post(`product/updatesale/${id}`, data)
    },
    showSale: (id) => {
        return httpAxios.get(`product/showsale/${id}`)
    },
    destroy: (id) => {
        return httpAxios.delete(`product/destroy/${id}`);
    },
    destroySale: (id) => {
        return httpAxios.delete(`product/destroysale/${id}`);
    },
    status: (id) => {
        return httpAxios.get(`product/status/${id}`);
    },
    productnew: (limit) => {
        return httpAxios.get(`product/productnew/${limit}`);
    },
    productsale: (limit) => {
        return httpAxios.get(`product/productsale/${limit}`);
    },
    productHot: (limit) => {
        return httpAxios.get(`product/producthotbuy/${limit}`);
    },
    productcategory: (category_id) => {
        return httpAxios.get(`product/getByCategory/${category_id}`);
    },

    indexpagination: (page, perPage) => {
        return httpAxios.get('product/indexpagination', {
            params: {
                page: page,
                perPage: perPage
            }
        });
    },
    productbrand: (brand_id) => {
        return httpAxios.get(`product/getByBrand/${brand_id}`);
    },
  
}
export default productService