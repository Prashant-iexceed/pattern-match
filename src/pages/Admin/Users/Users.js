import React from 'react'
import { Card, Table } from 'antd'

function Users() {
  const dataset = [
    {
      _id: '6664271e66cb1ac2237a0d35',
      age: 25,
      email: 'prashant.sakhre@gmail.com',
      gender: 'MALE',
      name: 'Prashant Sakhre',
    },
    {
      _id: '6664271e66cb1ac2237a0d36',
      age: 30,
      email: 'aditi.sharma@gmail.com',
      gender: 'FEMALE',
      name: 'Aditi Sharma',
    },
    {
      _id: '6664271e66cb1ac2237a0d37',
      age: 28,
      email: 'vikram.singh@gmail.com',
      gender: 'MALE',
      name: 'Vikram Singh',
    },
    {
      _id: '6664271e66cb1ac2237a0d38',
      age: 22,
      email: 'priya.kapoor@gmail.com',
      gender: 'FEMALE',
      name: 'Priya Kapoor',
    },
    {
      _id: '6664271e66cb1ac2237a0d39',
      age: 42,
      email: 'jayesh.patel@gmail.com',
      gender: 'MALE',
      name: 'Jayesh Patel',
    },
    {
      _id: '6664271e66cb1ac2237a0d3a',
      age: 40,
      email: 'samantha.fernandes@gmail.com',
      gender: 'FEMALE',
      name: 'Samantha Fernandes',
    },
    {
      _id: '6664271e66cb1ac2237a0d3b',
      age: 21,
      email: 'yash.malhotra@gmail.com',
      gender: 'MALE',
      name: 'Yash Malhotra',
    },
  ]
  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text) => <Typography>{text}</Typography>,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ]

  return (
    <Card title="Users">
      <Table columns={columns} dataSource={dataset} pagination />
    </Card>
  )
}

export default Users
