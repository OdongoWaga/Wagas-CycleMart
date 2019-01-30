import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Layout from './hoc/layout';
import RegisterLogin from './components/authorisation';
import Register from './components/authorisation/register';
import Auth from './hoc/auth';
import Shop from './components/Shop';
import AddProduct from './components/User/Admin/add_product';
import ProductPage from './components/Product';
import ManageCategories from './components/User/Admin/manage_categories';

import UserDashboard from './components/User'
import UserCart from './components/User/cart';


const Routes = () => {
  return (

    <Layout>
      <Switch>
      <Route path="/user/dashboard" exact component={Auth(UserDashboard,true)}/>
      <Route path="/admin/manage_categories" exact component={Auth(ManageCategories,true)}/>

      <Route path="/user/cart" exact component={Auth(UserCart,true)}/>
      <Route path="/admin/add_product" exact component={Auth(AddProduct,true)}/>
        <Route path="/register" exact component={Auth(Register,false)}/>
        <Route path="/register_login" exact component={Auth(RegisterLogin,false)}/>
        <Route path="/" exact component={Auth(Home,null)}/>
        <Route path="/" exact component={Auth(Shop,null)}/>
        <Route path="/product_detail/:id" exact component={Auth(ProductPage,null)}/>


    </Switch>
    </Layout>
    
  )
}

export default Routes;
