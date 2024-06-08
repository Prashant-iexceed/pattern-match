import React from 'react'
import { Route, useNavigate, Routes } from 'react-router-dom'
import {
  BellOutlined,
  DashboardOutlined,
  TransactionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Card, Layout, Menu, PageHeader } from 'antd'
import Error404 from '../../components/Errror404'
import Dashboard from '../../components/Dashboard/Dashboard'

import '../MainLayout.less'
import Transactions from './Transactions/Transactions'

const { Content, Footer, Sider } = Layout
// const { Title } = Typography

const sidebarRoutes = [
  {
    icon: DashboardOutlined,
    route: 'dashboard',
    label: 'Dashboard',
    key: 1,
  },
  {
    icon: TransactionOutlined,
    route: 'transactions',
    label: 'Transactions',
    key: 2,
  },
  {
    icon: UserOutlined,
    route: 'profile',
    label: 'Profile',
    key: 3,
  },
]

function MainLayout() {
  const navigate = useNavigate()

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        className="dashboard-left-navbar"
        width={270}
        theme="light"
      >
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={sidebarRoutes.map((item, index) => ({
            key: String(index + 1),
            icon: React.createElement(item.icon),
            label: item.label,
            onClick: () => {
              navigate(`/user/${item.route}`)
            },
          }))}
        />
      </Sider>

      <Layout>
        <PageHeader
          className="site-page-header"
          title="Admin"
          extra={[<BellOutlined />]}
        />
        <Content
          style={{
            margin: '16px 16px 0',
          }}
          className="dashboard-right-content"
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/profile" element={<Card>Profile</Card>} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: 'end',
          }}
        >
          About
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
