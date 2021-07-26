/**
 * 已登陆后的队伍信息
 * @file TeamInfo.js
 * @author Chen Yi
 */

import TeamInfoBasic from "./TeamInfoBasic";
import TeamInfoMembers from "./TeamInfoMembers";
import AddMember from './TeamAddMember'

export default function TeamInfo(props) {
  const { team, userId} = props;

  return (
    <div style={{margin: '5em 3em 5em 3em'}}>
      <TeamInfoBasic name={team.name} introduction={team.introduction} gameStatus={team.gameStatus}></TeamInfoBasic>
      <TeamInfoMembers members={team.members} leaderId={team.leaderId} userId={userId}></TeamInfoMembers>
      { userId === team.leaderId ?
        <AddMember></AddMember> : ''
      }
    </div>
  )
}