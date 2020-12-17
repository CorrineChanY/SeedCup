/**
 * 页面跳转
 * @file router.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React from 'react'
// import { render , Button} from 'react-dom'
import { Router, Route ,withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory';
import Seed from '../pages/seed/seed'
import SignIn from '../pages/signin/signin'
import SignUp from '../pages/signup/signup'

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
                    {/* export default withRouter(Rt); */}
                    <Link
                        to={{
                            pathname: '/index',
                            state: {  // 页面跳转要传递的数据，如下
                                
                            },
                        }}
                    >
                    <button>
                            点击跳转
                    </button>
                    </Link>
                </Router>
            </>
        )
    }
}
export default Rt;
