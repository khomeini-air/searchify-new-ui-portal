import React, { useEffect, useReducer } from 'react'
import Select from "react-select";
import { fetchAllDomains, fetchSearchifyTags, createSimpleSuggestion, editSuggestion, fetchSuggestionsByDomain } from "../../utils/admin/TagUtil";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from './../../components/admin/Spinner';
import Header from '../../components/admin/Header';
import { ShopifySuggestionPageReducer,defaultState } from '../../reducers/admin/SuggestionsMgmtReducer';


const SuggestionsMgmt = () => {
  const [state, dispatch] = useReducer(ShopifySuggestionPageReducer, defaultState);
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

  const notifyCreate = () => toast("Your Suggestion is created successfully..");

  const notifyUpdate = () => toast("Your Suggestion is updated successfully..");

  const handleGettingDomains = async () => {
    const fetchDomainsResult = await fetchAllDomains();
    const allDomains = await fetchDomainsResult.json();
    dispatch({ type: "domains", payload: allDomains });
  }


  const handleNewSuggestion = () => {
    dispatch({ type: "selectedOptions", payload: [] });
    dispatch({ type: "suggestionName", payload: "" });
    dispatch({ type: "suggestionTitle", payload: "" });
    dispatch({ type: "suggestionKeywords", payload: "" });
    dispatch({ type: "suggestionDescription", payload: "" });
    dispatch({ type: "isEditting", payload: false });
  }

  useEffect(() => {
    if (state.loading) {
      dispatch({ type: "loading", payload: true });
      setTimeout(() => {
        dispatch({ type: "loading", payload: false });
      }, 2000);
    }
  }, [state.loading]);

  const handleSelectDomain = async (e) => {
    dispatch({ type: "tags", payload: [] })
    dispatch({ type: "tagsData", payload: [] })
    dispatch({ type: "selectedDomain", payload: e.target.value })
    const fetchTagsResult = await fetchSearchifyTags(e.target.value);
    const fetchTags = await fetchTagsResult.json();
    const fetchSuggestionsResult = await fetchSuggestionsByDomain(e.target.value);
    const fetchSuggestions = await fetchSuggestionsResult.json();
    dispatch({ type: "suggestions", payload: fetchSuggestions })
  }
  const handleChange = (selected) => {
    setSelectedOptions(selected); dispatch({ type: "selectedOptions", payload: selected })
  }

  const handleEditClick = (item) => {
    dispatch({ type: "edittingSuggestion", payload: item })
    dispatch({ type: "selectedOptions", payload: item.relationships })
    dispatch({ type: "editSuggestionName", payload: item.name })
    dispatch({ type: "editSuggestionTitle", payload: item.title })
    dispatch({ type: "editSuggestionKeywords", payload: item.keywords })
    dispatch({ type: "editSuggestionDescription", payload: item.description })
    dispatch({ type: "isEditting", payload: true })
  }

  const handleSubmitNew = async () => {
    const tempSuggestion = { name: suggestionName, title: suggestionTitle, keywords: suggestionKeywords, domain: selectedDomain, description: suggestionDescription, relationships: selectedOptions }
    const res = await createSimpleSuggestion(tempSuggestion);
    const suggestion = await res.json();
    dispatch({ type: "createdSuggestion", payload: suggestion })
    const fetchSuggestionsResult = await fetchSuggestionsByDomain(selectedDomain);
    const fetchSuggestions = await fetchSuggestionsResult.json();
    dispatch({ type: "suggestions", payload: fetchSuggestions })
    notifyCreate();
    handleNewSuggestion();
  }

  const handleSubmitEdit = async () => {
    const tempSuggestion = { id: edittingSuggestion.id, name: editSuggestionName, title: editSuggestionTitle, keywords: editSuggestionKeywords, domain: editSuggestion.domain, description: editSuggestionDescription, relationships: selectedOptions }
    const res = await editSuggestion(tempSuggestion);
    const suggestion = await res.json();
    const fetchSuggestionsResult = await fetchSuggestionsByDomain(selectedDomain);
    const fetchSuggestions = await fetchSuggestionsResult.json();
    dispatch({ type: "suggestions", payload: fetchSuggestions })
    notifyUpdate();
    handleNewSuggestion();
  }

  if (state.loading) return <Spinner />;

  return (
    <>
      <div className='suggestionsmgmt-container'>
        <Header title="Suggestion Management" />
        <div className="top-panel">
          <div className="left-panel">
            <div className='form-panel'>
              <select className="form-select mt-4 me-4 selection-box" aria-label="Default select example"
                onClick={() => handleGettingDomains()}
                onChange={handleSelectDomain}>
                <option selected>Domain - select box</option>
                {state.domains && state.domains.map((item) =>
                  <option value={item.name}>{item.name}</option>
                )}
              </select>
            </div>
            <div className='scroll-panel mt-2'>
              {state.suggestions.length > 0 ? (
                state.suggestions?.map((item) => {
                  return (
                    <>
                      <div className="tag" key={item}>
                        <p className="tag-text">{item.name}</p>
                        <button className='disabletag'
                          onClick={() => {
                            handleEditClick(item);
                            setDisable(true);
                          }}>
                          <span className="tag-icon">
                            <AiOutlineEdit size={25} />
                          </span>
                        </button>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <p className="no-tag">
                    No Suggestions Available Related to Your Domain
                  </p>
                </>
              )}
            </div>
          </div>
          {state.isEditting == true ? (
            <div className="right-panel">
              <div className="header">
                <div className="title subheader">Edit an existing suggestions</div>
                <button type="button" onClick={() => handleNewSuggestion()} className="btn " style={{ "background-color": "#855aff", "color": "white" }}> <AiOutlinePlus size={15} />New Suggestion</button>
              </div>
              <div className='right-panel-first'>
                <div className='right-panel-second'>
                  <form>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">ID:</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" value={edittingSuggestion.id} id="inputId" placeholder="Tag - ID" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label for="inputEmail" className="col-sm-2 col-form-label">Tags</label>
                      <div className='multipledropdown  col-sm-10'>
                        <Select
                          value={state.selectedOptions}
                          color='#865aff'
                          styles={customStyles}
                          isMulti
                          options={tagsData}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label for="inputEmail" className="col-sm-2 col-form-label">Name</label>
                      <div className="col-sm-10">
                        <input type="text"
                          className="form-control"
                          id="inputName"
                          placeholder="Suggestion - name"
                          value={state.editSuggestionName}
                          onChange={(e) => {
                            dispatch({type:"editSuggestionName",payload:e.target.value})
                          }} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label for="inputEmail" className="col-sm-2 col-form-label">Title</label>
                      <div className="col-sm-10">
                        <input type="text"
                          className="form-control"
                          id="inputTitle"
                          placeholder="Suggestion - title"
                          value={state.editSuggestionTitle}
                          onChange={(e) => { 
                            dispatch({type:"editSuggestionTitle",payload:e.target.value})
                          }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label for="inputPassword" className="col-sm-2 col-form-label">Keywords</label>
                      <div className="col-sm-10">
                        <input type="text"
                          className="form-control"
                          id="inputKeywords"
                          placeholder="Suggestion - keywords"
                          value={state.editSuggestionKeywords}
                          onChange={(e) => { 
                            dispatch({type:"editSuggestionKeywords",payload:e.target.value})
                          }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label for="exampleFormControlTextarea1" className="col-sm-2 col-form-label">Description</label>
                      <div className="col-sm-10">
                        <textarea className="form-control"
                          id="inputDescription"
                          placeholder='Suggestion - description'
                          rows="5"
                          value={state.editSuggestionDescription}
                          onChange={(e) => { 
                            dispatch({type:"editSuggestionDescription",payload:e.target.value})
                          }}
                        >
                        </textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-10 offset-sm-2 button-first mb-3">
                        <button type="button" className="btn button-second" onClick={handleNewSuggestion}>Cancel</button>
                        <button type="button" className="btn button-second ms-2" onClick={handleSubmitEdit}>Save</button>
                        <ToastContainer />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="right-panel">
              <div className="header">
                <div className="title subheader">Create a new suggestion</div>
              </div>
              <div className='right-panel-first'>
                <div className='right-panel-second'>
                  <form>
                    <div className="row mb-3">
                      <label for="inputEmail" className="col-sm-2 col-form-label">Tags</label>
                      <div className='multipledropdown  col-sm-10'>

                        <Select
                          color='#865aff'
                          value={state.selectedOptions}
                          styles={customStyles}
                          isMulti
                          options={state.tagsData}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label for="inputEmail" className="col-sm-2 col-form-label">Name</label>
                      <div className="col-sm-10">
                        <input type="text"
                          className="form-control"
                          id="inputName"
                          placeholder="Suggestion - name"
                          onChange={(e) => {
                            dispatch({type:"suggestionName",payload:e.target.value})
                          }} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label for="inputEmail" className="col-sm-2 col-form-label">Title</label>
                      <div className="col-sm-10">
                        <input type="text"
                          className="form-control"
                          id="inputTitle"
                          placeholder="Suggestion - title"
                          value={state.suggestionTitle}
                          onChange={(e) => {dispatch({type:"suggestionTitle",payload:e.target.value})
                        }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label for="inputPassword" className="col-sm-2 col-form-label">Keywords</label>
                      <div className="col-sm-10">
                        <input type="text"
                          className="form-control"
                          id="inputKeywords"
                          placeholder="Suggestion - keywords"
                          value={state.suggestionKeywords}
                          onChange={(e) => { dispatch({type:"suggestionKeywords",payload:e.target.value}) }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label for="exampleFormControlTextarea1" className="col-sm-2 col-form-label">Description</label>
                      <div className="col-sm-10">
                        <textarea className="form-control"
                          id="inputDescription"
                          placeholder='Suggestion - description'
                          rows="5"
                          value={state.suggestionDescription}
                          onChange={(e) => { dispatch({type:"suggestionDescription",payload:e.target.value}) }}
                        >
                        </textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-10 offset-sm-2 button-first mb-3">
                        <button type="button" className="btn button-second" onClick={handleNewSuggestion}>Cancel</button>
                        <button type="button" className="btn button-second ms-2" onClick={handleSubmitNew}>Save</button>
                        <ToastContainer />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
      <div>{state.show}</div>

    </>
  )
}

export default SuggestionsMgmt