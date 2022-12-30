import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Spinner from "../Loader/Spinner";
import { Link } from "react-router-dom";
import tags from "./TagData.json";
import { fetchTags, fetchSearchifyTags } from "../Utils/TagUtil";


const TaggingPage = (props) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leftStaticData, setLeftStaticData] = useState(null);
  const [leftSideTag, setLeftSideTag] = useState(tags.leftTags);
  const [rightSideTags, setRightSideTags] = useState(tags.rightTags);
  const [tagInput, setTagInput] = useState("");
  const [selectedDomainName, setSelectedDomainName] = useState("");
  const [newId, setNewId] = useState(leftSideTag.length);
  const [domains, setDomains] = useState(null);
  const [filteredTags, setFilteredTags] = useState(null);

  // ---Data Fetched from Home page---------------------------------------------------------------
  const [catchFromHome, setCatchFromHome] = useState(""); //for storing fetched data from Home page
  useEffect(() => {
    setCatchFromHome(props.getFromHome); 
    setDomains(props.getFromHome.domains); 
    props.setGetFromTag(props.getFromHome);   //store fetched data from home page
  }, []);
  console.log("This is home page url[fetched from Home page]", JSON.stringify(catchFromHome));     //printing fetched data from Home page
  // ---------------------------------------------------------------------



  // useEffect(() => {
  //   setLeftStaticData(leftSideTag);
  // }, []);

  useEffect(() => {
    if (loading) {
      setShow(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [loading]);

  useEffect(() => {
    //Temporarily disable this feature to not allow the user to create a custom tag.
    // if (tagInput === "") {
    //   document.getElementById("close-icon").style.display = "none";
    // } else {
    //   document.getElementById("close-icon").style.display = "block";
    // }
  }, [domains, tagInput, filteredTags, rightSideTags]);

  const handlePlusClick = (id) => {
    var obj1 = {};
    obj1 = filteredTags.filter((item) => item.id === id);
    console.log("rightTags: " + JSON.stringify(obj1));
    const arr = filteredTags.filter((item) => item.id !== id);
    setFilteredTags(arr);
    const tempRightTags = rightSideTags;
    tempRightTags.push(obj1[0]);
    setRightSideTags(tempRightTags);
    console.log("rightTags: " + JSON.stringify(tempRightTags));
    props.setSelectedTag((prev)=>[...prev, obj1[0]]);   //set selected tag for sending to suggestion page
    handleToSuggestion(tempRightTags);
  };

  const handleCrossClick = (id) => {
    var obj2 = {};
    obj2 = rightSideTags.filter((item) => item.id === id);
    const arr = rightSideTags.filter((item) => item.id !== id);
    const tempRightTags = arr;
    console.log("rightTags: " + JSON.stringify(tempRightTags));

    //tempRightTags.splice(obj2[0]);
    console.log("rightTags: " + JSON.stringify(tempRightTags));

    setRightSideTags(tempRightTags);
    setFilteredTags((prev) => [...prev, obj2[0]]);

    // }
    handleToSuggestion(tempRightTags);
  };

  const handleTagInput = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = (e) => {
    if (tagInput !== "") {
      var addId = leftStaticData?.length;
      setRightSideTags((prev) => [...prev, { id: addId + 1, name: tagInput }]);
      setLeftStaticData((prev) => [...prev, { id: addId + 1, name: tagInput }]);
      setTagInput("");
    } else {
      e.preventDefault();
      alert("PLease Enter TagName");
    }
  };

  const handleRemove = () => {
    setTagInput("");
  };

  const handleSearch = (e) => {
    // setSearch(e.target.value)
  };

  const handleSelect = async(e) => {
    setLoading(!loading);
    console.log(e.target.value);
    setFilteredTags(null);
    setSelectedDomainName(e.target.value);
    const fetchTagsResult = await fetchSearchifyTags(e.target.value);
    const fetchTags = await fetchTagsResult.json();
    setShow(!show);
    console.log("fetchTags:" + JSON.stringify(fetchTags));
    setFilteredTags(fetchTags);
    setRightSideTags([]);

  };

  const handleToSuggestion = (selectedTags) => {
    props.setGetFromTag({tags: selectedTags, domain: selectedDomainName});

  }

  // var filteredTags = [];
  // filteredTags = leftSideTag.filter((item) => {
  //   if (
  //     selectedDomainName === "" ||
  //     selectedDomainName === "Select Domain Name"
  //   ) {
  //     return item;
  //   } else if (
  //     item.name.toLowerCase().includes(selectedDomainName.toLowerCase())
  //   ) {
  //     return item;
  //   }
  // });

  return (
    <>

      <div className="tag-container">
        <div className="top-panel">
          <div className="left-panel">
            <div className="header">
              <div className="title">Available Tags</div>
              <div>
                <select
                  className="form-select selection-box"
                  aria-label="Default select example"
                  id="sltDomainName"
                  onChange={handleSelect}
                >
                  <option selected>Select Domain Name</option>
                  {domains && domains.map((item) => 
                  <option value={item.name}>{item.name}</option>
                )}
              {/* } */}
                </select>
              </div>
            </div>
            {loading != true? (
            <div className="all-tags">
            
              {filteredTags != null? (
                filteredTags.map((item) => {
                  return (
                    <>
                      <div className="tag" key={item.id}>
                        <p className="tag-text">{item.name}</p>
                        <span className="tag-icon">
                          <AiOutlinePlus
                            className="icon"
                            onClick={() => {
                              handlePlusClick(item.id);
                            }}
                          />
                        </span>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <p className="no-tag">
                    No Tags Available Related to Your Domain
                  </p>
                </>
              )}
            </div>
          
            ): (
              <div className="all-tags text-left">
                  <Spinner />
              </div>
            )}
          </div>
          <div className="right-panel">
            <div className="title">Selected Tags</div>
            <div className="selected-tags">
              <div className="all-tags">
                {rightSideTags && rightSideTags.map((item) => {
                  return (
                    <>
                      <div className="tag" key={item.id}>
                        <p className="tag-text">{item.name}</p>
                        <span className="tag-icon">
                          <AiOutlineClose
                            className="icon"
                            onClick={() => {
                              handleCrossClick(item.id);
                            }}
                          />
                        </span>
                      </div>
                    </>
                  );
                })}
              </div>
              {/* <div className="input-sec">
                <input
                  className="txt-addtag"
                  placeholder="Enter Custom Tag"
                  value={tagInput}
                  onChange={handleTagInput}
                />
                <span
                  className="cross-icon"
                  id="close-icon"
                  onClick={handleRemove}
                >
                  <AiOutlineClose />
                </span>
                <button className="add-btn" onClick={handleAddTag}>
                  Add
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="bottom-panel">
          <Link to="/home">
            <button className="back-btn">
              <span>Back</span>
            </button>
          </Link>
          <Link to="/suggestions">
            <button className="next-btn" >
              <span>Next</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TaggingPage;
