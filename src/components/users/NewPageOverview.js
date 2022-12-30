import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Accordion from "./Templates/Accordion/Accordion";
import $ from "jquery";

const WebsitePageOverview = (props) => {

  let history = useHistory();
  
  const darkColor = ["#0","#1","#2","#3","#4","#5","#6","#f","#d","#b"];

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

 
  const routeChange = (link) => {
    history.push("/seoproduct", { feature: 'Website - Existing Page', webpage: link });
  }

  const displayInternalLinks = () => {
    return (
      <div className="overview-content" style={{"font-size": "13px"}}>
       <div className="content-row" style={{"border-bottom": "2px solid gray"}}>
                <label style={{"width": "30%"}}>URL</label>
                <label style={{"width": "55%"}}>SEO DETAILS</label>
                <label style={{"width": "15%"}}>YOUR WORKS</label>
             </div>
       {props.internalLinks.map((link) => {
          return (
            <>
             <div className="content-row" style={{"border-bottom": "1px solid gray"}}>
                <div style={{"width": "30%"}}> {link.url}</div>
                <div style={{"width": "55%"}}>
                  <div className="content-row" >
                    <label>Title</label>
                    {link.title != null ? (
                    <div>{link.title}</div>
                  ) : (
                    <div style={{ color: "red" }}>MISSING</div>
                  )}
                  </div>
                </div>
                <div style={{"width": "15%"}}>
                  <div >
                    <button type="button" className="btn btn-use-it" style={{ "color": "blueviolet", "background-color": "transparent" }} 
                    onClick={() => routeChange(link)} >
                      <span>Explore</span>
                    </button>
                  </div>
                </div>
             </div>
            </>
          )}
        )}
      </div>
    )
  }

  return (
    <>
      <div className="row new-overview-container">
        <div className="overview-title">Your Page Overview</div>
        <div className="row main-row">
          <div className="col-sm-12 left-col">
            <div className="top-panel">
             {displayInternalLinks()}
            </div>
            <div className="bottom-panel">
              <div className="title">Ranking Overview</div>
              <div className="rating-overview-content">
                <Accordion
                  title="First Accordion Title"
                  content = { ("'" + displayInternalLinks() + "'")}
                />
                <Accordion
                  title="Second Accordion Title"
                  content='<div className="title">Ranking Overview</div>'
                />
                <Accordion
                  title="Third Accordion Title"
                  content=" <p>Lorem ipsum dolor sit amet, consecteturipsum dolor sit amet, consecteturipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsitePageOverview;
