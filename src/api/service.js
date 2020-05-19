import axios from 'axios'

export const baseUrl = 'http://127.0.0.1:3000'

//axios 的实例及拦截器配置
const request = axios.create({
  baseURL: baseUrl,
})

request.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, '网络错误')
  }
)

export { request }
