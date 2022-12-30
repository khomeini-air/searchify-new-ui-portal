import React, { useEffect, useState } from 'react'
import Shopify_Header from './Shopify_Header';
import { Link } from "react-router-dom";
import { fetchShopifyPages, fetchShopifyPageSeo} from "../../utils/users/ShopifyUtil";
import Spinner from './../../components/users/Spinner';


const Shopify_Mywork = (props) => {

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [accessKey, setAccessKey] = useState(null);
    const [storeId, setStoreId] = useState(null);
    const [shopifyPages, setShopifyPages] = useState([]);

    useEffect(() => {
        if (loading) {
            setShow(true);
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    }, [loading]);

    if (loading) return <Spinner />;

    const handleCrawling = async () => {

        const request = ({accessKey: accessKey, store: storeId});
        const res = await fetchShopifyPages(request)
        const data = await res.json();
        setShopifyPages(data);
        setLoading(!loading);

    }

    const handleSelectPage = async(page) => {

        const request = ({accessKey: accessKey, store: storeId, pageId: page.id});
        const res = await fetchShopifyPageSeo(request);
        const returnedPageSeo = await res.json();
        props.setGetFromShopifyHome({pageSeo: returnedPageSeo});
    }

    return (
        <>
            <div className='shopify-mywork-container'>
                <Shopify_Header title="Shopify SEO" />
                <div className='top-panel container'>
                    <div className='first-panel pt-4'>
                        <h2 className='text-center' >  Please provide your shopify settings here!</h2>
                    </div>
                    <div className='side-btn'>
                        <div className='col-md-6 mt-5 '>
                            <form class="form-horizontal" action="/action_page.php">
                                <div class="form-group d-flex mb-3">
                                    <label class="control-label fontweight col-lg-3 col-md-4 col-sm-3 col-12" for="email">Access key :</label>
                                    <div class="col-lg-10 col-md-10 col-sm-9 col-12">
                                        <input type="text" class="form-control input-color" id="accessKey" placeholder="Provide the access key to shopify" name="accessKey" 
                                                 value={accessKey}
                                                 onChange={(e) => {
                                                  setAccessKey(e.target.value);
                                                 }}/>
                                    </div>
                                </div>
                                <div class="form-group d-flex">
                                    <label class="control-label fontweight col-lg-3 col-md-4 col-sm-3 col-12" for="pwd">Store name  :</label>
                                    <div class="col-lg-10 col-md-10 col-sm-9 col-12">
                                        <input type="text" class="form-control input-color" id="storeId" placeholder="Provide the store name" name="storeId" 
                                                 value={storeId}
                                                 onChange={(e) => {
                                                  setStoreId(e.target.value);
                                                 }}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='col-md-6 mt-5 btn-panel'>
                            <button className='btn-main' onClick={() => handleCrawling()} >
                                <p className="btnText mb-0">Check your site</p>
                                <div className="btnTwo">
                                    <p className="btnText2 mb-0">GO</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {show && (
                        <>
                            <div className='bottom-panel container'>
                                <div className='left-panel col-md-7'>
                                    <div className='pt-2 upper-panel fontweight'>
                                        Page List
                                    </div>
                                    <div className='scroll-panel mt-2'>
                                        {shopifyPages && shopifyPages.map((item) => 
                                            <div className="tag" onClick={() => handleSelectPage(item)}>
                                                <span>+</span>
                                                <span className="tag-icon">
                                                </span>
                                                <p className="tag-text">{item.name}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='right-panel col-md-4 '>
                                    <div className='pt-2 upper-panel fontweight'>
                                        Tagging
                                    </div>
                                    <div className='scroll-panel mt-2'>
                                        <div className="tag">
                                            <span>+</span>
                                            <span className="tag-icon">
                                            </span>
                                            <p className="tag-text">Tag-01 <sup>&nbsp;&nbsp;(90%)</sup></p>
                                        </div>
                                        <div className="tag">
                                            <span>+</span>
                                            <span className="tag-icon">
                                            </span>
                                            <p className="tag-text">Tag-01 <sup>&nbsp;&nbsp;(90%)</sup></p>
                                        </div>
                                        <div className="tag">
                                            <span>+</span>
                                            <span className="tag-icon">
                                            </span>
                                            <p className="tag-text">Tag-01 <sup>&nbsp;&nbsp;(90%)</sup></p>
                                        </div>
                                        <div className="tag">
                                            <span>+</span>
                                            <span className="tag-icon">
                                            </span>
                                            <p className="tag-text">Tag-01 <sup>&nbsp;&nbsp;(90%)</sup></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container btn-panel">
                                <div className="improve-btn">
                                <Link to="/user/shopify/suggestions">
                                    <button type="button" className="improve-btn">
                                        <span>Let's improve!</span>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </>
    )
}

export default Shopify_Mywork