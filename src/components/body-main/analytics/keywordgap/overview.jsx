import React from 'react';
import styles from '../analytics.module.css';
import shapeImg6 from '../../../../assets/img/gradient-shape6.png';
import shapeImg3 from '../../../../assets/img/gradient-shape3.png';
import shapeImg4 from '../../../../assets/img/gradient-shape4.png';
// import infoModal1 from '../../../../assets/img/keywordmannager-modal1.svg';

import {
  TfiAngleDown,
  TfiArrowLeft,
  TfiAngleDoubleRight,
  TfiExport,
  TfiAngleRight
} from 'react-icons/tfi';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
const overview = () => {
  return (
    <>
      <section className={styles.keyword__wrap_section}>
        <img
          className={styles.app_shape_img6}
          src={shapeImg6}
          alt={shapeImg6}
        />
        <img
          className={styles.app_shape_img3}
          src={shapeImg3}
          alt={shapeImg3}
        />
        <img
          className={styles.app_shape_img4}
          src={shapeImg4}
          alt={shapeImg4}
        />

        <div className={styles.keyword__cont_box}>
          <div className={styles.keyword__cont_main}>
            <div className={styles.keyword__top_box__wrap}>
              <a
                href="/keywordmannager/home"
                className={styles.back_to_next__btn}
              >
                <span>
                  <TfiArrowLeft />
                </span>{' '}
                Go to all lists
              </a>

              <div className={styles.key__top__nav_items}>
                <h2 className={styles.key__top_nav_title}>Keyword Gap</h2>
                <div className={styles.top__right_key__box}>
                  <button className={styles.share__info_item}>
                    <span className={styles.users__icon}>
                      <TfiExport />
                    </span>{' '}
                    Export to PDF
                  </button>
                </div>
              </div>

              <div className={styles.compare__fild__box_cont}>
                <div className={styles.keyword__input_item_mainbox}>
                  <div className={styles.select_domain_type}>
                    <span className={styles.selected__item_text}>
                      root domain{' '}
                      <span className={styles.arrow__icon}>
                        <TfiAngleDown />
                      </span>
                    </span>
                    <ul className={styles.keyword__select_widget_box}>
                      <li className={styles.select__widget__items}>
                        Root domain
                      </li>
                      <li className={styles.select__widget__items}>
                        Exact URl
                      </li>
                      <li className={styles.select__widget__items}>
                        Subdomain
                      </li>
                      <li className={styles.select__widget__items}>
                        Subfolder
                      </li>
                    </ul>
                  </div>
                  <div className={styles.keyword_inputfild__contbox}>
                    <div className={styles.keyword__input_fildbox}>
                      <label htmlFor="text" className={styles.seal__text_color}>
                        <span>You</span>
                      </label>
                      <input
                        type="text"
                        className={styles.add__domain_fild}
                        placeholder="add domain"
                      />
                    </div>
                  </div>
                </div>

                {/* ===================== */}
                <div className={styles.keyword__input_item_mainbox}>
                  <div className={styles.select_domain_type}>
                    <span className={styles.selected__item_text}>
                      root domain{' '}
                      <span className={styles.arrow__icon}>
                        <TfiAngleDown />
                      </span>
                    </span>
                    <ul className={styles.keyword__select_widget_box}>
                      <li className={styles.select__widget__items}>
                        Root domain
                      </li>
                      <li className={styles.select__widget__items}>
                        Exact URl
                      </li>
                      <li className={styles.select__widget__items}>
                        Subdomain
                      </li>
                      <li className={styles.select__widget__items}>
                        Subfolder
                      </li>
                    </ul>
                  </div>
                  <div className={styles.keyword_inputfild__contbox}>
                    <div className={styles.keyword__input_fildbox}>
                      <label htmlFor="text" className={styles.seal__text_color}>
                        <span></span>
                      </label>
                      <input
                        type="text"
                        className={styles.add__domain_fild}
                        placeholder="add domain"
                      />
                    </div>
                  </div>
                </div>
                {/* ===================== */}
                <div className={styles.keyword__input_item_mainbox}>
                  <div className={styles.select_domain_type}>
                    <span className={styles.selected__item_text}>
                      root domain{' '}
                      <span className={styles.arrow__icon}>
                        <TfiAngleDown />
                      </span>
                    </span>
                    <ul className={styles.keyword__select_widget_box}>
                      <li className={styles.select__widget__items}>
                        Root domain
                      </li>
                      <li className={styles.select__widget__items}>
                        Exact URl
                      </li>
                      <li className={styles.select__widget__items}>
                        Subdomain
                      </li>
                      <li className={styles.select__widget__items}>
                        Subfolder
                      </li>
                    </ul>
                  </div>
                  <div className={styles.keyword_inputfild__contbox}>
                    <div className={styles.keyword__input_fildbox}>
                      <label htmlFor="text" className={styles.seal__text_color}>
                        <span></span>
                      </label>
                      <input
                        type="text"
                        className={styles.add__domain_fild}
                        placeholder="add domain"
                      />
                    </div>
                  </div>
                </div>
                {/* ===================== */}
                <div className={styles.keyword__input_item_mainbox}>
                  <div className={styles.select_domain_type}>
                    <span className={styles.selected__item_text}>
                      root domain{' '}
                      <span className={styles.arrow__icon}>
                        <TfiAngleDown />
                      </span>
                    </span>
                    <ul className={styles.keyword__select_widget_box}>
                      <li className={styles.select__widget__items}>
                        Root domain
                      </li>
                      <li className={styles.select__widget__items}>
                        Exact URl
                      </li>
                      <li className={styles.select__widget__items}>
                        Subdomain
                      </li>
                      <li className={styles.select__widget__items}>
                        Subfolder
                      </li>
                    </ul>
                  </div>
                  <div className={styles.keyword_inputfild__contbox}>
                    <div className={styles.keyword__input_fildbox}>
                      <label htmlFor="text" className={styles.seal__text_color}>
                        <span></span>
                      </label>
                      <input
                        type="text"
                        className={styles.add__domain_fild}
                        placeholder="add domain"
                      />
                    </div>
                  </div>
                </div>
                {/* ===================== */}
                <div className={styles.keyword__input_item_mainbox}>
                  <div className={styles.select_domain_type}>
                    <span className={styles.selected__item_text}>
                      root domain{' '}
                      <span className={styles.arrow__icon}>
                        <TfiAngleDown />
                      </span>
                    </span>
                    <ul className={styles.keyword__select_widget_box}>
                      <li className={styles.select__widget__items}>
                        Root domain
                      </li>
                      <li className={styles.select__widget__items}>
                        Exact URl
                      </li>
                      <li className={styles.select__widget__items}>
                        Subdomain
                      </li>
                      <li className={styles.select__widget__items}>
                        Subfolder
                      </li>
                    </ul>
                  </div>
                  <div className={styles.keyword_inputfild__contbox}>
                    <div className={styles.keyword__input_fildbox}>
                      <label htmlFor="text" className={styles.seal__text_color}>
                        <span></span>
                      </label>
                      <input
                        type="text"
                        className={styles.add__domain_fild}
                        placeholder="add domain"
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.compare__control__box}>
                  <div className={styles.competitor__controll_box}>
                    <button className={styles.compare__button}>Compare</button>
                  </div>
                </div>
              </div>

              <div className={styles.topbar__key__tabs__filter_wrap}>
                <div className={styles.topbar__key__tabs__filter}>
                  <button className={styles.tabs__filters_btn}>
                    Organic keywords
                  </button>
                  <button className={styles.tabs__filters_btn}>
                    Paid keywords
                  </button>
                  <button className={styles.tabs__filters_btn}>
                    PLA keywords
                  </button>
                </div>
              </div>

              <div className={styles.topbar__key__filter__itembox}>
                <div className={styles.database__filter_wrap_box}>
                  <div className={styles.search__and_database__filterbox}>
                    <div className={styles.search__filterbox}>
                      <input
                        type="search"
                        placeholder="seach by filter"
                        className={styles.search__box_input}
                      />
                      <button className={styles.search__button}>
                        <span className={styles.search__icon}>
                          <FiSearch />
                        </span>
                      </button>
                    </div>

                    <div className={styles.database__filterbox}>
                      <div className={styles.selecte__item_databases}>
                        <input
                          type="select"
                          className={styles.selected_database}
                          placeholder="Databesess"
                        />
                        <span className={styles.arrow_downicon}>
                          <TfiAngleDown />
                        </span>
                      </div>
                      <ul className={styles.select__item__box}>
                        <li className={styles.selected__items}></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.filter_drop__selec__items}>
                <div className={styles.selected__filter_item}>
                    <button className={styles.selected__drop_item}>
                      Position{' '}
                      <span className={styles.arrow_downicon}>
                        <TfiAngleDown />
                      </span>
                      <ul className={styles.keyword__select_widget_box}>
                        <li className={styles.select__widget__items}>
                          All domains <span className={styles.angle__right}><TfiAngleRight /></span>
                          <ul className={styles.sublist__select_item}>
                            <li className={styles.list__items}>top 50 </li>
                            <li className={styles.list__items}>top 20</li>
                            <li className={styles.list__items}>top 10</li>
                              <li className={styles.custom_rangebox}>
                              <h6 className={styles.range_title}>Custom range</h6>
                              <div className={styles.range_input_box}>
                              <input type="text" className={styles.input_item_one} placeholder='from' />
                                <input type="text" className={styles.input_item_two} placeholder='to' />
                              </div>
                              <button className={styles.apply_btn}>Apply</button>
                            </li>
                          </ul>
                        </li>
                        <li className={styles.select__widget__items}>
                          You-domain <span className={styles.angle__right}><TfiAngleRight /></span> 
                          <ul className={styles.sublist__select_item}>
                            <li className={styles.list__items}>top 50 </li>
                            <li className={styles.list__items}>top 20</li>
                            <li className={styles.list__items}>top 10</li>
                              <li className={styles.custom_rangebox}>
                              <h6 className={styles.range_title}>Custom range</h6>
                              <div className={styles.range_input_box}>
                              <input type="text" className={styles.input_item_one} placeholder='from' />
                                <input type="text" className={styles.input_item_two} placeholder='to' />
                              </div>
                              <button className={styles.apply_btn}>Apply</button>
                            </li>
                          </ul>
                        </li>
                        <li className={styles.select__widget__items}>
                          Competitors <span className={styles.angle__right}><TfiAngleRight /></span> 
                          <ul className={styles.sublist__select_item}>
                            <li className={styles.list__items}>top 50 </li>
                            <li className={styles.list__items}>top 20</li>
                            <li className={styles.list__items}>top 10</li>
                              <li className={styles.custom_rangebox}>
                              <h6 className={styles.range_title}>Custom range</h6>
                              <div className={styles.range_input_box}>
                              <input type="text" className={styles.input_item_one} placeholder='from' />
                                <input type="text" className={styles.input_item_two} placeholder='to' />
                              </div>
                              <button className={styles.apply_btn}>Apply</button>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </button>
                  </div>
                  <div className={styles.selected__filter_item}>
                    <button className={styles.selected__drop_item}>
                      Volume{' '}
                      <span className={styles.arrow_downicon}>
                        <TfiAngleDown />
                      </span>
                      <ul className={styles.keyword__select_widget_box}>
                        <li className={styles.select__widget__items}>
                          All domains
                        </li>
                        <li className={styles.select__widget__items}>
                          You-domain 
                        </li>
                        <li className={styles.select__widget__items}>
                          Competitors 
                        </li>
                        <li className={styles.custom_rangebox}>
                              <h6 className={styles.range_title}>Custom range</h6>
                              <div className={styles.range_input_box}>
                              <input type="text" className={styles.input_item_one} placeholder='from' />
                                <input type="text" className={styles.input_item_two} placeholder='to' />
                              </div>
                              <button className={styles.apply_btn}>Apply</button>
                            </li>
                      </ul>
                    </button>
                  </div>
                  <div className={styles.selected__filter_item}>
                    <button className={styles.selected__drop_item}>
                      KD%{' '}
                      <span className={styles.arrow_downicon}>
                        <TfiAngleDown />
                      </span>
                                            <ul className={styles.keyword__select_widget_box}>
                        <li className={styles.select__widget__items}>
                          All domains
                        </li>
                        <li className={styles.select__widget__items}>
                          You-domain 
                        </li>
                        <li className={styles.select__widget__items}>
                          Competitors 
                        </li>
                        <li className={styles.custom_rangebox}>
                              <h6 className={styles.range_title}>Custom range</h6>
                              <div className={styles.range_input_box}>
                              <input type="text" className={styles.input_item_one} placeholder='from' />
                                <input type="text" className={styles.input_item_two} placeholder='to' />
                              </div>
                              <button className={styles.apply_btn}>Apply</button>
                            </li>
                      </ul>
                    </button>
                  </div>
                  <div className={styles.selected__filter_item}>
                    <button className={styles.selected__drop_item}>
                      Intent{' '}
                      <span className={styles.arrow_downicon}>
                        <TfiAngleDown />
                      </span>
                          <ul className={styles.keyword__select_widget_box}>
                        <li className={styles.select__widget__items}>
                         <label htmlFor="checkeditem1"><input type="checkbox" id='checkeditem1' className={styles.checked__item} /> Informational</label>
                        </li>
                        <li className={styles.select__widget__items}>
                         <label htmlFor="checkeditem2"><input type="checkbox" id='checkeditem2' className={styles.checked__item} /> Naviagation</label>
                        </li>
                        <li className={styles.select__widget__items}>
                         <label htmlFor="checkeditem3"><input type="checkbox" id='checkeditem3' className={styles.checked__item} /> Commercial</label> 
                        </li>
                        <li className={styles.select__widget__items}>
                         <label htmlFor="checkeditem3"><input type="checkbox" id='checkeditem3' className={styles.checked__item} /> Transactional</label> 
                        </li>
                        <li className={styles.custom_rangebox}>
                              <button className={styles.apply_btn}>Apply</button>
                            </li>
                      </ul>
                    </button>
                  </div>
                  {/* <div className={styles.selected__filter_item}>
                    <button className={styles.selected__drop_item}>
                      CPC (USD){' '}
                      <span className={styles.arrow_downicon}>
                        <TfiAngleDown />
                      </span>
                                            <ul className={styles.keyword__select_widget_box}>
                        <li className={styles.select__widget__items}>
                          All domains
                        </li>
                        <li className={styles.select__widget__items}>
                          You-domain 
                        </li>
                        <li className={styles.select__widget__items}>
                          Competitors 
                        </li>
                        <li className={styles.custom_rangebox}>
                              <h6 className={styles.range_title}>Custom range</h6>
                              <div className={styles.range_input_box}>
                              <input type="text" className={styles.input_item_one} placeholder='from' />
                                <input type="text" className={styles.input_item_two} placeholder='to' />
                              </div>
                              <button className={styles.apply_btn}>Apply</button>
                            </li>
                      </ul>
                    </button>
                  </div>
                  <div className={styles.selected__filter_item}>
                    <button className={styles.selected__drop_item}>
                      SERP Features{' '}
                      <span className={styles.arrow_downicon}>
                        <TfiAngleDown />
                      </span>
                                            <ul className={styles.keyword__select_widget_box}>
                        <li className={styles.select__widget__items}>
                          All domains
                        </li>
                        <li className={styles.select__widget__items}>
                          You-domain 
                        </li>
                        <li className={styles.select__widget__items}>
                          Competitors 
                        </li>
                        <li className={styles.custom_rangebox}>
                              <h6 className={styles.range_title}>Custom range</h6>
                              <div className={styles.range_input_box}>
                              <input type="text" className={styles.input_item_one} placeholder='from' />
                                <input type="text" className={styles.input_item_two} placeholder='to' />
                              </div>
                              <button className={styles.apply_btn}>Apply</button>
                            </li>
                      </ul>
                    </button>
                  </div>
                  <div className={styles.selected__filter_item}>
                    <button className={styles.selected__drop_item}>
                      Competitive density{' '}
                      <span className={styles.arrow_downicon}>
                        <TfiAngleDown />
                      </span>
                                            <ul className={styles.keyword__select_widget_box}>
                        <li className={styles.select__widget__items}>
                          All domains
                        </li>
                        <li className={styles.select__widget__items}>
                          You-domain 
                        </li>
                        <li className={styles.select__widget__items}>
                          Competitors 
                        </li>
                        <li className={styles.custom_rangebox}>
                              <h6 className={styles.range_title}>Custom range</h6>
                              <div className={styles.range_input_box}>
                              <input type="text" className={styles.input_item_one} placeholder='from' />
                                <input type="text" className={styles.input_item_two} placeholder='to' />
                              </div>
                              <button className={styles.apply_btn}>Apply</button>
                            </li>
                      </ul>
                    </button>
                  </div>
                  <div className={styles.selected__filter_item}>
                    <button className={styles.selected__drop_item}>
                      Click potential{' '}
                      <span className={styles.arrow_downicon}>
                        <TfiAngleDown />
                      </span>
                                            <ul className={styles.keyword__select_widget_box}>
                        <li className={styles.select__widget__items}>
                          All domains
                        </li>
                        <li className={styles.select__widget__items}>
                          You-domain 
                        </li>
                        <li className={styles.select__widget__items}>
                          Competitors 
                        </li>
                        <li className={styles.custom_rangebox}>
                              <h6 className={styles.range_title}>Custom range</h6>
                              <div className={styles.range_input_box}>
                              <input type="text" className={styles.input_item_one} placeholder='from' />
                                <input type="text" className={styles.input_item_two} placeholder='to' />
                              </div>
                              <button className={styles.apply_btn}>Apply</button>
                            </li>
                      </ul>
                    </button>
                  </div>
                  <div className={styles.selected__filter_item}>
                    <button className={styles.selected__drop_item}>
                      Tags{' '}
                      <span className={styles.arrow_downicon}>
                        <TfiAngleDown />
                      </span>
                                            <ul className={styles.keyword__select_widget_box}>
                        <li className={styles.select__widget__items}>
                          All domains
                        </li>
                        <li className={styles.select__widget__items}>
                          You-domain 
                        </li>
                        <li className={styles.select__widget__items}>
                          Competitors 
                        </li>
                        <li className={styles.custom_rangebox}>
                              <h6 className={styles.range_title}>Custom range</h6>
                              <div className={styles.range_input_box}>
                              <input type="text" className={styles.input_item_one} placeholder='from' />
                                <input type="text" className={styles.input_item_two} placeholder='to' />
                              </div>
                              <button className={styles.apply_btn}>Apply</button>
                            </li>
                      </ul>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            {/* ============= */}
            <div className={styles.insight__overview__middlecont}>
              <div className={styles.top__opportunity__box}>
                <h4 className={styles.top__title}>
                  Top Opportunities{' '}
                  <span className={styles.highlight__text}>you</span>
                </h4>
                <div className={styles.top__insight_overview_left}>
                  <div className={styles.topbar__key__tabs__filter}>
                    <button className={styles.tabs__filters_btn}>
                      {' '}
                      Missing{' '}
                    </button>
                    <button className={styles.tabs__filters_btn}>Weak</button>
                  </div>
                </div>
                <div className={styles.keyword__insight__graph}>
                  <div className={styles.insight__graph__top_head}>
                    <h6 className={styles.title}>Keyword</h6>
                    <h6 className={styles.title}>Volume</h6>
                  </div>
                  <ul className={styles.insight__graph_details}>
                    <li className={styles.insight__graph__item}>
                      <a href="/" className={styles.graph_item_link}>
                        sage hill apartments
                        <span className={styles.arrow_right_icon}>
                          <TfiAngleDoubleRight />
                        </span>
                      </a>
                      <span className={styles.insight_right__item}>1,000</span>
                    </li>
                    <li className={styles.insight__graph__item}>
                      <a href="/" className={styles.graph_item_link}>
                        sage hill apartments
                        <span className={styles.arrow_right_icon}>
                          <TfiAngleDoubleRight />
                        </span>
                      </a>
                      <span className={styles.insight_right__item}>1,000</span>
                    </li>
                    <li className={styles.insight__graph__item}>
                      <a href="/" className={styles.graph_item_link}>
                        sage hill apartments
                        <span className={styles.arrow_right_icon}>
                          <TfiAngleDoubleRight />
                        </span>
                      </a>
                      <span className={styles.insight_right__item}>1,000</span>
                    </li>
                    <li className={styles.insight__graph__item}>
                      <a href="/" className={styles.graph_item_link}>
                        sage hill apartments
                        <span className={styles.arrow_right_icon}>
                          <TfiAngleDoubleRight />
                        </span>
                      </a>
                      <span className={styles.insight_right__item}>1,000</span>
                    </li>
                  </ul>
                </div>
                <button className={styles.view__more}>View details</button>
              </div>

              <div className={styles.keyword__overlape__box}>
                <h4 className={styles.top__title}>
                  Top Opportunities <span className="highlight__text">you</span>
                </h4>
                <div className="keyword__insight__graph"></div>
              </div>
            </div>
            {/* ================ */}
            <div className={styles.insight__overview__box}>
              <div className={styles.insight__overview__top}>
                <div className={styles.top__insight_overview_left__wrap}>
                  <div className={styles.top__insight_overview_left}>
                    <h6 className={styles.top__update__title}>
                      <strong> All keyword details for:</strong>
                      <span className={styles.domain__name_title}>
                        www.soapandmore.ca{' '}
                        <span className={styles.arrow_down}>
                          <TfiAngleDown />
                        </span>
                      </span>

                      <span className={styles.highllight__text}>you</span>
                    </h6>
                    <ul className={styles.list_of_updated_box}>
                      <li className={styles.list_of_updated_items}></li>
                      <li className={styles.list_of_updated_items}></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.insight__overview__top}>
                <div className={styles.top__insight_overview_left}>
                  <div className={styles.topbar__key__tabs__filter}>
                    <button className={styles.tabs__filters_btn}>Shared</button>
                    <button className={styles.tabs__filters_btn}>
                      Missing
                    </button>
                    <button className={styles.tabs__filters_btn}>Weak</button>
                    <button className={styles.tabs__filters_btn}>Strong</button>
                    <button className={styles.tabs__filters_btn}>
                      Untapped
                    </button>
                    <button className={styles.tabs__filters_btn}>Unique</button>
                    <button className={styles.tabs__filters_btn}>All</button>
                  </div>
                </div>

                <div className={styles.top__insight_overview_right}>
                  <button className={styles.export__itemsbox}>
                    <span>
                      <TfiExport />
                    </span>{' '}
                    Export
                  </button>
                </div>
              </div>

              <div className={styles.insight_overview__middle__feature}>
                <table className={styles.insight_table__data_cont}>
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" className={styles.checkbox} />
                      </th>
                      <th>Keyword</th>
                      <th>intent</th>
                      <th>Seed keyword</th>
                      <th>Volume</th>
                      <th>trend</th>
                      <th>keyword difficulty</th>
                      <th>cpc(USD)</th>
                      <th>Competitive density</th>
                      <th>SERP</th>
                      <th>Click Potetial</th>
                      <th>Top Competitor</th>
                      <th>Last Update</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" className={styles.checkbox} />
                      </td>
                      <td>
                        <span className={styles.country_flag}>countryflag</span>{' '}
                        www.shanehomes.com
                      </td>
                      <td>
                        <span>n/a</span>
                      </td>
                      <td>
                        <span>-</span>
                      </td>
                      <td>
                        <span>20</span>
                      </td>
                      <td>
                        <span className={styles.graph}>n/a</span>
                      </td>
                      <td>
                        <span>n/a</span>{' '}
                        <span className={styles.highlight_color}></span>
                      </td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>No</td>
                      <td>Needs updating</td>
                      <td>Needs updating</td>
                      <td>7 hour ago</td>
                      <td>
                        <button className={styles.delete__row}>
                          <span>
                            <AiOutlineDelete />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className={styles.checkbox} />
                      </td>
                      <td>
                        <span className={styles.country_flag}>countryflag</span>{' '}
                        www.shanehomes.com
                      </td>
                      <td>
                        <span>n/a</span>
                      </td>
                      <td>
                        <span>-</span>
                      </td>
                      <td>
                        <span>20</span>
                      </td>
                      <td>
                        <span className={styles.graph}>n/a</span>
                      </td>
                      <td>
                        <span>n/a</span>{' '}
                        <span className={styles.highlight_color}></span>
                      </td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>No</td>
                      <td>Needs updating</td>
                      <td>Needs updating</td>
                      <td>7 hour ago</td>
                      <td>
                        <button className={styles.delete__row}>
                          <span>
                            <AiOutlineDelete />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className={styles.checkbox} />
                      </td>
                      <td>
                        <span className={styles.country_flag}>countryflag</span>{' '}
                        www.shanehomes.com
                      </td>
                      <td>
                        <span>n/a</span>
                      </td>
                      <td>
                        <span>-</span>
                      </td>
                      <td>
                        <span>20</span>
                      </td>
                      <td>
                        <span className={styles.graph}>n/a</span>
                      </td>
                      <td>
                        <span>n/a</span>{' '}
                        <span className={styles.highlight_color}></span>
                      </td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>No</td>
                      <td>Needs updating</td>
                      <td>Needs updating</td>
                      <td>7 hour ago</td>
                      <td>
                        <button className={styles.delete__row}>
                          <span>
                            <AiOutlineDelete />
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.insight__overview__bottom}>
                <span className={styles.bottom__title}>Page:</span>
                <ul className={styles.pagination__wrap__box}>
                  <li className={styles.pagination__list_page_number}>1</li>
                </ul>
                <span className={styles.bottom__title}>
                  of <span className={styles.number_of_page}>1</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default overview;
