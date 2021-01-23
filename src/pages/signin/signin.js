/**
 * 登陆界面
 * @file signin.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React, { useState } from 'react'
import "../signin/signin.css"
import signin from "../../img/signin.png"
import axios from "axios"
import interceptors from "../../interceptors"

const base = 'http://www.holdice.club:8087';


function SignIn() {

    const [usr, setUsr] = useState("");
    const [pass, setPass] = useState("");

    function handleUsrInput(e) {
        setUsr(e.target.value)
    }

    function handlePassInput(e) {
        setPass(e.target.value)
    }

    function logIn() {
        // 拦截器在interceptors.js
        axios.post(base + '/api/user/log_in', {
            username: usr,
            password: pass
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            console.log(response);
            if(response.data.code === "0" && response.data.message === "success"){
                alert("登陆成功！");
            }else{
                alert("登陆失败！");
            }
        })
        .catch(function (error) {
            // console.log(error);
            alert(error);
        });

        
    }

    

    // render() {
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
                            <input onInput={handleUsrInput} type="text" placeholder="请用手机号或邮箱登录" style={{width:"40%"}}></input>
                            <br />
                            <br />
                            <br />
                            <label>密码</label>
                            <br />
                           <input onInput={handlePassInput} type="password" style={{width:"40%"}}></input>
                            <br />
                            <span style={{position:"relative", left: "48%"}}><a href="/#/signup" style={{color:"white", textDecoration:"none"}}>sign up</a></span>
                        </form>

                        <br />
                        <br />
                    
                        <button type="button" className="submitinfo"
                        style={{
                            position:"absolute",
                            left:"10px"
                        }} 
                        onClick={logIn}>
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
    // }
};

export default SignIn;