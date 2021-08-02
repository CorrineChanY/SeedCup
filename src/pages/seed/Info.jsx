/**
 * 比赛信息页面
 * @file Info.jsx
 * @author Chen Yi
 */

import { Table } from "antd";
import { LOCALE } from "../../misc/config";

function Info() {
  // 假数据
  let columns1 = [
    {
      title: "时间",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "10月17日",
      dataIndex: "_10_17",
      key: "_10_17",
    },
    {
      title: "10月20日",
      dataIndex: "_10_20",
      key: "_10_20",
    },
    {
      title: "10月23日",
      dataIndex: "_10_23",
      key: "_10_23",
    },
    {
      title: "10月26日",
      dataIndex: "_10_26",
      key: "_10_26",
    },
    {
      title: "10月29日",
      dataIndex: "_10_29",
      key: "_10_29",
    },
    {
      title: "11月1日-1",
      dataIndex: "_11_1_1",
      key: "_11_1_1",
    },
    {
      title: "11月1日-2",
      dataIndex: "_11_1_2",
      key: "_11_1_2",
    },
    {
      title: "11月1日-3",
      dataIndex: "_11_1_3",
      key: "_11_1_3",
    },
    {
      title: "11月1日-4",
      dataIndex: "_11_1_4",
      key: "_11_1_4",
    },
    {
      title: "11月1日-5",
      dataIndex: "_11_1_5",
      key: "_11_1_5",
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
      _11_1_5: "233820437",
    },
  ];

  let columns2 = [
    {
      title: "时间",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "比赛状态",
      dataIndex: "gameStatus",
      key: "gameStatus",
    },
    {
      title: "匹配小组",
      dataIndex: "vs",
      key: "vs",
    },
  ];
  let data2 = [];
  return (
    <>
      <Table
        dataSource={data1}
        columns={columns1}
        title={(e) => "seed发布表"}
        pagination={false}
        className="show-table"
        locale={LOCALE.table}
      />
      <Table
        dataSource={data2}
        columns={columns2}
        title={(e) => "比赛信息表"}
        pagination={false}
        className="show-table"
        locale={LOCALE.table}
        style={{ marginBottom: "3em" }}
      />
    </>
  );
}

export default Info;
