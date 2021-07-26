/**
 * 搜索用户
 * @file TeamInfoSearch.js
 * @author Chen Yi
 */
import { useState } from "react";
import { Input, Button } from "antd";
import { searchUser } from "../misc/apis/user";
import ResultTable from "./TeamAddMemberSearchTable";

export default function SearchUser(props) {
  const [ keyword, setKwd ] = useState('');
  const [ results, setResults ] = useState([]);

  async function onSearch() {
    const res = await searchUser(keyword);
    setResults(res.data.data)
    console.log(res);
  };

  const handleChange = e => {
    setKwd(e.target.value);
  };

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Input
          placeholder="请输入用户名/电话号码/邮箱进行搜索用户"
          value={keyword}
          allowClear
          onChange={handleChange}
          style={{ width: '350px', height: '54px' }} 
        />
        <Button
          onClick={onSearch} 
          type='primary'
          style={{ marginLeft: '3em' }}
        >搜索</Button>
      </div>
      <ResultTable results={results}></ResultTable>
    </>
  )
}