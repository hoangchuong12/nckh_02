import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostService from '../../../services/PostService';
import { toast } from 'react-toastify';

function PageEdit() {
   const { id } = useParams();
   const navigate = useNavigate();

   const [title, setTitle] = useState('');
   const [detail, setDetail] = useState('');
   const [slug, setSlug] = useState('');
   const [description, setDescription] = useState('');
   const [status, setStatus] = useState(1);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const result = await PostService.show(id);
            const post = result.post;
            setTitle(post.title);
            setSlug(post.slug);
            setDescription(post.description);
            setDetail(post.detail);
            setStatus(post.status);
         } catch (error) {
            // Handle error (e.g., show an error message)
            console.error('Error fetching post:', error);
         }
      };

      fetchData();
   }, [id]);

   const handleFormSubmit = async (e) => {
      e.preventDefault();
      const image = document.getElementById("image");
      const post = new FormData();

      post.append("title", title);
      post.append("description", description);
      post.append("detail", detail);
      post.append("status", status);
      post.append("type", "type");


      // Only append the image if it's selected
      post.append("image", image.files.length === 0 ? "" : image.files[0]);

      try {
         const result = await PostService.update(post, id);
         if (result.status === true) {
            toast.success(result.message);
            navigate("/admin/page/index", { replace: true });
         }
      } catch (error) {
         console.error("Error updating post:", error);
      }
   };


   return (
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
         <div className="content">
            <section className="content-header my-2">
               <h1 className="d-inline">Cập nhật bài viết</h1>
               <div className="text-end">
                  <a href="post_index.html" className="btn btn-sm btn-success">
                     <i className="fa fa-arrow-left"></i> Về danh sách
                  </a>
               </div>
            </section>
            <section className="content-body my-2">

               <div className="row">
                  <div className="col-md-9">
                     <div className="mb-3">
                        <label>
                           <strong>Tiêu đề bài viết (*)</strong>
                        </label>
                        <input
                           type="text"
                           name="title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           className="form-control"
                           placeholder="Nhập tiêu đề"
                        />
                     </div>
                     <div className="mb-3">
                        <label>
                           <strong>Slug (*)</strong>
                        </label>
                        <input
                           type="text"
                           name="slug"
                           value={slug}
                           onChange={(e) => setSlug(e.target.value)}
                           className="form-control"
                           placeholder="Slug"
                        />
                     </div>
                     {/* ... rest of the form */}
                     <div className="mb-3">
                        <label>
                           <strong>Chi tiết (*)</strong>
                        </label>
                        <textarea
                           name="detail"
                           value={detail}
                           onChange={(e) => setDetail(e.target.value)}
                           rows="7"
                           className="form-control"
                           placeholder="Nhập chi tiết"
                        ></textarea>
                     </div>
                     <div className="mb-3">
                        <label>
                           <strong>Mô tả (*)</strong>
                        </label>
                        <textarea
                           name="description"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                           rows="4"
                           className="form-control"
                           placeholder="Mô tả"
                        ></textarea>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Đăng</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <p>Chọn trạng thái đăng</p>
                           <select onChange={(e) => setStatus(e.target.value)} value={status}
                              class="form-control">
                              <option value="1">Xuất bản</option>
                              <option value="2">Chưa xuất bản</option>
                           </select>
                        </div>
                        <div className="box-footer text-end px-2 py-3">
                           <button type="submit" className="btn btn-success btn-sm text-end">
                              <i className="fa fa-save" aria-hidden="true"></i> Đăng
                           </button>
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Chủ đề (*)</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <select name="topic_id" className="form-select">
                              <option value="">None</option>
                              <option value="1">Tên chủ đề</option>
                           </select>
                        </div>
                     </div>
                     <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                           <strong>Hình đại diện</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                           <input type="file" id="image" name="image" class="form-control" />
                        </div>
                     </div>
                  </div>
               </div>

            </section>
         </div>
      </form>
   );
}

export default PageEdit;
