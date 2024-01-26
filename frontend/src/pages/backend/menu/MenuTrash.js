import { MenuService } from "src/services"
import LoadingSpinner from "src/components/LoadingSpinner";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaUndo } from "react-icons/fa";
import { toast } from 'react-toastify';

const MenuTrash = () => {
   const [load, setLoad] = useState(0);
   const [menus, setMenus] = useState([]);
   const [countall, setCountAll] = useState(0);
   const [counttrash, setCountTrash] = useState(0);
   const [isLoading, setIsLoading] = useState(false);
   useEffect(function () {
      (async function () {
         setIsLoading(true);
         const result = await MenuService.getListMenu('index');
         setMenus(result.menus);
         setCountAll(result.count_all);
         setCountTrash(result.count_trash);
         setIsLoading(false);
         console.log(result.menus);
      })();
   }, [load])
   //restore
   const handleRestore = (id) => {
      (async function () {
         const result = await MenuService.restoreContact(id);
         if (result.status === true) {
            setLoad(Date.now());
            toast.success(result.message);
         }
      })();
   }
   //destroy
   const handleDestroy = (id) => {
      (async function () {
         const result = await MenuService.destroyContact(id);
         if (result.status === true) {
            setLoad(Date.now());
            toast.success(result.message);
         }
      })();
   }
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Thùng rác menu</h1>
            <div className="row mt-3 align-items-center">
               <div className="col-6">
                  <ul className="manager">
                     <li>
                        <Link to="/admin/menu">Tất cả ({countall})</Link>
                     </li>
                     <li>
                        <Link to="#">Xuất bản (12)</Link>
                     </li>
                     <li>
                        <Link to="/admin/menu/trash">Rác ({counttrash})</Link>
                     </li>
                  </ul>
               </div>
               <div className="col-6 text-end">
                  <input type="text" className="search d-inline" />
                  <button className="d-inline btnsearch">Tìm kiếm</button>
               </div>
            </div>
            <div className="row mt-1 align-items-center">
               <div className="col-md-8">
                  <select name="" className="d-inline me-1">
                     <option value="">Hành động</option>
                     <option value="">Bỏ vào thùng rác</option>
                  </select>
                  <button className="btnapply">Áp dụng</button>
                  <select name="" className="d-inline me-1">
                     <option value="">Tất cả danh mục</option>
                  </select>
                  <select name="" className="d-inline me-1">
                     <option value="">Tất cả thương hiệu</option>
                  </select>
                  <button className="btnfilter">Lọc</button>
               </div>
               <div className="col-md-4 text-end">
                  <nav aria-label="Page navigation example">
                     <ul className="pagination pagination-sm justify-content-end">
                        <li className="page-item disabled">
                           <Link className="page-link">&laquo;</Link>
                        </li>
                        <li className="page-item">
                           <Link className="page-link" to="#">1</Link>
                        </li>
                        <li className="page-item">
                           <Link className="page-link" to="#">2</Link>
                        </li>
                        <li className="page-item">
                           <Link className="page-link" to="#">3</Link>
                        </li>
                        <li className="page-item">
                           <Link className="page-link" to="#">&raquo;</Link>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </section>
         <section className="content-body my-2">
            {isLoading ? <LoadingSpinner /> : ""}
            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th className="text-center" style={{ width: "30px" }}>
                        <input type="checkbox" />
                     </th>
                     <th>Tên menu</th>
                     <th>Liên kết</th>
                     <th>Vị trí</th>
                     <th className="text-center" style={{ width: "30px" }}>ID</th>
                  </tr>
               </thead>
               <tbody>
                  {menus && menus.map((menu, index) => {
                     return (
                        <tr className="datarow" key={index}>
                           <td className="text-center">
                              <input type="checkbox" />
                           </td>
                           <td>
                              <div className="name">
                                 <Link to={'/admin/menu/edit/' + menu.id}>
                                    {menu.name}
                                 </Link>
                              </div>
                              <div className="function_style">
                                 <button onClick={() => handleRestore(menu.id)} className="border-0 px-1 text-danger"><FaUndo /></button>
                                 <button onClick={() => handleDestroy(menu.id)} className="border-0 px-1 text-danger"><FaTrashAlt /></button>
                              </div>
                           </td>
                           <td>{menu.link}</td>
                           <td>{menu.position}</td>
                           <td className="text-center">{menu.id}</td>
                        </tr>);
                  })}
               </tbody>
            </table>
         </section>
      </div>
   );
}

export default MenuTrash;