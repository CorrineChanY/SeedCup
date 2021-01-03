/**
 * 注册界面
 * @file signup.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React from 'react'
import "../signup/signup.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
let base = "/api";
let userinfo={
    teamname:"",
    School:"",
    classMax:"",
    name:"",
    department:"",
    class1:"",
    verCode:"",
    telnumber:0,
    email:"",
    password:"",
    allmem:[],
    groupinfo:"",
    member:[],
    alert:{title:"标题",txt:"我是文本"},
}
function get(userinfo){
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
function post(userinfo){
   // axios.post('http://localhost:3000/post',{"title":"json-server3"})
    axios({
        url:'/post',
        methods:'post',
        data:{"title":"json-server3"}
          
    })
    .then(response => {
        console.log('/posts post',response.data)
    })
}
class SignUp extends React.Component{
render() {
    return(
        <div className="content">
        <div className="head">        
        <h style={{fontSize: "35px"}}>微派·种子杯 </h>
        <font  style={{fontSize:"35px", color:"rgb(50,187,255)"}}>|</font>
        <small style={{fontSize: "20px"}}>软件编程PK赛报名表</small>

            </div>
            <br /><br/><br/>
            <br/><br/><br/>

                <form>
                    <div className="captain">
                        <div className= "groupinfo" style={{height:"65px"}}>参赛者信息</div>
                        <br />
                        <br />
                        <label>姓名</label>
                        <br />
                        <input type="text" placeholder=""></input>
                        <br />
                        <br />
                        <label>所在院系</label>
                        <br />
                        <input type="text" placeholder=""></input>
                        <br />
                        <br />
                        <label>专业班级</label>
                        <br />
                        <input type="text" placeholder=""></input>
                        <br />
                        <br />
                        <div style={{display:"flex"}}>
                            <div style={{flex:"1"}}>
                                <label>移动电话</label>
                                <br />
                                <input type="text" placeholder="" className="phone"></input>
                                <span className="phoneinfo">phone number is wrong</span>
                            </div>
                            <button className="inputafterinfo" id="vcodeget" type="button">获取验证码</button>
                        </div>
                        <br />
                        <label>验证码</label>
                        <br />
                        <input type="text" placeholder=""></input>
                        <br />
                        <br />
                        <label >Email</label>
                        <br />
                        <input type="text" placeholder="" className="email"></input>
                        <span className="emailinfo">email is wrong</span>
                        <br />
                        <br />
                        <label>密码</label>
                        <br />
                        <input type="password" placeholder="" id="password"></input>
                        <br />
                        <br />
                        <label>确认密码</label>
                        <br />
                        <input type="password" placeholder="" id="confpassword"></input>
                        <small color="red" style={{display:"none"}} id="gg"q>*两次密码输入要一样哦 (´・ω・`)  </small>
                    </div>

                    <div className="allmem">
                        
                    
                    </div>             
                    <br /><br /><br />
                    
                    <br /><br /><br />
                    {/* <span> */}
                    {/* <a href="/#/index" type="button" style={{color:"white", textDecoration:"none"}}>确认提交</a></span> */}
                    <Link to="/index">
                        <button 
                        style={{position:"inherit"}} 
                        className="inputafterinfo"
                        >
                            
                            确认提交
                        </button>
                    </Link>

                    {/* <button  */}
                    {/* className="submitinfo"  */}
                    {/* type="button">确认提交</button> */}
                </form>
                        

            </div>
        )
    }
}

export default SignUp;