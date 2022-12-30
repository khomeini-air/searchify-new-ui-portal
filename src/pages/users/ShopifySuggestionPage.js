import React, { useEffect, useState, useContext } from "react";
import Image from "../../assets/users/images/Blogging_3.gif";
import { Link } from "react-router-dom";
import { fetchAllDomains, fetchSuggestionsByDomain, fetchDeepSuggestions } from "../../utils/users/TagUtil";
import { fetchShopifyPageSeo, updateShopifyPageSeo} from "../../utils/users/ShopifyUtil";
import Header from './../../components/users/Header';

const ShopifySuggestionPage = (props) => {
  const [selectName, setSelectName] = useState(null);
  const [selectTitle, setSelectTitle] = useState(null);
  const [selectId, setSelectId] = useState(0);
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(false);
  const [deepResult, setDeepResult] = useState(false);
  const [domains, setDomains] = useState(null);
  const [domain, setDomain] = useState(null);
  const [tags, setTags] = useState(null);
  const [suggestion, setSuggestion] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  const [deepSuggestions, setDeepSuggestions] = useState(null);
  const [pageSeo, setPageSeo] = useState(null);

  // ---Data Fetched from Suggestion page---------------------------------------------------------------
  const [getFromShopifyHome, setGetFromShopifyHome] = useState(""); //for store fetched data from tagging page
  useEffect(() => {
    setPageSeo(props.getFromShopifyHome.pageSeo);
    setGetFromShopifyHome(props.getFromShopifyHome);
    setDescription(props.getFromShopifyHome.pageSeo.description);
    setSelectTitle(props.getFromShopifyHome.pageSeo.title);
  }, [suggestions]);

    //Function for getting shopify pageSeo detail
    const handleGetShopifyPageSeo = async () => {
      const data = {pageId: "99049603313", store: "searchify-store", accessKey: "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"};
      const res = await fetchShopifyPageSeo(data);
      const returnedPageSeo = await res.json();
      setPageSeo(returnedPageSeo);
      const shopifySuggestion = {id: "0000", name: "Shopify-Page", title: returnedPageSeo.title, description: returnedPageSeo.description};
      setSuggestion(shopifySuggestion);
      setSelectTitle(shopifySuggestion.title);
      setDescription(shopifySuggestion.description);
      // setResult(true);
    };

    //Function for getting shopify pageSeo detail
    const handleUpdateShopifyPageSeo = async () => {
      const newPageSeo = {id: props.getFromShopifyHome.pageSeo.id, name: null, store: "searchify-store", accessKey: "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", title: selectTitle, titleId: pageSeo.titleId, keywords: null, keywordsId: null, description: description, descriptionId: pageSeo.descriptionId};

      const res = await updateShopifyPageSeo(newPageSeo);
      const returnedPageSeo = await res.json();
      setPageSeo(returnedPageSeo);
    };

    const handleGettingDomains = async () => {

      const fetchDomainsResult = await fetchAllDomains();
      const allDomains = await fetchDomainsResult.json();
      setDomains(allDomains);
  }

  const handleSelectDomain = async (e) => {
      setTags([]);
      setDomain(e.target.value);
  }

  //Function for Show AI Suggestions
  const handleGetSuggestions = async () => {
    const res = await fetchSuggestionsByDomain(domain);
    const fetchSuggestions = await res.json();
    setSuggestions(fetchSuggestions);
    setResult(true);
  };

  //Function for Show Deep Suggestions
  const handleGetDeepSuggestions = async () => {
    const res = await fetchDeepSuggestions(description);
    setDeepSuggestions(res);
    setDeepResult(true);
  };

  //Function of Card Click
  const handleCardClick = async (id, name, title, description) => {
    setSelectName(name);
    setSelectTitle(title);
    setDescription(description);
    setSelectId(id);
    // suggestions.map((item) => {
    cardData.map((item) => {
      if (item.id === id) {
        document
          .getElementById(`${"card" + item.id}`)
          .classList.add("cardActive");
        document
          .getElementById(`${"number" + item.id}`)
          .classList.add("numberActive");
      } else {
        document
          .getElementById(`${"card" + item.id}`)
          .classList.remove("cardActive");
        document
          .getElementById(`${"number" + item.id}`)
          .classList.remove("numberActive");
      }
      return item;
    });
  };

    const handleDescCardClick = (id)=>{
      descData.map((item) => {
        if (item.id === id) {
          document
            .getElementById(`${"descCard" + item.id}`)
            .classList.add("cardActive");
          document
            .getElementById(`${"descNumber" + item.id}`)
            .classList.add("numberActive");
        } else {
          document
            .getElementById(`${"descCard" + item.id}`)
            .classList.remove("cardActive");
          document
            .getElementById(`${"descNumber" + item.id}`)
            .classList.remove("numberActive");
        }
        return item;
      });
    }

  return (
    <>
      <div className="main-container">
      <Header title="Shopify Seo Management" />
        <div className="suggestion-container">
          <div className="left-panel">
            <div className="title">Make Your Suggestions</div>
            <hr />
            {tags ? (
              <>
                {" "}
                <div className="all-selected-tags">
                  <label>Your Selected Tags</label>
                  <div className="tags">
                    {tags ? (
                      tags.map((item) => {
                        return (
                          <>
                            <div className="tag">{item.name}</div>
                          </>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="form">
                <select className="form-select mt-4 selection-box" aria-label="Default select example"
                                    onClick={() => handleGettingDomains()}
                                    onChange={handleSelectDomain}>
                                <option selected>Domain - select box</option>
                                {domains && domains.map((item) => 
                                <option value={item.name}>{item.name}</option>
                                )}
                            </select>
              <div className="">
                <label>Name</label>
                <div className="form-input">
                  <input
                    className="form-control "
                    placeholder="Enter Name"
                    id="sltName"
                    name="sltName"
                    value={selectName}
                    onChange={(e) => {
                      setSelectName(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="">
                <label>Title</label>
                <div className="form-input">
                  <input
                    className="form-control "
                    placeholder="Enter Name"
                    id="sltTitle"
                    name="sltTitle"
                    value={selectTitle}
                    onChange={(e) => {
                      setSelectTitle(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="">
                <label>Description</label>
                <div className="form-textarea">
                  <textarea
                    className="form-control"
                    placeholder="Enter Description"
                    id="txtareaDesc"
                    name="txtareaDesc"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    style={{ height: "100px" }}
                  ></textarea>
                </div>
              </div>
              <div className="buttons">
                <button className="ai-btn" onClick={handleGetSuggestions}>
                  Get Suggestions
                </button>
                <button className="ai-btn" onClick={handleGetDeepSuggestions}>
                  Deep Suggestions
                </button>
              </div>
              <div className="buttons">
                <button className="ai-btn" onClick={handleGetShopifyPageSeo}>
                  Get from Shopify
                </button>
                <button className="ai-btn" onClick={handleUpdateShopifyPageSeo}>
                  Push to Shopify
                </button>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="center-panel">
              <div className="title">Suggestions</div>
              <hr />
              <div className="all-cards">
              
                      {suggestions ? (
                        <>
                          { suggestions && suggestions.map((item) => {
                            return (
                          <>
                            <div
                              className="main-card"
                              onClick={() => {
                                handleCardClick(
                                  item.id,
                                  item.name,
                                  item.title,
                                  item.description
                                );
                              }}
                            >
                              <div
                                className="number"
                                id={`${"number" + item.id}`}
                              >
                                {item.id}
                              </div>
                              <div
                                className="card sug-card"
                                id={`${"card" + item.id}`}
                              >
                                <div className="card-body sug-card-body">
                                  <div className="card-name">{item.name}</div>
                                  <div className="card-title">{item.title}</div>
                                  <div className="card-desc">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </>
                ) : (
                  <>
                    <div className="default-img">
                      <img src={Image} alt="Image Not Found" />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="right-panel">
              <div className="title">Deep Suggestions</div>
              <hr />
              <div className="all-cards">
              {deepSuggestions ? (
                <>
                  { deepSuggestions && deepSuggestions.map((item) => {
                    return (
                          <>
                            <div
                              className="main-card"
                              onClick={() => {
                                handleDescCardClick(
                                  item.id
                                );
                              }}
                            >
                              <div
                                className="number"
                                id={`${"descNumber" + item.id}`}
                              >
                                {item.id}
                              </div>
                              <div
                                className="card sug-card"
                                id={`${"descCard" + item.id}`}
                              >
                                <div className="card-body sug-card-body">
                                  {/* <div className="card-name">{item.name}</div> */}
                              <div className="card-title">Description</div>
                                  <div className="card-desc">
                                    {item}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </>
                ) : (
                  <>
                    <div className="default-img">
                      <img src={Image} alt="Image Not Found" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="btn-panel">
          <Link to="/tagging">
            <button className="back-btn">
              <span>Back</span>
            </button>
          </Link>
          <Link to="/history">
            <button className="next-btn">
              <span>Next</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopifySuggestionPage;
