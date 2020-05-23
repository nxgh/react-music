import * as actionTypes from '../constants'
import {
  getBannerRequest,
  getRecommendListRequest,
  getRecommendNewSongRequest,
  getRecommendDJRequest,
} from '../../api/request'

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: data,
})

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: data,
})
export const changeRecommendNewSongList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_NEW_SONG_LIST,
  data: data,
})
export const changeRecommendDJList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_DJ_LIST,
  data: data,
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
      .then((data) => {
        dispatch(changeBannerList(data.banners))
      })
      .catch((e) => {
        console.log('轮播图数据传输错误', e)
      })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest()
      .then((data) => {
        dispatch(changeRecommendList(data.result))
      })
      .catch((e) => {
        console.log('推荐歌单数据传输错误', e)
      })
  }
}

export const getRecommendNewSongList = () => {
  return (dispatch) => {
    getRecommendNewSongRequest()
      .then((data) => {
        dispatch(changeRecommendNewSongList(data.result))
      })
      .catch((e) => {
        console.log('推荐新歌数据传输错误', e)
      })
  }
}

export const getRecommendDJList = () => {
  return (dispatch) => {
    getRecommendDJRequest()
      .then((data) => {
        dispatch(changeRecommendDJList(data.result))
      })
      .catch((e) => {
        console.log('推荐热门电台数据传输错误', e)
      })
  }
}
