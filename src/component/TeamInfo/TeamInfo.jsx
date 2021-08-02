/**
 * 已登陆后的队伍信息
 * @file TeamInfo.jsx
 * @author Chen Yi
 */

import TeamInfoBasic from "./TeamInfoBasic";
import TeamInfoMembers from "./TeamInfoMembers";
import AddMember from "../TeamAddMember/TeamAddMember.jsx";

export default function TeamInfo(props) {
  const { team, userId, success, del, editIntro } = props;

  return (
    <div style={{ margin: "5em 3em 5em 3em" }}>
      <TeamInfoBasic
        name={team.name}
        isLeader={team.leaderId === userId}
        introduction={team.introduction}
        gameStatus={team.gameStatus}
        editIntro={editIntro}
      ></TeamInfoBasic>
      <TeamInfoMembers
        members={team.members}
        leaderId={team.leaderId}
        userId={userId}
        del={del}
      ></TeamInfoMembers>
      {userId === team.leaderId ? (
        <AddMember success={success}></AddMember>
      ) : (
        ""
      )}
    </div>
  );
}
