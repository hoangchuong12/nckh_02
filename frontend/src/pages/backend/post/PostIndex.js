import { useEffect, useState } from "react";
import BrandService from "../../../services/BrandService";
import { urlImage } from "../../../config";
import { FaToggleOn, FaTrash, FaEye, FaEdit, FaToggleOff } from 'react-icons/fa';

function PostIndex() {

    const [brands, setBrands] = useState([]);
    const [load, setLoad] = useState(false);
    const [reload, setReload] = useState(0);

    //
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [sort_order, setSortOrder] = useState(1);
    const [status, setStatus] = useState(1);

    useEffect(() => {
        (async () => {
            setLoad(false);
            const result = await BrandService.index();
            setBrands(result.brands);
            setLoad(true);
        })();
    }, [reload]);

    const handDelete = (id) => {
        (async () => {
            const result = await BrandService.destroy(id);
            setReload(result.brand.id)
        })();
    }
    const handleStatus = (id) => {
        (async () => {
            const result = await BrandService.status(id);
            setReload(Date.now);
        })();
    }

    return (
        <div className="content">
            <section className="content-header my-2">
                <h1 className="d-inline">Quản lý bài viết</h1>
                <a href="post_create.html" className="btn-add">Thêm mới</a>
                <div className="row mt-3 align-items-center">
                    <div className="col-6">
                        <ul className="manager">
                            <li><a href="post_index.html">Tất cả (123)</a></li>
                            <li><a href="#">Xuất bản (12)</a></li>
                            <li><a href="post_trash.html">Rác (12)</a></li>
                        </ul>
                    </div>
                    <div className="col-6 text-end">
                        <input type="text" className="search d-inline" />
                        <button className="d-inline btnsearch">Tìm kiếm</button>
                    </div>
                </div>
                <div className="row mt-1 align-items-center">
                    <div className="col-md-8">
                        <select name className="d-inline me-1">
                            <option value>Hành động</option>
                            <option value>Bỏ vào thùng rác</option>
                        </select>
                        <button className="btnapply">Áp dụng</button>
                        <select name className="d-inline me-1">
                            <option value>Chủ đề</option>
                        </select>
                        <button className="btnfilter">Lọc</button>
                    </div>
                    <div className="col-md-4 text-end">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination pagination-sm justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link">«</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">»</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="content-body my-2">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center" style={{ width: 30 }}>
                                <input type="checkbox" id="checkboxAll" />
                            </th>
                            <th className="text-center" style={{ width: 130 }}>Hình ảnh</th>
                            <th>Tiêu đề bài viết</th>
                            <th>Tên danh mục</th>
                            <th className="text-center" style={{ width: 30 }}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            brands &&
                            brands.length > 0 &&
                            brands.map((brand, index) => {
                                return (
                                    <tr className="datarow">
                                        <td>
                                            <input type="checkbox" id="checkId" />
                                        </td>
                                        <td>
                                            <img className="img-fluid" src="public/images/post.jpg" alt="post.jpg" />
                                        </td>
                                        <td>
                                            <div className="name">
                                                <a href="post_edit.html">
                                                    Tiêu đề bài viết
                                                </a>
                                            </div>
                                            <div className="function_style">
                                                <a href={`/admin/brand/edit/${brand.id}`} className="px-1 text-success">
                                                    <FaEdit />
                                                </a>

                                                <button
                                                    onClick={() => handleStatus(brand.id)}
                                                    className={
                                                        brand.status === 1
                                                            ? "border-0 px-1 text-success"
                                                            : "border-0 px-1 text-danger"
                                                    }>
                                                    {brand.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                                                </button>
                                                <a href="brand_show.html" className="px-1 text-info">
                                                    <FaEye />
                                                </a>

                                                <button
                                                    onClick={() => handDelete(brand.id)}
                                                    className="btn-none px-1 text-danger">
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                        <td>Tên chủ đề</td>
                                        <td className="text-center">1</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </section>
        </div>

    )
}

export default PostIndex
