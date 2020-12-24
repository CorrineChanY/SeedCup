/**
 * 登陆界面
 * @file signin.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React from 'react'
import "../signin/signin.css"
import signin from "../../img/signin.png"

class SignIn extends React.Component{
    render() {
        return(
            <div className="maintain">
                <div className="pdleft">
                    <div className="login">
                        <font style={{fontSize: "18px"}}>微派·种子杯</font>
                        <font  style={{fontSize: "18px", color:"rgb(50,187,255)"}}>|</font>
                        <small style={{fontSize: "12px"}}>软件编程PK赛</small>
                        
                        <br /><br /><br />

                        <font style={{color:"white", fontSize: "2.5em"}}>登录</font>

                        <br /><br />
                        <form>
                            <label>用户名</label>
                            <br />
                            <input type="text" placeholder="请用手机号登录" style={{width:"40%"}}></input>
                            <br />
                            <br />
                            <br />
                            <label>密码</label>
                            <br />
                           <input type="password" style={{width:"40%"}}></input>
                            <br />
                            <span style={{position:"relative", left: "48%"}}><a href="/#/signup" style={{color:"white", textDecoration:"none"}}>sign up</a></span>
                        </form>

                        <br />
                        <br />
                    
                        <button type="button" className="submitinfo"
                        style={{
                            position:"absolute",
                            left:"10px"
                        }}>
                            登录
                        </button>
                    </div>
                    
                    
                </div>
                <style type="text/css"></style>
                <div className="pdright"
                style={{
                    position:"absolute",
                    top:"-100px"
                }}>
                    <img 
                    className="picinfo" 
                    src={signin} 
                    alt="picinfo" 
                    style={{
                        position:"relative",
                    left:"50px",
                    top:"100px"}}
                    />
                </div>
        </div>
        )
    }
};

export default SignIn;