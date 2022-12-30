import React, { useEffect, useState } from 'react'
import Spinner from "../Loader/Spinner";
import * as XLSX from "xlsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Layout/Header';

const Suggestions_Import = () => {

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [xlsxdata, setXlsxdata] = useState();
    const [count, setCount] = useState(0);

    const notify = () => toast("Your Suggestion Import Successfully..");


    useEffect(() => {
        if (loading) {
            setShow(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);
    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: "buffer" });

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            setXlsxdata(d)

        });

    };

    const handleUpload = () => {
        setLoading(!loading);
        setShow(!show);
        setItems(xlsxdata[0]);
    };
    if (loading) return <Spinner />;


    const handleSkip = () => {
        setItems(xlsxdata[Math.floor((Math.random() * 10) + 1)])
        setCount(count + 1)
    }

    return (
        <>
            <div className='suggestions-import-container'>
                <Header title="Import suggestions from the csv file" />
                <div className="top-panel">
                    <div className="left-panel">
                        <div className='form-panel'>
                            <select className="form-select mt-4 selection-box" aria-label="Default select example">
                                <option selected>Domain - select box</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className='selection-box-new mt-5 mb-5'>
                                <input type="file" onChange={(e) => {
                                    const file = e.target.files[0];
                                    readExcel(file);
                                }} accept=".xlsx" id="myFile" name="filename" />
                                <button type="button" onClick={() => handleUpload()} className="btn button-color ">Upload</button>
                            </div>
                        </div>
                    </div>
                    <div className="right-panel">
                        <div className="header">
                            <div className="title subheader">Item {count}/10</div>
                        </div>
                        <div className='right-panel-first'>
                            <div className='right-panel-second'>
                                <form>
                                    <div className="row mb-3">
                                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Name:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" value={items.name} id="inputEmail" placeholder="Suggestion - name" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Title:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" value={items.title} id="inputEmail" placeholder="Suggestion - title" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Keywords:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" value={items.keywords} id="inputPassword" placeholder="Suggestion - keywords" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="col-sm-2 col-form-label">Description:</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" value={items.description} id="exampleFormControlTextarea1" placeholder='Suggestion - description' rows="5"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-10 offset-sm-2 button-first">
                                            <button type="button" onClick={() => handleSkip()} className="btn button-second">Skip</button>
                                            <button type="button" onClick={notify} className="btn button-second ms-2">Import</button>
                                            <ToastContainer />
                                            <button type="button" className="btn button-second ms-2">Import All</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suggestions_Import