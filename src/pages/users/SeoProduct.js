import React, { useEffect, useReducer } from "react";
import { AiFillStar, AiOutlineEye, AiOutlineGift, AiOutlineDoubleLeft, AiOutlineHistory, AiTwotoneCopy, AiTwotoneFileAdd } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import Sidebar from "./Sidebar";
import { fetchAllDomains, fetchDeepSuggestions, fetchSearchifyTags, fetchSuggestionsByDomain, } from "../../utils/users/TagUtil";
import { getProject, getWebsite, pickupWebsiteFromProject, addWebpageAndUpdateProject } from "../../utils/users/ProjectUtil";
import SeoProduct_Spinner from './../../components/users/SeoProduct_Spinner';
import { intState, SeoProductReducer } from "../../reducers/users/SeoProductReducer";

const SeoProduct = () => {
    const [State, dispatch] = useReducer(SeoProductReducer, intState);
    const { state } = useLocation();
    const customStyles = {
        control: (base, state, provided) => ({
            ...base,
            ...provided,
            background: "black",
            "border-radius": "25px",
            "border-color": "#bc61c0",
            border: "1px solid transparent",
            background:
                "linear-gradient(to right, black, black), linear-gradient(to right, #e85782 0% , #916bff 100%)",
            "background-clip": "padding-box, border-box",
            "background-origin": "padding-box, border-box",
            height: "50px",
            // borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
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

        if (getWebsite() != null) {
            dispatch({ type: "siteName", payload: getWebsite().name })
            dispatch({ type: "siteUrl", payload: getWebsite().url })
        }

        const fetchDomains = async () => {
            const data = await fetchAllDomains();
            const allDomains = await data.json();
            dispatch({ type: "domains", payload: allDomains })
        }

        const fetchTags = async (domain) => {
            const data = await fetchSearchifyTags(domain);
            const allTags = await data.json();
            dispatch({ type: "tagsData", payload: syncTagsData(allTags) })
        }

        const fetchSuggestions = async (domain) => {
            const res = await fetchSuggestionsByDomain(domain);
            const fetchSuggestions = await res.json();
            dispatch({ type: "suggestions", payload: fetchSuggestions })
        }

        if (!State.firstLoad) {
            fetchDomains();
            if (state != null) {
                if (state.domain != null) {
                    dispatch({ type: "domain", payload: state.domain.name })
                    fetchSuggestions(state.domain.name);
                    dispatch({ type: "feature", payload: state.feature });
                    fetchTags(state.domain.name);
                }
                dispatch({ type: "suggestionDescription", payload: state.webpage.description });
                dispatch({ type: "suggestionTitle", payload: state.webpage.title });
                dispatch({ type: "suggestionKeywords", payload: state.webpage.keywords });
            }
            dispatch({ type: "firstLoad", payload: true })
        }
    }, [State.domains, State.loadingA]);

    var filteredSuggestions = [];
    filteredSuggestions = State.suggestions.filter((item) => {
        if (
            State.selectedOptions.length == 0
        ) {
            return item;
        } else
            var relationships = item.relationships;
        for (let i = 0; i < relationships.length; i++) {
            var count = 0;
            for (let j = 0; j < State.selectedOptions.length; j++) {
                if (State.selectedOptions[j].value === relationships[i].value) {
                    count++;
                }
            }
            if (count === State.selectedOptions.length) {
                return item;
            }
        }
    });

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

    const handleChange = (selected) => {
        dispatch({ type: "selectedOptions", payload: selected })
    }

    const handleSelectDomain = async (e) => {
        dispatch({ type: "loadingA", payload: true })
        dispatch({ type: "domain", payload: e.target.value })
        const fetchTagsResult = await fetchSearchifyTags(e.target.value);
        const fetchTags = await fetchTagsResult.json();
        syncTagsData(fetchTags);
        const fetchSuggestionsResult = await fetchSuggestionsByDomain(e.target.value);
        const fetchSuggestions = await fetchSuggestionsResult.json();
        dispatch({ type: "suggestions", payload: fetchSuggestions });
        dispatch({ type: "loadingA", payload: false });
    }

    const handleSaveWebPageSuggestion = async () => {
        const currentWebpageSuggestion = {
            createdDate: Date().toLocaleString(),
            fieldContents: [{ name: 'title', value: State.suggestionTitle },
            { name: 'keywords', value: State.suggestionKeywords },
            { name: 'description', value: State.suggestionDescription }
            ]
        };

        const currentWebpage = {
            id: null,
            templateId: null,
            name: null,
            url: state.webpage.url,
            ranking: null,
            currentSuggestion: currentWebpageSuggestion,
            revisions: null,
            settings: null,
            fieldContents: null,
            answers: null,
            gaTrackings: null
        }
        const res = await addWebpageAndUpdateProject(getProject(), getWebsite(), currentWebpage);
        const returnProject = await res.json();
        localStorage.setItem('project', JSON.stringify(returnProject));
        localStorage.setItem('currentWebsite', JSON.stringify(pickupWebsiteFromProject(returnProject, siteUrl)));

    }
    //Function for Show Deep Suggestions
    const handleGetDeepSuggestions = async () => {
        dispatch({ type: "loadingB", payload: true });
        const res = await fetchDeepSuggestions(suggestionDescription);
        dispatch({ type: "loadingB", payload: false });
        dispatch({ type: "deepSuggestions", payload: res });
        dispatch({ type: "tabBasic", payload: 'nav-link nav-inactive' });
        dispatch({ type: "tabBasicDetail", payload: 'tab-pane fade' });
        dispatch({ type: "tabDeep", payload: 'nav-link active' });
        dispatch({ type: "tabDeepDetail", payload: 'tab-pane fade show active' });
    };


    const handleApplySuggestion = (item) => {
        dispatch({ type: "suggestionDescription", payload: item.description });
    };

    const generateSuggestionTitle = (value, count) => {
        if (count == 1) {
            const generatedTitle = suggestionCompanyName + ' | ' + suggestionProductName + simplifyTags(selectedOptions);
            dispatch({ type: "title", payload: generatedTitle })
        }
        if (count == 2) {
            const generatedTitle = value + ' | ' + suggestionProductName + simplifyTags(selectedOptions);
            dispatch({ type: "title", payload: generatedTitle })

        }
        if (count == 3) {
            const generatedTitle = suggestionCompanyName + ' | ' + value + simplifyTags(selectedOptions);
            dispatch({ type: "title", payload: generatedTitle })

        }
        if (count == 4) {
            const generatedTitle = suggestionCompanyName + ' | ' + suggestionProductName + simplifyTags(value);
            dispatch({ type: "title", payload: generatedTitle })
        }
    }

    const simplifyTags = (tags) => {
        var simplifiedTags = '';
        for (let i = 0; i < tags.length; i++) {
            simplifiedTags = simplifiedTags + " | " + tags[i].label;
        }

        return simplifiedTags;
    }
    const handelClearInputs = () => {
        dispatch({ type: "clearInput" })
    }

    return (
        <>
            <div className='seoproduct-page'>
                <div className='sidebar-panel'>
                    <Sidebar demo='demo' />
                </div>
                <div className='seoproduct-right'>
                    <div className='seoproduct-first' style={{ "justify-content": "flex-end" }}>
                        <div className="logout-part" style={{ "text-align": "right" }}>
                            <a href="/" onClick={() => logOut()}> <button type="button" class="btn logout-btn logout-btn-top">Log out</button>
                            </a>
                        </div>
                    </div>
                    <div className='seoproduct-second'>
                        <div className='seoproduct-leftpart'>
                            <div class="nav nav-tabs" id="myTab" role="tablist">
                                <div class="" role="presentation">
                                    <button class="nav-link" type="button" role="tab" style={{ "color": "white" }}>
                                        <img src={`https://file.rendit.io/n/S89b4edUqILFm8B3Jo8R.svg`} />
                                        Back
                                    </button>
                                </div>
                                <div className='seo-project-name'>{State.siteName}</div>
                            </div>
                            <div className='toppart'>
                                {/* <form> */}
                                <div className="row mb-3">
                                    <label htmlFor="" className="form-label">Business Domain *</label>
                                    <div className='multipledropdown'>
                                        <select className="form-select mt-4 selection-box multipledropdown-sub"
                                            aria-label="Default select example"
                                            placeholder="Business Domain"
                                            styles={customStyles}
                                            onChange={handleSelectDomain}
                                        >
                                            {State.domains && State.domains.map((item) =>
                                                item.name == State.domain ?
                                                    (<option value={item.name} selected>{item.name}</option>) :
                                                    (<option value={item.name} >{item.name}</option>)
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className='wordpanel'>
                                        <label for="" className="form-label">Company Name *</label>
                                        <p className='character-size'>{State.countOne}/80</p>
                                    </div>
                                    <input type="text" maxlength='80'
                                        value={State.suggestionCompanyName}
                                        onChange={e => {
                                            dispatch({ type: "countOne", payload: e.target.value.length });
                                            dispatch({ type: "suggestionCompanyName", payload: e.target.value })
                                            generateSuggestionTitle(e.target.value, 2);
                                        }
                                        }
                                        className="form-control inputflidcolor" id="companyname" placeholder='Company Name' />
                                </div>
                                <div className="mb-3">
                                    <div className='wordpanel'>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Product Name *</label>
                                        <p className='character-size'>{State.countTwo}/80</p>
                                    </div>
                                    <input type="text" maxLength='80'
                                        value={State.suggestionProductName}
                                        onChange={e => {
                                            dispatch({ type: "countTwo", payload: e.target.value.length });
                                            dispatch({ type: "suggestionProductName", payload: e.target.value });
                                            generateSuggestionTitle(e.target.value, 3);
                                        }
                                        }
                                        className="form-control inputflidcolor" id="productname" placeholder='Product Name' />
                                </div>

                                <div className="row mb-3">
                                    <label for="" className="form-label">Tags *</label>
                                    <div className='multipledropdown'>
                                        <Select
                                            value={State.selectedOptions}
                                            color='#865aff'
                                            styles={customStyles}
                                            isMulti
                                            options={State.tagsData}
                                            onChange={(e) => {
                                                handleChange(e);
                                                generateSuggestionTitle(e, 4);
                                            }
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className='wordpanel'>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Keywords *</label>
                                        <p className='character-size'>{State.countThree}/80</p>
                                    </div>
                                    <input type="text" maxLength='80'
                                        value={State.suggestionKeywords}
                                        onChange={e => {
                                            dispatch({ type: "countThree", payload: e.target.value.length })
                                            dispatch({ type: "suggestionKeywords", payload: e.target.value })
                                        }
                                        }
                                        className="form-control inputflidcolor" id="keyword" placeholder='Keyword' />
                                </div>
                                <div className="mb-3">
                                    <div className='wordpanel'>
                                        <label htmlFor="exampleInputPassword1" className="form-label">Title *</label>
                                        <p className='character-size'>{State.countFour}/80</p>
                                    </div>
                                    <input type="text" maxLength='80'
                                        value={State.suggestionTitle}
                                        onChange={e => {
                                            dispatch({ type: "countFour", payload: e.target.value.length })
                                            dispatch({ type: "suggestionTitle", payload: e.target.value })
                                        }
                                        }
                                        className="form-control inputflidcolor" id="keyword" placeholder='Keyword' />
                                </div>
                                <div className="mb-3">
                                    <div className='wordpanel'>
                                        <label htmlFor="exampleInputPassword1" className="form-label" >Description *</label>
                                        <p className='character-size'>{State.countFive}/400</p>
                                    </div>
                                    <textarea type="text" maxLength='400'
                                        value={State.suggestionDescription}
                                        onChange={e => {
                                            dispatch({ type: "countFive", payload: e.target.value.length })
                                            dispatch({ type: "suggestionDescription", payload: e.target.value })
                                        }

                                        }
                                        style={{ "min-height": "100px" }}
                                        className="form-control inputflidcolor" id="productdescription" placeholder='Product Description' rows="4" />
                                </div>

                                {/* </form> */}
                                <div className="card toogalcard">
                                    <div className="card-body">
                                        <h5 className="card-title">Please check to improve your input</h5>
                                        {State.countOne == 0 ? (
                                            <p className="card-text" style={{ "color": "red" }}>- Company name is missing </p>

                                        ) : (
                                            <p className="card-text" style={{ "color": "green" }}>- Company name is provided </p>
                                        )}
                                        {State.countTwo == 0 ? (
                                            <p className="card-text" style={{ "color": "red" }}>- Product / Service name is missing </p>

                                        ) : (
                                            <p className="card-text" style={{ "color": "green" }}>- Product / Service name is provided </p>
                                        )}

                                        {State.countFive < 100 ? (
                                            <p className="card-text" style={{ "color": "red" }}>- Your description is too short </p>

                                        ) : (
                                            <p className="card-text" style={{ "color": "green" }}>- Your description is fine </p>
                                        )}
                                        <div className='cardbtn'>
                                            <div>
                                                <button type="button" className="btn learnmorebtn">Learn more</button>
                                            </div>
                                            <div>How to write a good SEO Meta Description !</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bottompart'>
                                <div className='btnleft'>
                                    <div>
                                        <button type="button" className="btn btn-output " onClick={handelClearInputs}>
                                            {/* <AiOutlineClose size={25} /> */}
                                            Clear</button>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-effect" onClick={handleSaveWebPageSuggestion} >Save
                                            {/* <BsSaveFill size={25} /> */}
                                        </button>
                                    </div>
                                </div>
                                <div className='btnright'>
                                    <div>
                                        <button type="button" className="btn btn-effect" onClick={handleGetDeepSuggestions} >Deep AI
                                            {/* <BsArrowRightShort size={25} /> */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='seoproduct-rightpart'>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className={State.tabBasic} id="basic-tab" data-bs-toggle="tab" data-bs-target="#basic" type="button" role="tab" aria-controls="basic" aria-selected="true"><AiOutlineEye className='aioutlinethunderbolt' />Basic Suggestions </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className={State.tabDeep} id="deep-tab" data-bs-toggle="tab" data-bs-target="#deep" type="button" role="tab" aria-controls="deep" aria-selected="false"><AiOutlineGift className="aioutlinethunderbolt" />Deep AI</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className={State.tabHistory} id="history-tab" data-bs-toggle="tab" data-bs-target="#history" type="button" role="tab" aria-controls="history" aria-selected="false"><AiOutlineHistory className="aioutlinehistory" />History</button>
                                </li>
                            </ul>
                            {/* <Spinner /> */}

                            <div className="tab-content" id="myTabContent">
                                <div className={State.tabBasicDetail} id="basic"
                                    role="tabpanel" aria-labelledby="basic-tab"
                                    style={{ "background-color": "#0e0e0e" }}>
                                    {State.loadingA ? <SeoProduct_Spinner /> : filteredSuggestions.length != 0 ? (
                                        <>
                                            {filteredSuggestions && filteredSuggestions.map((item) => {
                                                return (
                                                    <>
                                                        <div className='rightpart-first'>
                                                            <div className="card firstcard">
                                                                <div className="card-body ">
                                                                    <p className="card-title mt-2" style={{ "color": "palegreen" }}>Title : {title}</p>
                                                                    <p className="card-title mt-4">Meta Description : {item.description}</p>
                                                                    <div className='card-design' >
                                                                        <button type="button" className="btn btn-use-it" style={{ "color": "blueviolet" }} onClick={() => handleApplySuggestion(item)}>
                                                                            {/* <AiOutlineDoubleLeft className='aiOutlinedoubleleft' />  */}
                                                                            Use It
                                                                        </button>
                                                                        <button type="button" className="btn btn-copy" style={{ "color": "blueviolet" }} onClick={() => handleApplySuggestion(item)}>
                                                                            {/* <AiOutlineDoubleLeft className='aiOutlinedoubleleft' />  */}
                                                                            Copy
                                                                        </button>
                                                                        <button type="button" className="btn btn-remove" style={{ "color": "blueviolet" }} onClick={() => handleApplySuggestion(item)}>
                                                                            {/* <AiOutlineDoubleLeft className='aiOutlinedoubleleft' />  */}
                                                                            Remove
                                                                        </button>
                                                                        {/* <AiFillStar className='icon-set' /> 
                                                                        <AiTwotoneCopy className='icon-set' />
                                                                        <AiTwotoneFileAdd className='icon-set' /> */}
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
                                            <div>
                                                <div className='emptydiv-main'>
                                                    <div className='emptydiv'>
                                                        <div className='emptyfirst'>
                                                            {/* <AiFillThunderbolt size={25} /> */}
                                                        </div>
                                                        <div className='emptysecond'>
                                                            Answer the prompts on the left to see your AI contest show up here.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* </div> */}
                                </div>
                                <div className={State.tabDeepDetail} id="deep" role="tabpanel" aria-labelledby="deep-tab"
                                    style={{ "background-color": "#0e0e0e" }}>
                                    {/* <div className='seoproduct-rightpart'> */}
                                    {State.loadingB ? <SeoProduct_Spinner /> : State.deepSuggestions.length != 0 ? (
                                        <>
                                            {State.deepSuggestions && State.deepSuggestions.map((item) => {
                                                return (
                                                    <>
                                                        <div className='rightpart-first'>
                                                            <div className="card firstcard">
                                                                <div className="card-body ">
                                                                    <div className='card-design' > <button type="button" className="btn" style={{ "color": "blueviolet" }} onClick={() => handleApplySuggestion(item)}><AiOutlineDoubleLeft className='aiOutlinedoubleleft' /> Use It </button><AiFillStar className='icon-set' /> <AiTwotoneCopy className='icon-set' /> <AiTwotoneFileAdd className='icon-set' /></div>
                                                                    <p className="card-title mt-2" style={{ "color": "palegreen" }}>Title : {title}</p>
                                                                    <p className="card-title mt-4">Meta Description : {item}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </>
                                    ) : (
                                        <>
                                            <div>
                                                <div className='emptydiv-main'>
                                                    <div className='emptydiv'>
                                                        <div className='emptyfirst'>
                                                            {/* <AiFillThunderbolt size={25} /> */}
                                                        </div>
                                                        <div className='emptysecond'>
                                                            Answer the prompts on the left to see your AI contest show up here.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* </div> */}
                                </div>
                                <div className={State.tabHistoryDetail} id="history" role="tabpanel" aria-labelledby="history-tab"
                                    style={{ "background-color": "#0e0e0e" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeoProduct