import React from 'react'
import { Card, Table } from 'antd'

function Transactions() {
  const dataset = [
    {
      amount: 1218,
      category: 'food',
      id: 1717843971184,
      merchant: 'Zomato',
      time: '6/8/2023 3:17 PM',
      user_id: '6664271e66cb1ac2237a0d57',
    },
    {
      amount: 390,
      category: 'electricity',
      id: 1717843971186,
      merchant: 'Adani Electricity',
      time: '6/8/2023 5:40 AM',
      user_id: '6664271e66cb1ac2237a0d230',
    },
    {
      amount: 3740,
      category: 'movies',
      id: 1717843971186,
      merchant: 'BookMyShow',
      time: '6/8/2023 7:45 PM',
      user_id: '6664271e66cb1ac2237a0d628',
    },
    {
      amount: 1751,
      category: 'books',
      id: 1717843971186,
      merchant: 'Amazon India',
      time: '6/8/2023 7:58 PM',
      user_id: '6664271e66cb1ac2237a0d1026',
    },
    {
      amount: 3943,
      category: 'mobile recharge',
      id: 1717843971186,
      merchant: 'Paytm',
      time: '6/8/2023 10:08 AM',
      user_id: '6664271e66cb1ac2237a0d1034',
    },
  ]
  const columns = [
    {
      title: 'User Id',
      dataIndex: 'user_id',
      key: 'user_id',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      // render: (text) => <Typography>{text}</Typography>,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Merchant',
      dataIndex: 'merchant',
      key: 'merchant',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
  ]

  return (
    <Card title="Transactions">
      <Table columns={columns} dataSource={dataset} pagination />
    </Card>
  )
}

export default Transactions
