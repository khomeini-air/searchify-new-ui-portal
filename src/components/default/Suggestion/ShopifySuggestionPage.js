import React, { useEffect, useState, useContext } from "react";
import Image from "../../../assets/default/images/Blogging_3.gif";
import { Link } from "react-router-dom";
import { fetchTags, fetchSuggestionsByDomain, fetchDeepSuggestions } from "../Utils/TagUtil";
import { fetchShopifyPageSeo, updateShopifyPageSeo} from "../Utils/ShopifyUtil";

const ShopifySuggestionPage = (props) => {
  const [selectName, setSelectName] = useState(null);
  const [selectTitle, setSelectTitle] = useState(null);
  const [selectId, setSelectId] = useState(0);
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(false);
  const [deepResult, setDeepResult] = useState(false);
  const [change, setChange] = useState(true);
  const [domain, setDomain] = useState(null);
  const [tags, setTags] = useState(null);
  const [suggestion, setSuggestion] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  const [deepSuggestions, setDeepSuggestions] = useState(null);
  const [pageSeo, setPageSeo] = useState({id: "99049603313", name: null, store: "searchify-store", accessKey: "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", title: null, titleId: null, keywords: null, keywordsId: null, description: null, descriptionId: null});

  // ---Data Fetched from Suggestion page---------------------------------------------------------------
  const [getFromTag, setGetFromTag] = useState(""); //for store fetched data from tagging page
  useEffect(() => {
    setGetFromTag(props.getFromTag); //Storing fetched data from tagging pge
    setDomain(props.getFromTag.domain);
    setTags(props.getFromTag.tags);
  }, [suggestions]);
  console.log(
    "This data is fetched from Tagging page",
    JSON.stringify(getFromTag)
  ); //printing fetched data from tagging page
  // ---------------------------------------------------------------------------------------------------

  //Function for Update Card Data
  //   const handleUpdate = () => {
  //     axios
  //       .put(`http://localhost:3005/cardData/${selectId}`, {
  //         id: selectId,
  //         name: selectName,
  //         title: selectTitle,
  //         desc: desc,
  //       })
  //       .then(() => {
  //         setChange(!change);
  //       });
  //     setSelectName(null);
  //     setSelectTitle(null);
  //     setDesc("");
  //     setSelectId(0);
  //   };

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
      const newPageSeo = {id: "99049603313", name: null, store: "searchify-store", accessKey: "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", title: selectTitle, titleId: pageSeo.titleId, keywords: null, keywordsId: null, description: description, descriptionId: pageSeo.descriptionId};

      const res = await updateShopifyPageSeo(newPageSeo);
      const returnedPageSeo = await res.json();
      setPageSeo(returnedPageSeo);
      // const shopifySuggestion = {id: "0000", name: "Shopify-Page", title: returnedPageSeo.title, description: returnedPageSeo.description};
      // setSuggestion(shopifySuggestion);
      // setSelectTitle(shopifySuggestion.title);
      // setDescription(shopifySuggestion.description);
      // setResult(true);
    };

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

  //Function for Show AI Suggestions
  const handleShow = () => {
    setResult(true);
  };

  //Get Card Data
  //   useEffect(() => {
  //     axios.get("http://localhost:3005/cardData").then((res) => {
  //       setCardData(res.data);
  //     });
  //   }, [change]);

  //Get Name Data
  //   useEffect(() => {
  //     axios.get("http://localhost:3005/name").then((res) => {
  //       setNameData(res.data);
  //     });
  //   }, []);

  //Get Title Data
  //   useEffect(() => {
  //     axios.get("http://localhost:3005/title").then((res) => {
  //       setTitleData(res.data);
  //     });
  //   }, []);

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
  //Function for Select Name Value
  const handleNameSelect = (value) => {
    setSelectName(value);
  };

  //Function for Select Title Value
  const handleTitleSelect = (value) => {
    setSelectTitle(value);
  };

  console.log("selectd Tag", props.selectedTag); //fetch tags from tagging page
  return (
    <>
      <div className="main-container">
        <div className="suggestion-container">
          <div className="left-panel">
            <div className="title">Make Your Suggestions</div>
            <hr />
            {/* tag which selected by user */}
            {tags ? (
              <>
                {" "}
                <div className="all-selected-tags">
                  <label>Your Selected Tags</label>
                  <div className="tags">
                    {/* {prpos.selectedTag?prpos.selectedTag.map((item) => { */}
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
                {/*<button className="save-btn">
                  Save Changes
                  </button> */}
                <button className="ai-btn" onClick={handleGetSuggestions}>
                  Get Suggestions
                </button>
                <button className="ai-btn" onClick={handleGetDeepSuggestions}>
                  Deep Suggestions
                </button>
              </div>
              <div className="buttons">
                {/*<button className="save-btn">
                  Save Changes
                  </button> */}
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
