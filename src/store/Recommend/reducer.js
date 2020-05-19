import * as actionTypes from '../constants'

// TODO: immer 优化
const defaultState = {
  bannerList: [],
  recommendList: [],
  recommendNewSongList: [],
  recommendDJList: [],
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return { ...state, bannerList: action.data }
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return { ...state, recommendList: action.data }
    case actionTypes.CHANGE_RECOMMEND_NEW_SONG_LIST:
      return { ...state, recommendNewSongList: action.data }
    case actionTypes.CHANGE_RECOMMEND_DJ_LIST:
      return { ...state, recommendDJList: action.data }
    default:
      return state
  }
}
