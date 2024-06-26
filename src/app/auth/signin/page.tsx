'use client'


import React from 'react'

import styles from "./styles.module.css";


import {  Col, Form, Input, Row } from "antd";






export default function Signin() {
  return (


    < main className={styles.main}>
      <Row className={styles.R1}>

        <Form
          name="basic"
          labelCol={{ span: 24 }}
          layout="vertical"
          className={styles.From}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Col className={styles.col1} span={24}>
            <Form.Item
              label="Email"
              name="Pass"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Password"
              name="Password"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <button  className={styles.btnania} type="submit">Submit</button>
        </Form>

      </Row>
    </main>

  );
}

