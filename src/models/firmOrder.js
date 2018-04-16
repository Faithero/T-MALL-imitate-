import React from 'react';
import { connect } from 'dva';
import 'antd/dist/antd.css'
import { Row, Col, Input } from 'antd';
import { Link } from 'dva/router';
import styles from './firmOrder.less';
import {Checkbox} from 'antd-mobile';
import 'antd-mobile/lib/stepper/style/css';
class firmOrder extends React.Component {
  render() {
    return (
      <div>
        <Link to="shippingAddress">
        <div className={styles.header}>
          <Row>
            <Col span={2}> <img src={require("../assets/images/确认订单/u796.png")} alt=""/></Col>
            <Col span={20}className={styles.deliveryAddress}>
              <span>收货人：南墙先生 &nbsp;&nbsp;18582315229</span>
              <span className={styles.textss}>收货地址：福建厦门思明莲前软件园二期望海路</span>
              <span className={styles.colora}>（收货不便时，可选择免费代收服务）</span></Col>
            <Col span={2}> <img src={require("../assets/images/确认订单/u797.png")} alt=""/>
         </Col>
          </Row>
        </div></Link>
        <div className={styles.body}>

          <div className={styles.storeName}><p>墨刀服饰旗舰店</p></div>
          <Link to="goods">
          <Row style={{height:'90px',color:'black'}}>
            <Col span={6}> <img src={require("../assets/images/购物车/u237.png")} alt=""/></Col>
            <Col span={16} style={{display:'flex',flexDirection:'column'}}>
        <span>2件装夏季潮流青年圆领T恤</span>
         <span>纯色V领半袖T恤打底</span>
         <span>颜色:自由组合；尺码：170/M</span>
          <span className={styles.colorb}>七天退换</span>
        </Col>
            <Col span={2}>
              66￥
              <p>
                × 1
              </p></Col>
          </Row>
          </Link>
        </div>
        <Row className={styles.newsList}>
          <Col span={6}> 配送方式</Col>
          <Col span={16}><span>快递免邮</span></Col>
          <Col span={2}><img src={require("../assets/images/确认订单/u797.png")} alt=""/></Col>
        </Row>
        <Row className={styles.newsList}>
          <Col span={6}> 运费险</Col>
          <Col span={16}><span>卖家送，确认收货前退货可赔</span></Col>
          <Col span={2}><img src={require("../assets/images/确认订单/u797.png")} alt=""/></Col>
        </Row>
        <Row className={styles.newsList}>
          <Col span={6}>买家留言：</Col>
          <Col span={16}><Input placeholder="选填：对本次交易的说明（建议写已...)"></Input></Col>
          <Col span={2}><img src={require("../assets/images/确认订单/u797.png")} alt=""/></Col>
        </Row>
        <div className={styles.Total}>
          <div className={styles.TotalA}>
            共计1件商品 &nbsp;&nbsp;小计：<span>￥ 66.00</span></div>
        </div>
        <div className={styles.footer}>
          <Row>
            <Col span={2} style={{lineHeight:'60px'}}>
              <Checkbox></Checkbox>
            </Col>
            <Col span={2} style={{lineHeight:'60px'}}>
              全选
            </Col>
            <Col span={14} style={{display:'flex',flexDirection:'column',paddingTop:'10px'}}>
              <span>合计：￥ 66.00  元</span>
              <span>已优惠：0 金额说明 ></span></Col>
            <Col span={6}>
              <div className={styles.layout1}> <Link to="firmOrder"> <span>提交订单</span></Link></div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
 }
firmOrder.propTypes = {
};

export default connect()(firmOrder);
