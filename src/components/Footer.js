import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from '../routes/IndexPage.less';
function Footer(){
  return(
    <div>
      <div className={styles.footer}>
        <div >
          <img className={styles.footerA} src={require("../assets/images/首页/天猫图_u113.png")} alt=""/>
          <Link to="IndexPage"><h3 className={styles.Tcolor}>天猫</h3>></Link></div>
        <div>
          <img className={styles.footerA} src={require("../assets/images/首页/关注图_u107.png")} alt=""/>
          <h3>关注</h3></div>
        <div>
          <img className={styles.footerB}  src={require("../assets/images/首页/天猫直播图_u106.png")} alt=""/>
          <h3>天猫直播</h3></div>
        <div>
          <img className={styles.footerC}  src={require("../assets/images/首页/购物车图_u104.png")} alt=""/>
          <Link to="shoppingAart"> <h3>购物车</h3></Link></div>
        <div>
          <img src={require("../assets/images/首页/我图_u105.png")} alt=""/>
          <h3>我</h3></div>
      </div>
    </div>)}
Footer.propTypes = {
};

export default connect()(Footer);
