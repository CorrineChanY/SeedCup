/**
 * 种子杯网站首页
 * @file seed.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React from 'react'
import { Link } from 'react-router-dom'

class Seed extends React.Component{
    render() {
        return(
            <div>
                <h1>This is Index Page!</h1>
                <ul role="nav">
                    <li><Link to="/signin">sign in</Link></li>
                    <li><Link to="/signup">sign up</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
};

export default Seed;