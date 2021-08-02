/**
 * 排行榜页面
 * @file Rank.jsx
 * @author Chen Yi
 */
import React from "react";
import Highlighter from "react-highlight-words";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getRank } from "../../misc/apis/team";
import "./rank.css";
import { LOCALE } from "../../misc/config";

/**
 * 计算各队伍的排名
 * 同分同名
 * @param {Object[]} data
 * @returns {Object[]}
 */
const getDataRank = (data) => {
  const length = data.length;
  let dataAddRank = data;
  dataAddRank[length - 1].rank = length;
  for (let i = data.length - 2; i >= 0; --i) {
    if (data[i].finalScore === data[i + 1].finalScore) {
      dataAddRank[i].rank = dataAddRank[i + 1].rank;
    } else {
      dataAddRank[i].rank = i + 1;
    }
  }
  return dataAddRank;
};

export default class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchedColumn: "",
      dataPre: [],
      dataMed: [],
      dataFin: [],
      loadingPre: false,
      loadingMed: false,
      loadingFin: false,
    };
  }

  async componentDidMount() {
    this.setState({
      loadingPre: true,
      loadingMed: true,
      loadingFin: true,
    });
    const resPre = await getRank({ gameStatus: 1 });
    const resMed = await getRank({ gameStatus: 2 });
    const resFin = await getRank({ gameStatus: 3 });
    this.setState({
      dataPre: getDataRank(resPre.data.data.sheetData),
      dataMed: getDataRank(resMed.data.data.sheetData),
      dataFin: getDataRank(resFin.data.data.sheetData),
      loadingPre: false,
      loadingMed: false,
      loadingFin: false,
    });
  }

  getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`请输入${title}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            搜索
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            重置
          </Button>
        </Space>
      </div>
    ),

    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),

    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",

    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },

    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const columns = [
      { title: "排名", dataIndex: "rank", key: "rank", width: 100 },
      {
        title: "队伍名",
        dataIndex: "teamName",
        key: "teamName",
        ...this.getColumnSearchProps("teamName", "队伍名"),
      },
      {
        title: "分数",
        dataIndex: "finalScore",
        key: "finalScore",
        sorter: (a, b) => a.finalScore - b.finalScore,
        sortDirections: ["descend", "ascend"],
      },
    ];

    return (
      <>
        <Table
          title={(e) => "初赛"}
          columns={columns}
          dataSource={this.state.dataPre}
          loading={this.state.loadingPre}
          className="show-table"
          pagination={false}
          locale={LOCALE.table}
        />
        <Table
          title={(e) => "复赛"}
          columns={columns}
          dataSource={this.state.dataMed}
          loading={this.state.loadingMed}
          className="show-table"
          pagination={false}
          locale={LOCALE.table}
        />
        <Table
          title={(e) => "决赛"}
          columns={columns}
          dataSource={this.state.dataFin}
          loading={this.state.loadingFin}
          className="show-table"
          pagination={false}
          locale={LOCALE.table}
        />
      </>
    );
  }
}
