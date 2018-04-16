import React from 'react';
import 'antd/dist/antd.css'
import { connect } from 'dva';
import { Row, Col,Input} from 'antd';
import { Link,Router } from 'dva/router';
import styles from './shoppingAart.less';
import Footer from '../components/Footer.js'
import 'antd/lib/input-number/style/css';
import { Toast,PullToRefresh,ListView, Button } from 'antd-mobile';
import 'antd-mobile/lib/pull-to-refresh/style/css';
import 'antd-mobile/lib/list-view/style/css';
import 'antd-mobile/lib/toast/style/css';
import { createHashHistory } from 'history'
const history = createHashHistory()
const list = [
  {
    checked: false,
    id: 1,
    val: 1,
    price: '66',
    quantity: 1
  },
  {
    checked: false,
    id: 2,
    val: 2,
    price: '67',
    quantity: 2
  },
  {
    checked: false,
    id: 3,
    val: 3,
    price: '68',
    quantity: 3
  },]

class shoppingAart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      checkStore:false,
      checkAll: false,
      checkArr:[],
      totalPrice:0,
      totalGoods:0,
    };
    this.Add = this.Add.bind(this);
    this.Sub = this.Sub.bind(this);
    this.submit = this.submit.bind(this);
    this.CheckAll = this.CheckAll.bind(this);
    this.changeBox = this.changeBox.bind(this);
    this.CheckStore = this.CheckStore.bind(this);
  }
  Add = (event) => {
    let num = this.state.list[event.target.value].quantity ;
    console.log(num)
    if(10>num){
      this.state.list[event.target.value].quantity++;
      console.log(this.state.list);
      this.setState({ list: this.state.list });
      this.TotalPrice();
    }
  }
  Sub = (event) => {
    let num = this.state.list[event.target.value].quantity;
    console.log(num)
   if(num>1){
     let quantity = this.state.list[event.target.value].quantity --;
     this.setState({ list: this.state.list });
     this.TotalPrice();
   }
  }
  submit=()=>{
    if(this.state.totalGoods>0) {
      history.push('/firmOrder')
    }
    else {
      Toast.info('您还没有选择商品呢 亲 !', 1);
    }
  }
  CheckAll = (event) => {
    for (var i = 0; i < this.state.list.length; i++) {
      this.state.checkAll = !event;
      var newList = this.state.list.map((item) => item.checked = !event);
      this.setState({ list: this.state.list });
    }
    this.TotalPrice();
  }
  changeBox= (data) => {
    console.log(data.i)
    var index = data.i;
    this.state.list[index].checked = !this.state.list[index].checked ;
    this.TotalPrice();
  }
  CheckStore= (event) => {
    console.log(event)
    for (var i = 0; i < this.state.list.length; i++) {
      console.log(this.state.list[i].checked)
      this.state.list[i].checked = !this.state.checkStore
      this.state.checkStore ? this.state.totalPrice=0: this.state.totalPrice += this.state.list[i].price * this.state.list[i].quantity
    }
    if(this.state.checkStore===true){
      this.state.totalGoods=0
    }else {
      this.state.totalGoods =this.state.list.length
    }
  }
  TotalPrice=()=>{
      let total = 0;
      let count= 0;
      let totalQuantity=0
      this.state.list.forEach((item) => {
       if(item.checked){
          count++;
          total +=item.price * item.quantity;
         totalQuantity+=item.quantity
        }
     });
     count === this.state.list.length ? this.state.checkAll = true : this.state.checkAll = false;
     if(count>0){
       this.state.checkStore=true
     }else {
       this.state.checkStore=false
     }
     console.log(total);
    this.setState({ totalPrice : total});
    this.setState({ totalGoods : totalQuantity});
    this.setState({ checkAll : this.state.checkAll});
  }
  render(){
    return (
      <div>
        <div className={styles.hello}>
          <div className={styles.header}>
            <Row>
              <Col span={2}><Input type={'checkbox'} className={styles.checkBoxer}  checked={this.state.checkStore}
                                   onChange={() => this.CheckStore(this.state.checkStore)} ></Input></Col>
              <Col span={16}>墨刀服饰旗舰店</Col>
              <Col span={6}> <span className={styles.headerA}>领劵</span>编辑</Col>
            </Row>
        </div>
        <div className={styles.body}>
            {this.state.list.map((item,i)=>
            <Row style={{height:'150px',backgroundColor:'white',marginTop:'10px'}} key={i}>
              <Col span={2}style={{lineHeight:'150px'}}>
                <Input type={'checkbox'} className={styles.checkBoxer} checked={item.checked} value={item.checked} onChange={() => this.changeBox({i})}></Input></Col>
              <Col span={8}>  <img src={require("../assets/images/购物车/u237.png")} alt=""/></Col>
              <Col span={8} style={{paddingTop:'25px'}}>  <b>2件装夏季潮流青年圆领T恤</b>a
                <b>纯色V领半袖T恤打底</b>
                <p>颜色:自由组合；尺码：170/M</p></Col>
              <Col span={6} style={{paddingTop:'25px'}}>  <div className={styles.layoutPrice}>
                <span>{item.price}￥ *</span>
                <button size={'small'}style={{width:'60px'}} value={i} onClick={this.Add}>+</button>
                <Input type={'number'} style={{width:'60px',marginTop:'5px',marginBottom:'5px',textAlign:'center'}}  value={item.quantity} />
                <button size={'small'}style={{width:'60px'}}
                        onClick={this.Sub} value={i}>-</button>
              </div></Col>
            </Row>
            )}
  </div>
    <div className={styles.footer}>
      <Row>
        <Col span={2} style={{lineHeight:'60px'}}>
          <Input type={'checkbox'} value={this.state.checkAll} className={styles.checkBoxer} checked ={this.state.checkAll}
                 onChange={() => this.CheckAll(this.state.checkAll) }
          ></Input>
      </Col>
        <Col span={2} style={{lineHeight:'60px'}}>
          全选
        </Col>
        <Col span={14} style={{display:'flex',flexDirection:'column',paddingTop:'10px'}}>
          <span>合计：{this.state.totalPrice}  元</span>
        <span>已优惠：0 金额说明 ></span></Col>
        <Col span={6}>
          <div className={styles.layout1} onClick={this.submit}> 结算 ({this.state.totalGoods})</div>
  </Col>
  </Row>
  </div>
  </div>
      <Footer/>
      </div>
    )}}

shoppingAart.propTypes = {
};

export default connect()(shoppingAart);
