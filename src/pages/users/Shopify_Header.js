import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const Shopify_Header = (props) => {
    let location = useLocation();
    const activeMenu = location.pathname;
    return (
        <>
            <div className="Shopify-header-container">
                <div className="header-title">{props.title}</div>
                <div className="header-menu">
                    <div className="header-menu-items">
                        <Link className={`mx-2 header-effect ${activeMenu === "/user/home" ? "menu-active" : ""}`} to="/user/home">
                            Home
                        </Link>
                        <span></span>
                        <Link className={`mx-2 header-effect ${activeMenu === "" ? "menu-active" : ""}`} to="">
                            Features
                        </Link>
                        {
                            activeMenu !== "/Shopify-home" && <> <span></span> <Link className={`mx-2 header-effect ${activeMenu === "/shopify-mywork" ? "menu-active" : ""}`} to="/shopify-mywork">
                                My Work
                            </Link></>
                        }
                        <span></span>
                        <Link className={`mx-2 header-effect ${activeMenu === "" ? "menu-active" : ""}`} to="">
                            Sign in
                        </Link>
                        {
                            activeMenu !== "/shopify-mywork" && <> <span></span> <Link className={`mx-2 header-effect ${activeMenu === "" ? "menu-active" : ""}`} to="">
                                Sign up
                            </Link></>
                        }
                    </div>
                </div>
                <button className="btn headerhamburger menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><IoIosMenu fontSize={25} /></button>
                <div className="offcanvas offcanvas-top top-menu" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header d-flex justify-content-end">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"> </button>
                    </div>
                    <div className="header-menu-items">
                        <Link className={`mx-2 header-effect ${activeMenu === "/Shopify-home" ? "menu-active" : ""}`} to="/Shopify-home">
                            Home
                        </Link>
                        <span></span>
                        <Link className={`mx-2 header-effect ${activeMenu === "" ? "menu-active" : ""}`} to="">
                            Features
                        </Link>
                        {
                            activeMenu !== "/Shopify-home" && <> <span></span> <Link className={`mx-2 header-effect ${activeMenu === "/shopify-mywork" ? "menu-active" : ""}`} to="/shopify-mywork">
                                My Work
                            </Link></>
                        }
                        <span></span>
                        <Link className={`mx-2 header-effect ${activeMenu === "" ? "menu-active" : ""}`} to="">
                            Sign in
                        </Link>
                        {
                            activeMenu !== "/shopify-mywork" && <> <span></span> <Link className={`mx-2 header-effect ${activeMenu === "" ? "menu-active" : ""}`} to="">
                                Sign up
                            </Link></>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shopify_Header;