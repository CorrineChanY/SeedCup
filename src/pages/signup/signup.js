/**
 * 注册界面
 * @file signup.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React from 'react'
import "../signup/signup.css"

class SignUp extends React.Component{
    render() {
        return(
            <div className="content">
                <div className="head">        
                
                    <h style={{fontSize: "35px"}}>微派·种子杯 </h>
                    <font  style={{fontSize:"35px", color:"rgb(50,187,255)"}}>|</font>
                    <small style={{fontSize: "20px"}}>软件编程PK赛报名表</small>

                </div>
                <br />

                <form className="myform">
                    <div className="groupinfo" style={{height:"65px"}}>团队信息</div>
                    <br />
                    <br />
                    <label>团队名称</label>

                    <br />
                    <input type="input" placeholder=""></input>

                    <br />
                    <br />
                    <label>学校</label>
                    
                    <br />

                    <input type="input" placeholder=""></input>
                    <br />
                    <br />
                    <label>队伍最高年级</label>
                    <br />

                    <input type="input" placeholder=""></input>
                    <br /><br /><br />


                    <div className="captain">
                        <div className= "groupinfo" style={{height:"65px"}}>队长信息</div>
                        <br />
                        <br />
                        <label>姓名</label>
                        <br />
                        <input type="input" placeholder=""></input>
                        <br />
                        <br />
                        <label>所在院系</label>
                        <br />
                        <input type="input" placeholder=""></input>
                        <br />
                        <br />
                        <label>专业班级</label>
                        <br />
                        <input type="input" placeholder=""></input>
                        <br />
                        <br />
                        <div style={{display:"flex"}}>
                            <div style={{flex:"1"}}>
                                <label>移动电话</label>
                                <br />
                                <input type="input" placeholder="" className="phone"></input>
                                <span className="phoneinfo">phone number is wrong</span>
                            </div>
                            <button className="inputafterinfo" id="vcodeget" type="button">获取验证码</button>
                        </div>
                        <br />
                        <label>验证码</label>
                        <br />
                        <input type="input" placeholder=""></input>
                        <br />
                        <br />
                        <label >Email</label>
                        <br />
                        <input type="input" placeholder="" className="email"></input>
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

                    <br /><br /><br />
                    
                        <div className= "groupinfo" style={{height:"65px"}}>队员信息</div>
                        <small style={{position:"relative", top: "-50px", left:"180px", color: "rgb(145,145,148);"}}> 
                            *每个队伍最多三人，必须选出一个队长负责领导及任务划分（队员信息
                            <br />
                            中不包含队长）。
                        </small>

                        <br /><br /><br />




                    <div className="allmem">
                        
                    
                    </div>


                    <button class="addinfo" id="addmem" type="button"> 
                        添加队员

                    </button>                
                    <br /><br /><br />
                    <div className="groupinfo" style={{height:"65px"}}>
                        团队介绍
                    </div>
                    <small style={{position:"relative", top: "-50px", left:"180px", color: "rgb(145,145,148)"}}> 
                            *包括队员以往的竞赛经验以及获得的奖励，还可包括每个队员的特点介
                            <br />
                            绍，2020级新生占队里人数比例影响加分。
                    </small>
                    <textarea onmousedown="s(event,this)">
                        
                    </textarea>
                    <br /><br /><br />

                    <button className="submitinfo" type="button">确认提交</button>
                </form>
                        

            </div>
        )
    }
}

export default SignUp;