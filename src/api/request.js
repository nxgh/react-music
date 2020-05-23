import { request } from './service'

export const getBannerRequest = () => request.get('/banner?type=2')

export const getRecommendListRequest = () =>
  request.get('/personalized?limit=10')

export const getRecommendNewSongRequest = () =>
  request.get('/personalized/newsong')

export const getRecommendDJRequest = () => {
  return request.get('/personalized/djprogram')
}

export const getPlayListDetailRequest = (id) => {
  return request.get(`/playlist/detail?id=${id}`)
}
