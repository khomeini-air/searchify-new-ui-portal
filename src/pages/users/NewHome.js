import React, {  useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import Sidebar from './Sidebar';
import CONFIG from "../../config/users/Constant";
import PageOverview from "../../components/users/NewPageOverview";
import WebsiteOverview from "../../components/users/WebsiteOverview";
import { getUser, userLogout } from "../../utils/users/Helpers";
import {getProject, isWebsiteExist, updateProject, getCrawlingData, getWebsite} from "../../utils/users/ProjectUtil";
import { detectTagsData, fetchAllDomains, fetchSearchifyTags, fetchTags, getDomainFromTag, simplifyTags } from "../../utils/users/TagUtil";
import Spinner from "../../components/users/Spinner";


const NewHome = (props) => {
    const [user, setUser] = useState(null);
    const [project, setProject] = useState(null);
    const [websites, setWebsites] = useState([]);
    const [website, setWebsite] = useState(null);
    const [siteName, setSiteName] = useState(null);
    const [siteUrl, setSiteUrl] = useState("");
    const [domains, setDomains] = useState([]);
    const [domain, setDomain] = useState("no-domain");
    const [show, setShow] = useState(false);
    const [showWebsiteOverview, setShowWebsiteOverview] = useState(false);
    const [isRetry, setIsRetry] = useState(false);
    const [loading, setLoading] = useState(false);
    const [editSiteUrl, setEditSiteUrl] = useState("");
    const [tagResult, setTagResult] = useState({});
    const [crawlingResult, setCrawlingResult] = useState("");
    const [crawlingInternalLinks, setCrawlingInternalLinks] = useState("");

    let history = useHistory();


    const customStyles = {
        control: (base, state, provided) => ({
            ...base,
            ...provided,
            background: "black",
            "border-radius": "25px",
            "border-color": "#bc61c0",
            border: "1px solid transparent",
            background: 
              "linear-gradient(to right, black, black), linear-gradient(to right, #e85782 0% , #916bff 100%)", 
            "background-clip": "padding-box, border-box",
            "background-origin": "padding-box, border-box",
            height: "50px",
            // borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
            }
        }),
        menu: base => ({
            ...base,
            borderRadius: 0,
            marginTop: 0
        }),
        menuList: base => ({
            ...base,
            padding: 0
        })
    };

    const onEditSiteUrlChanged = (event) => {
        setSiteUrl(event.target.value);
        setEditSiteUrl(event.target.value);
    };

    const onEditSiteNameChanged = (event) => {
        setSiteName(event.target.value);
    };

    useEffect(() => {
        if (loading) {
            setShow(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);
    if (loading) return <Spinner />;


    const handleSelectDomain = async (e) => {
        setDomain(e.target.value);
        const fetchTagsResult = await fetchSearchifyTags(e.target.value);
        const fetchTags = await fetchTagsResult.json();
        syncTagsData(fetchTags);
        setTagsData(syncTagsData(fetchTags));

        const fetchSuggestionsResult = await fetchSuggestionsByDomain(e.target.value);
        const fetchSuggestions = await fetchSuggestionsResult.json();
        setSuggestions(fetchSuggestions);
    }

    const handleCrawling = async () => {
        setLoading(loading);
        setIsRetry(false);
        const res = await fetch(CONFIG.hostname + ":8082/crawl/", {
            body: JSON.stringify({ link: siteUrl }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        const data = await res.json();
        const text = [];
        if (data.current.error != "invalid url") {
            const settings = [{name: "domain", value: domain}];
            const updatedWebsite = {name: siteName, url: siteUrl, tokenId: null, ranking: null, settings: settings, templates: null, webPages: null}
            setWebsite(updatedWebsite);

            if(!isWebsiteExist(websites, siteUrl)){
                if(websites == null) {
                    setWebsites([]);
                }
                const updatedWebsites = websites;
                updatedWebsites.push(updatedWebsite);

                setWebsites(updatedWebsites);
                const currentProject = project;
                currentProject.websites = updatedWebsites;
                setProject(currentProject)
                const resProject = await updateProject(currentProject);
                const resultProject = await resProject.json();
                localStorage.setItem('project', JSON.stringify(resultProject));
                localStorage.setItem('currentWebsite', JSON.stringify(updatedWebsite));
            }

            text.push(data.current.description);

            //Detect tagging for the current page
            const res1 = await fetchTags(text);
            const tagResponse = await res1.json();
            setTagResult(tagResponse[0]);
            setCrawlingResult(data.current);
            setCrawlingInternalLinks(data.internalResources);

            localStorage.setItem('crawlingData', JSON.stringify(data));
            setShow(true);
            setShowWebsiteOverview(!showWebsiteOverview);
            //Get all domains
            const fetchDomainsResult = await fetchAllDomains();
            const allDomains = await fetchDomainsResult.json();

            const detectedDomain = getDomainFromTag(tagResponse[0].classifications[0]);
            const fetchTagByDetectedDomain = await fetchSearchifyTags(detectedDomain);
            const allTags = await fetchTagByDetectedDomain.json();
            const detectedTags = detectTagsData(simplifyTags(tagResponse[0].classifications), allTags);

            props.setGetFromHome({ suggestionName: data.current.title, suggestionTitle: data.current.title, suggestionDescription: data.current.description, tags: allTags, detectedTags: detectTagsData(simplifyTags(tagResponse[0].classifications), allTags), domains: allDomains, domain: detectedDomain });
        }

        else {
            setIsRetry(true);
        }
    };

    const routeChange = (data) => {
        if (selected === 'Website - New Page') {
            history.push("/seoproduct", { feature: selected, domain: data });
        }
        if (selected === 'Website - Existing Page') {
            history.push("/user/websiteseo", { feature: selected, domain: data });
        }
    }

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
    }, [domains, user]);

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
                        SEO Optimization
                    </div>
                </div>
                <div id='extrapart' className='extrapart'>
                <div className="row url-section">
                    <div className="col-sm-4 input-col">
                    <label htmlFor="" className="form-label">Website Name *</label>
                        <input
                            onChange={onEditSiteNameChanged}
                            value={siteName}
                            type="text"
                            placeholder="Enter your project name"
                            id="textsend"
                            className="txtName"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-sm-1 input-col">
                        <img src={`https://file.rendit.io/n/NpBHMSsnV5AYdbfRvcCd.svg`} />
                    </div>
                    <div className="col-sm-4">
                                    <label htmlFor="" className="form-label">Business Domain *</label>
                                    <div className='multipledropdown'>
                                        <select className="form-select mt-4 selection-box multipledropdown-sub"
                                            aria-label="Default select example"
                                            placeholder="Business Domain"
                                            styles={customStyles} 
                                            defaultValue={{ label: "Select Dept", value: 0 }}
                                            onChange={handleSelectDomain}
                                        >
                                            <option value="no-domain"> <span  style={{"color": "gray"}}>Select a domain </span> </option>
                                            {domains && domains.map((item) =>
                                                item.name == domain ?
                                                    (<option value={item.name} selected>{item.name}</option>) :
                                                    (<option value={item.name} >{item.name}</option>)
                                            )}
                                        </select>
                                    </div>
                                </div>
                </div>
                <div className="row url-section">
                    <div className="col-sm-9 input-col">
                        <input
                            onChange={onEditSiteUrlChanged}
                            value={siteUrl}
                            type="text"
                            placeholder="Enter Your Website URL"
                            id="textsend"
                            className="txtUrl"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-sm-3 btn-col">
                        <button
                            onClick={() => handleCrawling()}
                            id="button"
                            type="submit"
                            className="btn-main"
                        >
                            <p className="btnText mb-0">Check your site</p>
                        </button>
                    </div>
                </div>
                <div>
                    {show && (
                        <PageOverview
                        crawlingResult={getCrawlingData().current}
                        tagResult={tagResult}
                        internalLinks = {getCrawlingData().internalResources}
                        />
                    )}
                </div>
                <div>
                    {showWebsiteOverview && (
                       <WebsiteOverview websiteData={websiteData} />
                    )}
                </div>
                </div>
            </div>
        </div>
    )
}

export default NewHome