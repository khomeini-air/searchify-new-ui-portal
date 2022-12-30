import React, { useState, useEffect } from "react";
import PageOverview from "../../components/users/WebsitePageOverview";
import CONFIG from "../../config/users/Constant";
import { fetchTags, detectTagsData, simplifyTags, fetchSearchifyTags, fetchAllDomains, getDomainFromTag } from "../../utils/users/TagUtil";
import Spinner from './../../components/users/Spinner';

function WebsiteHomePage(props) {
  const [show, setShow] = useState(false);
  const [isRetry, setIsRetry] = useState(false);
  const [loading, setLoading] = useState(false);
  const [siteUrl, setSiteUrl] = useState("");
  const [editSiteUrl, setEditSiteUrl] = useState("");
  const [tagResult, setTagResult] = useState({});
  const [crawlingResult, setCrawlingResult] = useState("");

  useEffect(() => {
    if (loading) {
      setShow(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [loading]);

  if (loading) return <Spinner />;

  const onEditSiteUrlChanged = (event) => {
    setSiteUrl(event.target.value);
    setEditSiteUrl(event.target.value);
  };

  const handleCrawling = async () => {
    setLoading(!loading);
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
    if(data.current.error != "invalid url"){
      text.push(data.current.description);
      const res1 = await fetchTags(text);
      const tagResponse = await res1.json();
      setTagResult(tagResponse[0]);
      setCrawlingResult(data.current);
      setShow(!show);
      const fetchDomainsResult = await fetchAllDomains();
      const allDomains = await fetchDomainsResult.json();
      const detectedDomain = getDomainFromTag(tagResponse[0].classifications[0]);
      const fetchTagByDetectedDomain = await fetchSearchifyTags(detectedDomain);
      const allTags = await fetchTagByDetectedDomain.json();
      const detectedTags = detectTagsData(simplifyTags(tagResponse[0].classifications), allTags);

      props.setGetFromHome({suggestionName: data.current.title, suggestionTitle: data.current.title, suggestionDescription: data.current.description, tags: allTags, detectedTags: detectTagsData(simplifyTags(tagResponse[0].classifications), allTags), domains: allDomains, domain: detectedDomain});
    }
    else {
      setIsRetry(true);
    }
  };

  return (
    <>
      <div className="container home-container">
        <div className="title-1">
          <p>Let's create your own web page content</p>
        </div>
        {isRetry ? (
            <div className="title-2">
              <p> Use Searchify to increase SEO ranking for your website</p>
            
                <p style={{ color: "red" }}> Please try with the correct url!</p>           
            </div>
      ) : (
            <div className="title-2">
              <p> Use Searchify to increase SEO ranking for your website</p>
            </div>
            )
          }
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
              <div className="btnTwo">
                <p className="btnText2 mb-0">GO</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div>
        {show && (
          <PageOverview
            crawlingResult={crawlingResult}
            tagResult={tagResult}
          />
        )}
      </div>
    </>
  );
}

export default WebsiteHomePage;
