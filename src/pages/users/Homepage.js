import React from 'react'
import { useHistory } from "react-router-dom";
import Shopify_Header from './Shopify_Header';
import websiteseo from '../../assets/users/images/websiteseo.png'
import wordpressseo from '../../assets/users/images/wordpressseo.png'
import ab from '../../assets/users/images/2.webp'
import imagwseo from '../../assets/users/images/imagwseo.jpg'
import extra from '../../assets/users/images/extra.png'
import reviw from '../../assets/users/images/reviw.png'
import { GoSearch } from "react-icons/go";
import { GiStarsStack } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";


const Homepage = () => {

  const history = useHistory();

  const routeChangeToShopify = () => {
    let path = `shopify/shopify-mywork`;
    history.push(path);
  }
  const routeChangeToWebsiteSeo = () => {
    let path = `websiteseo`;
    history.push(path);
  }
  return (
    <>
      <div className='shopify-home-container'>
        <Shopify_Header title='' />
        <div className='first-panel grad1'>
          <div className='first-child'>
            <h2 className='first-title'>What will you create ?</h2>
          </div>
          <div className='second-child'>
            <div class="input-group flex-nowrap second-search">
              <span class="input-group-text search-color" id="addon-wrapping"><GoSearch /></span>
              <input type="text" id="search-color" class="form-control" placeholder="Search your content in Searchify" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
          </div>
          <div className='third-child'>
            <div className='third-child-main col-12 col-sm-2 col-md-2 col-lg-2' style={{ width: '140px' }}>
              <div className='mini-div'>
                <GiStarsStack size={25} />
              </div>
              <div>For you</div>
            </div>
            <div className='third-child-main col-12 col-sm-2 col-md-2 col-lg-2' style={{ width: '140px' }}>
              <div className='mini-div'>
                <FiShoppingBag size={25} />
              </div>
              <div>Meta Data</div>
            </div>
            <div className='third-child-main col-12 col-sm-2 col-md-2 col-lg-2' style={{ width: '140px' }}>
              <div className='mini-div'>
                <BiMessageDetail size={25} />
              </div>
              <div>Header H1 Data</div>
            </div>
            <div className='third-child-main col-12 col-sm-2 col-md-2 col-lg-2' style={{ width: '140px' }}>
              <div className='mini-div'>
                <HiOutlineVideoCamera size={25} />
              </div>
              <div>Body Text Data</div>
            </div>
            <div className='third-child-main col-12 col-sm-2 col-md-2 col-lg-2' style={{ width: '140px' }}>
              <div className='mini-div'>
                <AiFillPrinter size={25} />
              </div>
              <div>Image Converter</div>
            </div>
            <div className='third-child-main col-12 col-sm-2 col-md-2 col-lg-2' style={{ width: '140px' }}>
              <div className='mini-div'>
                <FaBriefcase size={25} />
              </div>
              <div>Priority Tasks</div>
            </div>
          </div>
        </div>
        <div className='second-panel'>
          <div className='arrow me-2 '>
            <h5 className='mx-2 py-2'>You might want to try...</h5>
            <div className='mini-div1'>
              <FiChevronsRight size={25} />
            </div>
          </div>
          <div className='second-child'>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }} onClick={routeChangeToWebsiteSeo} >
              <div className="backimg">
                <img src={websiteseo} className="img-thumbnail" alt="..." />
              </div>
              <div >
                <div className="card-body">
                  <p className="card-text">Website SEO</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }} onClick={routeChangeToShopify} >
              <div className="backimg">
                <img src={ab} className="img-thumbnail" alt="..." />
              </div>
              <div >
                <div className="card-body">
                  <p className="card-text">Shopify SEO</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }} >
              <div className="backimg">
                <img src={wordpressseo} className="img-thumbnail" alt="..." />
              </div>
              <div >
                <div className="card-body">
                  <p className="card-text">Wordpress SEO</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }} >
              <div className="backimg">
                <img src={imagwseo} className="img-thumbnail" alt="..." />
              </div>
              <div >
                <div className="card-body">
                  <p className="card-text">Image SEO</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }} >
              <div className="backimg">
                <img src={extra} className="img-thumbnail" alt="..." />
              </div>
              <div >
                <div className="card-body">
                  <p className="card-text">Some quick example text to</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }} >
              <div className="backimg">
                <img src={extra} className="img-thumbnail" alt="..." />
              </div>
              <div >
                <div className="card-body">
                  <p className="card-text">Some quick example text to</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }} >
              <div className="backimg">
                <img src={extra} className="img-thumbnail" alt="..." />
              </div>
              <div >
                <div className="card-body">
                  <p className="card-text">Some quick example text to</p>
                </div>
              </div>
            </div>
            <div className="card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }} >
              <div className="backimg">
                <img src={extra} className="img-thumbnail" alt="..." />
              </div>
              <div >
                <div className="card-body">
                  <p className="card-text">Some quick example text to</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='third-panel'>
          <div className='arrow me-2 '>
            <h5 className='mx-2 py-2'>Tips and Tricks</h5>
            <div className='mini-div1'>
              <FiChevronsRight size={25} />
            </div>
          </div>
          <div className='third-child'>
            <div className="card card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }}>
              <div className="row g-0">
                <div className="img-effect col-4 col-sm-4 col-md-4 col-lg-4">
                  <img src={reviw} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="card-body">
                    <p className="card-title">Card title</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }}>
              <div className="row g-0">
                <div className="img-effect col-4 col-sm-4 col-md-4 col-lg-4">
                  <img src={reviw} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="card-body">
                    <p className="card-title">Card title</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }}>
              <div className="row g-0">
                <div className="img-effect col-4 col-sm-4 col-md-4 col-lg-4">
                  <img src={reviw} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="card-body">
                    <p className="card-title">Card title</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }}>
              <div className="row g-0">
                <div className="img-effect col-4 col-sm-4 col-md-4 col-lg-4">
                  <img src={reviw} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="card-body">
                    <p className="card-title">Card title</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }}>
              <div className="row g-0">
                <div className="img-effect col-4 col-sm-4 col-md-4 col-lg-4">
                  <img src={reviw} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="card-body">
                    <p className="card-title">Card title</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }}>
              <div className="row g-0">
                <div className="img-effect col-4 col-sm-4 col-md-4 col-lg-4">
                  <img src={reviw} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="card-body">
                    <p className="card-title">Card title</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }}>
              <div className="row g-0">
                <div className="img-effect col-4 col-sm-4 col-md-4 col-lg-4">
                  <img src={reviw} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="card-body">
                    <p className="card-title">Card title</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }}>
              <div className="row g-0">
                <div className="img-effect col-4 col-sm-4 col-md-4 col-lg-4">
                  <img src={reviw} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="card-body">
                    <p className="card-title">Card title</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card col-12 col-sm-12 col-md-12 col-lg-12" style={{ width: "320px" }}>
              <div className="row g-0">
                <div className="img-effect col-4 col-sm-4 col-md-4 col-lg-4">
                  <img src={reviw} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="card-body">
                    <p className="card-title">Card title</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage