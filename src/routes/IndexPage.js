import React from 'react';
import { connect } from 'dva';
import 'antd/dist/antd.css'
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import { Row, Col, Input , Icon, Carousel } from 'antd';
class IndexPage extends React.Component {
  render(){
  return (
    <div>
      <div className={styles.header}>
        <div className="gutter-example">
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box"><Icon type="camera" style={{fontSize: 34,marginLeft:'20px',color:'#f7f7f7'}}/></div>
            </Col>
            <Col className="gutter-row" span={16}>
              <Input placeholder="search"  prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)',widths:'100%',}} />}
              />
            </Col>
            <Col className="gutter-row" span={2} >
              <div className="gutter-box"><Icon type="message"style={{fontSize: 26,position:'absolute',color:'#f7f7f7'
              }} />
              <span className={styles.MessageBox} >
                3
              </span></div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.imgHeader}>
        <Carousel autoplay  >
          <div ><img className={styles.imgB} src={require("../assets/images/首页/u13.png")} alt=""/></div>
          <div > <img className={styles.imgB} src={require("../assets/images/首页/u14.png")} alt=""/></div>
          <div> <img className={styles.imgB} src={require("../assets/images/首页/u15.png")} alt=""/></div>
          <div ><img className={styles.imgB} src={require("../assets/images/首页/u16.png")} alt=""/></div>
        </Carousel>
      </div>

    <div>
      <div  className={styles.body}>
        <div className={styles.layout1Head}>
          <div className={styles.layout}>
          <Row className={styles.layoutIma}>
            <Col span={12}>
              <img src={require("../assets/images/首页/u22.png")} alt=""/>
            </Col>
            <Col span={12}>  <h1>大牌直降</h1> <h1>五亿优惠</h1></Col>
          </Row>
        </div>
          <div className={styles.layout1Aa} >
          <div>
            <div className={styles.layout1A}><span>积分</span></div>
            <p>积分乐园</p>
          </div>
          <div>
            <div  className={styles.layout1B}><span>充</span></div>
            <p>充值中心</p>
          </div>
          <div>
            <div className={styles.layout1C} ><span>进口</span></div>
            <p>天猫国际</p>
          </div>
          <div>
            <div className={styles.layout1D}><span>聚</span></div><p>聚划算</p>
          </div>
          <div>
            <div className={styles.layout1E} ><span>超市</span></div><p> 天猫超市</p>
          </div>
        </div>
          <div className={styles.layout1Aa} >
            <div>
              <div className={styles.layout1F} ><span>试</span></div><p>免费试用</p>
            </div>
            <div>
              <div  className={styles.layout1G}><span>尤物</span></div><div className={styles.layout1Gg} ><p>尤物</p></div>
            </div>
            <div>
              <div className={styles.layout1H}><span>FANS</span></div><p className={styles.layout1Hh}>&nbsp;&nbsp;&nbsp;粉丝趴</p>
            </div>
            <div>
              <div className={styles.layout1I}><span>鲜</span></div><p>&nbsp;健康生鲜</p>
            </div>
            <div>
              <div  className={styles.layout1J}><span><Icon type="menu-unfold" /></span></div><p>&nbsp;&nbsp;分类</p>
            </div>
          </div>
          <div className={styles.layout2}>
            <img src={require("../assets/images/首页/QQ截图20180102112655.png")} alt=""/>
          </div>
        </div>
        <div className={styles.layout3}>
          <Row>
            <Col  span={6}><h3>天猫</h3><h3 style={{color:'#e60012'}}>热点</h3></Col>
            <Col  span={18}> <div className={styles.wrap}>
              <div className={styles.content}>
                <p><span>换新黄金周-手机会场</span><span className={styles.content1}>抢手机优惠券，12期免息</span></p>
                <p><span>12家品牌联合献礼&nbsp; 萌娃出游新攻略</span><span className={styles.content1}>满送出游礼包&nbsp; 跨店满500送100</span></p>
              </div>
            </div></Col>
          </Row>
          <p></p>
          <Row className={styles.contentA}>
            <Col  span={6}><h3>智能生活</h3><h3 style={{color:'#ff9800'}}><p>不仅仅是逼格</p></h3></Col>
            <Col  span={6}>
              <img src={require("../assets/images/首页/u73.png")} alt=""/>
         </Col>
            <Col  span={6}><h3>夏季首降</h3><h3 style={{color:'#ff9800'}}>时尚尖货</h3></Col>
            <Col  span={6}>
              <img src={require("../assets/images/首页/u74.png")} alt=""/>
        </Col>
          </Row>
        </div>
        <div className={styles.layout4}>
          <img src={require("../assets/images/首页/u75.png")} alt=""/>
          <p>必抢</p></div>
        <div className={styles.layout5}>
          <Row>
            <Col  span={6}><h3>今日必抢</h3>
              <img src={require("../assets/images/首页/u87.png")} alt=""/>
            </Col>
            <Col span={6}><h3>趋势榜</h3>
              <img src={require("../assets/images/首页/u88.png")} alt=""/>
              </Col>
            <Col  span={6}><h3>进口必抢</h3>
              <img src={require("../assets/images/首页/u89.png")} alt=""/>
            </Col>
            <Col  span={6}><h3>巨超值</h3>
              <img src={require("../assets/images/首页/u90.png")} alt=""/>
         </Col>
          </Row>
        </div>
        <div className={styles.layout6}><p>潮流时尚</p></div>
        <div className={styles.layout7}>
          <Row>
            <Col  span={8}><h3>天猫女装</h3>
              <img src={require("../assets/images/首页/u96.png")} alt=""/>
          </Col>
            <Col span={8}><h3>天猫女装</h3>
              <img src={require("../assets/images/首页/u96.png")} alt=""/>
           </Col>
            <Col span={8}><h3>天猫女装</h3>
              <img src={require("../assets/images/首页/u96.png")} alt=""/>
       </Col>
          </Row>
        </div>
      </div>
      <div className={styles.layout8}>  <p>点击加载更多</p></div>
    </div>
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
    </div>
  );}
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
