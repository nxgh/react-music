import { CHANGE_CURRENT_PLAYLIST, CHANGE_ENTER_LOADING } from '../constants'
import { getPlayListDetailRequest } from '../../api/request'

const changeCurrentPlayList = (data) => ({
  type: CHANGE_CURRENT_PLAYLIST,
  data: data,
})

export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data,
})

export const getPlayList = (id) => {
  return (dispatch) => {
    getPlayListDetailRequest(id)
      .then((res) => {
        let data = res.playlist
        dispatch(changeCurrentPlayList(data))
        dispatch(changeEnterLoading(false))
      })
      .catch(() => {
        console.log('获取歌单数据失败！')
      })
  }
}
