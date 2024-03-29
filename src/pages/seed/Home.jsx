/**
 * 大赛首页
 * @file Home.jsx
 * @author Chen Yi
 */

import intro from "../../img/introduce.png"
import stick from "../../img/stick.png"
import "../seed/seed.css"

function Home() {
  return(
    <div className="active">
      <div className="page-container">
        {/*   第一页   */}
        <div className="page1-container" style={{overflowY: "hidden"}}>
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
        {/*  第二页  */}
        <div className="page2-container">
          <div className="page2-inner">
            <div className="page2-img">
              <img style={{maxWidth:"100%", overflow:"hidden"}} src={intro} alt="大赛简介" />
            </div>
            <div className="page2-content">
              <div className="page2-part1">
                <span >活动对象</span>
                <p>
                    本次活动面向对象为华中科技大学在校本科生以及武汉地区各大高校的在校本科生。为了鼓励低年级同学参加本次大赛，对20级同学组成的参赛队伍的参赛成绩予以适当加分。对于混合年级组成的队伍，以队伍中最高年级为队伍年级。</p>
              </div>
              <div className="page2-part2">
                <span>赛制介绍</span>
                <div className="competention1">
                  <span>初赛、复赛</span>
                  <p>
                      1、 初赛时间为17天，要求参赛队员在规定时间内完成开放式的程序设计。<br />
                      2、 初赛赛题和复赛赛题均在线上公布。同时官方网站也会公布试题以及评分标准，供同学们自由组队参赛并下载赛题。<br />
                      3、 初赛和复赛题目是运用所学的算法和数据结构的知识解决应用问题,工作量约为一周。初赛和复赛作品均通过网络提交。<br />
                      4、 所有成功完成初赛作品并提交的队伍将获得参与奖。<br />
                  </p>
                </div>
                <div className="competention2">
                  <span>决赛</span>
                  <p>复赛得分最高的十支队伍将进入决赛。 决赛比赛当天晚上19:00优胜队伍进行决赛答辩。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="page2-stick">
              <img style={{maxWidth:"100%", overflow:"hidden"}} src={stick} alt="stick" />
          </div>
        </div>
        {/*   第三页   */}
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
            <PirzeInfo title="一等奖" number="1" prize="10,000" info={<p>团体第一名荣誉证书<br />参赛队员的荣誉证书<br />冠军奖杯</p>}/>
            <PirzeInfo title="二等奖" number="2" prize="5,000" info={<p>团体第二名荣誉证书<br />参赛队员的荣誉证书</p>}/>
            <PirzeInfo title="三等奖" number="3" prize="3,000" info={<p>团体第三名荣誉证书<br />参赛队员的荣誉证书</p>}/>
          </ul>
        </div>
        {/*   第四页   */}
        <div className="page4-bottom">
          <div className="page4-inner">
            <div className="prize-sorts">
              <Prizesort classname="prize-first" title="人气奖" number="1" info={<p>“微派•种子杯”团体人气奖荣誉证书+1000元现金</p>} />
              <Prizesort classname="prize-second" title="优胜奖" number="--" info={<p>通过初赛评审的所有选手赠送纪念衫+300元现金/队(奖金不叠加)</p>} />
              <Prizesort classname="prize-third" title="参与奖" number="∞" info={<p>成功提交作品的队伍将赠送种子杯纪念品一套</p>} />
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
      </div>{/**end: "page-container" */}
    </div>
  )
}

/**一二三等奖的Li封装 */
function PirzeInfo({title, number, prize, info}) {
  return(
    <li>
      <div className="rank-title">
        <div className="rank-bar">{title}</div>
        <div className="rank-number">x{number}</div>
      </div>
      <div className="rank-prize">{prize}RMB</div>
      <div className="rank-info">
        {info}
      </div>
    </li>
  )
}

function Prizesort({classname, title, number, info}) {
  return(
    <div className={classname}>
      <span>{title}&nbsp;&nbsp;&nbsp;&nbsp;{number}</span>
      {info}
    </div>
  )
}

export default Home;