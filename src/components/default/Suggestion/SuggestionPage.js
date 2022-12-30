import React, { useEffect, useState, useContext } from "react";
import Image from "../../../assets/default/images/Blogging_3.gif";
import { Link } from "react-router-dom";
import { fetchTags, fetchSuggestionsByDomain, fetchDeepSuggestions } from "../Utils/TagUtil";

const SuggestionPage = (props) => {
  const [selectName, setSelectName] = useState(null);
  const [selectTitle, setSelectTitle] = useState(null);
  const [selectId, setSelectId] = useState(0);
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(false);
  const [deepResult, setDeepResult] = useState(false);
  const [change, setChange] = useState(true);
  const [domain, setDomain] = useState(null);
  const [tags, setTags] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  const [deepSuggestions, setDeepSuggestions] = useState(null);

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

    
    // await document.getElementsByClassName("card").classList.removClass("cardActive");
    // await document.getElementsByClassName("number").classList.removeClass("numberActive");

    // document.getElementById(`${"card" + id}`).classList.add("cardActive");
    // document.getElementById(`${"number" + id}`).classList.add("numberActive");

    // document.getElementById("sltName").value = id;
    // document.getElementById("sltTitle").value = id;
    // document.getElementById("txtareaDesc").value = description;
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

  const UserData = [
    {
      id: 1,
      name: "Education",
      title: "Education",
      description:
        "Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments, as opposed to various nonformal and informal means of socialization.",
    },
    {
      id: 2,
      name: "Cricet",
      title: "Cricet",
      description:
        "Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments, as opposed to various nonformal and informal means of socialization.",
    },
    {
      id: 3,
      name: "poll",
      title: "poll",
      description:
        "Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments, as opposed to various nonformal and informal means of socialization.",
    },
    {
      id: 4,
      name: "abc",
      title: "abcd",
      description: "abcd",
    },
    {
      id: 5,
      name: "abFc",
      title: "abcd",
      description: "abcd",
    },
    {
      id: 6,
      name: "abc",
      title: "abcd",
      description: "abcd",
    },
  ];

  const cardData = [
    {
      id: 1,
      name: "Education",
      title: "Traditional & Digital Education",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    },
    {
      id: 2,
      name: "Traditional & Digital Education ",
      title: " Digital Education",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      name: "Education",
      title: "Education",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    },
    {
      id: 4,
      name: "Traditional Education",
      title: "Traditional & Digital Education",
      description: "New DescriptionLorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    },
    {
      id: 5,
      name: "Education",
      title: "Education",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ",
    },
  ];
  const descData = [
    {
      id: 1,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing.",
    },
    {
      id: 3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy ",
    },
    {
      id: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting ",
    },
    {
      id: 6,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing ",
    },
    {
      id: 7,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing ",
    },
  ];
  const tagData = [
    {
      id: 1,
      name: "News",
    },
    {
      id: 2,
      name: "Cryptocurrency",
    },
    {
      id: 3,
      name: "Travel",
    },
    {
      id: 4,
      name: "Business",
    },
    {
      id: 5,
      name: "Entertainment",
    },
  ];
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

export default SuggestionPage;
