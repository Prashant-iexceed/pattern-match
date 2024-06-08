import { Card, Col, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
// import { Linechart } from '../../../components/LineChart/LineChart'
import { useParams } from 'react-router-dom'
import { YearlyLineChart } from '../../../components/YearlyLineChart/YearlyLineChart'
import {
  GetMonthlyUserAnalytics,
  GetMonthlyUserAnalyticsSpend,
} from '../../../api/user'
import { YearsLineChart } from '../../../components/YearLineChart/YearLineChart'

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function Analytics() {
  const { userId } = useParams()
  const [YearlyLineChartData, setYearlyLineChartData] = useState([])
  const [YearsLineChartData, setYearsLineChartData] = useState([])
  const [year, setYear] = useState('2023')

  useEffect(() => {
    GetMonthlyUserAnalytics(userId, year).then((data) => {
      setYearlyLineChartData(
        labels.map((value) => {
          return data.data[value] ? data.data[value] : 0
        })
      )
    })
    GetMonthlyUserAnalyticsSpend(userId).then((data) => {
      setYearsLineChartData(Object.entries(data.data))
    })
  }, [year])

  // eslint-disable-next-line no-shadow
  function handleYearChange(year) {
    setYear(year)
  }

  return (
    <Card title="Analytics">
      <Row>
        <Col sm={12}>
          <Select
            defaultValue="2023"
            options={[
              { value: '2024', label: '2024' },
              { value: '2023', label: '2023' },
              { value: '2022', label: '2022' },
            ]}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={handleYearChange}
          />
          <YearlyLineChart DataValues={YearlyLineChartData} />
        </Col>
        <Col sm={12}>
          <YearsLineChart DataValues={YearsLineChartData} />
        </Col>
      </Row>
    </Card>
  )
}

export default Analytics
