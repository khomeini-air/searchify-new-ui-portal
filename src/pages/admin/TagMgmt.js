import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { createNewTag, fetchAllDomains, fetchSearchifyTags } from "../../utils/admin/TagUtil";
import Header from './../../components/admin/Header';
import Spinner from './../../components/admin/Spinner';

const TagMgmt = () => {

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [isEditting, setIsEditting] = useState(false);
    const [count, setCount] = useState(0);
    const [domains, setDomains] = useState([]);
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [tags, setTags] = useState([]);
    const [edittingTag, setEdittingTag] = useState(null);
    const [newTagName, setNewTagName] = useState("");
    const [disable, setDisable] = useState(false);

    const notify = () => toast("Your Tag is created successfully..");

    const handleGettingDomains = async () => {

        const fetchDomainsResult = await fetchAllDomains();
        const allDomains = await fetchDomainsResult.json();
        setDomains(allDomains);
        console.log("domains: " + allDomains);
    }

    const handleSelectDomain = async (e) => {
        setTags([]);
        setSelectedDomain(e.target.value);
        const fetchTagsResult = await fetchSearchifyTags(e.target.value);
        const fetchTags = await fetchTagsResult.json();
        setTags(fetchTags);
        handleNewTag();
    }

    const handleEditClick = (item) => {
        setEdittingTag(item);
        setIsEditting(true);
    }

    const handleNewTag = () => {
        setNewTagName("");
        setIsEditting(false);
    }

    const handleCreateNewTag = async() => {
        const res = await createNewTag(selectedDomain, newTagName);
        const tag = await res.json();

        if(tag != null & tag.code == "1"){
            const fetchTagsResult = await fetchSearchifyTags(selectedDomain);
            const fetchTags = await fetchTagsResult.json();
            console.log("fetchTags:" + JSON.stringify(fetchTags));
            setTags(fetchTags);
            handleNewTag();
            notify();
        }
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


    const handleSkip = () => {
        setItems(xlsxdata[Math.floor((Math.random() * 10) + 1)])
        setCount(count + 1)
    }

    return (
        <>
            <div className='tagmgmt-container'>
                <Header title="Tags Management" />
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
                            <div className='scroll-panel mt-2'>
                                {tags.length > 0 ? (
                                    tags?.map((item) => {
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
                                            No Tags Available Related to Your Domain
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    
                {isEditting == true? (
                    <div className="right-panel">
                        <div className="header">
                            <div className="title subheader">Edit an existing tag</div>
                            <button type="button" onClick={() => handleNewTag()} className="btn " style={{"background-color": "#855aff", "color": "white"}}> <AiOutlinePlus size={15} />New Tag</button>
                        </div>
                        <div className='right-panel-first'>
                            <div className='right-panel-second'>
                                <form>
                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label">ID:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" value={edittingTag.id} id="inputId" placeholder="Tag - ID" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label">Name:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" value={edittingTag.name} id="inputEmail" placeholder="Tag - name" />
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-sm-10 offset-sm-2 button-first">
                                            <div className='multibutton'>
                                                <button type="button" onClick={() => handleNewTag()} className="btn button-second">Cancel</button>
                                                <button type="button" onClick={notify} className="btn button-second ms-2">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ): (
                    <div className="right-panel">
                        <div className="header">
                            <div className="title subheader">Create a new tag</div>
                        </div>
                        <div className='right-panel-first'>
                            <div className='right-panel-second'>
                                <form>
                                    <div className="row mb-3">
                                        <label  className="col-sm-2 col-form-label">Name:</label>
                                        <div className="col-sm-10">
                                        <input type="text" 
                                            className="form-control"  
                                            id="inputTagName" 
                                            placeholder="Tag - name" 
                                            value={newTagName}
                                            onChange={(e) => {setNewTagName(e.target.value);}}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-sm-10 offset-sm-2 button-first">
                                            <div className='multibutton'>
                                                <button type="button" onClick={() => handleSkip()} className="btn button-second">Cancel</button>
                                                <button type="button" onClick={handleCreateNewTag} className="btn button-second ms-2">Save</button>
                                                <ToastContainer />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                   
                </div>
            </div>
        </>
    )
}

export default TagMgmt