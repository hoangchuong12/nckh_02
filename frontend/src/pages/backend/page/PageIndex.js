import { useEffect, useState } from "react";
import PostService from "../../../services/PostService";
import { urlImage } from "../../../config";
import { FaToggleOn, FaTrash, FaEye, FaEdit, FaToggleOff } from 'react-icons/fa';

function PageIndex() {

    const [posts, setposts] = useState([]);
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
            const result = await PostService.index();
            console.log(result)
            setposts(result.posts);
            setLoad(true);
        })();
    }, [reload]);

    const handDelete = (id) => {
        (async () => {
            const result = await PostService.destroy(id);
        
            setReload(result.post.id);
        })();
    };
    
    const handleStatus = (id) => {
        (async () => {
            const result = await PostService.status(id);
            setReload(Date.now);
        })();
    }

    return (
        <div className="content">
            <section className="content-header my-2">
                <h1 className="d-inline">Quản lý trang đơn</h1>
                <a href="/admin/page/create" className="btn-add">Thêm mới</a>
                <div className="row mt-3 align-items-center">
                    <div className="col-6">
                        <ul className="manager">
                            <li><a href="page_index.html">Tất cả (123)</a></li>
                            <li><a href="#">Xuất bản (12)</a></li>
                            <li><a href="page_trash.html">Rác (12)</a></li>
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
                            <th>Tên trang đơn</th>
                            <th>slug</th>
                            <th className="text-center" style={{ width: 30 }}>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts &&
                            posts.length > 0 &&
                            posts.map((page, index) => {
                                return (
                                    <tr className="datarow" key={index}>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>
                                        <img class="img-fluid" src={urlImage + "post/" + page.image} alt={page.image}></img>
                                        </td>
                                        <td>
                                            <div className="name">
                                                <a href="page_index.html">{page.title}</a>
                                            </div>
                                            <div className="function_style">
                                                <a href={`/admin/page/edit/${page.id}`} className="px-1 text-success">
                                                    <FaEdit />
                                                </a>

                                                <button
                                                    onClick={() => handleStatus(page.id)}
                                                    className={
                                                        page.status === 1
                                                            ? "border-0 px-1 text-success"
                                                            : "border-0 px-1 text-danger"
                                                    }>
                                                    {page.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                                                </button>
                                                <a href="brand_show.html" className="px-1 text-info">
                                                    <FaEye />
                                                </a>

                                                <button
                                                    onClick={() => handDelete(page.id)}
                                                    className="btn-none px-1 text-danger">
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                        <td>{page.slug}</td>
                                        <td className="text-center">{page.id}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </section>
        </div>


    )
}

export default PageIndex
