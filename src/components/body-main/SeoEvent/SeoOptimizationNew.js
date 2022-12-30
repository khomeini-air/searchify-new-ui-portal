import React, {  useEffect, useState }  from 'react'
import { Link,  useNavigate } from 'react-router-dom';
import styles from './SeoEvent.module.css'
import shapeImg3 from '../../../assets/img/gradient-shape3.png'
import SearchWithbtn from '../../share/search/searchWithbtn'
import BreadCrumb from '../../share/breadcrumb/BreadCrumb'
import DomainFieldSelect from '../../share/inputFieldBox/DomainFieldSelect'
import EditTitle from '../../share/EditTitle/EditTitle'
import PageOverview from '../../core/pageOverview/PageOverview'
import SearchInsightResult from '../../core/searchInsight/SearchInsightResult'
import SiteInsightResult from '../../core/searchInsight/SiteInsightResult'
import CONFIG from "../../../config/users/Constant";
import { getUser, userLogout } from "../../../utils/users/Helpers";
import {getProject, isWebsiteExist, updateProject, getCrawlingData, getWebsite, isWebpageExist} from "../../../utils/users/ProjectUtil";
import { detectTagsData, fetchAllDomains, fetchSearchifyTags, simplifyTags } from "../../../utils/users/TagUtil";

export const SeoOptimizationNew = () => {
  const [user, setUser] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const [project, setProject] = useState(null);
  const [websites, setWebsites] = useState([]);
  const [website, setWebsite] = useState(null);
  const [siteName, setSiteName] = useState(null);
  const [siteUrl, setSiteUrl] = useState(null);
  const [siteEditUrl, setEditSiteUrl] = useState("");
  const [domains, setDomains] = useState([]);
  const [domain, setDomain] = useState(null);
  const [show, setShow] = useState(false);
  const [showWebsiteOverview, setShowWebsiteOverview] = useState(false);
  const [isRetry, setIsRetry] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tagResult, setTagResult] = useState({});
  const [crawlingResult, setCrawlingResult] = useState("");
  const [crawlingInternalLinks, setCrawlingInternalLinks] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    if(firstLoad) {
      localStorage.removeItem('currentWebsite')
      setFirstLoad(false)
    }
    if(getProject()?.websites != null) {
      setWebsites(getProject()?.websites);
    }
    else{
        setWebsites([]);
    }

    const fetchUser = () => {
      if (user == null) {
          const currentUser = getUser();   
          const currentProject = getProject();
          if (currentUser == null) {
              navigate("/");
          }
          setUser(currentUser);
          setProject(currentProject);
      }
    }
    fetchUser();
    
  });

  const validate = () => {
    if(siteName && siteUrl && domain && !isWebpageExist(websites, siteUrl)) {
       setButtonDisabled(false);
    } else {
      setButtonDisabled(true);

    }
  }

  const onEditSiteNameChanged = (event) => {
    setSiteName(event);
    validate()
  };

  const onEditSiteUrlChanged = (event) => {
    setSiteUrl(event);
    setEditSiteUrl(event);
    validate()
  };

  const handleSelectDomain = async (e) => {
    setDomain(e.name)
    validate()
  }

  const handleCrawling = async (event) => {
    if(buttonDisabled){
      return;
    }
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
        const settings = {domain : domain};
        const updatedWebsite = {name: siteName, url: siteUrl, tokenId: null, ranking: null, settings: settings, templates: null, webpages: null}
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
        setCrawlingResult(data.current);
        setCrawlingInternalLinks(data.internalResources);

        localStorage.setItem('crawlingData', JSON.stringify(data));
        setShow(true);
        setShowWebsiteOverview(!showWebsiteOverview);
        //Get all domains
        const fetchDomainsResult = await fetchAllDomains();
        const allDomains = await fetchDomainsResult.json();
        const fetchTagByDetectedDomain = await fetchSearchifyTags(domain);
        const allTags = await fetchTagByDetectedDomain.json();
        navigate('/seooptimization',{state: {show: true}})

    }

    else {
        setIsRetry(true);
    }
};


  return (
    <>
      <div className={styles.app_SEO_Optimization}>
        <img className={styles.app_shape_img} src={shapeImg3} alt={shapeImg3} />
        <div className={styles.SEO_Optimization_wrapper}>
          <div className={styles.breadcrumb__box}>
            <BreadCrumb withLinkText={true} />
          </div>

          <div className={styles.project_action_box}>
            <div className={styles.editing__titlebox}>
              <EditTitle onChange={onEditSiteNameChanged} editingTitle={true} isNew={true}/>
            </div>
            <div className={styles.__drop_action_btn}>
              <div className={styles.select__items__box}>
                <DomainFieldSelect  onDomainChange={handleSelectDomain} 
                                    inputTitle='Business Domain' />
              </div>
            </div>
          </div>
          <div className={styles.search__inputbox}>
            <SearchWithbtn 
                buttonLabel={"Check & Create"}
                onChange={onEditSiteUrlChanged}
                onClick={handleCrawling}
                readOnly={false}
                buttonDisabled = {buttonDisabled}
              />
          </div>
        </div>
      </div>
    </>
  )
}
export default SeoOptimizationNew

