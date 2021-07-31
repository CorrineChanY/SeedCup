/**
 * 队伍基本信息
 * @file TeamInfoBasic.jsx
 * @author Chen Yi
 */

import { Descriptions, Badge, Input, Button, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { editTeamIntro } from "../misc/apis/team";

export default function TeamInfoBasic(props) {
  const { name, gameStatus, introduction, editIntro, isLeader } = props;
  const { TextArea } = Input;
  const [ edit, setEdit ] = useState(false);
  const [ newIntro, setNewIntro ] = useState(introduction);

  const intro = introduction.split("\n");

  const getStatusText = (status) => {
    switch (status) {
      case 1:
        return "初赛";
      case 2:
        return "复赛";
      case 3:
        return "决赛";
      case 0:
        return "暂未开始";
      default:
        return "无";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 1:
        return "processing";
      case 2:
        return "processing";
      case 3:
        return "success";
      case 0:
        return "default";
      default:
        return "error";
    }
  };

  async function handleSubmit () {
    console.log(newIntro)
    try {
      await editTeamIntro(newIntro);
      editIntro();
      setEdit(false);
    } catch (error) {
      message.error("修改失败！")
    }
  }

  return (
    <>
      <Descriptions
        title="您的队伍"
        bordered
        column={2}
        style={{ marginTop: "2.5em" }}
      >
        <Descriptions.Item label="队伍名称">{name}</Descriptions.Item>
        <Descriptions.Item label="比赛进程">
          <Badge
            status={getStatusBadge(gameStatus)}
            text={getStatusText(gameStatus)}
          />
        </Descriptions.Item>
        <Descriptions.Item label="队伍介绍" span={2}>
          {edit ? (
            <div style={{display: 'flex'}}>
              <TextArea
                defaultValue={introduction}
                onChange={(e)=>setNewIntro(e.target.value)}
                autoSize={{ minRows: 3, maxRows: 13 }}
                allowClear
              />
              <div style={{display: 'flex', flexDirection: 'column', marginLeft: '1em', justifyContent: 'space-around'}}>
                <Button onClick={() => {setEdit(false); setNewIntro(introduction)}}>取消</Button>
                <Button type="primary" onClick={handleSubmit}>保存</Button>
              </div>
            </div>
          ) : (
            <div style={{display: 'flex', justifyContent:'space-around'}}>
              <div>
                {intro.map((line, index) => {
                  return (
                    <div key={index}>
                      <span>{line}</span>
                      <br />
                    </div>
                  );
                })}
              </div>
              { isLeader ? (
                <EditOutlined onClick={() => setEdit(true)} />
              ) : (
                ''
              )}
            </div>
          )}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}
