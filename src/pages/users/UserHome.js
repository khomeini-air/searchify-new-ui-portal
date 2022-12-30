import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import {  useHistory } from "react-router-dom";
import Sidebar from './Sidebar';
import {  getUser ,userLogout } from "../../utils/users/Helpers";
import {getProject, getCrawlingData, getWebsite} from "../../utils/users/ProjectUtil";
import { fetchAllDomains} from "../../utils/users/TagUtil";
import Spinner from './../../components/users/Spinner';

const UserHome = (props) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [project, setProject] = useState(null);
    const [websites, setWebsites] = useState([]);
    const [website, setWebsite] = useState(null);
    const [siteName, setSiteName] = useState(null);
    const [siteUrl, setSiteUrl] = useState("");
    const [domains, setDomains] = useState([]);
    const [show, setShow] = useState(false);
    const [showWebsiteOverview, setShowWebsiteOverview] = useState(false);
    let history = useHistory();

    const openWebsite = (website) => {
        localStorage.setItem('currentWebsite', JSON.stringify(website));
        localStorage.removeItem('crawlingData');
        history.push(`/newhome`)
    }

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
    const [websiteData, setWebsiteData] = useState({});

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
                        SEO Optimization
                    </div>
                </div>
                <div id='extrapart' className='extrapart'>
                    {/* <div className="row url-section"> */}
                    <div className="row">
                        <div className=" col-sm-2 new-project">
                            <div className="new-project-outer"  onClick={() => {openWebsite(null);} }>
                                <div className="new-project-inner">
                                        New Project
                                </div>
                                <div className="new-project-bottom">
                                    <div className="new-project-bottom-text">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row col-sm-9 page-content projects">
                           
                             {getProject().websites?.map((website, i) => {
                                console.log('getProject', getProject().websites)
                                return (
                                    <>
                                <div className="col-sm-4 main-card project"
                                    onClick={() => {openWebsite(website);} }
                                >

                                    <div className="card  outer-space-project"
                                    >
                                    <div className="project-name">{website.name}</div>
                                    <img src={`https://file.rendit.io/n/T6iYPPjniYfXiK6407ON.svg`} />

                                        <div className="card-body page-card-body">
                                            <div className="card-url">{website.url}</div>
                                        </div>
                                    </div>
                                </div>
                                </>
                            );
                        })
                        }
                    </div>
                </div>
                
                </div>
               
            </div>
        </div>
    )
}

export default UserHome