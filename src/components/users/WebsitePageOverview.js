import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Accordion from "./Templates/Accordion/Accordion";
import $ from "jquery";
import {  simplifyTags, getDomainFromTag } from "../../utils/users/TagUtil";

const WebsitePageOverview = (props) => {

  //array for darkcolor
  const darkColor = ["#0","#1","#2","#3","#4","#5","#6","#f","#d",
    "#b"];

  //array for storing already use color
  const containColor = ["#ffffff","#1f1f1f", "#1e1e1e","#000000"];
  //Function for generate random color
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    if (containColor.includes(color)) {
      getRandomColor();
    } else {
      if (darkColor.includes(color.slice(0, 2))) {
        getRandomColor();
      } else {
        containColor.push(color);
        console.log(containColor)
        return color;
      }
    }
  };

  //Function for set generated random color
  const setRandomColor = (id) => {
    $(`#colorpad${id}`).css("color", getRandomColor());
  };

  //for set random color to tags
  useEffect(() => {
    var len = props?.tagResult?.classifications?.length;
    // var len = classifications.length;
    for (let i = 0; i < len; i++) {
      setRandomColor(i);
    }
  }, [props?.tagResult?.classifications]);

  return (
    <>
      <div className="container overview-container">
        <div className="overview-title">Your Page Overview</div>
        <div className="row main-row">
          <div className="col-sm-9 left-col">
            <div className="top-panel">
              <div className="title">
                <b>URL: </b>
                {props.crawlingResult.url}
              </div>
              <div className="overview-content">
                <div className="content-row">
                  <label>Title</label>
                  {props.crawlingResult.title != null ? (
                    <div>{props.crawlingResult.title}</div>
                  ) : (
                    <div style={{ color: "red" }}>MISSING</div>
                  )}
                </div>
                <div className="content-row">
                  <label>Keywords</label>
                  {props.crawlingResult.keywords != null ? (
                    <div>{props.crawlingResult.keywords}</div>
                  ) : (
                    <div style={{ color: "red" }}>MISSING</div>
                  )}
                </div>
                <div className="content-row">
                  <label>Description</label>
                  {props.crawlingResult.description != null ? (
                    <div>{props.crawlingResult.description}</div>
                  ) : (
                    <div style={{ color: "red" }}>MISSING</div>
                  )}
                </div>
              </div>
            </div>
            <div className="bottom-panel">
              <div className="title">Ranking Overview</div>
              <div className="rating-overview-content">
                <Accordion
                  title="First Accordion Title"
                  content="First Accordion content"
                />
                <Accordion
                  title="Second Accordion Title"
                  content="Second Accordion content"
                />
                <Accordion
                  title="Third Accordion Title"
                  content=" <p>Lorem ipsum dolor sit amet, consecteturipsum dolor sit amet, consecteturipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3 right-col">
            <div className="tagging-content">
              <div className="title">YOUR TAGGING</div>
              <div className="tags">
              Domain : {props.tagResult.classifications && getDomainFromTag(props.tagResult.classifications[0])} 
              </div>
              <div className="tags">
                <ul>
                  {props.tagResult.classifications &&
                    simplifyTags(props.tagResult.classifications).map((classification, i) => (
                      <li id={`colorpad${i}`}>
                        {classification.tag_name}
                        <sup>&nbsp;&nbsp; {classification.confidence}</sup>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-panel">
          <div className="improve-btn">
            <Link to="/user/websiteseo/suggestions">
              <button type="button" className="improve-btn">
                <span>Let's improve!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsitePageOverview;
