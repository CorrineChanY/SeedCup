/**
 * 队伍基本信息
 * @file TeamInfoMembers.js
 * @author Chen Yi
 */
import { Card } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import "./team.css"

export default function TeamInfoMembers(props) {
  const { members, leaderId, userId } = props;
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_2698917_lsyboqpzaun.js'
    ],
  });

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
                  <IconFont type="icon-edit_small"/>,
                  <IconFont type="icon-template_delete"/>,
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