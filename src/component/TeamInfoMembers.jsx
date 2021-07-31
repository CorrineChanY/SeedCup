/**
 * 队伍基本信息
 * @file TeamInfoMembers.jsx
 * @author Chen Yi
 * @todo 暂无法修改成员信息（没有对应接口），若后期不需要该功能直接删除<IconFont type="icon-edit_small" />即可
 */
import { Card, Popover } from "antd";
import { createFromIconfontCN, WarningOutlined } from "@ant-design/icons";
import "./team.css"
import { deleteMember } from "../misc/apis/team";

export default function TeamInfoMembers(props) {
  const { members, leaderId, userId, del } = props;
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_2698917_lsyboqpzaun.js'
    ],
  }); // 从 iconfont项目 引入 icon

  async function handleDeleteMember(id) {
    try {
      const res = await deleteMember(id);
      del();
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div style={{marginTop: '1em', display: 'flex'}}>
      {
        members.map((member, index) => {
          return (
            <div key={index}>
              <Card
                hoverable
                bordered
                style={{ width: 300, marginRight: '2em' }}
                actions={ userId === leaderId ?
                [
                  <IconFont type="icon-edit_small" />,
                  <Popover
                    content={
                      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                          <WarningOutlined style={{color: '#faad14'}}/>
                          <span>你确定要删除{member.username}吗？</span>
                        </div>
                        <a  onClick={() => handleDeleteMember(member.id)}>确定</a>
                      </div>
                    }
                    trigger="click"
                  >
                    <IconFont type="icon-template_delete"/>
                  </Popover>,
                ] : []}
              >
                <div style={{display:'flex'}}>
                  <IconFont type="icon-yonghu" className="icon"/>
                  <p>{member.username}</p>
                  {member.id===leaderId ? <p style={{color:'red'}}>(队长)</p> : ""}
                </div>
                <div style={{display:'flex'}}>
                  <IconFont type="icon-xuexiao" className="icon"/>
                  <p>{member.school}</p>
                </div>
                <div style={{display:'flex'}}>
                  <IconFont type="icon-xueyuan" className="icon"/>
                  <p>{member.college}</p>
                </div>
                <div style={{display:'flex'}}>
                  <IconFont type="icon-banji" className="icon"/>
                  <p>{member.className}</p>
                </div>
                <div style={{display:'flex'}}>
                  <IconFont type="icon-dianhua" className="icon"/>
                  <p>{member.phoneNumber}</p>
                </div>
                <div style={{display:'flex'}}>
                  <IconFont type="icon-a-youxiang" className="icon"/>
                  <p>{member.email}</p>
                </div>
              </Card>
            </div>
          )
        })
      }
    </div>
  )
}