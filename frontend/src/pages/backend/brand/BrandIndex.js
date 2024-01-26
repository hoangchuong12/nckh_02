import { useEffect, useState } from "react";
import BrandService from "../../../services/BrandService";
import { urlImage } from "../../../config";
import { FaToggleOn, FaTrash, FaEye, FaEdit, FaToggleOff } from 'react-icons/fa';

const BrandIndex = () => {

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

    //hamthem
    const handleSubmit = (e) => {
        e.preventDefault();
        const image = document.getElementById("image");
        const brand = new FormData();
        brand.append("name", name);
        brand.append("description", description);
        brand.append("sort_order", sort_order);
        brand.append("status", status);
        brand.append("image", image.files.length === 0 ? "" : image.files[0]);
        (async () => {
            const result = await BrandService.store(brand);
            alert(result.message);
            setReload(result.brand.id);
        })();
    }
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
        <>

            <section class="hdl-content">
                <div class="container-fluid">
                    <div class="row">

                        <div class="col-md-12">
                            {/* <!--CONTENT  --> */}
                            <div class="content">
                                <section class="content-header my-2">
                                    <h1 class="d-inline">Thương hiệu</h1>
                                    <hr style={{ border: 'none' }} />
                                </section>
                                <section class="content-body my-2">

                                    <div class="row">
                                        <div class="col-md-4">
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
                                                <div class="mb-3">
                                                    <label><strong>Hình đại diện</strong></label>
                                                    <input type="file" id="image" name="image" class="form-control" />
                                                </div>
                                                <div class="mb-3">
                                                    <label><strong>Trạng thái</strong></label>
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
                                            </form>

                                        </div>
                                        <div class="col-md-8">
                                            <div class="row mt-3 align-items-center">
                                                <div class="col-12">
                                                    <ul class="manager">
                                                        <li><a href="brand_index.html">Tất cả (123)</a></li>
                                                        <li><a href="#nt">Xuất bản (12)</a></li>
                                                        <li><a href="brand_trash.html">Rác (12)</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="row my-2 align-items-center">
                                                <div class="col-md-6">
                                                    <select name="" class="d-inline me-1">
                                                        <option value="">Hành động</option>
                                                        <option value="">Bỏ vào thùng rác</option>
                                                    </select>
                                                    <button class="btnapply">Áp dụng</button>
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <input type="text" class="search d-inline" />
                                                    <button class="btnsearch d-inline">Tìm kiếm</button>
                                                </div>
                                            </div>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center" style={{ width: '30px' }}>
                                                            <input type="checkbox" id="checkboxAll" />
                                                        </th>
                                                        <th class="text-center" style={{ width: '90px' }}>Hình ảnh</th>
                                                        <th>Tên thương hiệu</th>
                                                        <th>Tên slug</th>
                                                        <th class="text-center" style={{ width: '30px' }}>ID</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        brands &&
                                                        brands.length > 0 &&
                                                        brands.map((brand, index) => {
                                                            return (
                                                                <tr class="datarow" key={index}>
                                                                    <td class="text-center">
                                                                        <input type="checkbox" />
                                                                    </td>
                                                                    <td>
                                                                        <img class="img-fluid" src={urlImage + "brand/" + brand.image} alt={brand.image} />
                                                                    </td>
                                                                    <td>
                                                                        <div class="name">
                                                                            <a href="brand_index.html">
                                                                                {brand.name}
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
                                                                    <td>{brand.slug}</td>
                                                                    <td class="text-center">{brand.id}</td>
                                                                </tr>)
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </section>
                            </div>
                            {/* <!--END CONTENT--> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default BrandIndex;