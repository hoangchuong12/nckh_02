import React, { useState } from 'react';
import UserService from '../../../services/UserService';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [name, setUser] = useState('');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [roles, setRoles] = useState(1);
    const [status, setStatus] = useState(1);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Mật khẩu và xác nhận mật khẩu không khớp. Vui lòng nhập lại!');
            return; // Stop the function if passwords don't match
        }
        var user = new FormData();
        user.append('name', name);
        user.append('username', username);
        user.append('password', password);
        user.append('gender', gender);
        user.append('phone', phone);
        user.append('email', email);
        user.append("roles", roles);
        user.append("status", status);
        for (let [key, value] of user.entries()) {
            console.log(`${key}: ${value}`);
        }
        (async function () {
            const result = await UserService.store(user);
            if (result.status === true) {
                toast.success(result.message);
                navigate('/', { replace: true });
            }
            else {
                console.log(result)
            }
        })();
    };

    return (
        <section className="section-content padding-y">
            {/* ============================ COMPONENT REGISTER   ================================= */}
            <div className="card mx-auto" style={{ maxWidth: 520, marginTop: 40 }}>
                <article className="card-body">
                    <header className="mb-4"><h4 className="card-title">Đăng ký</h4></header>
                    <form onSubmit={handleRegister}>
                        <div className="form-row">
                            <div className="col form-group">
                                <label>Tên</label>
                                <input type="text" className="form-control" value={name} onChange={(e) => setUser(e.target.value)} />
                            </div> {/* form-group end.// */}
                            <div className="col form-group">
                                <label>Tài khoản</label>
                                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div> {/* form-group end.// */}
                        </div> {/* form-row end.// */}
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="phone" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div> {/* form-group end.// */}
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <small className="form-text text-muted">Thông tin của bạn sẽ được bảo vệ khỏi bên thứ ba!!</small>
                        </div> {/* form-group end.// */}
                        <div className="form-group">
                            <label className="custom-control custom-radio custom-control-inline">
                                <input
                                    className="custom-control-input"
                                    type="radio"
                                    name="gender"
                                    value="Nam"
                                    checked={gender === 'Nam'} // Adjust based on state
                                    onChange={() => setGender('Nam')}
                                />
                                <span className="custom-control-label"> Nam </span>
                            </label>
                            <label className="custom-control custom-radio custom-control-inline">
                                <input
                                    className="custom-control-input"
                                    type="radio"
                                    name="gender"
                                    value="Nữ"
                                    checked={gender === 'Nữ'} // Adjust based on state
                                    onChange={() => setGender('Nữ')}
                                />
                                <span className="custom-control-label"> Nữ </span>
                            </label>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Tạo mật khẩu</label>
                                <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Nhập lại mật khẩu</label>
                                <input className="form-control" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Đăng ký</button>
                        </div>
                        <div className="form-group">
                            <label className="custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" defaultChecked /> <div className="custom-control-label"> Tôi đồng ý với<a href="#st"> các điều khoản và điều kiện</a></div> </label>
                        </div> {/* form-group end.// */}
                    </form>
                </article>{/* card-body.// */}
            </div> {/* card .// */}
            <p className="text-center mt-4">Đã có tài khoản? <a href="/login">Đăng nhập</a></p>
            <br /><br />
            {/* ============================ COMPONENT REGISTER  END.// ================================= */}
        </section>


    )
};
export default Register;