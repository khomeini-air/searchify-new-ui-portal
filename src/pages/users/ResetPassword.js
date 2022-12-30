import React, { useState } from "react";
import OpenEyeIcon from "../../assets/users/images/OpenEyeIcon.svg";
import CloseEyeIcon from "../../assets/users/images/CloseEyeIcon.svg";
import SearchifyLogo from '../../assets/users/images/Searchify-logo.png';
import { useHistory } from "react-router-dom";
import validator from "validator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ResetPassword = () => {
    let history = useHistory();
    const [pwd, setPwd] = useState("");
    const [cpwd, setCpwd] = useState("");
    const [showPassword, setShowPassword] = useState({
        password: false
    });

    const handleShowPassword = (name) => {
        setShowPassword({ showPassword, password: !showPassword.password });
    };

    const handleSubmit = (e) => {
        if (validator.isEmpty(pwd)) {
            toast.error("Please Enter New Password!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventusers();
        } else if (!validator.isLength(pwd, { min: 8 })) {
            toast.error("Password must be more than 8 character!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventusers();
        } else if (!validator.matches(pwd, /[a-z]/)) {
            toast.error("Password must contain a lowercase alphabet!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventusers();
        } else if (!validator.matches(pwd, /[A-Z]/)) {
            toast.error("Password must contain a uppercase alphabet!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventusers();
        } else if (!validator.matches(pwd, /[0-9]/)) {
            toast.error("Password must contain a number!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventusers();
        } else if (
            !validator.matches(pwd, /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)
        ) {
            toast.error("Password must contain a special character!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventusers();
        } else if (validator.isEmpty(cpwd)) {
            toast.error("Please Enter New Confirm Password!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventusers();
        } else if (pwd !== cpwd) {
            toast.error("Password and Confirm Password must be same!", {
                autoClose: 1500,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventusers();
        } else {
            toast.success("Password Updated Successfully, Please Login", {
                autoClose: 2000,
                style: { backgroundColor: "black", color: "white" },
            });
            e.preventusers();
            history.push("/");
        }
    };
    return (
        <>
            <div
                className="container d-flex align-items-center w-100"
                style={{ height: "100vh" }}
            >
                <div className="reset-pass-container">
                    <div className="header-logo text-center mt-2 mb-2">
                        <img src={SearchifyLogo} className="logo" />
                    </div>
                    <div className="title text-center mt-4 mb-2">
                        <h4>Update Your Password</h4>
                    </div>
                    <div className="form" autoComplete="off">
                        <div className="pwd-input">
                            <input
                                type={showPassword.password ? "text" : "password"}
                                autoComplete="off"
                                name="password"
                                className="txt-pwd"
                                placeholder="Enter New Password"
                                value={pwd}
                                onChange={(e) => {
                                    setPwd(e.target.value);
                                }}
                            />

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
                                placeholder="Enter New Confirm Password"
                                value={cpwd}
                                onChange={(e) => {
                                    setCpwd(e.target.value);
                                }}
                            />
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

                        <div className="update-button">
                            <button className="btn-update" onClick={handleSubmit}>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
