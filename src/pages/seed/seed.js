/**
 * 种子杯网站首页
 * @file seed.js
 * @author 
 * @copyright 
 * @createDate 2020-12-15
 */

import { Link } from 'react-router-dom'
import seedlogo from "../../img/seedlogo.png"
import "../seed/seed.css"
import TabsControl from "../../component/Tab"
import Head from '../seed/Head'
import Publish from '../seed/Publish'
import Lister from '../seed/Lister'
import Percenter from '../seed/Percenter'
import Playback from '../seed/Playback'
import { API } from '../../misc/interface'
import { useState, useEffect } from 'react'
import { createHashHistory } from 'history';

const hashHistory = createHashHistory();

function Seed() {
  return(
    <div className="main-banner" style={{overflowX: "hidden"}}>
      <Nav />
      <Banner />
      <img src={seedlogo} alt="seedlogo" style={{position: "absolute", left: "20px", top: "15px"}}/>
      {/* 除了 我的队伍 之外，其他栏目无论是否登陆都可以查看 */}
      <TabsControl>
        <Head name="大赛首页"/>
        <Publish name="比赛信息"/>
        <Lister name="排行榜"/>
        <Percenter name="我的队伍"/>
        <Playback name="赛局回放"/>
      </TabsControl>
    </div>
  )
}


function Nav() {
  const [usr, setUsr] = useState({});

  useEffect(() => {
    ;(async function checkLogin(){
      try {
        const r = await API.getCurrent();
        setUsr(r.data.data);
      } catch(error) {
        console.log(error);
      }
    })();
  }, []);
  
  async function handleLogOut() {
    //注销登陆
    try{
      const res = await API.LogOut();
      //跳转页面
      hashHistory.push("/signin");
    } catch(error) {
      console.log(error);
    }
  }

  return(
    <div>
      <nav style={{backgroundColor:"black"}} className="nav">
        <ul style={{position: "relative", left: "85%"}}>
          {usr.usrname ? (
            <>
            <span style={{color:"white"}}>{usr.usrname}</span>
            <span style={{color:"white"}} onClick={handleLogOut}>log out</span>
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
      <Link to="">
        <button className="btn-large join-button" style={{position:"relative", top: "70%"}}>
          试题下载
        </button>
      </Link>

      <Link to="">
        <button className="btn-large join-button"  style={{position:"relative", top: "70%"}}>
          提交结果
        </button>
      </Link>
    </div>
  )
}

export default Seed;