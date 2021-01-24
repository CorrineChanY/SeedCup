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
import interceptors from "../../interceptors"

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
    
    /**
     * 手机号是否合法 + value是否为`string`
     * 如果不合法，需要alert提示（或者在页面上显示，这样更友好，但是我不会），并清空输入框
     * 同一手机号90s内不能重复
     */
    getCaptcha = () => {
        // console.log('phone: '+this.state.phone);
        if(this.checkPhone(this.state.phone) !== 1 ){
            alert("请输入正确的手机号!");
            this.setState({
                phone: ""
            })
            this.myInput.focus()
            return;
        }

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

    /* 验证手机号 */
    checkPhone(value) {
        // var regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/; 
        var regex = /^1[3458]\d{9}$/; 
        if (value) {
            // react使用正则表达式变量的test方法进行校验
            // 直接使用value.match(regex)显示match未定义
            if (regex.test(value)) { 
                // callback();
                return 1;
            } else { 
                // callback('请输入正确的手机号码！');
                return 0;
            }
        } else {
            // 这里的callback函数会报错
            return 100;
        }
    }

    /**
     * 1. 验证码是否正确
     * 2. 是否有重复字段
     * 3. 
     */
    handleSubmit = () => {
        axios.post(
            base + '/api/user/sign_up',
            this.state, {
                headers: "application/json"
            }
        )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
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
                        {/*method="post" action={base + '/api/user/sign_up'} name="register" encType="application/json" target="/index"*/}
                        <form > 
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
                                        <input type="text" placeholder="" className="phone" onInput={this.handlePhoneInput} ref={myInput=>this.myInput=myInput}></input>
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

                            {/*用form表单post的时候才用这个button*/}
                            {/* <button type="submit" style={{position:"inherit"}} className="inputafterinfo">
                                提交
                            </button>   */}

                            <button className="submitinfo" onClick={this.handleSubmit}>
                                确认提交
                            </button>
                        </form>
                                

            </div>
        )
    }
}

export default SignUp;