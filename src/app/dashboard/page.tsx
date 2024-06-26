'use client'


import React from 'react'




import { Col, Row } from 'antd'


import styles from "./styles.module.css";

export default function Maincontent() {

  return (

    <Row>
      <Col span={24}>
        <div className={styles.bgimg1} />
      </Col>
    </Row>
  )
}