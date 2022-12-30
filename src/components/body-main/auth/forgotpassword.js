import React from 'react'
import styles from './auth.module.css';
import shapeImg3 from '../../../assets/img/gradient-shape3.png'
import shapeImg4 from '../../../assets/img/gradient-shape4.png'
import brandLogo from '../../../assets/img/Searchify-logo.png'
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { CiLock } from "react-icons/ci";

const ForgotPassword = () => {
    return (
        <div className={styles.app_auth_wrapper}>
            <img className={styles.app_shape_img} src={shapeImg3} alt={shapeImg3} />
            <img className={styles.app_shape_img4} src={shapeImg4} alt={shapeImg4} />
            <div className={styles.app_auth_contbox}>
                <div className={styles.app_auth__form_contbox}>
                    <div className={styles.app_auth__bandlogo}>
                        <img src={brandLogo} alt={brandLogo} width={'90px'} />
                    </div>
                    <div className={styles.app_auth_formbox}>
                        <h2 className={styles.app_auth_form_title}>Update Your Password</h2>
                        <form className={styles.app_auth_form} action="" method="post">
                            <div className={styles.app_auth_form_group}>
                                <div className={styles.app_gradient_box}>
                                    <div className={styles.app_auth_iconbox}>
                                    <span className={styles.app_auth_form_icon}><CiLock/></span>
                                        <span className={styles.app_auth_form_icon}><AiOutlineEyeInvisible/></span>
                                    </div>
                                    <input className={styles.app_auth_inputfild} type="password" name="password" placeholder="Enter New Password" />
                                </div>
                            </div>
                            <div className={styles.app_auth_form_group}>
                                <div className={styles.app_gradient_box}>
                                    <div className={styles.app_auth_iconbox}>
                                    <span className={styles.app_auth_form_icon}><CiLock/></span>
                                        <span className={styles.app_auth_form_icon}><AiOutlineEyeInvisible/></span>
                                    </div>
                                    <input className={styles.app_auth_inputfild} type="password" name="password" placeholder="Enter New Confirm Password" />
                                </div>
                            </div>
                            <div className={styles.app_auth_btn_contbox}>
                                <div className={styles.app_auth_btnbox}>
                                    <input type="button" className={styles.app_auth_btn} name="button" value="Update" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword