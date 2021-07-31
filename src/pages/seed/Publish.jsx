/**
 * 比赛信息
 * @file Publish.jsx
 * @author 
 * @copyright 
 * @createDate 
 */

import { Table } from "../../component/Table"

function Publish() {

  let columns1 = [
      {
          name: "时间",
          index: "time"
      },
      {
          name: "10月17日",
          index: "_10_17"
      },
      {
          name: "10月20日",
          index: "_10_20"
      },
      {
          name: "10月23日",
          index: "_10_23"
      },
      {
          name: "10月26日",
          index: "_10_26"
      },
      {
          name: "10月29日",
          index: "_10_29"
      },
      {
          name: "11月1日-1",
          index: "_11_1_1"
      },
      {
          name: "11月1日-2",
          index: "_11_1_2"
      },
      {
          name: "11月1日-3",
          index: "_11_1_3"
      },
      {
          name: "11月1日-4",
          index: "_11_1_4"
      },
      {
          name: "11月1日-5",
          index: "_11_1_5"
      },
  ];
  let data1 = [
      {
          time: "Seed",
          _10_17: "2020",
          _10_20: "623500535",
          _10_23: "700383151",
          _10_26: "507690622",
          _10_29: "41420402",
          _11_1_1: "27655418",
          _11_1_2: "1155797526",
          _11_1_3: "16161825",
          _11_1_4: "399404774",
          _11_1_5: "233820437"
      }
  ];

  let columns2=[
    {
      name: "时间",
      index: "time"
    },
    {
      name: "比赛状态",
      index: "gameStatus"
    },
    {
      name: "匹配小组",
      index: "vs"
    }
  ];
  let data2=[];
return(
<>
<Table dataSource={data1} columns={columns1} props={{className: "striped", style: {color:"black", marginTop: "50px", marginLeft:"5%", width:"90%"}}} caption="seed发布表"/>
<Table dataSource={data2} columns={columns2} props={{className: "striped", style: {color:"black", marginTop: "50px", marginLeft:"5%", marginBottom:"50px", width:"90%"}}} caption="比赛信息表"  />
</>
)

}

export default Publish;