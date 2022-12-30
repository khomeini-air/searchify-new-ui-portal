import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmailIcon from "../../../assets/default/images/EmailIcon.svg";
import LockIcon from "../../../assets/default/images/LockIcon.svg";
import OpenEyeIcon from "../../../assets/default/images/OpenEyeIcon.svg";
import CloseEyeIcon from "../../../assets/default/images/CloseEyeIcon.svg";
import { useHistory } from "react-router-dom";
import validator from "validator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Signin = () => {
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [showPassword, setShowPassword] = useState({
        password: false,
    });
    const LoginCred = {
        username: "searchify@gmail.com",
        password: "Searchify@123",
    };

    const handleShowPassword = () => {
        setShowPassword({ showPassword, password: !showPassword.password });
    };
    const handleSubmit = (e) => {
        if (validator.isEmpty(username)) {
            toast.error("Please Enter Username!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        }
        // else if (!validator.isEmail(username)) {
        //     toast.error("Please Enter Valid Email!", { autoClose: 1500, style: { backgroundColor: "black", color:"white" } });
        //     e.preventDefault();
        // }
        else if (validator.isEmpty(pwd)) {
            toast.error("Please Enter Password!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else if (username !== LoginCred.username || pwd !== LoginCred.password) {
            toast.error("Invalid Credentials!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else {
            toast.success("Login Successful", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
            history.push("/home");
        }
    };
    return (
        <>
            <div
                className="container d-flex align-items-center w-100"
                style={{ height: "100vh" }}
            >
                <div className="main-login-container">
                    <div className="logo-title text-center mt-2 mb-2">
                        <h3>Searchify</h3>
                    </div>
                    <div className="login-container">
                        <div className="title text-center mt-3 mb-2">
                            <h4>Sign In</h4>
                        </div>
                        <div className="form" autoComplete="off">
                            <div className="username-input">
                                <input
                                    type="text"
                                    name="username"
                                    className="txt-username"
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                />
                                <span className="email-icon">
                                    <img src={EmailIcon} className="icon" />
                                </span>
                            </div>
                            <div className="pwd-input">
                                <input
                                    type={showPassword.password ? "text" : "password"}
                                    autoComplete="off"
                                    name="password"
                                    className="txt-pwd"
                                    placeholder="Enter Password"
                                    value={pwd}
                                    onChange={(e) => {
                                        setPwd(e.target.value);
                                    }}
                                />
                                <span className="lock-icon">
                                    <img src={LockIcon} className="icon" />
                                </span>
                                <span className="eye-icon" onClick={handleShowPassword}>
                                    {showPassword.password ? (
                                        <>
                                            <img src={OpenEyeIcon} className="icon" />
                                        </>
                                    ) : (
                                        <>
                                            <img src={CloseEyeIcon} className="icon" />
                                        </>
                                    )}
                                </span>
                            </div>
                            <div className="forgot-pwd"><Link to='/reset-password'>Forgot Password?</Link></div>
                            <div className="new-reg">
                                New Registration? <Link to="/signup">Signup</Link>
                            </div>
                            <div className="login-button">
                                <button className="btn-login" onClick={handleSubmit}>
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;
