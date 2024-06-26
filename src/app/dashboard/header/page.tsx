'use client'
import React from 'react'
import { useRouter } from 'next/navigation'



import { Button, Layout, Menu, MenuProps } from 'antd';
import {
  AppstoreOutlined,
  CloudOutlined,
  FileDoneOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import Btnania from '@/src/components/buttons/Btnania';


const { Header } = Layout;

const items: MenuProps['items'] = [
  {
    key: "/dashboard/list",
    icon: <AppstoreOutlined />,
    label: "List",
  },
  {
    key: "/dashboard/about",
    icon: <FileDoneOutlined />,
    label: "About Us",
  },

  {
    key: "/dashboard/content",
    icon: <CloudOutlined />,
    label: "Content",
  },

];


export default function Mainheader() {
  const router = useRouter();


  return (

    <main >
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          onSelect={x => {
            router.push(x.key)
          }}
        />
        
        <Btnania 
          icon={<LoginOutlined />}
          text="Sign-IN"/>

      </Header>

    </main>
  )
}