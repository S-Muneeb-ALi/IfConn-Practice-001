import React from 'react';

import { Content } from 'antd/es/layout/layout';
import { Layout } from 'antd';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <Content style={{ padding: '20px 48px' }}>
        <div
          style={{
            background: "white",
            minHeight: 280,
            padding: 24,
            borderRadius: "20px",
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
}
