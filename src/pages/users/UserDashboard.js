import React, {  useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import {  useHistory } from "react-router-dom";
import Sidebar from './Sidebar';
import {  getUser, userLogout } from "../../utils/users/Helpers";
import {getProject, getCrawlingData, getWebsite} from "../../utils/users/ProjectUtil";
import {  fetchAllDomains } from "../../utils/users/TagUtil";
import Spinner from './../../components/users/Spinner';

const UserDashboard = (props) => {
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
                        Website Overview
                    </div>
                </div>
                <div id='extrapart' className='extrapart'>
                    {/* <div className="row url-section"> */}
                    <div className="row">
                        <div className=" col-sm-6 total-visit">
                            <div className="total-visit-outer"  onClick={() => {openWebsite(null);} }>
                                <div className="total-visit-top">
                                    <div className="total-visit-top-title">
                                        Total visits
                                    </div>
                                    <div className="total-visit-top-date">
                                        <img className='total-visit-top-calendar-img' 
                                        src={`https://file.rendit.io/n/eCflf6dUktwI1oUT0tSY.svg`}/>
                                        <div className="total-visit-top-date">
                                            Sep 2022 - Nov 2022
                                        </div>
                                    </div>
                                </div>
                                <div className="total-visit-detail">
                                    <div className="total-visit-detail-left">
                                        34,567
                                    </div>
                                    <div className="total-visit-detail-right">
                                        <div className="total-visit-detail-right-icon">
                                            <img width ='24px' height = '24px'
                                                src={`https://file.rendit.io/n/sfsHGlO4Qjc3USRzAp0g.svg`}
                                            />
                                        </div>
                                        <div className="total-visit-detail-right-text">
                                            from last month
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-sm-4 rank">
                            <div className="rank-outer"  onClick={() => {openWebsite(null);} }>
                                <div className="total-visit-top">
                                    <div className="total-visit-top-title">
                                        Global rank
                                    </div>
                                    <div className="rank-top-country">
                                        <img className='rank-top-country-img' 
                                        src={`https://file.rendit.io/n/jp8zB2JIV2CIrYfiIudW.svg`}/>
                                        <div className="rank-top-country-name">
                                           Worldwide
                                        </div>
                                    </div>
                                </div>
                                <div className="rank-detail">
                                    <div className="rank-date">
                                        <img className='rank-calendar-img' 
                                        src={`https://file.rendit.io/n/eCflf6dUktwI1oUT0tSY.svg`}/>
                                        <div className="rank-date">
                                            Sep 2022 - Nov 2022
                                        </div>
                                    </div>
                                    <div className="rank-detail-right">
                                        <div className="rank-detail-right-text">
                                            #11,234
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-4 rank">
                            <div className="rank-outer"  onClick={() => {openWebsite(null);} }>
                                <div className="total-visit-top">
                                    <div className="total-visit-top-title">
                                        Country rank
                                    </div>
                                    <div className="rank-top-country">
                                        <img className='rank-top-country-img' 
                                         src={`https://file.rendit.io/n/vAbtJ4a3EQiaQAT7fC6v.png`}/>
                                        <div className="rank-top-country-name">
                                           Germany
                                        </div>
                                    </div>
                                </div>
                                <div className="rank-detail">
                                    <div className="rank-date">
                                        <img className='rank-calendar-img' 
                                        src={`https://file.rendit.io/n/eCflf6dUktwI1oUT0tSY.svg`}/>
                                        <div className="rank-date">
                                            Sep 2022 - Nov 2022
                                        </div>
                                    </div>
                                    <div className="rank-detail-right">
                                        <div className="rank-detail-right-text">
                                            #11,234
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-4 rank">
                            <div className="rank-outer"  onClick={() => {openWebsite(null);} }>
                                <div className="total-visit-top">
                                    <div className="total-visit-top-title">
                                        Industry rank
                                    </div>
                                    <div className="rank-top-country">
                                        <div className="rank-top-country-name">
                                           Education
                                        </div>
                                    </div>
                                </div>
                                <div className="rank-detail">
                                    <div className="rank-date">
                                        <img className='rank-calendar-img' 
                                        src={`https://file.rendit.io/n/eCflf6dUktwI1oUT0tSY.svg`}/>
                                        <div className="rank-date">
                                            Sep 2022 - Nov 2022
                                        </div>
                                    </div>
                                    <div className="rank-detail-right">
                                        <div className="rank-detail-right-text">
                                            #11,234
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">   
                        <div className="col-sm-12"  onClick={() => {openWebsite(null);} }>
                        <div className="total-visit-outer">
                            <div className="row">
                                <div className="col-sm-6 total-visit-top">
                                    <div className="total-visit-top-title">
                                        Engagement overview
                                    </div>
                                    <div className="total-visit-top-date">
                                        <img className='total-visit-top-calendar-img' 
                                        src={`https://file.rendit.io/n/eCflf6dUktwI1oUT0tSY.svg`}/>
                                        <div className="total-visit-top-date">
                                            Sep 2022 - Nov 2022
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3" style={{"border-bottom": "1px solid gray"}}>
                                Monthly visits
                                </div>
                                <div className="col-sm-3" style={{"font-size":"20px", "color": "gray"}}>
                                7,945
                                </div>
                                <div className="col-sm-3">
                                Visit duration
                                </div>
                                <div className="col-sm-3" style={{"font-size":"20px", "color": "gray"}}>
                                00:05:06
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3" style={{"border-bottom": "1px solid gray"}}>
                                Monthly unique visitors
                                </div>
                                <div className="col-sm-3" style={{"font-size":"20px", "color": "gray"}}>
                                5,000
                                </div>
                                <div className="col-sm-3">
                               
                                </div>
                                <div className="col-sm-3">
                               
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                Visits per unique visitor
                                </div>
                                <div className="col-sm-3" style={{"font-size":"20px", "color": "gray"}}>
                                3
                                </div>
                                <div className="col-sm-3">
                               
                                </div>
                                <div className="col-sm-3">
                                
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default UserDashboard