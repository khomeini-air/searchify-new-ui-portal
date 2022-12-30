import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../assets/default/images/Blogging_3.gif";
import s from '../../../assets/default/images/'
const History = () => {
  const [selectid, setSelectId] = useState("");
  const [selectTitle, setSelectTitle] = useState("");
  const [selectUrl, setSelectUrl] = useState("");
  const [selectDesc, setSelectDesc] = useState("");
  const handleCardClick = async (id, title, url, description) => {
    setSelectTitle(title);
    setSelectUrl(url);
    setSelectDesc(description);
    setSelectId(id);
    pageCardData.map((item) => {
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
  const pageCardData = [
    {
      id: 1,
      title: "Traditional & Digital Education",
      url: "https://www.gooooogle.com",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, inventore.",
    },
    {
      id: 2,
      title: "Digital Education",
      url: "https://www.gooogle.com",
      description:
        "Lorem ipsum dolor sit amet  adipisicing elit. Autem, inventore",
    },
    {
      id: 3,
      title: "Education",
      url: "https://www.goooooooooogle.com",
      description:
        "Lorem ipsum dolor sit amet consectetur consectetur consectetur, adipisicing elit. Autem, inventore.",
    },
    {
      id: 4,
      title: "Traditional & Digital Education",
      url: "https://www.goooooogle.com",
      description:
        "Lorem ipsum  consectetur consectetur consectetur consectetur consecteturdolor sit amet consectetur, adipisicing elit. Autem, inventore.",
    },
    {
      id: 5,
      title: "Traditional & Digital Education eduction",
      url: "https://www.gooooooooooooooogle.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus eum, perferendis adipisci vel ab illo quod, repellat at dolores odit, officia asperiores rerum ea eos? Asperiores dolor dolore eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus eum, perferendis adipisci vel ab illo quod, repellat at dolores odit, officia asperiores rerum ea eos? Asperiores dolor dolore eveniet?",
    },
  ];
  return (
    <>
      <div className="history-container">
        <div className="upper-panel">
          <div className="left-panel">
            <div className="title">Pages</div>
            <div className="page-content">
              {pageCardData.map((item) => {
                return (
                  <>
                    <div
                      className="main-card"
                      onClick={() => {
                        handleCardClick(
                          item.id,
                          item.title,
                          item.url,
                          item.description
                        );
                      }}
                    >
                      <div className="number" id={`${"number" + item.id}`}>
                        {item.id}
                      </div>
                      <div
                        className="card page-card"
                        id={`${"card" + item.id}`}
                      >
                        <div className="card-body page-card-body">
                          <div className="card-title">{item.title}</div>
                          <div className="card-url">{item.url}</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="right-panel">
            <div className="title">Suggestion Details</div>
            <div className="page-content">
              {selectTitle && selectUrl && selectDesc ? (
                <>
                  <div className="main-card">
                    <div className="card page-card">
                      <div className="card-body page-card-body">
                        <div className="page-title">
                          <label>Title:</label>
                          <p>{selectTitle}</p>
                        </div>
                        <div className="page-url">
                          <label>URL:</label>
                          <p>{selectUrl}</p>
                        </div>
                        <div className="page-desc">
                          <label>Description:</label>
                          <p>{selectDesc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
        <div className="button-panel">
          <Link to="/suggestions">
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

export default History;
