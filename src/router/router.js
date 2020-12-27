/**
 * 页面跳转
 * @file router.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React from 'react'
// import { render , Button} from 'react-dom'
import { Router, Route, Link } from 'react-router-dom'
import { createHashHistory } from 'history';
import Seed from '../pages/seed/seed'
import SignIn from '../pages/signin/signin'
import SignUp from '../pages/signup/signup'
import App from "../App"

const hashHistory = createHashHistory();

class Rt extends React.Component{
    render() {
        return(
            <> 
                {/* <button onClick={() => {this.props.history.push("/index")}}>
                    seedcup //为什么说push()是undefined?
                </button> */}
                
                <Router history={hashHistory}>
                    <Route path="/index" component={Seed}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    {/* <Route path="/" component={App}/> */}
                    {/* <Route path="/download_doc" component={Download_btn}/> */}

                    <Link to="/index">
                        <button className="btn-large join-button">
                            index
                        </button>
                    </Link>
                </Router>
            </>
        )
    }
}
export default Rt;
