import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/createAcc.scss";
const CreateAccount = (props) => {
  const [username, setUsername] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [OTP_protect, setOTP_protect] = useState("");
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const handleUSN = (e) => {
    setUsername(e.target.value);
  };
  const handleEU = (e) => {
    setEmailUser(e.target.value);
  };
  const handlePW = (e) => {
    setPassword(e.target.value);
  };
  const handleRPW = (e) => {
    setRePassword(e.target.value);
  };
  const handleOTP = (e) => {
    setOTP_protect(e.target.value);
  };
  useEffect(() => {
    Cre_OTP();
  }, []);
  const Cre_OTP = () => {
    const OTP = Math.floor(Math.random() * 10000);
    setOTP(OTP);
  };
  let StatusPW;
  let PW = password.toString();
  let R_PW = rePassword.toString();
  let StatusOTP;
  let otp = OTP.toString();
  let R_otp = OTP_protect.toString();
  const CreateAccount = (e) => {
    e.preventDefault();
    if (!username || !emailUser || !password || !rePassword || !OTP_protect) {
      toast.error("Vui lòng nhập đầy đủ thông tin !!!");
      return;
    } else if (!StatusPW) {
      toast.error("Vui lòng nhập mật khẩu khớp với nhau !!!");
      return;
    } else if (!StatusOTP) {
      toast.error("Vui lòng nhập mật khẩu khớp dãy số phía dưới !!!");
      return;
    }
    let NewUser = {
      username: username,
      emailUser: emailUser,
      password: password,
    };
    if (NewUser.emailUser && NewUser.emailUser && NewUser.password) {
      props.CreUser(NewUser);
      navigate("/login");
    }
  };
  return (
    <div className="CreateAccount">
      <form action="">
        <h1>Đăng ký</h1>
        <div className="form-group-c">
          <input
            type="text"
            required
            value={username}
            onChange={(e) => handleUSN(e)}
          />
          <label htmlFor="">Tạo tài khoản đăng ký</label>
        </div>
        <div className="form-group-c">
          <input
            type="text"
            required
            value={emailUser}
            onChange={(e) => handleEU(e)}
          />
          <label htmlFor="">Nhập gmail đăng ký</label>
        </div>
        <div className="form-group-c">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => handlePW(e)}
          />
          <label htmlFor="">Nhập mật khẩu đăng ký</label>
        </div>
        <div className="form-group-c">
          <input
            type="password"
            required
            value={rePassword}
            onChange={(e) => handleRPW(e)}
          />
          {(StatusPW = PW === R_PW ? true : false)}
          {!R_PW ? (
            <label htmlFor="">Nhập lại mật khẩu đăng ký</label>
          ) : (
            <>
              {StatusPW ? (
                <label style={{ color: "green" }} htmlFor="">
                  Mật khẩu đã khớp
                </label>
              ) : (
                <label style={{ color: "red" }} htmlFor="">
                  Vui lòng nhập đúng mật khẩu
                </label>
              )}
            </>
          )}
        </div>
        <div className="form-group-c">
          <input
            type="text"
            required
            value={OTP_protect}
            onChange={(e) => handleOTP(e)}
          />
          {(StatusOTP = otp === R_otp ? true : false)}
          {!R_otp ? (
            <label htmlFor="">Nhập đúng dãy số phía dưới</label>
          ) : (
            <>
              {StatusOTP ? (
                <label style={{ color: "green" }} htmlFor="">
                  Đã khớp
                </label>
              ) : (
                <>
                  <label style={{ color: "red" }} htmlFor="">
                    Chưa khớp
                  </label>
                </>
              )}
            </>
          )}
        </div>
        <div className="protectOTP">
          <button className="OTP" onClick={(e)=>{e.preventDefault()}}>
            <p>{OTP}</p>
          </button>
        </div>
        <button className="Create" onClick={(e) => CreateAccount(e)}>
          Tạo tài khoản
        </button>
        <div className="login">
          <Link to="/login">Bạn đã có tài khoản ?</Link>
        </div>
      </form>
    </div>
  );
};
export default CreateAccount;
