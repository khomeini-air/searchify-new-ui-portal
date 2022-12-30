import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const Header = (props) => {
    let location = useLocation();
    const activeMenu = location.pathname;
    return (
        <>
            <div className="header-container">
                <div className="header-title">{props.title}</div>
                <div className="header-menu">
                    <div className="header-menu-items">
                        <Link className={`mx-2 header-effect ${activeMenu === "/user/home" ? "menu-active" : ""}`} to="/admin/tagmgmt">
                            Home
                        </Link>
                        <span></span>
                        <Link className={`mx-2 header-effect ${activeMenu === "/user/suggestionsmgmt" ? "menu-active" : ""}`} to="/admin/suggestionsmgmt">
                            Suggestions Mgmt
                        </Link>
                        <span></span>
                        <Link className={`mx-2 header-effect ${activeMenu === "/user/history" ? "menu-active" : ""}`} to="/user/history">
                            History
                        </Link>
                        <Link to="/">
                            <button type="button" class="btn btn-danger">Log-out</button>
                        </Link>
                    </div>
                </div>
                <button className="btn headerhamburger menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><IoIosMenu fontSize={25} /></button>
                <div className="offcanvas offcanvas-top top-menu" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header d-flex justify-content-end">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"> </button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="header-menu-items">
                            <Link className={`mx-2 header-effect ${activeMenu === "/mapping" ? "menu-active" : ""}`} to="/mapping">
                                Tags Mapping
                            </Link>
                            <span></span>
                            <Link className={`mx-2 header-effect ${activeMenu === "/create-suggestions" ? "menu-active" : ""}`} to="/create-suggestions">
                                Create Suggestion
                            </Link>
                            <span></span>
                            <Link className={`mx-2 header-effect ${activeMenu === "/suggestions-list" ? "menu-active" : ""}`} to="/suggestions-list">
                                List
                            </Link>
                            <span></span>
                            <Link className={`mx-2 header-effect ${activeMenu === "/import-suggestions" ? "menu-active" : ""}`} to="/import-suggestions">
                                Import
                            </Link>
                            <Link to="/">
                                <button type="button" class="btn btn-danger">Log-out</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
