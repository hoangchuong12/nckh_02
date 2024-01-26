import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MenuService from '../../../services/MenuService';
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { toast } from 'react-toastify';

const MenuEdit = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [name, setName] = useState('');
   const [link, setLink] = useState('');
   const [parentid, setParentId] = useState('');
   const [sortorder, setSortOrder] = useState('');
   const [position, setPosition] = useState('');
   const [status, setStatus] = useState('');
   //store
   const handleSubmit = async (event) => {
      event.preventDefault();

      // Construct a JSON object instead of FormData
      const menu = {
         name: name,
         link: link,
         parent_id: 0, // Assuming these values are static for demonstration
         sort_order: 1,
         type: "some_type",
         table_id: 1, // This is hardcoded for the example; it may come from state or input
         description: "Description of the menu item", // This can also come from an input
         created_by: 1, // Usually, this would be the ID of the logged-in user
         status: 1
      };

      try {
         // Assuming your MenuService.update method is properly set up to handle JSON
         // Make sure to adjust the order of parameters if necessary based on the implementation
         const result = await MenuService.update(menu, id); // Pass `id` and `menu` object
         if (result.status === true) {
            toast.success(result.message);
            navigate('/admin/menu/index', { replace: true });
         } else {
            toast.error(result.message);
         }
      } catch (error) {
         toast.error("An error occurred while updating the menu.");
         console.error("Error updating menu:", error);
      }
   };


   //
   useEffect(() => {
      (async function () {
         try {
            const result = await MenuService.show(id);
            if (result && result.object) {
               const item = result.object;
               setName(item.name);
               setLink(item.link);
               setParentId(item.parent_id.toString()); // Assuming parent_id is a number
               setPosition(item.position);
               setSortOrder(item.sort_order.toString()); // Assuming sort_order is a number
               setStatus(item.status.toString()); // Assuming status is a number
            } else {
               console.log('Menu data is undefined or not structured correctly:', result);
               toast.error('Menu data could not be loaded.');
            }
         } catch (error) {
            console.error('Error fetching menu data:', error);
            toast.error('An error occurred while fetching the menu data.');
         }
      })();
   }, [id]);


   //
   return (
      <form onSubmit={handleSubmit}>
         <div className="content">
            <section className="content-header my-2">
               <h1 className="d-inline">Cập nhật menu</h1>
               <div className="text-end">
                  <Link to="/admin/menu/index" className="btn btn-sm btn-info mx-1">
                     <FaArrowLeft />Về danh sách
                  </Link>
               </div>
            </section>
            <section className="content-body my-2">
               <div className="row">
                  <div className="col-md-9">
                     <div className="mb-3">
                        <label><strong>Tên menu</strong></label>
                        <input type="text"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           className="form-control" />
                     </div>
                     <div className="mb-3">
                        <label><strong>Liên kết</strong></label>
                        <input type="text"
                           value={link}
                           onChange={(e) => setLink(e.target.value)}
                           className="form-control" />
                     </div>
                     <div className="mb-3">
                        <label for="position"><strong>Vị trí</strong></label>
                        <select value={position}
                           onChange={(e) => setPosition(e.target.value)} className="form-select">
                           <option value="mainmenu">Main
                              Menu</option>
                           <option value="footermenu">Footer Menu</option>
                        </select>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Đăng</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <p>Chọn trạng thái đăng</p>
                           <select value={status}
                              onChange={(e) => setStatus(e.target.value)} className="form-control">
                              <option value="1">Xuất bản</option>
                              <option value="2">Chưa xuất bản</option>
                           </select>
                        </div>
                        <div className="box-footer text-end px-2 py-3">
                           <button type="submit" className="btn btn-sm btn-success" name="THEM">
                              <FaSave />Lưu [Cập nhật]
                           </button>
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Cấp cha</strong>
                        </div>
                        <select
                           value={parentid}
                           onChange={(e) => setParentId(e.target.value)} className="form-select">
                           <option value="0">None</option>
                        </select>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Thứ tự</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <select value={sortorder}
                              onChange={(e) => setSortOrder(e.target.value)}
                              className="form-control">
                              <option value="">Sau</option>
                              <option value="2">sau</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </form>
   );
}

export default MenuEdit;