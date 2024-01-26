import Home from "../pages/frontend/Home";
import productshow from './../pages/frontend/product/productshow';
import ProductCategory from './../pages/frontend/product/ProductCategory'
import ProductBrand from './../pages/frontend/product/ProductBrand'
import Login from "../pages/frontend/login/Login";
import Cart from "../pages/frontend/cart/cart";
import contact from "../pages/frontend/contact/contact";
import ProductCard from "../pages/frontend/product/ProductCard";
import Register from "../pages/frontend/Register/Register";

const RouteSite = [
    { path: '/', component: Home},
    { path: '/productshow/:id', component: productshow},
    { path: '/productshow/category/:category_id', component: ProductCategory},
    { path: '/productshow/brand/:brand_id', component: ProductBrand},
    { path: '/login', component: Login},
    { path: '/cart', component: Cart},
    { path: '/contact', component: contact},
    { path: '/all products', component: ProductCard},
    { path: '/Register', component: Register}

];
export default RouteSite;