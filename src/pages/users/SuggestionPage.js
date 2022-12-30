import React, { useEffect, useState } from "react";
import Image from "../../assets/default/images/Blogging_3.gif";
import { Link } from "react-router-dom";
import Select from "react-select";
import { fetchSuggestionsByDomain, fetchDeepSuggestions } from "../../utils/users/TagUtil";
import Header from './../../components/users/Header';

const SuggestionPage = (props) => {
  const [result, setResult] = useState(false);
  const [deepResult, setDeepResult] = useState(false);
  const [domain, setDomain] = useState(null);
  const [domains, setDomains] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [tagsData, setTagsData] = useState([]);
  const [suggestions, setSuggestions] = useState(null);
  const [suggestionName, setSuggestionName] = useState(null);
  const [suggestionTitle, setSuggestionTitle] = useState(null);
  const [suggestionDescription, setSuggestionDescription] = useState(null);
  const [deepSuggestions, setDeepSuggestions] = useState(null);
  const [getFromHome, setGetFromHome] = useState("");

  useEffect(() => {
    setGetFromHome(props.getFromHome); 
    setDomain(props.getFromHome.domain);
    setDomains(props.getFromHome.domains);
    setTagsData(syncTagsData(props.getFromHome.tags));
    setSuggestionName(props.getFromHome.suggestionName);
    setSuggestionTitle(props.getFromHome.suggestionTitle);
    setSuggestionDescription(props.getFromHome.suggestionDescription);
    setSelectedOptions(props.getFromHome.detectedTags);
  }, [suggestions]);

  const customStyles = {
    control: (base, state, provided) => ({
      ...base,
      ...provided,
      background: "black",
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
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

  const syncTagsData = (fetchTags) => {
    const tags = []
    for (let i = 0; i < fetchTags.length; i++) {
      let obj = {};
      obj.label = fetchTags[i].name;
      obj.value = fetchTags[i].id;
      tags.push(obj);
    }
    return tags;
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
    const res = await fetchDeepSuggestions(suggestionDescription);
    setDeepSuggestions(res);
    setDeepResult(true);
  };

  //Function of Card Click
  const handleCardClick = async (id, name, title, description) => {
    setSuggestionName(name);
    setSuggestionTitle(title);
    setSuggestionDescription(description);
    // setSuggestionId(id);
    // suggestions.map((item) => {
    suggestions.map((item) => {
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

  const handleDescCardClick = (id) => {
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
        <Header title="Suggestions Management" />
        <div className="suggestion-container">
          <div className="left-panel">
            <div className="title">Make Your Suggestions</div>
            <hr />
            {/* tag which selected by user */}
            {tags ? (
              <>
                {" "}
                <div className="all-selected-tags">
                  <label>Your Detected Domain / Tags</label>
                  <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">Domain</label>
                    <div className='multipledropdown  col-sm-10'>

                      <select className="form-select mt-4 selection-box" aria-label="Default select example">
                        {domains && domains.map((item) =>
                          item.name == domain ?
                            (<option value={item.name} selected>{item.name}</option>) :
                            (<option value={item.name} >{item.name}</option>)
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">Tags</label>
                    <div className='multipledropdown  col-sm-10'>
                      <Select
                        value={selectedOptions}
                        color='#865aff'
                        styles={customStyles}
                        isMulti
                        options={tagsData}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
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

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input
                    className="form-control "
                    placeholder="Enter Name"
                    name="sltName"
                    value={suggestionName}
                    onChange={(e) => {
                      setSuggestionName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                  <input
                    className="form-control "
                    placeholder="Enter Title"
                    name="sltName"
                    value={suggestionTitle}
                    onChange={(e) => {
                      setSuggestionTitle(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                  {/* <div className="form-textarea"> */}
                  <textarea
                    className="form-control"
                    placeholder="Enter Description"
                    value={suggestionDescription}
                    onChange={(e) => {
                      setSuggestionDescription(e.target.value);
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
            </div>
          </div>
          <div className="right-container">
            <div className="center-panel">
              <div className="title">Suggestions</div>
              <hr />
              <div className="all-cards">

                {suggestions ? (
                  <>
                    {suggestions && suggestions.map((item) => {
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
                    {deepSuggestions && deepSuggestions.map((item) => {
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

export default SuggestionPage;
