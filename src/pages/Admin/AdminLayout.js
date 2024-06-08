import React from 'react'
import { Route, useNavigate, Routes } from 'react-router-dom'
import {
  BellOutlined,
  DashboardOutlined,
  DotChartOutlined,
  PieChartOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'
import { Card, Layout, Menu, PageHeader, notification } from 'antd'
import Error404 from '../../components/Errror404'
import Dashboard from '../../components/Dashboard/Dashboard'

import '../MainLayout.less'
import Users from './Users/Users'
import Predictions from './Predictions/Predictions'
import Reports from './Reports/Reports'

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
    icon: UsergroupAddOutlined,
    route: 'users',
    label: 'Users',
    key: 3,
  },
  {
    icon: DotChartOutlined,
    route: 'predictions',
    label: 'Predictions',
    key: 4,
  },
  {
    icon: PieChartOutlined,
    route: 'reports',
    label: 'Peports',
    key: 5,
  },
  {
    icon: UserOutlined,
    route: 'profile',
    label: 'Profile',
    key: 6,
  },
]

function AdminLayout() {
  const navigate = useNavigate()

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!')
      },
    })
  }

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
              navigate(`/admin/${item.route}`)
            },
          }))}
        />
      </Sider>

      <Layout>
        <PageHeader
          className="site-page-header"
          title="Admin"
          extra={[<BellOutlined onClick={openNotification} />]}
        />
        <Content
          style={{
            margin: '16px 16px 0',
          }}
          className="dashboard-right-content"
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/reports" element={<Reports />} />
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

export default AdminLayout
