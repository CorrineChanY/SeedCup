/**
 * 页面跳转
 * @file router.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import index from './modules/index'
import signIn from './modules/signIn'
import signUp from './modules/signUp'

render((
    <Router history={hashHistory}>
        <Route path="/index" component={index}/>
        <Route path="/signin" component={signIn}/>
        <Route path="/signup" component={signUp}/>
    </Router>
), document.getElementById('app'));