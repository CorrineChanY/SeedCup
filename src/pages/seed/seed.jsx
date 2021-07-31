/**
 * 种子杯网站首页
 * @file seed.jsx
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import { Link } from 'react-router-dom'
import seedlogo from "../../img/seedlogo.png"
import "../seed/seed.css"
import TabsControl from "../../component/Tab"
import Head from './Head.jsx'
import Publish from './Publish.jsx'
import Lister from './Lister.jsx'
import Percenter from './Percenter.jsx'
import Playback from './Playback.jsx'
import { getCurrent } from '../../misc/apis/user'
import { useState, useEffect } from 'react'
import { removeToken } from '../../misc/utils'
import { getTeamInfo } from '../../misc/apis/team'
import { message } from 'antd'

function Seed() {

  const [user, setUsr] = useState({username: ''});
  const [team, setTeam] = useState({})
  
  useEffect(() => {
    ;(async function checkLogin(){
      try {
        const r = await getCurrent();
        console.log(r)
        setUsr(r.data.data || {});
      } catch(error) {
        setUsr({})
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    ;(async function getTeam(){
      try {
        const r = await getTeamInfo(-1);
        console.log(r)
        if(r.data.code === '110'){
          setTeam({id: null})
        } else {
          setTeam(r.data.data || {});
        }
      } catch(error) {
        setTeam({})
        console.log(error);
      }
    })();
  }, []);

  async function getTeam(){
    try {
      const r = await getTeamInfo(-1);
      console.log(r)
      if(r.data.code === '110'){
        setTeam({id: null})
      } else {
        setTeam(r.data.data || {});
      }
    } catch(error) {
      setTeam({})
      console.log(error);
    }
  }

  return(
    <div className="main-banner" style={{overflowX: "hidden"}}>
      <Nav username={user.username} logout={(e)=>{setUsr({}); setTeam({}); message.success(e);}}/>
      <Banner />
      <img src={seedlogo} alt="seedlogo" style={{position: "absolute", left: "20px", top: "15px"}}/>
      {/* 除了 我的队伍 之外，其他栏目无论是否登陆都可以查看 */}
      <TabsControl>
        <Head name="大赛首页"/>
        <Publish name="比赛信息"/>
        <Lister name="排行榜"/>
        <Percenter name="我的队伍" 
          username={user.username} 
          team={team} 
          userId={user.id} 
          createTeam={(e)=>{getTeam(); message.success(e);}}
          addMember={()=>{getTeam(); message.success("添加成功！");}}
          delMember={()=>{getTeam(); message.success("删除成功！");}}
          editIntro={()=>{getTeam(); message.success("修改成功！");}}
        />
        <Playback name="赛局回放"/>
      </TabsControl>
    </div>
  )
}


function Nav(props) {

  const { logout, username } = props;

  async function handleLogOut() {
    //注销登陆
    removeToken()
    logout('已退出登录!')
    // TODO 更新Nav、队伍模块
  }

  return(
    <div>
      <nav style={{backgroundColor:"black"}} className="nav">
        <ul style={{position: "relative", left: "85%", display: 'flex'}}>
          {username ? (
            <>
            <div style={{color:"white"}}>{username}</div>
            <Link style={{color:"white"}} onClick={handleLogOut} to='/index'>log out</Link>
            </>
          ) : (
            <>
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
            </>
          )}
          
          
        </ul>
      </nav>
    </div>
  )
}

function Banner() {

//   async function submit(user){
//     if (filedata == new FormData()||user.seedcode=="") {
//         user.x_alert("数据有误");
//     }
//     filedata.append('seed', user.seedcode);
//     let formdata= await user.post('/upload_submit_txt/',filedata);
//     {
//         if (formdata.code == 114) {
//                 user.x_alert("今日提交次数已到上限");
//                 window.location.reload();
//             } else if (formdata.code == 107) {
//                 user.x_alert("请先登陆");
//                 window.location.reload();
//             } else if (formdata.code == 108) {
//                 user.x_alert("您的队伍未晋级");
//                 window.location.reload();
//             } else if (formdata.code == 115) {
//                 user.x_alert("提交文件超过10M");
//                 window.location.reload();
//             } else if (formdata.code == 116) {
//                 user.x_alert("请提交标准格式的zip压缩包");
//                 window.location.reload();
//             } else if (formdata.code == 0) {
//                 user.x_alert("上传成功(´・ω・`)");
//                 window.location.reload();
//             } else if (formdata.code == 100) {
//                 user.x_alert("评分失败，请检查输出文件的格式");
//                 window.location.reload();
//             } else if (formdata.code == 117) {
//                 user.x_alert("文件内容不正确");
//                 window.location.reload();
//             } else if (formdata.code == 119) {
//                 user.x_alert("当前不可以提交");
//                 window.location.reload();
//             }
//         }
// }

  return(
    <div className="containtent">
      <button className="btn-large join-button" style={{position:"relative", top: "70%", marginRight: '10px'}}>
        试题下载
      </button>

      <button className="btn-large join-button"  style={{position:"relative", top: "70%", marginLeft: '10px'}}>
        提交结果
      </button>
    </div>
  )
}

export default Seed;