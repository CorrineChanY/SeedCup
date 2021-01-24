/**
 * 登陆界面
 * @file signin.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React,{useState} from 'react'
import "../signin/signin.css"
import signin from "../../img/signin.png"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';

const base='http://www.hodice.club:8087';
let signininfo={
    username:"",
    password:"",
    alert:{title:"标题",txt:"我是文本"}
}
//get
function get(signininfo)
{
    //axios.get('http://localhost:3000/post?id=1')
    axios({
        url:'/posts',
        param:{
            id:1
        }
    })
    .then(response => {
        console.log('/posts get',response.data)
    })
    .catch(error => {
        console.log('error',error.message)
    })
}
//post
function post(signinfo)
{
   // axios.post('http://localhost:3000/post',{"title":"json-server3"})
    axios({
        url:'/post',
        methods:'post',
        data:{"title":"json-server3"}
          
    })
    .then(response => {
        console.log('/posts post',response.data)
    })
    .catch(error=>{
        console.log('error',error.message)
    })
}
//submit
async function submit(signinfo){
    if(signininfo.info.username==""&&signininfo.info.password=="")
    {
        this.x_alert("请填写完整信息");
        return;
    }
    let res=await signininfo.post("/login_user/",signininfo.info);
    if (res.code == 0)
        window.location.href = '/index';
    else 
    this.x_alert("账号密码错误！");
}
/* x_alert: function (txt, title = "提示") {
     console.log("弹框")
    $('#alert').modal('close');
    this.Aalert.title = title;
    this.Aalert.txt = txt;
    setTimeout(() => $('#alert').modal('open'), 1000);
}*/

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
                    <Link to="/index">
                        <button type="button" className="submitinfo" href="/index"
                        style={{
                            position:"absolute",
                            left:"10px"
                        }}>
                            登录
                        </button>
                    </Link>
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