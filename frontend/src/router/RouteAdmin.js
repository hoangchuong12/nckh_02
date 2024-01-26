import BrandEdit from "../pages/backend/brand/BrandEdit"
import BrandIndex from "../pages/backend/brand/BrandIndex"
import CategoryEdit from "../pages/backend/category/CategoryEdit"
import CategoryIndex from "../pages/backend/category/CategoryIndex"
import MenuEdit from "../pages/backend/menu/MenuEdit"
import MenuIndex from "../pages/backend/menu/MenuIndex"
import OrderEdit from "../pages/backend/order/OrderEdit"
import OrderIndex from "../pages/backend/order/OrderIndex"
import OrderShow from "../pages/backend/order/OrderShow"
import productEdit from "../pages/backend/product/ProductEdit"
import ProductImport from "../pages/backend/product/ProductImport"
import ProductIndex from "../pages/backend/product/ProductIndex"
import ProductCreate from "../pages/backend/product/ProductCreate"
import ProductSale from "../pages/backend/product/ProductSale"
import ProductEditSale from "../pages/backend/product/ProductEditSale"
import ProductStoreSale from "../pages/backend/product/ProductStoreSale"
import TopicIndex from "../pages/backend/topic/TopicIndex"
import TopicEdit from "../pages/backend/topic/TopicEdit"
import PostIndex from "../pages/backend/post/PostIndex"
import PostEdit from "../pages/backend/post/PostEdit"
import PageIndex from "../pages/backend/page/PageIndex"
import PageEdit from "../pages/backend/page/PageEdit"
import PageCreate from "../pages/backend/page/PageCreate"



const RouteAdmin = [
    { path: '/admin/brand/index', component: BrandIndex },
    { path: '/admin/brand/edit/:id', component: BrandEdit },
    //menu
    { path: '/admin/menu/index', component: MenuIndex },
    { path: '/admin/menu/edit/:id', component: MenuEdit },

    //order
    { path: '/admin/order/index', component: OrderIndex },
    { path: '/admin/order/edit/:id', component: OrderEdit },
    { path: '/admin/order/show/:id', component: OrderShow },

    //category
    { path: '/admin/category/index', component: CategoryIndex },
    { path: '/admin/category/edit/:id', component: CategoryEdit },

    //product
    { path: '/admin/product/index', component: ProductIndex },
    { path: '/admin/product/edit/:id', component: productEdit },
    { path: '/admin/product/import', component: ProductImport },
    { path: '/admin/product/create', component: ProductCreate },
    { path: '/admin/product/sale', component: ProductSale },
    { path: '/admin/product/editsale/:id', component: ProductEditSale },
    { path: '/admin/product/storesale/:id', component: ProductStoreSale },

    //category
    { path: '/admin/category/index', component: CategoryIndex },
    { path: '/admin/category/edit/:id', component: CategoryEdit },
    //topic
    { path: '/admin/topic/index', component: TopicIndex },
    { path: '/admin/topic/edit/:id', component: TopicEdit },
    //post
    { path: '/admin/post/index', component: PostIndex },
    { path: '/admin/post/edit/:id', component: PostEdit },

    //page
    { path: '/admin/page/index', component: PageIndex },
    { path: '/admin/page/edit/:id', component: PageEdit },
    { path: '/admin/page/create', component: PageCreate },



]
export default RouteAdmin;