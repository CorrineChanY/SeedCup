/**
 * 种子杯网站首页
 * @file seed.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React from 'react'
import { Link } from 'react-router-dom'
import seedlogo from "../../img/seedlogo.png"
import "../seed/seed.css"

class Seed extends React.Component{
    render() {
        return(
            <div className="main-banner">
                <Nav />
                <Banner />
                <img src={seedlogo} alt="seedlogo" style={{position: "absolute", left: "20px", top: "15px"}}/>
                {/* <div className="row">
                    <div className="container contenter">
                        <ul className="tabs" style={{width:"105%"}}>
                            <li className="tab col s2 taber"><a href="#head1">大赛首页</a></li>
                            <li className="tab col s2 taber"><a href="#publish">比赛信息</a></li>
                            <li className="tab col s2 taber"><a href="#lister">排行榜</a></li>
                            <li className="tab col s2 taber"><a href="#percenter">我的队伍</a></li>
                            <li className="tab col s2 taber"><a href="#playback">赛局回放</a></li>
                        </ul>
                    </div>
                </div> */}
                <h1 style={{position: "relative"}}>This is Index Page!</h1>
                
                {this.props.children}
            </div>
        )
    }
};

class Nav extends React.Component{
    render() {
        return(
            <div>
                <nav style={{backgroundColor:"black"}} className="nav">
                    <ul>
                        <li style={{position: "relative", top: "25px", cursor: "pointer", float: "right"}}>
                            <Link to="/signin" style={{color:"white"}}>
                                sign in
                            </Link>
                        </li>
                        <li style={{position: "relative", top: "40px", right: "0"}}>
                            <Link to="/signup" style={{color:"white"}}>
                                sign up
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

class Banner extends React.Component{
    render() {
        return(
            <div className="containtent">
                <Link to="">
                    <button className="btn-large join-button">
                        试题下载
                    </button>
                </Link>

                <Link to="">
                    <button>
                        提交结果
                    </button>
                </Link>
            </div>
        )
    }
}


export default Seed;