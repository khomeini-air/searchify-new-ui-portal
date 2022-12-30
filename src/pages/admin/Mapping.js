import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import tags from "../../db/admin/Mapping.json";
import Header from './../../components/admin/Header';


const Mapping = () => {
    const [leftSideTag, setLeftSideTag] = useState(tags.leftTags);
    const [rightSideTag, setRightSideTag] = useState(tags.rightTags);
    const [selectedDomainName, setSelectedDomainName] = useState("");
    const [disable, setDisable] = useState(false);

    const tagname = (e) => {
        setSelectedDomainName(e.target.value);
    }
    var filteredTags = [];
    filteredTags = leftSideTag.filter((item) => {
        if (
            selectedDomainName === "" ||
            selectedDomainName === "Domain - select box"
        ) {
            return item;
        } else if (
            item.name.toLowerCase().includes(selectedDomainName.toLowerCase())
        ) {
            return item;
        }
    });

    const handlePlusClick = (id) => {
        var obj1 = {};
        obj1 = leftSideTag.filter((item) => item.id === id);
        const arr = leftSideTag.filter((item) => item.id !== id);
        setRightSideTag((prev) => [...prev, obj1[0]]);
    };
    const handleCrossClick = (id) => {
        var obj2 = {};
        obj2 = rightSideTag.filter((item) => item.id === id);
        const arr = rightSideTag.filter((item) => item.id !== id);
        setRightSideTag(arr);
    };

    return (
        <>
            <div className='mapping-container'>
                <Header title="Tags Mapping" />
                <div className="top-panel">
                    <div className="left-panel">
                        <div className="header">
                            <div className="title">Monkey learn</div>
                        </div>
                        <div className='form-panel'>
                            <select className="form-select mt-4 selection-box" onChange={tagname} aria-label="Default select example">
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
                            <div className='scroll-panel mt-2'>
                                {filteredTags.length > 0 ? (
                                    filteredTags?.map((item) => {
                                        return (
                                            <>
                                                <div className="tag" key={item}>
                                                    <p className="tag-text">{item.name}</p>
                                                    <button className='disabletag'
                                                        disabled={rightSideTag.includes(item)}
                                                        onClick={() => {
                                                            handlePlusClick(item.id);
                                                            setDisable(true);
                                                        }}>
                                                        <span className="tag-icon">
                                                            <AiOutlinePlus size={25} />
                                                        </span>
                                                    </button>
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
                        </div>
                    </div>
                    <div className="right-panel">
                        <div className="header">
                            <div className="title">Neo4J</div>
                        </div>
                        <div className='form-panel'>
                            <div className="form-select mt-4 selection-box" aria-label="Default select example">
                                Domain:  {selectedDomainName}
                            </div>
                            <div className='scroll-panel mt-2'>
                                {rightSideTag.map((item) => {
                                    return (
                                        <>
                                            <div className="tag">
                                                <p className="tag-text">{item.name}</p>
                                                <button className='disabletag'>
                                                    <span className="tag-icon">
                                                        <AiOutlineClose size={25}
                                                            className="icon"
                                                            onClick={() => {
                                                                handleCrossClick(item.id);
                                                            }}
                                                        />
                                                    </span>
                                                </button>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mapping