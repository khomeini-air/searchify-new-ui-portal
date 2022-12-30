import React from 'react';
import { useEffect } from "react";
import { AiFillSetting, AiOutlineDashboard } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BiCommand } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { getProject, getWebsite } from "../../utils/users/ProjectUtil";

const Sidebar = (props) => {
    const routeName = useLocation();
    let searchroute = routeName.pathname;

    const darkColor = ["#0", "#1", "#2", "#3", "#4", "#5", "#6", "#f", "#d",
        "#b"];

    //array for storing already use color
    const containColor = ["#ffffff", "#1f1f1f", "#1e1e1e", "#000000"];
    //Function for generate random color
    const getRandomColor = () => {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        if (containColor.includes(color)) {
            getRandomColor();
        } else {
            if (darkColor.includes(color.slice(0, 2))) {
                getRandomColor();
            } else {
                containColor.push(color);
                console.log(containColor)
                return color;
            }
        }
    };

    //Function for set generated random color
    const setRandomColor = (id) => {
        $(`#colorpad${id}`).css("color", getRandomColor());
    };

    //for set random color to tags
    useEffect(() => {
        var len = getProject().websites?.length;
        // var len = classifications.length;
        for (let i = 0; i < len; i++) {
            setRandomColor(i);
        }
    }, [getProject().websites]);

    useEffect(() => {
        if (searchroute == '/newhome') {
            props?.setWebsiteData(getWebsite())
        }
    }, [])

    return (
        <div className={searchroute == '/newhome' ? 'mainsidebar-panel' : 'mainsidebar-panel'} >
            <div className={searchroute == '/newhome' ? 'first-sidebar' : 'first-sidebar'}  >
                <div className={searchroute == '/newhome' ? 'sidebar-seconddiv' : 'sidebar-seconddiv'} >
                    <div className='sidebar-firstpanel'>
                        <div className={searchroute == '/newhome' ? 'sidebarlogo' : 'sidebarlogo'} >
                            {/* <img src={Logo} height='45px' /> */}
                            <img src={`https://file.rendit.io/n/1gZRNDzdPrn3DtB7mxGK.png`} width='221px' height='115px' />

                        </div>
                        <div className={searchroute == '/newhome' ? 'sidebarmenu' : 'sidebarmenu'} data-toggle="tooltip" data-placement="right" title="Dashboard">
                            <AiOutlineDashboard size={26} />
                            <Link to={'dashboard'} style={{ color: '#FFF' }}>
                                <div className={searchroute == '/newhome' ? 'sidebar-name' : 'sidebar-name'}>
                                    Dashboard
                                </div>
                            </Link>

                        </div>
                        <div className={searchroute == '/newhome' ? 'sidebarmenu' : 'sidebarmenu'} data-toggle="tooltip" data-placement="right" title="Searchify Features">
                            <BiCommand size={26} />
                            <Link to={'dashboard'} style={{ color: '#FFF' }}>
                                <div className={searchroute == '/newhome' ? 'sidebar-name' : 'sidebar-name'}>
                                    Site Optimization
                                </div>
                            </Link>
                        </div>
                        <div className={searchroute == '/newhome' ? 'sidebarmenu' : 'sidebarmenu'} data-toggle="tooltip" data-placement="right" title="Searchify Features">
                            <TbBrandGoogleAnalytics size={26} />
                            <Link to={'dashboard'} style={{ color: '#FFF' }}>
                                <div className={searchroute == '/newhome' ? 'sidebar-name' : 'sidebar-name'}>
                                    Analytics
                                </div>
                            </Link>
                        </div>
                        <div className={searchroute == '/newhome' ? 'sidebarmenu' : 'sidebarmenu'} data-toggle="tooltip" data-placement="right" title="Searchify Features">
                            <CgFileDocument size={26} />
                            <Link to={'userhome'} style={{ color: '#FFF' }}>
                                <div className={searchroute == '/newhome' ? 'sidebar-name' : 'sidebar-name'}>
                                    My Works
                                </div>
                            </Link>
                        </div>
                    </div>                 
                </div>
                <div className={searchroute == '/newhome' ? 'thirddivsidebar' : 'thirddivsidebar'}>
                    <div className='sidebar-child'>
                        <div className='sidebar-round'>
                            U
                        </div>
                        <div className={searchroute == '/newhome' ? 'textbottom' : 'textbottom'}>{props.username}</div>
                    </div>
                    <div className={searchroute == '/newhome' ? 'classicon' : 'classicon'}>
                        <Link to={'usersettings'}>
                            <AiFillSetting size={26} />
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar