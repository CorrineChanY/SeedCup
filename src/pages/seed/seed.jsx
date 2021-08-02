/**
 * 种子杯网站首页
 * @file seed.jsx
 * @author
 * @copyright
 * @createDate 2020-12-15
 * @todo 赛局回放
 */

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { message, Menu, Button } from "antd";
import { HomeOutlined, InfoCircleOutlined, BarChartOutlined, TeamOutlined, PlayCircleOutlined } from "@ant-design/icons";
import "../seed/seed.css";
import seedlogo from "../../img/seedlogo.png";
import Home from "./Home";
import Info from "./Info";
import Rank from "./Rank";
import Team from "./TeamCenter";
import Playback from "./Playback";
import { removeToken } from "../../misc/utils";
import { getCurrent } from "../../misc/apis/user";
import { getTeamInfo } from "../../misc/apis/team";

function Seed() {
  const [user, setUsr] = useState({ username: "" });
  const [team, setTeam] = useState({});
  const [current, setCurrent] = useState("index");

  useEffect(() => {
    (async function checkLogin() {
      try {
        const r = await getCurrent();
        setUsr(r.data.data || {});
      } catch (error) {
        setUsr({});
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async function getTeam() {
      try {
        const r = await getTeamInfo(-1);
        if (r.data.code === "110") {
          setTeam({ id: null });
        } else {
          setTeam(r.data.data || {});
        }
      } catch (error) {
        setTeam({});
        console.log(error);
      }
    })();
  }, []);

  async function getTeam() {
    try {
      const r = await getTeamInfo(-1);
      if (r.data.code === "110") {
        setTeam({ id: null });
      } else {
        setTeam(r.data.data || {});
      }
    } catch (error) {
      setTeam({});
      console.log(error);
    }
  }

  function handleClickMenu(e) {
    setCurrent(e.key);
  }

  return (
    <div className="main-banner" style={{ overflowX: "hidden" }}>
      <Nav
        username={user.username}
        logout={(e) => {
          setUsr({});
          setTeam({});
          message.success(e);
        }}
      />
      <Banner />
      <img
        src={seedlogo}
        alt="seedlogo"
        style={{ position: "absolute", left: "20px", top: "15px" }}
      />
      {/* 除了 我的队伍 之外，其他栏目无论是否登陆都可以查看 */}
      <Menu
        onClick={handleClickMenu}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Menu.Item key="index" icon={<HomeOutlined />}>
          大赛首页
        </Menu.Item>
        <Menu.Item key="info" icon={<InfoCircleOutlined />}>
          比赛信息
        </Menu.Item>
        <Menu.Item key="rank" icon={<BarChartOutlined />}>
          排行榜
        </Menu.Item>
        <Menu.Item key="team" icon={<TeamOutlined />}>
          我的队伍
        </Menu.Item>
        <Menu.Item key="playback" icon={<PlayCircleOutlined />}>
          赛局回放
        </Menu.Item>
      </Menu>
      {/* Menu真的是这样配合使用的吗？？？感觉好蠢啊 */}
      {current === "index" ? (
        <Home />
      ) : current === "info" ? (
        <Info />
      ) : current === "rank" ? (
        <Rank />
      ) : current === "team" ? (
        <Team
          username={user.username}
          team={team}
          userId={user.id}
          createTeam={(e) => { getTeam(); message.success(e);}}
          addMember={() => { getTeam(); message.success("添加成功！"); }}
          delMember={() => { getTeam(); message.success("删除成功！"); }}
          editIntro={() => { getTeam(); message.success("修改成功！"); }}
        />
      ) : current === "playback" ? (
        <Playback />
      ) : (
        <></>
      )}
    </div>
  );
}

function Nav(props) {
  const { logout, username } = props;

  async function handleLogOut() {
    removeToken();
    logout("已退出登录!");
  }

  return (
    <div>
      <nav style={{ backgroundColor: "black" }} className="nav">
        <ul style={{ position: "relative", left: "85%", display: "flex" }}>
          {username ? (
            <>
              <div style={{ color: "white" }}>{username}</div>
              <Link
                style={{ color: "white" }}
                onClick={handleLogOut}
                to="/index"
              >
                log out
              </Link>
            </>
          ) : (
            <>
              <li style={{ position: "relative" }}>
                <Link to="/signin" style={{ color: "white" }}>
                  sign in
                </Link>
              </li>
              <li style={{ position: "relative" }}>
                <Link to="/signup" style={{ color: "white" }}>
                  sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

function Banner() {
  return (
    <div className="containtent">
      <Button
        type="primary"
        size="large"
        style={{
          position: "relative",
          top: "70%",
          marginRight: "10px",
          height: "50px",
        }}
      >
        试题下载
      </Button>

      <Button
        type="primary"
        size="large"
        style={{
          position: "relative",
          top: "70%",
          marginLeft: "10px",
          height: "50px",
        }}
      >
        提交结果
      </Button>
    </div>
  );
}

export default Seed;
