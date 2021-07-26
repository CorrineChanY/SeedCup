/**
 * 页面跳转
 * @file router.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React from 'react'
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import Seed from '../pages/seed/seed'
import SignIn from '../pages/signin/signin'
import SignUp from '../pages/signup/signup'
import history from '../history';

class Rt extends React.Component{
    render() {
        return(
            <> 
              <Router history={history}>
                <Switch>
                  <Route path='/index' render={() => 
                    <Seed>
                      <Route exact path="/index" component={Seed}/>
                    </Seed>
                  }/>
                  <Route path='/signin' render={() => 
                    <SignIn>
                      <Route exact path="/signin" component={SignIn}/>
                    </SignIn>
                  }/>
                  <Route path='/signup' render={() => 
                    <SignUp>
                      <Route exact path="/signup" component={SignUp}/>
                    </SignUp>
                  }/>
                  <Redirect exact to="/index" from='/' />
                </Switch>
              </Router>
            </>
        )
    }
}
export default Rt;
