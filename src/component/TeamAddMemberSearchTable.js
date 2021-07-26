/**
 * 搜索结果显示表格
 * @file TeamAddMemberSearchTable.js
 * @author Chen Yi
 */
import { useState } from "react";
 import { Table, Button, Popover, message } from "antd";
 import { WarningOutlined } from "@ant-design/icons";
 import { TABLE_DISPLAY } from '../misc/config'
import { addMember } from "../misc/apis/team";


export default function ResultTable(props) {
  const { results } = props;
  const { Column } = Table;

  async function handleAdd(e) {
    console.log(e)
    try {
      await addMember(e.id);
      message.success('添加成功！');
    } catch (error) {
      
    }
  } 
  
  return(
    <>
      <Table dataSource={results} rowKey='id' style={{marginTop: '1em'}}>
        {
          TABLE_DISPLAY.UserSearch.map((column, index) => {
            return(
              <>
                <Column title={column.title} dataIndex={column.dataIndex} key={column.key} />
              </>
            )
          })
        }
        <Column
          title="操作"
          key="action"
          render={ (text, record, index) => (
            <Popover
              content={
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <WarningOutlined style={{color: '#faad14'}}/>
                    <span>你确定要添加{record.username}吗？</span>
                  </div>
                  <a onClick={() => handleAdd(record)}>确定</a>
                </div>
              }
              trigger="click"
            >
              <Button type='primary'>
                添加
              </Button>
            </Popover>
          )}
        />
      </Table>
    </>
  )
}