import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import { pickupFieldFromSuggestion } from "../../utils/users/ProjectUtil";
import Spinner from "./Spinner";


const WebsiteOverview = (props) => {

  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const darkColor = ["#0","#1","#2","#3","#4","#5","#6","#f","#d",
"#b"];

  //array for storing already use color
  const containColor = ["#ffffff", "#1f1f1f", "#1e1e1e", "#000000"];
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
    for (let i = 0; i < len; i++) {
      setRandomColor(i);
    }
  }, [props?.tagResult?.classifications]);

  const getDate = (dateString) => {
    var strSplitDate = dateString.split(' ');
    var date = new Date(dateString);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    date = dd + "-" + mm + "-" + yyyy;
    return date.toString();
  }

  const routeChange = (link) => {
    history.push("/seoproduct", { feature: 'Website - Existing Page', webpage: link });
  }

  const routeChangeDashboard = (link) => {
    history.push("/dashboard", { feature: 'Website - Existing Page', webpage: link });
  }

  const displayInternalLinks = () => {
    useEffect(() => {
      if (loading) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }, [loading]);
    return (
      <div className="overview-content">
        <div className="content-row">
          <label style={{ "width": "30%" }}>URL</label>
          <label style={{ "width": "50%" }}>SEO DETAILS</label>
          <label style={{ "width": "20%" }}>YOUR WORKS</label>
        </div>
        {!props.websiteData ? <Spinner /> : props.websiteData ? props.websiteData?.webpages?.map((link) => {
          return (
            <>
             <div className="content-row" style={{"border-bottom": "1px solid gray"}}>
                <div style={{"width": "30%"}}> {link.url}</div>
                <div style={{"width": "55%"}}>
                  <div className="content-row" >
                    <label>Title</label>
                    {link.currentSuggestion != null ? (
                    <div>{pickupFieldFromSuggestion(link.currentSuggestion, "title").value}</div>
                  ) : (
                    <div style={{ color: "red" }}>MISSING</div>
                  )}
                  </div>
                </div>
                <div style={{ "width": "20%" }}>
                  <div >
                    <span style={{"font-size": "14px", "color": "gray"}}> Last updated: </span> <button type="button" style={{"color": "white", "background-color": "inherit", "border": "0" }}
                      onClick={() => routeChange(link)} className="improve-btn">
                      <span style={{"font-size": "12px", "padding-left": "5px"}}>{getDate(link.currentSuggestion.createdDate)}</span>
                    </button>
                  </div>
                  <div style={{"display": "flex"}}>
                    <button type="button" className="btn btn-use-it" style={{ "color": "blueviolet", "background-color": "transparent" }} 
                    onClick={() => routeChange(link)} >
                      <span>Explore</span>
                    </button>
                    <button type="button" className="btn btn-use-it" style={{ "color": "blueviolet", "background-color": "transparent" }} 
                    onClick={() => routeChangeDashboard(link)} >
                      <span>View rank</span>
                    </button>
                  </div>
                  
                </div>
              </div>
            </>
          )
        }
        ) : 'nodata'}
      </div>
    )
  }

  return (
    <>
      <div className="row new-overview-container">
        <div className="overview-title">Your Website Overview</div>
        <div className="row main-row">
          <div className="col-sm-12 left-col">
            <div className="top-panel">
              {displayInternalLinks()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteOverview;
