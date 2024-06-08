import React from 'react'
import { Card, Col, Row, Typography } from 'antd'
import { Linechart } from '../LineChart/LineChart'
import { Piechart } from '../PieChart/PieChart'

function Dashboard() {
  return (
    <Row gutter={20}>
      <Col>
        <Card>
          <Typography>Dashboard</Typography>
          <Linechart />
        </Card>
      </Col>
      <Col>
        <Card>
          <Typography>Pie Chart</Typography>
          <Piechart />
        </Card>
      </Col>
    </Row>
  )
}

export default Dashboard
