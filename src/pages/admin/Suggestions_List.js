import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { fetchAllDomains, fetchSearchifyTags, fetchSuggestionsByDomain } from "../../utils/admin/TagUtil";
import Spinner from '../../components/admin/Spinner';
import Header from '../../components/admin/Header';

const Suggestions_List = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState(null);
    const [domains, setDomains] = useState([]);
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [tags, setTags] = useState([]);
    const [tagsData, setTagsData] = useState([]);

    const handleGettingDomains = async () => {

        const fetchDomainsResult = await fetchAllDomains();
        const allDomains = await fetchDomainsResult.json();
        setDomains(allDomains);
    }

    const handleSelectDomain = async (e) => {
        setTags([]);
        setTagsData([]);
        setSelectedDomain(e.target.value);
        const fetchTagsResult = await fetchSearchifyTags(e.target.value);
        const fetchTags = await fetchTagsResult.json();
        const fetchSuggestionsResult = await fetchSuggestionsByDomain(e.target.value);
        const fetchSuggestions = await fetchSuggestionsResult.json();
        setSuggestions(fetchSuggestions);
    }

    useEffect(() => {
        if (loading) {
            setShow(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);

    if (loading) return <Spinner />;


    return (
        <>
            <div className='suggestions-list-container'>
                <Header title="List Suggestions" />
                <div className="top-panel">
                    <div className="left-panel">
                        <div className='form-panel'>
                            <select className="form-select mt-4 selection-box" aria-label="Default select example"
                                onClick={() => handleGettingDomains()}
                                onChange={handleSelectDomain}>
                                <option selected>Domain - select box</option>
                                {domains && domains.map((item) =>
                                    <option value={item.name}>{item.name}</option>
                                )}
                            </select>
                            <input class="form-control mt-2 selection-box" id="myInput" type="text" placeholder="Search.."></input>
                            <div className='scroll-panel mt-2'>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>
                                <div className="tag">
                                    <p className="tag-text">ABC</p>
                                    <button className='disabletag'>
                                        <span className="tag-icon">
                                            <AiOutlinePlus size={25} />
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="right-panel">
                        <div className='form-panel'>
                            <div>
                                <div className='scroll-panel mt-4'>

                                    {suggestions && suggestions.map((item) =>
                                        <div className="tag">
                                            <span>+</span>
                                            <span className="tag-icon">
                                            </span>
                                            <p className="tag-text">{item.id} - {item.name} - {item.title} </p>
                                            {/* <p className="tag-text">aaaa{item.description} </p> */}

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='button-panel'>
                            <button type="button" class="btn button-color mt-4">More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suggestions_List