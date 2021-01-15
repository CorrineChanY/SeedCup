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
import intro from "../../img/introduce.png"
import stick from "../../img/stick.png"
import "../seed/seed.css"
import axios from 'axios'
import { render } from '@testing-library/react'
let base = "/api";
class anima extends React.Component{
    render(){
    return(
        <div>
        <script src="https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js"></script>
    {
    L2Dwidget.init({ "model": { jsonPath:
          "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
        "scale": 1 }, "display": { "position": "right", "width": 110, "height": 150,
        "hOffset": 0, "vOffset": -20 }, "mobile": { "show": true, "scale": 0.5 },
      "react": { "opacityDefault": 0.8, "opacityOnHover": 0.1 } })
    }
        </div>
        )
    }
}
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

//用户
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

//队伍
const team={
    /*待完善*/
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
function get(user){
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
function post(user){
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
//数据校验
async function sighup(user){
    let info={};
    info.group_name=user.teamname;
    info.college=user.School;
    info.level=user.classMax;
    info.captain_name=user.name;
    info.captain_college=user.department;
    info.captain_class=user.calss1;
    info.captain_phone=user.telnumber;
    info.captain_email=user.email;
    info.password=user.password;
    info.team_member=user.allmen;
    info.description=user.groupinfo;
}
//paste
async function reset(user){
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


async function handlechangeport(user){
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
async function logout(user){
    let res=await user.get('/log_out/');
    if(res.code==0)
    window.location.href="signin.html";
}
async function getstage(user){
    let res=await user.get('/getstage/');
    if(['初赛','复赛'].includes(res['stage'])){
        //这里不会写
    }
}
async function haisignin(user){
    let res=await user.get('/user-result/');
    if(res.message!="need login"){
        user.haslogin=1;
        user.teaminfo=res;
    }
}

class Seed extends React.Component{
    async getrank(user){
        let data=await user.get('/get_score_steps/');
        if(data.code==0){
            user.rank=data.rank;
            user.ranklist=data.finals_rank;
        }else{
            user.x_alert("排行榜信息获取失败！");
        }
    }
    async getmatch(user){
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
        }else if(matchinfo.code===100){
            user.x_alert("比赛信息获取失败");
        }
    }
    async getseed(user){
        let data=await user.get('/get_daily_info/');
        if(data.code==0){
            user.seed_list=data.seed_list;
        }else{
            user.x_alert("每日seed信息获取失败！");
        }
    }
    render() {
        return(
            <div className="main-banner">
                <Nav />
                <Banner />
                <img src={seedlogo} alt="seedlogo" style={{position: "absolute", left: "20px", top: "15px"}}/>
                <div className="row">
                    <div className="container contenter">
                        <ul className="tabs" style={{width:"105%"}}>
                            <li className="tab col s2 taber"><a href="#head1">大赛首页</a></li>
                            <li className="tab col s2 taber"><a href="#publish">比赛信息</a></li>
                            <li className="tab col s2 taber"><a href="#lister">排行榜</a></li>
                            <li className="tab col s2 taber"><a href="#percenter">我的队伍</a></li>
                            <li className="tab col s2 taber"><a href="#playback">赛局回放</a></li>
                        </ul>
                    </div>
                </div>
                <Head1 />
                
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
                    <ul style={{position: "relative", left: "85%"}}>
                        <li style={{position: "relative"}}>
                            <Link to="/signin" style={{color:"white"}}>
                                sign in
                            </Link>
                        </li>
                        <li style={{position: "relative"}}>
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
    async submit(user){
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
    render() {
        return(
            <div className="containtent">
                <Link to="">
                    <button className="btn-large join-button" style={{position:"relative", top: "70%"}}>
                        试题下载
                    </button>
                </Link>

                <Link to="">
                    <button className="btn-large join-button"
                            onclick={this.submit}
                            style={{position:"relative", top: "70%",left:"20px"}}>
                        提交结果
                    </button>
                </Link>
            </div>
        )
    }
}
//提交试题需要模态框

class Head1 extends React.Component{
    render() {
        return(
            <div id="head1">
                <div className="page-container">
                    <div className="page1-container">
                        <div className="page1-inner">
                            <div className="page1-img">
                                <img style={{maxWidth:"100%", overflow:"hidden"}} src={intro} alt="大赛简介" />
                            </div>
                            <div className="page1-content">
                                <p>
                                    “种子杯”自2005年创办以来，已经成功举办了十五届。最初两届比赛只是电信学院特色活动，作为校科技节的非正式项目举办，主要面向电信学院同学开放。目的是为了提高我院同学对设计的热情、为所有喜爱程序设计的同学提供了一个切磋交流的平台，让同学们在参与比赛的过程中积累编程经验，培养动手能力。07、08两年“种子杯”正式面向全校同学开放，参与度较前两年有了显著提高，“种子杯”也在由院内比赛走向全校的过程中，逐步成为了全校编程爱好者一展才能的舞台，影响力逐步攀升。</p>
                                <p>
                                    2013年，“种子杯”进行了一次改革，试水移动应用开发的领域，跟进时代潮流，极大地调动了同学们对移动互联网开发的热情。同时，很多参赛作品也出现了极高的创新性和潜在的创业价值，让大赛组委会意识到了创新创业在大学生学习生活中的重要性。2014年开始，“种子杯”为了加强创新实践观念的影响力，将大赛推广至武汉各大高校，以进一步提升“种子杯”的影响力，同时继续延续往届大赛软件编程PK的主题。推广取得了不错的效果，为今后比赛的组织积累了宝贵的经验。</p>
                                <p>
                                    2020届“种子杯”，也将延续前七年软件编程PK的主题，比赛同样面向武汉各高校。学生会、科协与Dian团队强强联手，更有微派公司的大力支持，举办这次比赛，我们有足够的经验，与Dian团队、赞助方有了更高的默契，再加上充足的准备和高涨的热情，我们有信心把今年的“种子杯”做的更好。</p>
                            </div>
                        </div>
                        <div className="page1-stick">
                            <img style={{maxWidth:"100%", overflow: "hidden"}} src={stick} alt="stick" />
                        </div>
                    </div>
                </div>
                {/*  第二页  */}
                <div className="page2-container">
                    <div className="page2-inner">
                        <div className="page2-img">
                            <img style={{maxWidth:"100%", overflow:"hidden"}} src={intro} alt="大赛简介" />
                        </div>
                        <div className="page2-content">
                            <div className="page2-part1">
                                <br></br><br></br>
                                <span >活动对象</span>
                               
                                <br></br>
                                <a>
                                    本次活动面向对象为华中科技大学在校本科生以及武汉地区各大高校的在校本科生。为了鼓励低年级同学参加本次大赛，对20级同学组成的参赛队伍的参赛成绩予以适当加分。对于混合年级组成的队伍，以队伍中最高年级为队伍年级。</a>
                            </div>
                            <div className="page2-part2">
                                <span>赛制介绍</span>
                                <div className="competention1">
                                    <span>初赛、复赛</span>
                                    <br></br>
                                    <a>
                                        1、 初赛时间为17天，要求参赛队员在规定时间内完成开放式的程序设计。<br />
                                        2、 初赛赛题和复赛赛题均在线上公布。同时官方网站也会公布试题以及评分标准，供同学们自由组队参赛并下载赛题。<br />
                                        3、 初赛和复赛题目是运用所学的算法和数据结构的知识解决应用问题,工作量约为一周。初赛和复赛作品均通过网络提交。<br />
                                        4、 所有成功完成初赛作品并提交的队伍将获得参与奖。<br />
                                    </a>
                                </div>
                                <div className="competention2">
                                    <span>决赛</span>
                                    <br></br>
                                    <div className="intros"></div>
                                    <a>复赛得分最高的十支队伍将进入决赛。 决赛比赛当天晚上19:00优胜队伍进行决赛答辩。</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page3-container">
                    <div className="page3-inner">
                        <div className="page3-img">
                            <img style={{maxWidth:"100%", overflow:"hidden"}} src={intro} alt="大赛简介" />
                        </div>
                    </div>
                    <div className="page3-stick">
                        <img style={{maxWidth: "100%", overflow:"hidden"}} src={stick} alt="stick" />
                    </div>
                    <ul className="page3-page4">
                        <li>
                            <div className="rank-title">
                                <div className="rank-bar">一等奖</div>
                                <div className="rank-number">x1</div>
                            </div>
                            <div className="rank-prize">10,000RMB</div>
                            <div className="rank-info">
                                <a>
                                    团体第一名荣誉证书<br />
                                    参赛队员的荣誉证书<br />
                                    冠军奖杯
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="rank-title">
                                <div className="rank-bar">二等奖</div>
                                <div className="rank-number">x2</div>
                            </div>
                            <div className="rank-prize">5,000RMB</div>
                            <div className="rank-info">
                                <a>
                                    团体第二名荣誉证书<br />
                                    参赛队员的荣誉证书
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="rank-title">
                                <div className="rank-bar">三等奖</div>
                                <div className="rank-number">x3</div>
                            </div>
                            <div className="rank-prize">3,000RMB</div>
                            <div className="rank-info">
                                <a>
                                    团体第三名荣誉证书<br />
                                    参赛队员的荣誉证书
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="page4-bottom">
                    <div className="page4-inner">
                        <div className="prize-sorts">
                            <div className="prize-first">
                                <span>人气奖&nbsp;&nbsp;&nbsp;&nbsp;1</span>
                                <div className="intro1"></div>
                                <a>“微派•种子杯”团体人气奖荣誉证书+1000元现金</a>
                            </div>
                            <div className="prize-second">
                                <span>优胜奖&nbsp;&nbsp;&nbsp;&nbsp;--</span>
                                <div className="intro2"></div>
                                <a>通过初赛评审的所有选手赠送纪念衫+300元现金/队(奖金不叠加)</a>
                            </div>
                            <div className="prize-third">
                                <span>参与奖&nbsp;&nbsp;&nbsp;&nbsp;∞</span>
                                <div className="intro3"></div>
                                <a>成功提交作品的队伍将赠送种子杯纪念品一套</a>
                            </div>
                        </div>
                        <div className="prize-info">
                            <p>
                                1.进入决赛但未获得名次的队伍成员额外获得Dian团队招新直通车（免笔试和通宵测试）<br />
                                2.获得1-3等奖的成员获得微派公司面试直通车机会<br />
                            </p>
                        </div>
                    </div>
                    <div className="page4-stick">
                        <img style={{maxWidth:"100%", overflow:"hidden"}} src={stick} alt="stick" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Seed;