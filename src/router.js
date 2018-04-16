import React from 'react';
import products from './routes/Products';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import shoppingAart from './models/shoppingAart';
import firmOrder from './models/firmOrder';
import shippingAddress from './models/shippingAddress';
import goods from './models/goods';
import demo from './models/demo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/IndexPage" exact component={IndexPage} />
        <Route path="/shoppingAart" exact component={shoppingAart} />
        <Route path="/firmOrder" exact component={firmOrder} />
        <Route path="/products" exact component={products} />
        <Route path="/shippingAddress" exact component={shippingAddress} />
        <Route path="/goods" exact component={goods} />
        <Route path="/demo" exact component={demo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
