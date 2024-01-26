import { useEffect, useState } from "react";
import PostService from "../../../services/PostService";

import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from "react-router-dom";
function PageCreate() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [detail, setdetail] = useState("")
    const [description, setDescription] = useState("");

    const [status, setStatus] = useState(1);


    const handleSubmit = (e) => {
        e.preventDefault();
        const image = document.getElementById("image");
        const post = new FormData();
        post.append("title", title);
        post.append("description", description);
        post.append("status", status);
        post.append("type", "type");
        post.append("image", (image.files.length === 0) ? "" : image.files[0]);

        (async function () {
            const result = await PostService.store(post);
            if (result.status === true) {
                toast.success(result.message);
                navigate('/admin/post/index', { replace: true });
            }
        })();
    }
    return (
        <div class="content">
            <section class="content-header my-2">
                <h1 class="d-inline">Thêm trang đơn</h1>
                <div class="text-end">
                    <a href="page_index.html" class="btn btn-sm btn-success">
                        <i class="fa fa-arrow-left"></i> Về danh sách
                    </a>
                </div>
            </section>
            <section class="content-body my-2">
                <form onSubmit={handleSubmit}>
                    <div class="row">

                        <div class="col-md-9">
                            <div class="mb-3">
                                <label><strong>Tiêu đề bài viết (*)</strong></label>
                                <input onChange={(e) => setTitle(e.target.value)}
                                    value={title} name="title" class="form-control" placeholder="Nhập tiêu đề" />
                            </div>
                            <div class="mb-3">
                                <label><strong>Chi tiết (*)</strong></label>
                                <textarea onChange={(e) => setdetail(e.target.value)}
                                    value={detail} rows="7" class="form-control"
                                    placeholder="Nhập chi tiết"></textarea>
                            </div>
                            <div class="mb-3">
                                <label><strong>Mô tả</strong></label>
                                <textarea
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    rows="4" class="form-control" placeholder="Mô tả"></textarea>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="box-container mt-4 bg-white">
                                <div class="box-header py-1 px-2 border-bottom">
                                    <strong>Đăng</strong>
                                </div>
                                <div class="box-body p-2 border-bottom">
                                    <p>Chọn trạng thái đăng</p>
                                    <select onChange={(e) => setStatus(e.target.value)} value={status}
                                        class="form-control">
                                        <option value="1">Xuất bản</option>
                                        <option value="2">Chưa xuất bản</option>
                                    </select>
                                </div>
                                <div class="mb-3 text-end">
                                    <button type="submit" class="btn btn-success" name="THEM">
                                        <i class="fa fa-save"></i> Lưu[Thêm]
                                    </button>
                                </div>
                            </div>
                            <div class="box-container mt-2 bg-white">
                                <div class="box-header py-1 px-2 border-bottom">
                                    <strong>Hình đại diện</strong>
                                </div>
                                <div class="box-body p-2 border-bottom">
                                    <input type="file" id="image" name="image" class="form-control" />

                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </section>
        </div>
    )
}

export default PageCreate
