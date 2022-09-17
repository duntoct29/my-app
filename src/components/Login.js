import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.scss";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [infoUser, setInfoUser] = useState({});
  const handleSubmit = () => {
    if (!username && !password) {
      toast.error("Vui lòng nhập đầy đủ tài khoản đăng nhập và mật khẩu !!!");
      return;
    } else if (!username) {
      toast.error("Vui lòng nhập tài khoản đăng nhập !!!");
      return;
    } else if (!password) {
      toast.error("Vui lòng nhập mật khẩu đăng nhập !!!");
      return;
    }
    let DataInfoUser = {
      username: username,
      password: password,
    };
    setInfoUser({DataInfoUser})
    navigate("/");
  };
  const handleChangeUser = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassWord = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="Login">
      <form action="">
        <h1>Đăng nhập</h1>
        <div className="form-group">
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => handleChangeUser(e)}
          />
          <label htmlFor="">Tài khoản đăng nhập</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            required
            value={infoUser.password}
            onChange={(e) => handleChangePassWord(e)}
          />
          <label htmlFor="">Mật khẩu</label>
        </div>
        <button onClick={() => handleSubmit()} className="submitLogin">Đăng nhập</button>
        <div className="forgetPassword">
          <li>
            <Link to="/">Quên mật khẩu ?</Link>
          </li>
          <li>
            <Link to="/create-account">Đăng ký ?</Link>
          </li>
        </div>
      </form>
    </div>
  );
};

export default Login;
