import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmailIcon from "../../assets/default/images/EmailIcon.svg";
import PersonIcon from "../../assets/default/images/PersonIcon.svg";
import LockIcon from "../../assets/default/images/LockIcon.svg";
import OpenEyeIcon from "../../assets/default/images/OpenEyeIcon.svg";
import CloseEyeIcon from "../../assets/default/images/CloseEyeIcon.svg";
import { useHistory } from "react-router-dom";
import validator from "validator";
import { toast } from "react-toastify";
import CONFIG from "../../config/users/Constant";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Signup = () => {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [cpwd, setCpwd] = useState("");
    const [showPassword, setShowPassword] = useState({
        password: false,
        cpassword: false,
    });

    const handleShowPassword = (name) => {
        if (name === "password") {
            setShowPassword({ showPassword, password: !showPassword.password });
        } else {
            setShowPassword({ showPassword, cpassword: !showPassword.cpassword });
        }
    };

    const handleSubmit = async (e) => {
        if (validator.isEmpty(email)) {
            toast.error("Please Enter Email!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else if (!validator.isEmail(email)) {
            toast.error("Please Enter Valid Email!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else if (validator.isEmpty(username)) {
            toast.error("Please Enter Username!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else if (validator.isEmpty(pwd)) {
            toast.error("Please Enter Password!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else if (!validator.isLength(pwd, { min: 8 })) {
            toast.error("Password must be more than 8 character!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else if (!validator.matches(pwd, /[a-z]/)) {
            toast.error("Password must contain a lowercase alphabet!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else if (!validator.matches(pwd, /[A-Z]/)) {
            toast.error("Password must contain a uppercase alphabet!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else if (!validator.matches(pwd, /[0-9]/)) {
            toast.error("Password must contain a number!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else if (
            !validator.matches(pwd, /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)
        ) {
            toast.error("Password must contain a special character!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else if (validator.isEmpty(cpwd)) {
            toast.error("Please Enter Confirm Password!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else if (pwd !== cpwd) {
            toast.error("Password and Confirm Password must be same!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
        } else {

            const user =  await fetch(CONFIG.hostname + ':8081/users/signup', {
                body: JSON.stringify({username: username, password: pwd, email: email, roles: ['ROLE_CLIENT']}),
                headers: {
                'Content-Type': 'application/json'
                },
                        method: 'POST'
                    });

            toast.success("Registration Successful, Please Login", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventDefault();
            history.push("/");
        }
    };
    return (
        <>
            <div
                className="container d-flex align-items-center w-100"
                style={{ height: "100vh" }}
            >
                <div className="main-signup-container">
                    <div className="logo-title text-center mt-2 mb-2">
                        <h3>Searchify</h3>
                    </div>
                    <div className="signup-container">
                        <div className="title text-center mt-3 mb-2">
                            <h4>Sign Up</h4>
                        </div>
                        <div className="form" autoComplete="off">
                            <div className="email-input">
                                <input
                                    type="email"
                                    name="email"
                                    className="txt-email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <span className="email-icon">
                                    <img src={EmailIcon} className="icon" />
                                </span>
                            </div>
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
                                <span className="user-icon">
                                    <img src={PersonIcon} className="icon" />
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
                                <span
                                    className="eye-icon"
                                    onClick={() => {
                                        handleShowPassword("password");
                                    }}
                                >
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
                            <div className="pwd-input">
                                <input
                                    type={showPassword.cpassword ? "text" : "password"}
                                    autoComplete="off"
                                    name="cpassword"
                                    className="txt-pwd"
                                    placeholder="Enter Confirm Password"
                                    value={cpwd}
                                    onChange={(e) => {
                                        setCpwd(e.target.value);
                                    }}
                                />
                                <span className="lock-icon">
                                    <img src={LockIcon} className="icon" />
                                </span>
                                <span
                                    className="eye-icon"
                                    onClick={() => {
                                        handleShowPassword("cpassword");
                                    }}
                                >
                                    {showPassword.cpassword ? (
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
                            <div className="already-acc">
                                Already an account? <Link to="/">Signin</Link>
                            </div>
                            <div className="signup-button">
                                <button className="btn-signup" onClick={handleSubmit}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
