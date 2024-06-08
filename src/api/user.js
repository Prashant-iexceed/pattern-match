import axios from './base'

// const token = async () => {
//   return `Bearer ${window.localStorage.getItem('token')}`
// }

export async function GetMonthlyUserAnalytics(_id, year) {
  return axios.request({
    url: `/monthly/analytics/${_id}?year=${year}`,
    method: 'GET',
  })
}

export async function GetMonthlyUserAnalyticsSpend(_id) {
  return axios.request({
    url: `/analytics/${_id}`,
    method: 'GET',
  })
}
