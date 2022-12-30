import React from 'react'

const Setting = () => {
    return (
        <div>
            <div className='container setting-panel'>
                <ul className="nav nav-tabs navbar-fixed-top" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active firstnavtab" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Personal</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link secondnavtab" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Plans</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link therdnavtab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Users</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link fournavtab" id="billing-tab" data-bs-toggle="tab" data-bs-target="#billing-tab-pane" type="button" role="tab" aria-controls="billing-tab-pane" aria-selected="false">Billing</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active firsttab" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <div className="mb-3">
                            <div className=''>
                                <label htmlFor="exampleInputPassword1" className="form-label">First Name *</label>
                            </div>
                            <input type="text" className="form-control" id="firstName" placeholder='First Name' />
                        </div>
                        <div className="mb-3">
                            <div className=''>
                                <label htmlFor="exampleInputPassword1" className="form-label">Last Name *</label>
                            </div>
                            <input type="text" className="form-control" id="lastName" placeholder='Last Name' />
                        </div>
                        <button type="button" class="btn savebtn">Save</button>

                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                        <div className="header">
                            <div className="inner-header flex">
                                <section>
                                    <center><h1 style={{ fontSize: '2.5em', fontFamily: '"Open Sans", sans-serif', color: 'white' }}>Maintenance Websites Price List</h1></center>
                                    <div className="pricing pricing-palden">
                                        <div className="pricing-item features-item ja-animate" data-animation="move-from-bottom" data-delay="item-0" style={{ minHeight: '497px' }}>
                                            <div className="pricing-deco">
                                                <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" y="0px">
                                                    <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                                                    <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                                                    <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                                                    <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                                                </svg>
                                                <div className="pricing-price"><span className="pricing-currency">$TWD</span>500
                                                    <span className="pricing-period">/ day</span>
                                                </div>
                                                <h3 className="pricing-title">Basic</h3>
                                            </div>
                                            <ul className="pricing-feature-list">
                                                <li className="pricing-feature">1 Pages/Screens</li>
                                                <li className="pricing-feature">Responsive Design</li>
                                                <li className="pricing-feature">Content Upload</li>
                                            </ul>
                                            <button className="pricing-action">Choose plan</button>
                                        </div>
                                        <div className="pricing-item features-item ja-animate pricing__item--featured" data-animation="move-from-bottom" data-delay="item-1" style={{ minHeight: '497px' }}>
                                            <div className="pricing-deco" style={{ background: 'linear-gradient(135deg,#a93bfe,#584efd)' }}>
                                                <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" y="0px">
                                                    <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                                                    <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                                                    <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                                                    <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                                                </svg>
                                                <div className="pricing-price"><span className="pricing-currency">$TWD</span>2499
                                                    <span className="pricing-period">/ month</span>
                                                </div>
                                                <h3 className="pricing-title">Premium</h3>
                                            </div>
                                            <ul className="pricing-feature-list">
                                                <li className="pricing-feature">10 Pages/Screens</li>
                                                <li className="pricing-feature">Responsive Design</li>
                                                <li className="pricing-feature">Content Upload</li>
                                            </ul>
                                            <button className="pricing-action">Choose plan</button>
                                        </div>
                                        <div className="pricing-item features-item ja-animate" data-animation="move-from-bottom" data-delay="item-2" style={{ minHeight: '497px' }}>
                                            <div className="pricing-deco">
                                                <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" y="0px">
                                                    <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                                                    <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                                                    <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                                                    <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                                                </svg>
                                                <div className="pricing-price"><span className="pricing-currency">$TWD</span>999
                                                    <span className="pricing-period">/ week</span>
                                                </div>
                                                <h3 className="pricing-title">Standard</h3>
                                            </div>
                                            <ul className="pricing-feature-list">
                                                <li className="pricing-feature">5 Pages/Screens</li>
                                                <li className="pricing-feature">Responsive Design</li>
                                                <li className="pricing-feature">Content Upload</li>
                                            </ul>
                                            <button className="pricing-action">Choose plan</button>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div>
                                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                                    <defs>
                                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                                    </defs>
                                    <g className="parallax">
                                        <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
                                        <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
                                        <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
                                        <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">CCCC</div>
                    <div className="tab-pane fade" id="billing-tab-pane" role="tabpanel" aria-labelledby="billing-tab" tabIndex="0">DDDD</div>
                </div>
            </div>
        </div>
    )
}

export default Setting