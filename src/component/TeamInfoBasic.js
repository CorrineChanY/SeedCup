/**
 * 队伍基本信息
 * @file TeamInfoBasic.js
 * @author Chen Yi
 */

import { Descriptions, Badge } from "antd";

export default function TeamInfoBasic(props) {
  const { name, introduction, gameStatus } = props;

  const intro = introduction.split('\n')

  const getStatusText = (status) => {
    switch (status) {
      case 1:
        return "初赛"
      case 2:
        return "复赛"
      case 3:
        return "决赛"
      case 0:
        return "暂未开始"
      default:
        return "无"
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 1:
        return "processing"
      case 2:
        return "processing"
      case 3:
        return "success"
      case 0:
        return "default"
      default:
        return "error"
    }
  }

  return(
    <>
      <Descriptions title="您的队伍" bordered column={2} style={{marginTop: '2.5em'}}>
        <Descriptions.Item label="队伍名称">
          {name}
        </Descriptions.Item>
        <Descriptions.Item label="比赛进程">
          <Badge status={getStatusBadge(gameStatus)} text={getStatusText(gameStatus)}/>
        </Descriptions.Item>
        <Descriptions.Item label="队伍介绍" span={2}>
          {
            intro.map((line, index) => {
              return(
                <div key={index}>
                <span>{line}</span>
                <br/>
                </div>
              )
            })
          }
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}