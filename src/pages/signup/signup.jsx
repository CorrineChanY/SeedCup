/**
 * 注册界面
 * @file signup.jsx
 * @author
 * @copyright
 * @createDate 2020-12-15
 */

import React from "react";
import md5 from "js-md5";
import "../signup/signup.css";
import { checkPhone, checkEmail } from "../../misc/utils";
import { getCaptcha, signUp } from "../../misc/apis/user";
import history from "../../history";
import { message } from "antd";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 注册信息
      username: "",
      password: "",
      school: "",
      college: "",
      className: "",
      phoneNumber: "",
      smsCaptcha: "",
      email: "",

      // 其他
      confpwd: "",
      phoneInfo: false,
      emailInfo: false,
      pwdInfo: false,
      loading: false,
      yztime: 89,
    };

    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.getCAPTCHA = this.getCAPTCHA.bind(this);
    this.count = this.count.bind(this);
  }

  // 消除定时器
  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return;
    };
  };

  /**
   * 输入渲染
   * @param {Event} e 输入事件
   * @param {String} propsName 更改的属性名
   */
  handleChange(e, propsName) {
    this.setState({
      [propsName]: e.target.value,
    });
  }

  /**
   * @description 获取验证码
   * @todo 获取验证码后90s内要是修改了电话号码，是否能够立刻获取新的验证码？
   */
  async getCAPTCHA() {
    if (this.state.loading === true) {
      message.error("获取验证码太频繁，请稍后重试～");
    } else if (checkPhone(this.state.phoneNumber)) {
      try {
        await getCaptcha(this.state.phoneNumber);
        this.setState({ loading: true });
        if (!(this.state.yztime === 0)) {
          this.count();
        }
        message.success("验证码已发送，请及时查看手机～");
      } catch (error) {}
    } else {
      message.error("请输入正确的电话 (´・ω・`)");
    }
  }

  /**
   * @description 注册事件
   */
  async signup() {
    const {
      username,
      password,
      school,
      college,
      className,
      phoneNumber,
      smsCaptcha,
      email,
      confpwd,
    } = this.state;
    if (
      username === "" ||
      school === "" ||
      college === "" ||
      className === "" ||
      password === "" ||
      confpwd === ""
    )
      message.error("输入不能为空，请补全信息！");
    else if (!checkPhone(phoneNumber))
      message.error("请输入正确的电话 (´・ω・`)  ");
    else if (!checkEmail(email)) message.error("请输入正确的邮箱 (´・ω・`)  ");
    else if (smsCaptcha === "") message.error("验证码不能为空 (´・ω・`)  ");
    else if (password !== confpwd)
      message.error("两次密码输入需一致哦 (´・ω・`) ");
    else {
      try {
        const sendData = {
          username: username,
          password: md5(password), // md5加密
          school: school,
          college: college,
          className: className,
          phoneNumber: phoneNumber,
          smsCaptcha: smsCaptcha,
          email: email,
        };
        await signUp(sendData);
        message.success("注册成功！");
        history.push("/signin");
      } catch (error) {
        console.log(error);
      }
    }
  }

  // 倒计90s
  count = () => {
    let { yztime } = this.state;
    let siv = setInterval(() => {
      this.setState({ yztime: yztime-- }, () => {
        if (yztime <= -1) {
          clearInterval(siv); // 倒计时( setInterval() 函数会每秒执行一次函数)，用 clearInterval() 来停止执行
          this.setState({ loading: false, yztime: 89 });
        }
      });
    }, 1000);
  };

  render() {
    return (
      <div className="content">
        <div className="head">
          <h1 style={{ fontSize: "35px" }}>微派·种子杯 </h1>
          <font style={{ fontSize: "35px", color: "rgb(50,187,255)" }}>|</font>
          <small style={{ fontSize: "20px" }}>软件编程PK赛报名表</small>
        </div>

        <br />
        <br />
        <br />

        <form>
          <div className="captain">
            <div className="groupinfo" style={{ height: "65px" }}>
              参赛者信息
            </div>
            <br />
            <br />
            <label>姓名</label>
            <br />
            <input
              type="text"
              placeholder="请输入姓名"
              value={this.state.username}
              onChange={(e) => this.handleChange(e, "username")}
            ></input>
            <br />
            <br />
            <label>学校</label>
            <br />
            <input
              type="text"
              placeholder="请输入所在学校"
              value={this.state.school}
              onChange={(e) => this.handleChange(e, "school")}
            ></input>
            <br />
            <br />
            <label>所在院系</label>
            <br />
            <input
              type="text"
              placeholder="请输入所在院系"
              value={this.state.college}
              onChange={(e) => this.handleChange(e, "college")}
            ></input>
            <br />
            <br />
            <label>专业班级</label>
            <br />
            <input
              type="text"
              placeholder="请输入专业班级"
              value={this.state.className}
              onChange={(e) => this.handleChange(e, "className")}
            ></input>
            <br />
            <br />
            <div style={{ display: "flex" }}>
              <div style={{ flex: "1" }}>
                <label>移动电话</label>
                <br />
                <input
                  type="text"
                  placeholder="请输入移动电话"
                  className="phone"
                  value={this.state.phoneNumber}
                  onChange={(e) => {
                    this.handleChange(e, "phoneNumber");
                  }}
                  onBlur={() =>
                    this.setState({
                      phoneInfo: !checkPhone(this.state.phoneNumber),
                    })
                  }
                ></input>
                {this.state.phoneInfo && (
                  <span className="phoneinfo">请输入正确的电话 (´・ω・`) </span>
                )}
              </div>
              <button
                className="inputafterinfo"
                id="vcodeget"
                type="button"
                onClick={this.getCAPTCHA}
              >
                {this.state.loading
                  ? this.state.yztime + "秒后可重新发送"
                  : "获取验证码"}
              </button>
            </div>
            <br />
            <label>验证码</label>
            <br />
            <input
              type="text"
              placeholder="请输入验证码"
              value={this.state.smsCaptcha}
              onChange={(e) => this.handleChange(e, "smsCaptcha")}
            ></input>
            <br />
            <br />
            <label>邮箱</label>
            <br />
            <input
              type="text"
              placeholder="请输入邮箱"
              className="email"
              value={this.state.email}
              onChange={(e) => this.handleChange(e, "email")}
              onBlur={() =>
                this.setState({ emailInfo: !checkEmail(this.state.email) })
              }
            ></input>
            {this.state.emailInfo && (
              <span className="emailinfo">请输入正确的邮箱 (´・ω・`) </span>
            )}
            <br />
            <br />
            <label>密码</label>
            <br />
            <input
              type="password"
              placeholder="请输入密码"
              id="password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e, "password")}
              onBlur={() =>
                this.setState({
                  pwdInfo:
                    this.state.confpwd !== "" &&
                    this.state.password !== this.state.confpwd,
                })
              }
            ></input>
            <br />
            <br />
            <label>确认密码</label>
            <br />
            <input
              type="password"
              placeholder="再次输入密码"
              id="confpassword"
              value={this.state.confpwd}
              onChange={(e) => this.handleChange(e, "confpwd")}
              onBlur={() =>
                this.setState({
                  pwdInfo: this.state.password !== this.state.confpwd,
                })
              }
            ></input>
            {this.state.pwdInfo && (
              <span className="pwdinfo">两次密码输入需一致哦 (´・ω・`) </span>
            )}
          </div>
          <br />
        </form>
        <button
          style={{ margin: "0 0 20px 25%" }}
          className="inputafterinfo"
          onClick={this.signup}
        >
          确认提交
        </button>
      </div>
    );
  }
}

export default SignUp;
