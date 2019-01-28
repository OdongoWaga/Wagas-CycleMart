import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Layout from './hoc/layout';
import RegisterLogin from './components/authorisation';
import Register from './components/authorisation/register';


const Routes = () => {
  return (

    <Layout>
      <Switch>
      <Route exact path="/" component= {Home} />
      <Route exact path="/register_login" component= {RegisterLogin} />
      <Route exact path="/register" component= {Register} />
    </Switch>
    </Layout>
    
  )
}

export default Routes;
