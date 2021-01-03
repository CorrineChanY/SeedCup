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
//signup
async function signUp(userinfo){
    let info = {};
            info.group_name =this.teamname;
            info.college = this.School;
            info.level = this.classMax;
            info.captain_name = this.name;
            info.captain_college = this.department;
            info.captain_class = this.class1;
            info.captain_phone = this.telnumber;
            info.captain_email = this.email;
            info.password = this.password;
            info.team_member = this.allmem;
            info.description = this.groupinfo;
            //数据校验

            for(let key in info){
                if(userinfo.type(info[key])!="array")
                if(info[key]==""||info[key]==0){
                        this.x_alert("数据校验发现有空值");
                        return;
                }
            }
            if(!(this.password&&this.password1)){
                this.x_alert("两次输入密码不一致");
                return;
            }
            if(!judgemail(this.email)||!judgephone(this.telnumber)){
                this.x_alert("队长邮箱/电话有误");
                return;
            }
            for(let i in this.allmem){
                if(!judgemail(this.allmem[i].email)||!judgephone(this.allmem[i].phone)){
                    this.x_alert("成员邮箱/密码有误");
                    return;
                }
            }
            let rtmessage=await this.post("/check_sms_code/",{telephone: this.telnumber,code:  this.verCode,});
            if (rtmessage==undefined||rtmessage.message != "success") {
                this.x_alert("手机认证未通过！请重试");
                this.verCode="";
                return;
            }
            rtmessage = await this.post('/create_team/', info);
            if (rtmessage.message == "success") {
                x_alert("恭喜注册成功");
                window.location.href = "signin.html";
            } else if (rtmessage.message == "user already exists") {
                x_alert("注册信息无效，请检查");
            }
            else
            {
                 x_alert("注册信息无效，请检查");
            }
    function deleteMem(id){
        userinfo.allmen.splice(id,1);
    }
    function vcodeget(){
        if(!judgephone(userinfo.telnumber)){
            this.x_alert("电话格式不正确");
            return;
        }
        let rtmessage=userinfo.get('/telephone/'+userinfo.telnumber);
        console.log(rtmessage.message);
        if(rtmessage.message="success"){
            this.x_alert("验证码获取成功，请及时查看手机短信！");
        }else{
            this.x_alert("验证码获取失败");
        }
    }
    function addmen(){
        if(this.allmen.length<2)
        this.allmen.push({
            name:"",
            college:"",
            claa:"",
            phong:"",
            email:""
        });
    }
    function x_alert(txt,title="提示"){
        console.log("弹框");
        this.alert.title=title;
        this.alert.txt=txt;
        //setTimeout(()=>此处需要模态框
    }
}
//校验
function judgemail(email){
    let regu=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    let reg = new RegExp(regu);
    let str = email;
    if(!reg.test(str)) {
        return false;
    }
    return true;
}
function judgephone(phone) {
    let regu=/^1[0-9][0-9]\d{4,8}$/;
    let reg = new RegExp(regu);

    let str = phone;

    if(!reg.test(str)) {
        return false;
    }
    return true;
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