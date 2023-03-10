import React from 'react';
import styles from '../../analytics.module.css';


import { FiSearch } from 'react-icons/fi';
import {
    TfiAngleDown,
    TfiExport,
} from 'react-icons/tfi';
import { AiOutlineDelete } from 'react-icons/ai';

const FilterTabsSix = () => {
    return (
        <>
            <div className={styles.organic__insight_overview_tabs1}>
                {/* ============= */}
                <div className={styles.insight__overview__middlecont}>

                    <div className={styles.organicsearch__modal__insight__view}>
                        {/* ================ */}
                        <div className={styles.insight__overview__box}>
                            <div className={styles.insight__overview__top}>
                                <div className={styles.top__insight_overview_left__wrap}>
                                    <div className={styles.top__insight_overview_left}>
                                        <h6 className={styles.top__update__title}>
                                            <strong>Organic Subdomains</strong>
                                            <span className={styles.updates_number}> 1 - 1 (  1 )</span>
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.insight__overview__top}>
                                <div className={styles.top__insight_overview_left}>
                        
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
            </div>

        </>
    );
};

export default FilterTabsSix;
