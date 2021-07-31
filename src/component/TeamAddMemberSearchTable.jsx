/**
 * 搜索结果显示表格
 * @file TeamAddMemberSearchTable.jsx
 * @author Chen Yi
 */
 import { Table, Button, Popover } from "antd";
 import { WarningOutlined } from "@ant-design/icons";
 import { TABLE_DISPLAY } from '../misc/config'
import { addMember } from "../misc/apis/team";


export default function ResultTable(props) {
  const { results, success, loading } = props;
  const { Column } = Table;

  async function handleAdd(e) {
    try {
      await addMember(e.id);
      success();
    } catch (error) {
      
    }
  } 
  
  return(
    <>
      <Table dataSource={results} rowKey='id' style={{marginTop: '1em'}} loading={loading}>
        {
          TABLE_DISPLAY.UserSearch.map((column, index) => {
            return(
              <Column title={column.title} dataIndex={column.dataIndex} key={column.key} />
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