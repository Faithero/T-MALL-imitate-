import React from 'react';
import { connect } from 'dva';
import 'antd/dist/antd.css'
import { Row, Col, } from 'antd';
import { Link } from 'dva/router';
import styles from './shippingAddress.less';
import {Checkbox} from 'antd-mobile';
import 'antd-mobile/lib/stepper/style/css';
class shippingAddress extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.hello}>
          <div className={styles.header}>
            <Row>
              <Col span="20"> <span>请选择代收货服务&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={require("../assets/images/收货地址/u910.png")} alt=""/></span></Col>
              <Col span="4">
                <img src={require("../assets/images/确认订单/u797.png")} alt=""/>
          </Col>
            </Row>
          </div>
          <div className={styles.body}>
            <div className={styles.layout}>
              <Row>
                <Col span="6"><span >附近驿站</span>
                  <a style={{fontSize:'12px'}}>【推荐驿站】</a></Col>
                <Col span="16" >
                  <span className={styles.layout2}>距所选地址1032米</span>
                  <p>福建省厦门市思明区莲前街道明发城明发园物业旁中通快递</p></Col>
                <Col span="2" className={styles.layoutFirst}>  <Checkbox ></Checkbox></Col>
              </Row>
            </div>
            <div className={styles.layout1}>使用菜鸟驿站默认同意代收条例</div>
          </div>
          <hr style={{height: '5px',backgroundColor: 'gray'}}></hr>
            <div className={styles.waist}>
              <div className={styles.waistA}>
                <Row>
                  <Col span="22"><span >南墙先生</span><span style={{float:' right',paddingRight:'10px '}}>18583215229</span>
                    <p className={styles.textss}>福建省厦门市思明区莲前街道软件园二期望海路</p></Col>
                  <Col span="2" className={styles.layout-1}> <Checkbox ></Checkbox></Col>
                </Row>
              </div>
            </div>
            <div className={styles.footer}>新增收货地址
        </div>
        </div>
      </div>)}}
shippingAddress.propTypes = {
};

export default connect()(shippingAddress);
