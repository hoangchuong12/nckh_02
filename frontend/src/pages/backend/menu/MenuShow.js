import { Link, useParams } from "react-router-dom";
import { MenuService } from "src/services"
import { useEffect, useState } from "react";
import { FaArrowLeft, FaEdit, FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';

const MenuShow = () => {
   const { id } = useParams();
   const [menu, setMenu] = useState([]);
   useEffect(() => {
      (async function () {
         const result = await MenuService.getListMenu(id);
         setMenu(result.menu)
         // console.log(result.menu);
      })();
   }, [id])
   //deleteMenu
   const handleDelete = (id) => {
      (async function () {
         const result = await MenuService.deleteMenu(id);
         if (result.status === true) {
            toast.success(result.message);
         }
      })();
   }
   return (
      <div className="content">
         <section className="content-header my-2">
            <h1 className="d-inline">Chi tiết</h1>
            <div className="row mt-2 align-items-center">
               <div className="col-md-12 text-end">
                  <Link to="/admin/menu" className="btn btn-sm btn-success mx-1">
                     <FaArrowLeft />Về danh sách
                  </Link>
                  <Link to={'/admin/menu/edit/' + menu.id} className="px-1 text-primary">
                     <FaEdit />
                  </Link>
                  <button onClick={() => handleDelete(menu.id)} className="border-0 px-1 text-danger">
                     <FaTrashAlt />
                  </button>
               </div>
            </div>
         </section>
         <section className="content-body my-2">
            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th style={{ width: "180px" }}>Tên trường</th>
                     <th>Giá trị</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Id</td>
                     <td>1</td>
                  </tr>
               </tbody>
            </table>
         </section>
      </div>
   );
}

export default MenuShow;