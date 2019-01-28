import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Layout from './hoc/layout';
import RegisterLogin from './components/authorisation';


const Routes = () => {
  return (

    <Layout>
      <Switch>
      <Route exact path="/" component= {Home} />
      <Route exact path="/register_login" component= {RegisterLogin} />
    </Switch>
    </Layout>
    
  )
}

export default Routes;
