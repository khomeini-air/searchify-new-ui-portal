import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
    let location = useLocation();
    const activeMenu = location.pathname;
    return (
        <>
            <div className="header-container">
                <div className="header-title">{props.title}</div>
                <div className="header-menu">
                    <div className="header-menu-items">
                        <Link className={`mx-2 header-effect ${activeMenu === "/" ? "menu-active" : ""}`} to="/">
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
                    </div>
                </div>
                <button className="btn btn-primary menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>
                <div class="offcanvas offcanvas-top top-menu" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header d-flex justify-content-end">
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div className="header-menu-items">
                            <Link className={`mx-2 header-effect ${activeMenu === "/" ? "menu-active" : ""}`} to="/">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
