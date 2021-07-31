/**
 * 添加队友
 * @file TeamAddMember.jsx
 * @author Chen Yi
 */
import { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import SearchUser from './TeamAddMemberSearch.jsx';

export default function AddMember(props) {
  const { success } = props;
  const [visibleAddModal, setVisibleAddModal] = useState(false);

  const showAddModal = () => setVisibleAddModal(true);

  const handleCancel = () => setVisibleAddModal(false);
  
  return(
    <>
      <Button type="primary" onClick={showAddModal} style={{height: '40px', display: 'flex', alignItems: 'center', marginTop: '1em'}}>
        添加队员
        <PlusOutlined />
      </Button>
      <Modal title="添加队员" visible={visibleAddModal} footer={null} onCancel={handleCancel} width={600}>
        <p>请输入关键词搜索用户：</p>
        <SearchUser success={success}></SearchUser>
      </Modal>
    </>
  )
}