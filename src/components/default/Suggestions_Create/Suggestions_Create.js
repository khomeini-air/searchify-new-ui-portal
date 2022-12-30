import React, { useEffect, useState } from 'react'
import Select from "react-select";
import Header from '../Layout/Header';
import Spinner from "../Loader/Spinner";

const Suggestions_Create = () => {

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    keyword: "",
    Desc: "",
  })
  const aquaticCreatures1 = [
    "Environmentalism",
    "Chemistry",
    "Business",
    "Business Travel",
    "Nonprofits",
    "Profits",
    "History",
    "Graphics",
    "Databases"
  ];


  var data = [];
  for (let i = 0; i < aquaticCreatures1.length; i++) {
    let obj = {};
    obj.label = aquaticCreatures1[i];
    obj.value = aquaticCreatures1[i];
    data.push(obj);
  }

  const customStyles = {
    control: (base, state, provided) => ({
      ...base,
      ...provided,
      background: "black",
      // match with the menu
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

  useEffect(() => {
    if (loading) {
      setShow(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const handleCrawling = () => {
    setLoading(!loading);
    setShow(!show);
    setFormData({ "name": "Education", "title": "Cricet", "keyword": "poll", "Desc": "Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments" })

  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  if (loading) return <Spinner />;

  return (
    <>
      <div className='suggestions-create-container'>
        <Header title="Create a new suggestion Manually" />
        <div className="top-panel">
          <div className="left-panel">
            <div className='form-panel'>
              <div className='maindropdown'>
                <select className="form-select mt-4 me-4 selection-box" aria-label="Default select example">
                  <option selected>Domain - select box</option>
                  <option value="Business">Business</option>
                  <option value="Travel">Travel</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Education">Education</option>
                  <option value="Cryptocurrency">Cryptocurrency</option>
                  <option value="Fashion">Fashion</option>
                  <option value="News">News</option>
                  <option value="Blog">Blog</option>
                </select>
                <button type="button" onClick={() => handleCrawling()} className="btn suggestion-button">Suggestion </button>
              </div>
              <div className='multipledropdown mt-3'>
                <div className=''>
                  <Select
                    color='#865aff'
                    styles={customStyles}
                    isMulti
                    options={data}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right-panel">
            <div className='right-panel-first'>
              <div className='right-panel-second'>
                <form>
                  <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">Name:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={formData?.name} id="inputEmail" placeholder="Suggestion - name" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">Title:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={formData?.title} id="inputEmail" placeholder="Suggestion - title" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Keywords:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={formData?.keyword} id="inputPassword" placeholder="Suggestion - keywords" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="exampleFormControlTextarea1" className="col-sm-2 col-form-label">Description:</label>
                    <div className="col-sm-10">
                      <textarea className="form-control" value={formData?.Desc} id="exampleFormControlTextarea1" placeholder='Suggestion - description' rows="5"></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-10 offset-sm-2 button-first">
                      <button type="button" className="btn button-second">Cancel</button>
                      <button type="submit" className="btn button-second ms-2" onClick={handleSubmit}>Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{show}</div>

    </>
  )
}

export default Suggestions_Create