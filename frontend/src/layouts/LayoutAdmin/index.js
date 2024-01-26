import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LayoutAdminStyle.css';

const LayoutAdmin = () => {
   function handleItemClick(item) {
      const hdlitem = document.getElementById(item);
      hdlitem.classList.toggle("active");
   }
    return(
        <>
            <section className="hdl-header sticky-top">
      <div className="container-fluid">
         <ul className="menutop">
            <li>
               <a href="#chuong">
                  <i className="fa-brands fa-dashcube"></i> Shop Thời trang
               </a>
            </li>
            <li className="text-phai">
               <a href="#chuong">
                  <i className="fa-solid fa-power-off"></i> Thoát
               </a>
            </li>
            <li className="text-phai">
               <a href="#chuong">
                  <i className="fa fa-user" aria-hidden="true"></i> Chào quản lý
               </a>
            </li>
         </ul>
      </div>
   </section>
   <section className="hdl-content">
      <div className="container-fluid">
         <div className="row">
            <div className="col-md-2 bg-dark p-0 hdl-left">
               <div className="hdl-left">
                  <div className="dashboard-name">
                     Bản điều khiển
                  </div>
                  <nav className="m-2 mainmenu">
                     <ul className="main">
                     <li class="hdlitem item-sub" id="item1" onClick={() => handleItemClick('item1')}>
                           <i className="fa-brands fa-product-hunt icon-left"></i>
                           <h4 style={{color:'white'}} >Sản phẩm</h4>
                           <i className="fa-solid fa-plus icon-right"></i>
                           <ul className="submenu">
                              <li>
                                 <a href="http://localhost:3000/admin/product/index">Tất cả sản phẩm</a>
                              </li>
                              <li>
                                 <a href="http://localhost:3000/admin/product/import">Nhập hàng</a>
                              </li>
                              <li>
                                 <a href="category_index.html">Danh mục</a>
                              </li>
                              <li>
                                 <a href="brand_index.html">Thương hiệu</a>
                              </li>
                              <li>
                                 <a href="http://localhost:3000/admin/product/sale">Khuyễn mãi</a>
                              </li>
                           </ul>
                        </li>
                        <li className="hdlitem item-sub">
                           <i className="fa-brands fa-product-hunt icon-left"></i>
                           <a href="#chuong">Bài viết</a>
                           <i className="fa-solid fa-plus icon-right"></i>
                           <ul className="submenu">
                              <li>
                                 <a href="post_index.html">Tất cả bài viết</a>
                              </li>
                              <li>
                              <a href="topic_index.html">Chủ đề</a>
                              </li>
                              <li>
                                 <a href="page_index.html">Trang đơn</a>
                              </li>
                           </ul>
                        </li>
                        <li className="hdlitem item-sub">
                           <i className="fa-brands fa-product-hunt icon-left"></i>
                           <a href="#chuong">Quản lý bán hàng</a>
                           <i className="fa-solid fa-plus icon-right"></i>
                           <ul className="submenu">
                              <li>
                                 <a href="order_index.html">Tất cả đơn hàng</a>
                              </li>
                              <li>
                                 <a href="order_export.html">Xuất hàng</a>
                              </li>
                           </ul>
                        </li>
                        <li className="hdlitem">
                           <i className="fa-regular fa-circle icon-left"></i>
                           <a href="customer_index.html">Khách hàng</a>
                        </li>
                        <li className="hdlitem">
                           <i className="fa-regular fa-circle icon-left"></i>
                           <a href="contact_index.html">Liên hệ</a>
                        </li>
                        <li className="hdlitem item-sub">
                           <i className="fa-brands fa-product-hunt icon-left"></i>
                           <a href="#chuong">Giao diện</a>
                           <i className="fa-solid fa-plus icon-right"></i>
                           <ul className="submenu">
                              <li>
                                 <a href="menu_index.html">Menu</a>
                              </li>
                              <li>
                                 <a href="banner_index.html">Banner</a>
                              </li>
                           </ul>
                        </li>
                        <li className="hdlitem item-sub">
                           <i className="fa-brands fa-product-hunt icon-left"></i>
                           <a href="#chuong">Hệ thống</a>
                           <i className="fa-solid fa-plus icon-right"></i>
                           <ul className="submenu">
                              <li>
                                 <a href="user_index.html">Thành viên</a>
                              </li>
                              <li>
                                 <a href="config_index.html">Cấu hình</a>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
            <div className="col-md-10">
               <div className="content">
     
                  <section className="content-body my-2">
                        <Outlet />
                  </section>
               </div>
            </div>
         </div>
      </div>
   </section>
         
        </>
    );
    
};
export default LayoutAdmin;