/**
 * 我的队伍
 * @file Percenter.js
 * @author 
 * @copyright 
 * @createDate
 */

import { useState, useEffect } from 'react'
import { PlusCircleOutlined } from "@ant-design/icons";
import { Modal, Button, Form, Input, ConfigProvider, Radio} from 'antd';
import { newTeam } from "../../misc/apis/team";
import TeamInfo from '../../component/TeamInfo';


function Percenter(props) {
  const { username, team, createTeam, userId } = props;
  console.log(username, team);

  return(
    <>
      {username ? (
        team.id ? (
          <TeamInfo team={team} userId={userId}></TeamInfo>
        ) :
        (<div style={{ display:'flex', marginTop: '1em', justifyContent: 'center' }}>
          <div style={{ color: "black", fontSize: '2em' }}>您还没有队伍!</div>
          <CreateTeam sucess={()=>createTeam("创建成功！")}></CreateTeam>
        </div>)
      ) : (
        <>
        <h1 style={{ color: "black", marginTop: '1em' }}>未登陆！</h1>
        </>
      )}
    </>
  )
}

function CreateTeam(props) {
  const { sucess } = props
  const [isCreateShow, setShow] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('');
  const [CreateForm] = Form.useForm();
  const [intro, setIntro] = useState('');
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 24 },
  };
  const validateMessages = {
    required: "${label}不能为空",
    // ...
  };
  const { TextArea } = Input;

  function showCreateTeam() {
    if(isCreateShow)
      setShow(false)
    else
      setShow(true)
  }

  const handleCancle = () => {
    CreateForm.resetFields()
    setShow(false);
  };

  const onFinish = (value) => {
    console.log('values:', value);
    setModalText('正在创建...');
    setConfirmLoading(true);
    newTeam(value);
    setConfirmLoading(false);
    handleCancle();
    sucess();
  }

  return(
    <>
      <PlusCircleOutlined onClick={showCreateTeam} style={{fontSize:'20px'}}/>
      <Modal
        title="创建队伍"
        visible={isCreateShow}
        confirmLoading={confirmLoading}
        footer={null}
        onCancel={handleCancle}
      >
        <p>{modalText}</p>
        <ConfigProvider form={{ validateMessages }}>
          <Form {...layout} form={CreateForm} name="new-team" onFinish={onFinish}>
            <Form.Item name="teamName" label="队伍名称" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="highestGrade" label="队伍最高年级" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value={1}>大一</Radio>
                <Radio value={2}>大二</Radio>
                <Radio value={3}>大三</Radio>
                <Radio value={4}>大四</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="introduction" label="队伍介绍" rules={[{ required: true }]}>
              <TextArea
                placeholder="队伍介绍"
                autoSize={{ minRows: 3, maxRows: 13 }}
              />
            </Form.Item>
            <Form.Item>
              <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button htmlType="reset" style={{marginRight: '10px'}}>
                  重置
                </Button>
                <Button htmlType="submit" type="primary">
                  确认创建
                </Button>
              </div>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </Modal>
    </>
  )
}

export default Percenter;