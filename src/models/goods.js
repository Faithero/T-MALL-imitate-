import React from 'react';
import { connect } from 'dva';
import 'antd/dist/antd.css'
import { Link } from 'dva/router';
import styles from './goods.less';
import { Row, Col, Input , Icon, Carousel,Button } from 'antd';
import { Modal, List,WhiteSpace,Toast, } from 'antd-mobile';
import 'antd-mobile/lib/modal/style/css';
import { createHashHistory } from 'history'
const history = createHashHistory()
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
class goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      quantity:1,
      ModolBottona:false,
      ModolBottonb:false,
      ModolBottonc:false,

    };
    this.Add = this.Add.bind(this);
    this.Sub = this.Sub.bind(this);
  }
  Add = (event) => {
    let num = this.state.quantity ;
    console.log(num)
    if(10>num){
      this.state.quantity++;
      console.log(this.state);
      this.setState({ list: this.state });
    }
  }
  Sub = (event) => {
    let num = this.state.quantity;
    console.log(num)
    if(num>1){
      let quantity = this.state.quantity --;
      this.setState({ list: this.state.list });
    }
  }
  onChecked= (event) =>{

  }

    showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,

    });
    Toast.info('已添加到购物车 !', 1);
  }
  onTurn= key => () =>{
    history.push('/firmOrder')
  }
    onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }
  render(){
    return (
      <div>
        <div className={styles.imgHeader}>
          <Carousel autoplay  >
            <div ><img className={styles.imgB} src={require("../assets/images/列表1/u237.png")} alt=""/></div>
            <div > <img className={styles.imgB} src={require("../assets/images/列表1/u239.png")} alt=""/></div>
          </Carousel>
        </div>
        <div className={styles.layout1}>
          <Row type="flex" justify="space-around">
            <Col span={20}> <div className={styles.layout1A}>
              <span>2件装夏季潮流青年圆领T恤纯色V领半</span>
              <span>袖体恤打底衫男士衣服潮流</span>
              <p>  <b>¥66</b><span className={styles.fontC}>买一送一</span></p>
              <p className={styles.fontG}>价格¥<span className={styles.lineT}>128</span></p>
            </div></Col>
            <Col span={2}><div className={styles.layout1B}>
              <img src={require("../assets/images/商品/u429.png")} alt=""/>
            </div></Col>
          </Row>
        </div>
        <Row className={styles.fontG} type="flex" justify="space-around">
          <Col span={8}>快递：0.00
          </Col>
          <Col span={8}>月销96969
          </Col>
          <Col span={6}>广东广州
          </Col>
        </Row>
        <div className={styles.layout2}>
          <Row>
            <Col span={18}>
              <div ><span className={styles.fontC}>天猫购物券</span><span>全天猫实物商品通用</span></div>
              <div style={{paddingTop:'5px'}}><span className={styles.fontC}>店铺优惠券</span><span>领取优惠券</span></div>
            </Col>
            <Col span={6}> <Button type="ghost" style={{marginTop: '5px'}}>确认</Button></Col>
          </Row>
        </div>
        <div className={styles.layout3}>
          <Row>
            <Col span={22}>  <span className={styles.fontC}>积分</span><span>购买可得34积分</span></Col>
            <Col span={2}> <img src={require("../assets/images/商品/u445.png")} alt=""/> </Col>
          </Row>
        </div>
        <div className={styles.container}>
          <Row>
            <Col span={6}>  <span>极速退货</span></Col>
            <Col span={6}>  <span>正品保证</span></Col>
            <Col span={6}>  <span>赠运费险</span></Col>
            <Col span={6}> <span>极速退款</span></Col>
          </Row>
          <span className={styles.fontD}>天猫无忧购</span>
          <span>为您的购物保驾护航</span>
        </div>
        <div className={styles.layout3}>
          <Row>
            <Col span={8}><span style={{ paddingLeft:'10px'
            }}>产品参数</span>
            </Col>
            <Col span={2} offset={14}> <img src={require("../assets/images/商品/u445.png")} alt=""/> </Col>
          </Row>
        </div>
        <div className={styles.layout3}>
          <Row>
            <Col span={10}><span style={{ paddingLeft:'10px'
            }}>选择颜色、尺码
            </span>
            </Col>
            <Col span={2} offset={12}> <img src={require("../assets/images/商品/u445.png")} alt=""/> </Col>
          </Row>
        </div>
<div className={styles.Reviews}>
  <p>商品评价（123456）</p>
  <ul>
    <li>不错（12）</li>
    <li> 追加（12）</li>
    <li>有图（12）</li>
  </ul>
  <ul>
    <li>  物流快（12）</li>
    <li>  很划算（12）</li>
    <li>  质量好（12）</li>
  </ul>
  <p>某某用户</p>
  <span style={{ textAlign:'left',display: 'inline-block'}}>如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够...
  </span>
  <Row type="flex" justify="space-around" className={styles.fontG}>
    <Col span={4}>2017.04.05</Col>
    <Col span={16}>颜色：自由组合；尺码175/M</Col>
  </Row>
</div>
        <div className={styles.allEvaluation}>  <Button>查看全部评价</Button></div>
        <div className={styles.FootGoods}>
          <div style={{width:'15%',textAlign:'center',border: 'solid 1px gray', display:'flex',flexDirection:'column'}}>
           <img src={require("../assets/images/商品/u480.png")} alt=""/>
            <span>客服</span></div>
          <div style={{width:'15%',textAlign:'center',border: 'solid 1px gray ', display:'flex',flexDirection:'column'}}>
             <img src={require("../assets/images/商品/u481.png")} alt=""/>
            进店</div>
          <div style={{width:'15%',textAlign:'center',border: 'solid 1px gray ', display:'flex',flexDirection:'column'}}>
             <img src={require("../assets/images/商品/u479.png")} alt=""/>
            收藏</div>
          <div style={{width:'25%',textAlign:'center',lineHeight:'50px', backgroundColor:'#F9AE0F' ,color:'white'}}
               onClick={this.showModal('modal2')}
          >加入购物车</div>
          <div style={{width:'30%',textAlign:'center',lineHeight:'50px', backgroundColor:'red',color:'white'}}  onClick={this.showModal('modal1')}>立即购买</div>
        </div>
        <WhiteSpace />
        <Modal
          popup
          visible={this.state.modal1}
          onClose={this.onClose('modal1')}
          animationType="slide-up"
        >
          <div  className={styles.ModolFoot} >
            <Row type="flex" justify="space-around">
              <Col span={5}><img src={require("../assets/images/商品/u489.png")} alt=""/></Col>
              <Col span={17} style={{display:'flex',flexDirection:'column',  fontSize: '12px',paddingTop:'40px'}} >
                < span>¥66</span>
                <span>库存1234件</span>
                <span>已选：“自由组合”“170/M”</span>
              </Col>
            </Row>
            <div  style={{paddingTop:'20px'}}><span>尺码</span>
              <Row type="flex" justify="space-around">
                <Col span={6}>   <div className={styles.ModolBotton1}>170/M</div></Col>
                <Col span={6}>    <div className={styles.ModolBotton2}>175/L</div></Col>
                <Col span={6}>        <div className={styles.ModolBotton2}>180/XL</div></Col>
              </Row>
            </div>
            <div style={{paddingTop:'20px'}}><span>颜色</span>
              <Row type="flex" justify="space-around">
                <Col span={6}>   <div className={styles.ModolBotton1}>自由组合</div></Col>
                <Col span={6}>   <div className={styles.ModolBotton2}>F-3黑色</div></Col>
                <Col span={6}>   <div className={styles.ModolBotton2}>F-3白色</div></Col>
              </Row>
            </div>
            <div className={styles.inputNum} >
              <Row type="flex" justify="space-around">
                <Col span={6}> 购买数量  </Col>
                <Col span={18}>
                  <Button size={'small'}className={styles.ModolBotton2}onClick={this.Add}>+</Button>
                  <Input type={'number'} style={{width:'40px',height:'30px',textAlign:'center'}}value={this.state.quantity} />
                  <Button size={'small'}className={styles.ModolBotton2}
                          onClick={this.Sub} >-</Button> </Col>
              </Row>
            </div>
            <div style={{width:'100',height:'60px',backgroundColor:'red',color:'white',lineHeight:'60px'}} onClick={this.onTurn('modal1')}>确定</div>
          </div>
        </Modal>
        <Modal
          popup
          visible={this.state.modal2}
          onClose={this.onClose('modal2')}
          animationType="slide-up"
        >
          <div  className={styles.ModolFoot} >
            <Row type="flex" justify="space-around">
              <Col span={5}><img src={require("../assets/images/商品/u489.png")} alt=""/></Col>
              <Col span={17} style={{display:'flex',flexDirection:'column',  fontSize: '12px',paddingTop:'40px'}} >
               < span>¥66</span>
                <span>库存1234件</span>
                <span>已选：“自由组合”“170/M”</span>
              </Col>
            </Row>
            <div  style={{paddingTop:'20px'}}><span>尺码</span>
              <Row type="flex" justify="space-around">
                <Col span={6}>   <div className={styles.ModolBotton1} value={this.state.ModolBottona} onChange={this.onChecked}>170/M</div></Col>
                <Col span={6}>    <div className={styles.ModolBotton2} value={this.state.ModolBottonb}>175/L</div></Col>
                <Col span={6}>        <div className={styles.ModolBotton2}value={this.state.ModolBottonc}>180/XL</div></Col>
              </Row>
            </div>
            <div style={{paddingTop:'20px'}}><span>颜色</span>
              <Row type="flex" justify="space-around">
                <Col span={6}>   <div className={styles.ModolBotton1}>自由组合</div></Col>
                <Col span={6}>   <div className={styles.ModolBotton2}>F-3黑色</div></Col>
                <Col span={6}>   <div className={styles.ModolBotton2}>F-3白色</div></Col>
              </Row>
            </div>
            <div className={styles.inputNum} >
              <Row type="flex" justify="space-around">
                <Col span={6}> 购买数量  </Col>
                <Col span={18}>
                  <Button size={'small'}className={styles.ModolBotton2}onClick={this.Add}>+</Button>
                  <Input type={'number'} style={{width:'40px',height:'30px',textAlign:'center'}}value={this.state.quantity} />
                  <Button size={'small'}className={styles.ModolBotton2}
                          onClick={this.Sub} >-</Button> </Col>
              </Row>
            </div>
            <div style={{width:'100',height:'60px',backgroundColor:'red',color:'white',lineHeight:'60px'}} onClick={this.onClose('modal2')}>确定</div>
          </div>
        </Modal>
      </div>)}}
goods.propTypes = {
};

export default connect()(goods);
