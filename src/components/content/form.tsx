
'use client'


import React from 'react';


import {
  Button,
  Cascader,
  DatePicker,
  Form as AntdForm,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from 'antd';


import styles from "./styles.module.css";


const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};



export default function Form() {
    return(
      <div className={styles.Forme1}>
        <h1 style={{textAlign:"center",fontSize:70,color:'blue',textShadow:"-2px 3px white"}}>Inquire Form</h1>
    <AntdForm {...formItemLayout} variant="filled" style={{ maxWidth: 600 , border:'10px'}} >
      <AntdForm.Item label="Input" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
        <Input />
      </AntdForm.Item>
  
      <AntdForm.Item
        label="InputNumber"
        name="InputNumber"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <InputNumber style={{ width: '100%' , borderRadius: '10px'}} />
      </AntdForm.Item>
  
      <AntdForm.Item
        label="TextArea"
        name="TextArea"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input.TextArea />
      </AntdForm.Item>
  
      <AntdForm.Item
        label="Mentions"
        name="Mentions"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Mentions />
      </AntdForm.Item>
  
      <AntdForm.Item label="Select" name="Select" rules={[{ required: true, message: 'Please input!' }]}>
        <Select />
      </AntdForm.Item>
  
      <AntdForm.Item
        label="Cascader"
        name="Cascader"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Cascader />
      </AntdForm.Item>
  
      <AntdForm.Item
        label="TreeSelect"
        name="TreeSelect"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <TreeSelect />
      </AntdForm.Item>
  
      <AntdForm.Item
        label="DatePicker"
        name="DatePicker"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <DatePicker />
      </AntdForm.Item>
  
      <AntdForm.Item
        label="RangePicker"
        name="RangePicker"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <RangePicker />
      </AntdForm.Item>
  
      <AntdForm.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </AntdForm.Item>
    </AntdForm>
    </div>
    );
  
}