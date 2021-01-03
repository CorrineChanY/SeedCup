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
let base = "/api";
const teaminfo_model = {
    code:0,
    name: "666",
    list: { seed: "", score: "", last_score: "" },
    rank_score: "",
    match_ranks: [],
    finals_score: "",
    team_docker: { port: 0}
}
//1为登录 0为未登录
let info_model = {
    old: "",
    new: "",
    new_c:"",
}

const haslogin_model = 0;
let filedata = new FormData();
const user={
    seedCode:"",
    fileName:"",
    rank:[],
    Aalert:{title:"标题",txt:"我是文本"},
    matches:[],
    finals_rank:[],
    seed_list:[],
    info:info_model,
    teaminfo:teaminfo_model,
    haslogin: haslogin_model,
async created(){
    user.hassignin();
    user.getseed();
    user.getmatch();
    user.getrank();
    user.getstage();
}
}
//拦截
axios.interceptors.response.use(
    data => {
      return data;
    },
    err => {
      if (err.response.status === 504 || err.response.status === 404) {
        console.log("服务器被吃了⊙﹏⊙∥");
      } else if (err.response.status === 401) {
        console.log("登录信息失效⊙﹏⊙∥");
      } else if (err.response.status === 500) {
        console.log("服务器开小差了⊙﹏⊙∥");
      }
      return Promise.reject(err);
    }
  );
  //get
  function get(){
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
function post(){
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
//paste
async function reset(){
    if(user.info.new==user.info.new_c&&user.info.old!=""&&user.info.new!=""){
        let data = await user.post('/upload_submit_txt/', user.info);
            if (data.code == 111) {
                this.x_alert("原密码错误");
            } else if (data.code == 107) {
                this.x_alert("未登录");
            } else if (data.code == 0) {
                window.location.href = "signin.html";
            }
            }else
                this.x_alert("两次输入的密码不一致");
            return;
}
/*setfile: function(event){
    file=event.target.files[0];
    filedata.append('file',file);
    this.fileName=file.name;
},*/

async function submit(){
    if (filedata == new FormData()||user.seedcode=="") {
        user.x_alert("数据有误");
    }
    filedata.append('seed', user.seedcode);
    let formdata= await user.post('/upload_submit_txt/',filedata);
    {
        if (formdata.code == 114) {
                user.x_alert("今日提交次数已到上限");
                window.location.reload();
            } else if (formdata.code == 107) {
                user.x_alert("请先登陆");
                window.location.reload();
            } else if (formdata.code == 108) {
                user.x_alert("您的队伍未晋级");
                window.location.reload();
            } else if (formdata.code == 115) {
                user.x_alert("提交文件超过10M");
                window.location.reload();
            } else if (formdata.code == 116) {
                user.x_alert("请提交标准格式的zip压缩包");
                window.location.reload();
            } else if (formdata.code == 0) {
                user.x_alert("上传成功(´・ω・`)");
                window.location.reload();
            } else if (formdata.code == 100) {
                user.x_alert("评分失败，请检查输出文件的格式");
                window.location.reload();
            } else if (formdata.code == 117) {
                user.x_alert("文件内容不正确");
                window.location.reload();
            } else if (formdata.code == 119) {
                user.x_alert("当前不可以提交");
                window.location.reload();
            }
        }
}
async function handlechangeport(){
    if(window.confirm("确定要创建或重置端口吗？")){
        let res = await this.post('/create_docker/', user.info);
        if (res.code == 119) {
            user.x_alert("比赛阶段错误");
        } else if (res.code == 123) {
            user.x_alert("没有此队伍");
        } else if (res.code == 0) {
            user.x_alert("Docker端口重置成功！");
        }
    }
}
async function logout(){
    let res=await user.get('/log_out/');
    if(res.code==0)
    window.location.href="signin.html";
}
async function getstage(){
    let res=await user.get('/getstage/');
    if(['初赛','复赛'].includes(res['stage'])){
        //这里不会写
    }
}
async function getrank(){
    let data=await user.get('/get_score_steps/');
    if(data.code==0){
        user.rank=data.rank;
        user.ranklist=data.finals_rank;
    }else{
        user.x_alert("排行榜信息获取失败！");
    }
}
async function getmatch(){
    let matchinfo=await user.get('/get_match_game_info');
    if(matchinfo.code===0){
        return;
        user.matches=matchinfo.matches;
        var matchHTML="";
        for(var data of user.matches){
            let i=65;
            while(data[String.fromCharCode[i]]){
                let match=data[String.fromCharCode[i]];
                ++i;
                let ulistHTML="";
                for(var j=0;j<4;++j){
                    let ulist="<ul>"
                    if(match.result){
                        ulist="<ul>"
                    + `<li>队名：${match.result[j][4]}</li>`
                    + `<li>匹配排名：${match.result[j][0]}</li>`
                    + `<li>分数：${match.result[j][1]}</li>`
                    + `<li>步数：${match.result[j][2]}</li>`
                    + `<li>错误提示：${match.result[j][3]}</li>`
                    + "</ul>";
            } else {
                ulist = "<ul>"
                    + `<li>组名：${match.teams[j]}</li>`
                    + "</ul>";
            }
            ulistHTML += `<td>${ulist}</td>`;
        }

        let statusHTML = "";

        if (!!match.result) {
            statusHTML = "已完成";
        } else {
            statusHTML = match.progress;
        }

        /*matchHTML += "<tr>"
            + `<td>${match.date}</td>`
            + `<td>${statusHTML}</td>`
            + ulistHTML
            + "</tr>";*/
    }
}
//tbody.innerHTML = matchHTML;
    }
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
                        style={{color:"white",textDecoration:"none",position:"inherit",top:"-60%",height:"60px"}} 
                        className="\ join-button"
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