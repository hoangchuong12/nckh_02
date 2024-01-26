import { useEffect, useState } from "react";
import TopicService from "../../../services/TopicService"
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaToggleOff, FaToggleOn, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

function TopicIndex() {
 
    const [topics, settopics] = useState([]);
    const [countall, setCountAll] = useState(0);
    const [counttrash, setCountTrash] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [reload, setReload] = useState(0);


    //
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [status, setStatus] = useState(1);

    useEffect(function () {
        setIsLoading(true);
        (async function () {
            setIsLoading(true);
            const result = await TopicService.index();
            settopics(result.topics);
            setCountAll(result.count_all);
            setCountTrash(result.count_trash);
            setIsLoading(false);
            // console.log(result.topics);
        })();
    }, [reload])
    const handleSubmit = (e) => {
        e.preventDefault();

        const topic = new FormData();
        topic.append("name", name);
        topic.append("description", description);
        topic.append("sort_order", 0);
        topic.append("status", status);
        (async () => {
            const result = await TopicService.store(topic);
            alert(result.message);
            setReload(Date.now);

        })();
    }
    const handleDelete = (id) => {
        (async function () {
            const result = await TopicService.destroy(id);
            if (result.status === true) {
                toast.success(result.message);
                setReload(Date.now);
            }
        })();
    }

    const handleStatus = (id) => {
        (async function () {
            const result = await TopicService.status(id);
            if (result.status === true) {
                setReload(Date.now);
                toast.success(result.message);
            }
        })();
    }
    return (
        <div className="content">
            <section className="content-header my-2">
                <h1 className="d-inline">Chủ đề bài viết</h1>
                <hr style={{ border: 'none' }} />
            </section>
            <section className="content-body my-2">
                <div className="row">

                    <div className="col-md-4">
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label>
                                    <strong>Tên thương hiệu (*)</strong>
                                </label>
                                <input type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    placeholder="Nhập tên danh mục"
                                    class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label><strong>Mô tả</strong></label>
                                <textarea
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    rows="4" class="form-control" placeholder="Mô tả"></textarea>
                            </div>
                            <div className="mb-3">
                                <label><strong>Trạng thái</strong></label>
                                <select onChange={(e) => setStatus(e.target.value)} value={status}
                                    class="form-control">
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                            <div className="mb-3 text-end">
                                <button className="btn btn-sm btn-success" type="submit" name="THEM">
                                    <i className="fa fa-save" /> Lưu[Cập nhật]
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <div className="row mt-3 align-items-center">
                            <div className="col-12">
                                <ul className="manager">
                                    <li><a href="brand_index.html">Tất cả (123)</a></li>
                                    <li><a href="#a">Xuất bản (12)</a></li>
                                    <li><a href="brand_trash.html">Rác (12)</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row my-2 align-items-center">
                            <div className="col-md-6">
                                <select name className="d-inline me-1">
                                    <option value>Hành động</option>
                                    <option value>Bỏ vào thùng rác</option>
                                </select>
                                <button className="btnapply">Áp dụng</button>
                            </div>
                            <div className="col-md-6 text-end">
                                <input type="text" className="search d-inline" />
                                <button className="d-inline">Tìm kiếm</button>
                            </div>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center" style={{ width: 30 }}>
                                        <input type="checkbox" id="checkboxAll" />
                                    </th>
                                    <th>Tên chủ đề</th>    
                                    <th>Tên slug</th>
                                    <th className="text-center" style={{ width: 30 }}>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topics && topics.map(function (topic, index) {
                                    return (
                                        <tr className="datarow">
                                            <td>
                                                <input type="checkbox" key={index} />
                                            </td>
                                            <td>
                                                <div className="name">
                                                    <a href="topic_edit.html">
                                                        {topic.name}
                                                    </a>
                                                </div>
                                                <div className="function_style">
                                                    <div className="function_style">
                                                        <button
                                                            onClick={() => handleStatus(topic.id)}
                                                            className={topic.status === 1 ? "btopic-0 px-1 text-success" : "border-0 px-1 text-danger"}>
                                                            {topic.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
                                                        </button>
                                                        <Link to="#" className="px-1 text-success">
                                                        </Link>
                                                        <Link to={'/admin/topic/edit/' + topic.id} className="px-1 text-primary">
                                                            <FaEdit />
                                                        </Link>
                                                        <Link to={'/admin/topic/show/' + topic.id} className="px-1 text-info">
                                                            <FaEye />
                                                        </Link>
                                                        <button onClick={() => handleDelete(topic.id)} className="border-0 px-1 text-danger"><FaTrashAlt /></button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{topic.slug}</td>
                                            <td className="text-center">{topic.id}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default TopicIndex
