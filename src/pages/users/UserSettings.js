import React, {  useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import Sidebar from './Sidebar';
import { getUser, userLogout } from "../../utils/users/Helpers";
import {getProject, getCrawlingData, getWebsite} from "../../utils/users/ProjectUtil";
import { fetchAllDomains } from "../../utils/users/TagUtil";
import Spinner from './../../components/users/Spinner';

const UserSettings = (props) => {
    const [user, setUser] = useState(null);
    const [project, setProject] = useState(null);
    const [websites, setWebsites] = useState([]);
    const [website, setWebsite] = useState(null);
    const [siteName, setSiteName] = useState(null);
    const [siteUrl, setSiteUrl] = useState("");
    const [domains, setDomains] = useState([]);
    const [show, setShow] = useState(false);
    const [showWebsiteOverview, setShowWebsiteOverview] = useState(false);
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    useEffect(() => {
        if (loading) {
            setShow(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);
    if (loading) return <Spinner />;
    const logOut = () => {
        userLogout();
        history.push("/");
    }

    useEffect(() => {
        if(getProject()?.websites != null) {
            setWebsites(getProject()?.websites);
        }
        else{
            setWebsites([]);
        }
        if(getWebsite() != null && website == null) {
            console.log("current website: " + JSON.stringify(getWebsite()));
            setSiteName(getWebsite().name);
            setSiteUrl(getWebsite().url);
            setWebsite(getWebsite());
            setShowWebsiteOverview(true);
        }
        if(getCrawlingData() !=null) {
            setShow(true);
            
        }
        const fetchDomains = async () => {
            const data = await fetchAllDomains();
            const allDomains = await data.json();
            setDomains(allDomains);
        }

        const fetchUser = () => {
            if (user == null) {
                const currentUser = getUser();   
                const currentProject = getProject();
                if (currentUser == null) {
                    history.push("/");
                }
                setUser(currentUser);
                setProject(currentProject);
            }
        }
        fetchUser();
        fetchDomains()
    }, [user]);

    const [websiteData, setWebsiteData] = useState({})

    return (
        <div className='newhome-panel'>
            <div className='sidebar-panel'>
                {getUser() != null ? (
                    <Sidebar setWebsiteData={setWebsiteData} username={getUser().data.sub} />
                ) : (
                    <Sidebar setWebsiteData={setWebsiteData} username={"No User"} />
                )
                }

            </div>
            <div className='newhome-mainpart'>
                <div className="firstpart">
                    <div className="input-group flex-nowrap firstpart-sub">
                        <span className="input-group-text searchbarmenu" id="addon-wrapping"><BsSearch /></span>
                        <input type="text" className="form-control searchbarmenu" placeholder="Search templates" aria-label="username" aria-describedby="addon-wrapping" />

                    </div>
                    <div className="logout-part" style={{ "text-align": "right" }}>
                            <a href="/" onClick={() => logOut()}> <button type="button" class="btn logout-btn logout-btn-top">Log out</button>
                            </a>
                    </div>
                </div>
                <div className='secondpart'>
                    <div style={{"margin-left": "40px", "margin-bottom": "20px"}}>
                        User Settings
                    </div>
                </div>
                <div id='extrapart1' className='extrapart'>
                    {/* <div className="row url-section"> */}
                    <div className="row">
                        <div className=" col-sm-2 profile-label">
                            Profile photo
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-sm-2 profile-photo-panel">
                            <img className="profile-photo-icon" src={`https://file.rendit.io/n/bOQDfaxUHvMfV0nbTY8T.png`} />
                        </div>
                        <div className=" col-sm-5 profile-photo-remove-text">
                            Remove photo
                        </div>
                        <div className=" col-sm-2 profile-photo-change-text">
                        <button type="button" class="btn user-settings-btn-effect">Change photo</button>
                        </div>
                    </div>
                </div>
                <div id='extrapart2' className='extrapart' >
                    {/* <div className="row url-section"> */}
                    <div className="row" style={{"border-top": "1px solid gray", "padding-top": "20px"}}>
                        <div className=" col-sm-2 ">
                            <div className="profile-label">
                                Name
                            </div>
                            <div className="profile-text">
                                Alon Musk
                            </div>
                            
                        </div>
                        <div className=" col-sm-5 profile-photo-remove-text">
                        </div>
                        <div className=" col-sm-2 profile-photo-change-text">
                        <button type="button" class="btn user-settings-btn-effect">Edit</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-sm-2 ">
                            <div className="profile-label">
                                Company name
                            </div>
                            <div className="profile-text">
                                Tesla Cooperation
                            </div>
                            
                        </div>
                        <div className=" col-sm-5 profile-photo-remove-text">
                        </div>
                        <div className=" col-sm-2 profile-photo-change-text">
                        <button type="button" class="btn user-settings-btn-effect">Edit</button>
                        </div>
                    </div>
                    
                </div>
                <div id='extrapart3' className='extrapart' >
                    {/* <div className="row url-section"> */}
                    <div className="row" style={{"border-top": "1px solid gray", "padding-top": "20px"}}>
                        <div className=" col-sm-2 ">
                            <div className="profile-label">
                                Email address
                            </div>
                            <div className="profile-text">
                                alon.musk@tesla.com
                            </div>
                            
                        </div>
                        <div className=" col-sm-5 profile-photo-remove-text">
                        </div>
                        <div className=" col-sm-2 profile-photo-change-text">
                        <button type="button" class="btn user-settings-btn-effect">Edit</button>
                        </div>
                    </div>
                    <div className="row" >
                        <div className=" col-sm-2 ">
                            <div className="profile-label">
                                Integrated platforms
                            </div>
                            <div className="profile-integrated-panel">
                                <div className="profile-integrated-panel-inside">
                                    <div className="profile-integrated-panel-icon">
                                        <div className="profile-integrated-panel-icon-inside">
                                            <img className="profile-integrated-icon" src={`https://file.rendit.io/n/jPAAp8oAA8z2Cg9xQQ1y.png`} />
                                            <div className="profile-integrated-panel-icon-inside-text">
                                                Google
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" style={{"font-size": "12px"}} class="btn user-settings-btn-effect">Disconnect</button>

                                </div>
                            </div>
                            
                        </div>
                        <div className=" col-sm-5 profile-photo-remove-text">
                        </div>
                        <div className=" col-sm-2 profile-photo-change-text">
                        <button type="button" class="btn user-settings-btn-effect">Edit</button>
                        </div>
                    </div>
                    
                </div>
                <div id='extrapart2' className='extrapart' >
                    {/* <div className="row url-section"> */}
                    <div className="row" style={{"border-top": "1px solid gray", "padding-top": "20px"}}>
                        <div className=" col-sm-2 ">
                            <div className="profile-label">
                                Payment Method
                            </div>
                            <div className="profile-text">
                                Alon Musk
                            </div>
                            
                        </div>
                        <div className=" col-sm-5 profile-photo-remove-text">
                        </div>
                        <div className=" col-sm-2 profile-photo-change-text">
                        <button type="button" class="btn user-settings-btn-effect">Manage payment info</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-sm-2 ">
                            <div className="profile-label">
                                Active Subscription
                            </div>
                            <div className="profile-text">
                                Premium
                            </div>
                            
                        </div>
                        <div className=" col-sm-5 profile-photo-remove-text">
                        </div>
                        <div className=" col-sm-2 profile-photo-change-text">
                        <button type="button" class="btn user-settings-btn-effect">Change plan</button>
                        </div>
                    </div>
                    
                </div>
                <div id='extrapart2' className='extrapart' >
                    {/* <div className="row url-section"> */}
                    <div className="row" style={{"border-top": "1px solid gray", "padding-top": "20px"}}>
                        <div className=" col-sm-2 ">
                            <div className="profile-label">
                                Login & Security
                            </div>
                            <div className="profile-text">
                                Password
                            </div>
                            
                        </div>
                        <div className=" col-sm-5 profile-photo-remove-text">
                        </div>
                        <div className=" col-sm-2 profile-photo-change-text">
                        <button type="button" class="btn user-settings-btn-effect">Change password</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-sm-2 ">
                            <div className="profile-label">
                                Security
                            </div>
                            <div className="profile-text">
                                Tesla Cooperation
                            </div>
                            
                        </div>
                        <div className=" col-sm-5 profile-photo-remove-text">
                        </div>
                        <div className=" col-sm-2 profile-photo-change-text">
                        <button type="button" class="btn user-settings-btn-effect">Sign out from all devices</button>
                        </div>
                    </div>
                    
                </div>
               
            </div>
        </div>
    )
}

export default UserSettings