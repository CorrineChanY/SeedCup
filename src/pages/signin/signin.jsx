/**
 * 登陆界面
 * @file signin.jsx
 * @author
 * @copyright
 * @createDate 2020-12-15
 */

import { useState } from "react";
import "../signin/signin.css";
import "../../materialize.css";
import signin from "../../img/signin.png";
import "../../misc/interface";
import { LogIn } from "../../misc/apis/user";
import history from "../../history";
import { setToken } from "../../misc/utils";
import md5 from "js-md5";
import { message } from "antd";

function SignIn() {
  const [usr, setUsr] = useState("");
  const [pass, setPass] = useState("");

  function handleUsrInput(e) {
    setUsr(e.target.value);
  }

  function handlePassInput(e) {
    setPass(e.target.value);
  }

  async function logIn() {
    try {
      const r = await LogIn({ username: usr, password: md5(pass) }); // 之后需要md5加密
      setToken(r.data.data);
      message.success("登陆成功！");
      history.push("/index");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="maintain">
      <div className="pdleft">
        <div className="login">
          <font style={{ fontSize: "18px" }}>微派·种子杯</font>
          <font style={{ fontSize: "18px", color: "rgb(50,187,255)" }}>|</font>
          <small style={{ fontSize: "12px" }}>软件编程PK赛</small>

          <br />
          <br />
          <br />

          <font style={{ color: "white", fontSize: "2.5em" }}>登录</font>

          <br />
          <br />
          <form>
            <label>用户名</label>
            <br />
            <input
              onInput={handleUsrInput}
              type="text"
              placeholder="请用手机号或邮箱登录"
              style={{ width: "50%" }}
            ></input>
            <br />
            <br />
            <br />
            <label>密码</label>
            <br />
            <input
              onInput={handlePassInput}
              type="password"
              style={{ width: "50%" }}
            ></input>
            <br />
            <span style={{ position: "relative", left: "48%" }}>
              <a
                href="/signup"
                style={{ color: "white", textDecoration: "none" }}
              >
                sign up
              </a>
            </span>
          </form>

          <br />
          <br />

          <button
            type="button"
            className="submitinfo"
            style={{ position: "absolute", left: "10px" }}
            onClick={logIn}
          >
            登录
          </button>
        </div>
      </div>
      <div className="pdright" style={{ position: "absolute", top: "0" }}>
        <img
          className="picinfo"
          src={signin}
          alt="picinfo"
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
}

export default SignIn;
