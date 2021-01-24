/**
 * 注册界面
 * @file signup.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import React from 'react'
import { Link } from 'react-router-dom'
import "../signup/signup.css"
import axios from 'axios'
// import Qs from 'qs'
        // this.getCaptcha = this.getCaptcha.bind(this);
        // ,{
        //     paramsSerializer: function(params) {
        //         return Qs.stringify(params, {indices: false})
        //     },
        // }
const base = 'http://www.holdice.club:8087';

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            psw: "", // 密码
            school: "",
            college: "", // 学院
            class: "", // 班级
            phone: "",
            captcha: "", //验证码
            email: ""
        };

        this.handleUsrnameInput = this.handleUsrnameInput.bind(this);
        this.handleSchoolInput = this.handleSchoolInput.bind(this);
        this.handleCollegeInput = this.handleClassInput.bind(this);
        this.handleClassInput = this.handleClassInput.bind(this);
        this.handlePhoneInput = this.handlePhoneInput.bind(this); 
        this.handleCaptchaInput = this.handleCaptchaInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePswInput = this.handlePswInput.bind(this);
    }
    
    
    getCaptcha = () => {
        console.log('phone'+this.state.phone);

        axios.get(base + '/api/sms/send_captcha', {
            params:{
                phoneNumber: this.state.phone
            }
        })
        .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })

    }

    handleUsrnameInput(e) {
        this.setState({
            user: e.target.value
        })
        // console.log(this.state);
    }

    handleSchoolInput(e) {
        this.setState({
            school: e.target.value
        })
    }

    handleCollegeInput(e) {
        this.setState({
            college: e.target.value
        })
    }

    handleClassInput(e) {
            this.setState({
                class: e.target.value
            })
    }

    handlePhoneInput(e) {
        this.setState({
            phone: e.target.value
        });
        // console.log(this.state.phone);
    }

    handleCaptchaInput(e) {
        this.setState({
            captcha: e.target.value
        })
    }

    handleEmailInput(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePswInput(e) {
        this.setState({
            psw: e.target.value
        })
    }

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

                        <form method="post" action={base + '/api/user/sign_up'} name="register" encType="application/json" target="/index">
                            <div className="captain">
                                <div className= "groupinfo" style={{height:"65px"}}>参赛者信息</div>
                                <br />
                                <br />
                                <label>姓名</label>
                                <br />
                                <input type="text" placeholder="" onInput={this.handleUsrnameInput}></input>
                                <br />
                                <br />
                                <label>学校</label>
                                <br />
                                <input type="text" placeholder="" onInput={this.handleSchoolInput}></input>
                                <br />
                                <br />
                                <label>所在院系</label>
                                <br />
                                <input type="text" placeholder="" onInput={this.handleCollegeInput}></input>
                                <br />
                                <br />
                                <label>专业班级</label>
                                <br />
                                <input type="text" placeholder="" onInput={this.handleClassInput}></input>
                                <br />
                                <br />
                                <div style={{display:"flex"}}>
                                    <div style={{flex:"1"}}>
                                        <label>移动电话</label>
                                        <br />
                                        <input type="text" placeholder="" className="phone" onInput={this.handlePhoneInput}></input>
                                        <span className="phoneinfo">phone number is wrong</span>
                                    </div>
                                    <button className="inputafterinfo" id="vcodeget" type="button" onClick={this.getCaptcha}>获取验证码</button>
                                </div>
                                <br />
                                <label>验证码</label>
                                <br />
                                <input type="text" placeholder="" onInput={this.handleCaptchaInput}></input>
                                <br />
                                <br />
                                <label >Email</label>
                                <br />
                                <input type="text" placeholder="" className="email" onInput={this.handleEmailInput}></input>
                                <span className="emailinfo">email is wrong</span>
                                <br />
                                <br />
                                <label>密码</label>
                                <br />
                                <input type="password" placeholder="" id="password" onInput={this.handlePswInput}></input>
                                <br />
                                <br />
                                <label>确认密码</label>
                                <br />
                                <input type="password" placeholder="" id="confpassword"></input>
                                <small color="red" style={{display:"none"}} id="gg">*两次密码输入要一样哦 (´・ω・`)  </small>
                            </div>

                            <div className="allmem">
                                
                            
                            </div>             
                            <br /><br /><br />
                            
                            <br /><br /><br />
                            {/* <span> */}
                            {/* <a href="/#/index" type="button" style={{color:"white", textDecoration:"none"}}>确认提交</a></span> */}
                            {/* <Link to="/index">
                                <button 
                                style={{position:"inherit"}} 
                                className="inputafterinfo"
                                >
                                    确认提交
                                </button>
                            </Link> */}

                            <button type="submit" style={{position:"inherit"}} className="inputafterinfo">
                                提交
                            </button>  

                            {/* <input type="submit" defaultValue="提交"/> */}
                            {/* <button  */}
                            {/* className="submitinfo"  */}
                            {/* type="button">确认提交</button> */}
                        </form>
                                

            </div>
        )
    }
}

export default SignUp;