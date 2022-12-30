import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import tags from "../../db/users/TagData.json";
import { fetchSearchifyTags } from "../../utils/users/TagUtil";
import Spinner from './../../components/users/Spinner';

const TaggingPage = (props) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rightSideTags, setRightSideTags] = useState(tags.rightTags);
  const [tagInput, setTagInput] = useState("");
  const [selectedDomainName, setSelectedDomainName] = useState("");
  const [domains, setDomains] = useState(null);
  const [filteredTags, setFilteredTags] = useState(null);
  const [catchFromHome, setCatchFromHome] = useState(""); 

  useEffect(() => {
    setCatchFromHome(props.getFromHome); 
    setDomains(props.getFromHome.domains); 
    props.setGetFromTag(props.getFromHome);   //store fetched data from home page
  }, []);

  useEffect(() => {
    if (loading) {
      setShow(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [loading]);

  useEffect(() => {
  }, [domains, tagInput, filteredTags, rightSideTags]);

  const handlePlusClick = (id) => {
    var obj1 = {};
    obj1 = filteredTags.filter((item) => item.id === id);
    const arr = filteredTags.filter((item) => item.id !== id);
    setFilteredTags(arr);
    const tempRightTags = rightSideTags;
    tempRightTags.push(obj1[0]);
    setRightSideTags(tempRightTags);
    props.setSelectedTag((prev)=>[...prev, obj1[0]]);
    handleToSuggestion(tempRightTags);
  };

  const handleCrossClick = (id) => {
    var obj2 = {};
    obj2 = rightSideTags.filter((item) => item.id === id);
    const arr = rightSideTags.filter((item) => item.id !== id);
    const tempRightTags = arr;
    setRightSideTags(tempRightTags);
    setFilteredTags((prev) => [...prev, obj2[0]]);
    handleToSuggestion(tempRightTags);
  };

  const handleSelect = async(e) => {
    setLoading(!loading);
    setFilteredTags(null);
    setSelectedDomainName(e.target.value);
    const fetchTagsResult = await fetchSearchifyTags(e.target.value);
    const fetchTags = await fetchTagsResult.json();
    setShow(!show);
    setFilteredTags(fetchTags);
    setRightSideTags([]);

  };

  const handleToSuggestion = (selectedTags) => {
    props.setGetFromTag({tags: selectedTags, domain: selectedDomainName});

  }

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
